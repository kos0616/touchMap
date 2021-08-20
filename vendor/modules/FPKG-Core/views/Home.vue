<template>
  <div id="map-wrap" class="w-100">
    <button
      @click="A(true)"
      class="position-absolute"
      style="right: 0; top: 100px; z-index: 2"
    >
      +
    </button>
    <button
      @click="B(false)"
      class="position-absolute"
      style="right: 0; top: 130px; z-index: 2"
    >
      -
    </button>
    <div id="map" class="position-absolute" style="left: -50%; top: -50%">
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
    let A = ref(null) as any;
    let B = ref(null) as any;
    const gogo = () => {
      state.count += 1;
    };
    nextTick(() => {
      const { handleZoom } = grabImg();
      A.value = handleZoom;
      B.value = handleZoom;
    });

    return {
      gogo,
      A,
      B,
    };
  },
});
</script>

<style lang="scss" scoped>
#map-wrap {
  overflow: hidden;
  position: relative;
  #map {
    background-image: url(../assets/map.jpg);
    background-size: contain;
    transition: width 0.3s, height 0.3s;
  }
}
</style>
