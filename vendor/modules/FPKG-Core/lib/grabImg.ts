import { ref, computed } from 'vue';

const IMG_WIDTH = 4000;
const IMG_HEIGHT = 2250;
// const IMG_WIDTH = 4584;
// const IMG_HEIGHT = 3056;
/** 最大縮放 */
const MAX_SCALE = 1;

/** query: DOM */
export default (query: string = '#map') => {
  var offset = [0, 0];
  var isDown = false;
  let prevDiff = -1;

  const MAP = document.querySelector(query) as HTMLDivElement;
  if (!MAP) throw new Error('Map is not exists!.');

  const scale = ref(0.5);
  let SCR_WIDTH = window.innerWidth || document.documentElement.clientWidth;
  let SCR_HEIGHT = window.innerHeight || document.documentElement.clientHeight;

  const MAP_WIDTH = computed(() => IMG_WIDTH * scale.value);
  const MAP_HEIGHT = computed(() => IMG_HEIGHT * scale.value);

  window.onresize = handleResize;

  MAP.style.width = `${MAP_WIDTH.value}px`;
  MAP.style.height = `${MAP_HEIGHT.value}px`;
  MAP.style.left = `-${(MAP_WIDTH.value - SCR_WIDTH) / 2}px`
  MAP.style.top = `-${(MAP_HEIGHT.value - SCR_HEIGHT) / 2}px`

  MAP.addEventListener('transitionend', resetTransition, true);

  MAP.addEventListener('touchstart', handleTouchStart, true);
  MAP.addEventListener('touchmove', handleTouchMove, true);
  MAP.addEventListener('touchmove', handleGesture, true);
  document.addEventListener('touchend', handleEnd, true);

  MAP.addEventListener('mousedown', handleMouseStart, true);
  document.addEventListener('mousemove', handleMouseMove, true);
  document.addEventListener('mouseup', handleEnd, true);
  MAP.addEventListener('wheel', handleScroll, true);

  function handleScroll(e: WheelEvent) {
    const isZoom = e.deltaY < 0;

    if (isZoom) {
      handleZoom(true);
      return;
    }
    handleZoom(false);
  }

  /** 動畫結束之後，重製 transition 以避免移動出現延遲 */
  function resetTransition() {
    MAP.style.transition = 'width 0.3s, height 0.3s';
  }

  function handleEnd() {
    isDown = false;
  }

  /** 點擊開始的觸發 */
  function handleMouseStart(event: MouseEvent) {
    if (event.which !== 1) return;
    isDown = true;
    const x = event.clientX;
    const y = event.clientY;
    offset = [MAP.offsetLeft - x, MAP.offsetTop - y];
  }

  /** 點擊開始的觸發 */
  function handleTouchStart(event: TouchEvent) {
    event.stopPropagation();
    isDown = true;
    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    offset = [MAP.offsetLeft - x, MAP.offsetTop - y];
  }

  /** 滑鼠移動的觸發 */
  function handleMouseMove(event: MouseEvent) {
    if (event.which !== 1) return;
    if (isDown) {
      let [x, y] = [event.clientX, event.clientY];
      const position = computedPosition({ x, y });

      MAP.style.left = `${position.left.toFixed(3)}px`;
      MAP.style.top = `${position.top.toFixed(3)}px`;
    }
  }

  /** 觸控板移動的觸發 */
  function handleTouchMove(event: TouchEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (isDown) {
      let x = 0,
        y = 0;
      const TOUCH = event.touches;
      if (TOUCH) {
        x = TOUCH[0].clientX || 0;
        y = TOUCH[0].clientY || 0;
      }
      const position = computedPosition({ x, y });

      MAP.style.left = `${position.left.toFixed(3)}px`;
      MAP.style.top = `${position.top.toFixed(3)}px`;
    }
  }

  /** 計算圖片位置的同時，也把圖片邊界考慮在內 */
  function computedPosition(mousePosition: { x: number; y: number }) {
    let position_x = 0;
    const left = mousePosition.x + offset[0];
    if (left < 0) position_x = left;
    if (left < SCR_WIDTH - MAP_WIDTH.value) {
      position_x = SCR_WIDTH - MAP_WIDTH.value;
    }

    let position_y = 0;
    const top = mousePosition.y + offset[1];

    if (top < 0) position_y = top;
    if (top < SCR_HEIGHT - MAP_HEIGHT.value) {
      position_y = SCR_HEIGHT - MAP_HEIGHT.value;
    }
    return {
      left: position_x,
      top: position_y,
    };
  }

  function handleResize() {
    SCR_WIDTH = window.innerWidth || document.documentElement.clientWidth;
    SCR_HEIGHT = window.innerHeight || document.documentElement.clientHeight;
  }

  /** 放大縮小
   *  為了不錯位，因此位移中需要關閉位移鎖定
   *  當縮放結束後，再重新打開
   */
  function handleGesture(ev: TouchEvent) {
    const TOUCH = ev.touches;
    if (TOUCH.length == 2) {
      /** 停止位移 */
      isDown = false;
      const curDiff = Math.hypot(
        TOUCH[0].pageX - TOUCH[1].pageX,
        TOUCH[0].pageY - TOUCH[1].pageY,
      );
      const isZoom = curDiff > prevDiff;
      /** 快取值，以便作為下一次縮放的依據 */
      prevDiff = curDiff;

      if (isZoom) {
        handleZoom(true);
        return;
      }
      handleZoom(false);
    }
  }

  function handleZoom(isZoom: boolean, offset: number = 10) {
    if (isZoom && scale.value === MAX_SCALE) return
    if (isZoom) {
      scale.value = roundDecimal((scale.value * 100 + offset) / 100, 1);
      resizingMap();
      setOrgin(true, offset);
      fixBorder();
      return;
    }

    const newScale = roundDecimal((scale.value * 100 - offset) / 100, 1);
    if (IMG_WIDTH * newScale < SCR_WIDTH) return;
    if (IMG_HEIGHT * newScale < SCR_HEIGHT) return;
    scale.value = newScale;
    resizingMap();
    setOrgin(false, offset);
    fixBorder();

    /** 地圖縮放 */
    function resizingMap() {
      MAP.style.width = `${MAP_WIDTH.value}px`;
      MAP.style.height = `${MAP_HEIGHT.value}px`;
    }

    /** 調整地圖縮放時的中心點 */
    function setOrgin(IsIncrease: boolean, offset: number) {
      const stepX = IMG_WIDTH * (offset / 100);
      const stepY = IMG_HEIGHT * (offset / 100);
      const positionX = parseInt(MAP.style.left);
      const positionY = parseInt(MAP.style.top);
      const centerX = SCR_WIDTH / 2;
      const centerY = SCR_HEIGHT / 2;

      if (IsIncrease) {
        const percentX = Number(
          ((positionX - centerX - stepX / 2) / MAP_WIDTH.value).toFixed(3),
        );
        const percentY = Number(
          ((positionY - centerY - stepY / 2) / MAP_HEIGHT.value).toFixed(3),
        );

        MAP.style.left = positionX + percentX * stepX + 'px';
        MAP.style.top = positionY + percentY * stepY + 'px';
        return;
      }

      const percentX2 = Number(
        ((positionX - centerX + stepX / 2) / MAP_WIDTH.value).toFixed(3),
      );
      const percentY2 = Number(
        ((positionY - centerY + stepY / 2) / MAP_HEIGHT.value).toFixed(3),
      );
      MAP.style.left = positionX - percentX2 * stepX + 'px';
      MAP.style.top = positionY - percentY2 * stepY + 'px';
    }

    /** 修正地圖邊界
     * 使用 transition 緩和邊框修正時的異樣感
     * 動畫結束後 resetTransition 重製 css */
    function fixBorder() {
      MAP.style.transition = 'all .3s';
      const x = parseInt(MAP.style.left);
      const y = parseInt(MAP.style.top);

      // 右下角修正
      if (SCR_WIDTH - x > MAP_WIDTH.value) {
        MAP.style.left = SCR_WIDTH - MAP_WIDTH.value + 'px';
      }
      if (SCR_HEIGHT - y > MAP_HEIGHT.value) {
        MAP.style.top = SCR_HEIGHT - MAP_HEIGHT.value + 'px';
      }

      // 右上角修正
      if (x > 0) MAP.style.left = '0px';
      if (y > 0) MAP.style.top = '0px';
    }
  }

  return {
    handleZoom,
  };
};

/** 帶小數的四捨五入 */
function roundDecimal(val: number, precision: number) {
  return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
}