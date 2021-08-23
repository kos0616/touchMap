import { onMounted, onBeforeUnmount, ref, computed } from "vue";

let CLOCK_ID: any;

/** 顯示目前時間 */
export default () => {
  /** 這邊會回傳 new Date() 需要自行格式化 */
  const rawDate = ref();

  /** 設定時鐘 */
  const setClock = () => {
    rawDate.value = new Date();
  };

  /** 啟用時鐘 */
  const startClock = () => {
    CLOCK_ID = setInterval(setClock, 1000);
  };

  /** 停止時鐘 */
  const stopClock = () => {
    clearInterval(CLOCK_ID);
  };

  const time = computed(() => {
    const date = rawDate.value as Date;
    if (!date)
      return {
        yyyy: "",
        MM: "",
        DD: "",
        HH: "",
        mm: "",
        ss: "",
        ZZ: "",
      };
    const yyyy = date.getFullYear();
    const MM = showZero(date.getMonth() + 1);
    const DD = showZero(date.getDate());
    const HH = showZero(date.getHours());
    const mm = showZero(date.getMinutes());
    const ss = showZero(date.getSeconds());
    const raw_ZZ = date.getTimezoneOffset() / -60;
    const ZZ = raw_ZZ < 0 ? `GMT${raw_ZZ}` : `GMT+${raw_ZZ}`;

    return {
      yyyy,
      MM,
      DD,
      HH,
      mm,
      ss,
      ZZ,
    };

    function showZero(n: number) {
      if (typeof n === "number") {
        return n < 10 ? `0${n}` : `${n}`;
      }
      return "0";
    }
  });

  onMounted(() => {
    startClock();
  });

  onBeforeUnmount(() => {
    stopClock();
  });
  return { stopClock, time };
};
