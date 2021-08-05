import { ref, computed } from 'vue';

const IMG_WIDTH = 4584;
const IMG_HEIGHT = 3056;

/**
 * query: DOM
 */
export default (query: string = '#map') => {
  var offset = [0, 0];
  var isDown = false;

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
  document.addEventListener('touchend', handleEnd, true);

  MAP.addEventListener('mousedown', handleMouseStart, true);
  document.addEventListener('mousemove', handleMouseMove, true);
  document.addEventListener('mouseup', handleEnd, true);
  MAP.addEventListener('wheel', handleScroll, true);

  function handleScroll(e: WheelEvent) {
    const isZoom = e.deltaY < 0;
    if (isZoom && scale.value === 1) return;
    if (isZoom && scale.value < 1) {
      scale.value = (scale.value * 10 + 1) / 10;
      resizingMap();
      setOrgin(true);
      fixBorder();
      return;
    }

    const newScale = (scale.value * 10 - 1) / 10;
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
      const stepX = IMG_WIDTH * 0.05;
      const stepY = IMG_HEIGHT * 0.05;
      if (IsIncrease) {
        MAP.style.left = parseInt(MAP.style.left) - stepX + 'px';
        MAP.style.top = parseInt(MAP.style.top) - stepY + 'px';
        return;
      }
      MAP.style.left = parseInt(MAP.style.left) + stepX + 'px';
      MAP.style.top = parseInt(MAP.style.top) + stepY + 'px';
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

  /** 動畫結束之後，重製 transition 以避免移動出現延遲 */
  function resetTransition() {
    MAP.style.transition = 'width 0.3s, height 0.3s';
  }

  function handleEnd() {
    isDown = false;
  }

  /**
   * 點擊開始的觸發
   * @param e touchEvent | mouseEvent
   */
  function handleMouseStart(event: MouseEvent) {
    if (event.which !== 1) return;
    isDown = true;
    const x = event.clientX;
    const y = event.clientY;
    offset = [MAP.offsetLeft - x, MAP.offsetTop - y];
  }

  /**
   * 點擊開始的觸發
   */
  function handleTouchStart(event: TouchEvent) {
    event.stopPropagation();
    isDown = true;
    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    offset = [MAP.offsetLeft - x, MAP.offsetTop - y];
  }

  /**
   * 滑鼠移動的觸發
   */
  function handleMouseMove(event: MouseEvent) {
    if (event.which !== 1) return;
    if (isDown) {
      let [x, y] = [event.clientX, event.clientY];
      const position = computedPosition({ x, y });

      MAP.style.left = `${position.left}px`;
      MAP.style.top = `${position.top}px`;
    }
  }

  /**
   * 觸控板移動的觸發
   */
  function handleTouchMove(event: TouchEvent) {
    event.stopPropagation();
    if (isDown) {
      let x = 0,
        y = 0;
      if (event.touches) {
        const log = document.getElementById('log') as HTMLDivElement;
        const TOUCH = event.touches;
        log.textContent = `${TOUCH.length}, ${Math.floor(
          (TOUCH[0] || {}).clientX,
        )}, ${Math.floor((TOUCH[1] || {}).clientX)}`;

        x = event.touches[0].clientX || 0;
        y = event.touches[0].clientY || 0;
      }
      const position = computedPosition({ x, y });

      MAP.style.left = `${position.left}px`;
      MAP.style.top = `${position.top}px`;
    }
  }

  /**
   * 計算圖片位置的同時，也把圖片邊界考慮在內
   */
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
};
