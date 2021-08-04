const WIDTH = window.innerWidth || document.documentElement.clientWidth;
const HEIGHT = window.innerHeight || document.documentElement.clientHeight;

/**
 * query: DOM
 */
export default (query: string = '#map') => {
  var offset = [0, 0];
  var isDown = false;

  const MAP = document.querySelector(query) as HTMLDivElement;
  if (!MAP) throw new Error('Map is not exists!.');

  const MAP_WIDTH = 4584;
  const MAP_HEIGHT = 3056;

  MAP.style.width = `${MAP_WIDTH}px`;
  MAP.style.height = `${MAP_HEIGHT}px`;

  MAP.addEventListener('touchstart', handleTouchStart, true);
  MAP.addEventListener('touchmove', handleTouchMove, true);
  document.addEventListener('touchend', handleEnd, true);

  MAP.addEventListener('mousedown', handleMouseStart, true);
  document.addEventListener('mousemove', handleMouseMove, true);
  document.addEventListener('mouseup', handleEnd, true);

  function handleEnd() {
    isDown = false;
  }

  /**
   * 點擊開始的觸發
   * @param e touchEvent | mouseEvent
   */
  function handleMouseStart(event: any) {
    if (event.which !== 1) return;
    isDown = true;
    const x = event.clientX;
    const y = event.clientY;
    offset = [MAP.offsetLeft - x, MAP.offsetTop - y];
  }

  /**
   * 點擊開始的觸發
   * @param e touchEvent | mouseEvent
   */
  function handleTouchStart(event: any) {
    event.preventDefault();
    isDown = true;
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    offset = [MAP.offsetLeft - x, MAP.offsetTop - y];
  }

  /**
   * 滑鼠移動的觸發
   * @param event touchEvent | mouseEvent
   */
  function handleMouseMove(event: any) {
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
   * @param event touchEvent | mouseEvent
   */
  function handleTouchMove(event: any) {
    // fixme: touchevent and mouseEvent
    // type: "mousemove"
    // type: "touchmove"
    event.preventDefault();

    if (isDown) {
      let x, y;
      if (event.touches) {
        const log = document.getElementById('log') as HTMLDivElement;
        const TOUCH = event.touches;
        log.textContent = `${TOUCH.length}, ${Math.floor(
          (TOUCH[0] || {}).clientX,
        )}, ${Math.floor((TOUCH[1] || {}).clientX)}`;

        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
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
    if (left < WIDTH - MAP_WIDTH) {
      position_x = WIDTH - MAP_WIDTH;
    }

    let position_y = 0;
    const top = mousePosition.y + offset[1];

    if (top < 0) position_y = top;
    if (top < HEIGHT - MAP_HEIGHT) {
      position_y = HEIGHT - MAP_HEIGHT;
    }
    return {
      left: position_x,
      top: position_y,
    };
  }
};
