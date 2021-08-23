<template>
  <div id="map-wrap" class="w-100">
    <div
      class="position-absolute btn-group-vertical rounded"
      style="
        right: 5px;
        top: 100px;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(2px);
      "
    >
      <button @click="ZoomIn(true)" class="btn btn-outline-light border-dark">
        <i class="fas fa-plus" />
      </button>
      <button @click="ZoomOut(false)" class="btn btn-outline-light border-dark">
        <i class="fas fa-minus" />
      </button>
    </div>

    <div id="map" class="position-absolute">
      <div class="position-relative h-100">
        <button
          @click="gogo"
          @touchstart="gogo"
          type="button"
          class="position-absolute btn btn-primary"
          style="left: 30%; top: 30%"
        >
          <i class="fas fa-flag"></i>
        </button>
        <button
          @click="gogo"
          @touchstart="gogo"
          type="button"
          class="position-absolute btn btn-primary"
          style="left: 20%; top: 20%"
        >
          <i class="fas fa-flag"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue';
import grabImg from '../lib/grabImg';
import STATE from '../API/state';

export default defineComponent({
  setup() {
    const { state } = STATE;
    let ZoomIn = ref(null) as any;
    let ZoomOut = ref(null) as any;
    const gogo = () => {
      state.count += 1;
    };
    nextTick(() => {
      const { handleZoom } = grabImg();
      ZoomIn.value = handleZoom;
      ZoomOut.value = handleZoom;
    });

    return {
      gogo,
      ZoomIn,
      ZoomOut,
    };
  },
});
</script>

<style lang="scss" scoped>
#map-wrap {
  overflow: hidden;
  position: relative;
  #map {
    background-image: url(../assets/map01.jpg);
    background-size: contain;
    transition: width 0.3s, height 0.3s;
  }
}
</style>
