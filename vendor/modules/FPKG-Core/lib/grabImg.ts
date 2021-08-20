import { ref, computed } from 'vue';

const IMG_WIDTH = 4584;
const IMG_HEIGHT = 3056;

/** query: DOM */
export default (query: string = '#map') => {
  var offset = [0, 0];
  var isDown = false;
  let prevDiff = -1;

  const MAP = document.querySelector(query) as HTMLDivElement;
  if (!MAP) throw new Error('Map is not exists!.');

  const scale = ref(1);
  let WIDTH = window.innerWidth || document.documentElement.clientWidth;
  let HEIGHT = window.innerHeight || document.documentElement.clientHeight;

  const MAP_WIDTH = computed(() => IMG_WIDTH * scale.value);
  const MAP_HEIGHT = computed(() => IMG_HEIGHT * scale.value);

  window.onresize = handleResize;

  MAP.style.width = `${MAP_WIDTH.value}px`;
  MAP.style.height = `${MAP_HEIGHT.value}px`;
  MAP.style.transform = `scale(${scale.value})`;

  MAP.addEventListener('transitionend', resetTransition, true);

  MAP.addEventListener('touchstart', handleTouchStart, true);
  MAP.addEventListener('touchmove', handleTouchMove, true);
  MAP.addEventListener('touchmove', pointermove_handler, true);
  document.addEventListener('touchend', handleEnd, true);

  MAP.addEventListener('mousedown', handleMouseStart, true);
  document.addEventListener('mousemove', handleMouseMove, true);
  document.addEventListener('mouseup', handleEnd, true);
  MAP.addEventListener('wheel', handleScroll, true);

  function handleScroll(e: WheelEvent) {
    const isZoom = e.deltaY < 0;
    if (isZoom && scale.value === 1) return;
    if (isZoom && scale.value < 1) {
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

      MAP.style.left = `${position.left}px`;
      MAP.style.top = `${position.top}px`;
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

      MAP.style.left = `${position.left}px`;
      MAP.style.top = `${position.top}px`;
    }
  }

  /** 計算圖片位置的同時，也把圖片邊界考慮在內 */
  function computedPosition(mousePosition: { x: number; y: number }) {
    let position_x = 0;
    const left = mousePosition.x + offset[0];
    if (left < 0) position_x = left;
    if (left < WIDTH - MAP_WIDTH.value) {
      position_x = WIDTH - MAP_WIDTH.value;
    }

    let position_y = 0;
    const top = mousePosition.y + offset[1];

    if (top < 0) position_y = top;
    if (top < HEIGHT - MAP_HEIGHT.value) {
      position_y = HEIGHT - MAP_HEIGHT.value;
    }
    return {
      left: position_x,
      top: position_y,
    };
  }

  function handleResize() {
    WIDTH = window.innerWidth || document.documentElement.clientWidth;
    HEIGHT = window.innerHeight || document.documentElement.clientHeight;
  }

  function pointermove_handler(ev: TouchEvent) {
    const TOUCH = ev.touches;
    if (TOUCH.length == 2) {
      const curDiff = Math.hypot(
        TOUCH[0].pageX - TOUCH[1].pageX,
        TOUCH[0].pageY - TOUCH[1].pageY,
      );
      const isZoom = curDiff > prevDiff;
      prevDiff = curDiff;

      if (isZoom && scale.value === 1) return;
      if (isZoom && scale.value < 1) {
        handleZoom(true, 2);
        return;
      }
      handleZoom(false, 2);
    }
  }

  function handleZoom(isZoom: boolean, offset: number = 10) {
    if (isZoom) {
      scale.value = (scale.value * 100 + offset) / 100;
      resizingMap();
      setOrgin(true);
      fixBorder();
      return;
    }

    const newScale = (scale.value * 100 - offset) / 100;
    if (IMG_WIDTH * newScale < WIDTH) return;
    if (IMG_HEIGHT * newScale < HEIGHT) return;
    scale.value = newScale;
    resizingMap();
    setOrgin(false);
    fixBorder();

    /** 地圖縮放 */
    function resizingMap() {
      MAP.style.width = `${MAP_WIDTH.value}px`;
      MAP.style.height = `${MAP_HEIGHT.value}px`;
    }

    /** 調整地圖縮放時的中心點 */
    function setOrgin(IsIncrease: boolean) {
      const stepX = IMG_WIDTH * 0.1;
      const stepY = IMG_HEIGHT * 0.1;
      const positionX = parseInt(MAP.style.left);
      const positionY = parseInt(MAP.style.top);
      const centerX = WIDTH / 2;
      const centerY = HEIGHT / 2;

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
      if (WIDTH - x > MAP_WIDTH.value) {
        MAP.style.left = WIDTH - MAP_WIDTH.value + 'px';
      }
      if (HEIGHT - y > MAP_HEIGHT.value) {
        MAP.style.top = HEIGHT - MAP_HEIGHT.value + 'px';
      }

      // 右上角修正
      if (x > 0) MAP.style.left = '0px';
      if (y > 0) MAP.style.top = '0px';
    }
  }
};
