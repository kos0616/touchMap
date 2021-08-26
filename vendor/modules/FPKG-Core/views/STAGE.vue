<template>
  <div
    class="
      stage-wrap
      h-100
      d-flex
      justify-content-center
      align-items-center
      py-5
    "
  >
    <div class="position-relative stage-item">
      <router-link
        to="/stage/1"
        title="前往第一關"
        class="btn stage-flag stage_1"
      >
        <i class="icon text-light fas fa-flag"></i>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.stage-wrap {
  background-image: url(../assets/stageBG.jpg);
  background-color: rgb(106, 106, 228);
  background-repeat: no-repeat;
  background-size: cover;
  .stage-item {
    background-image: url(../assets/map01.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    height: 0;
    padding-bottom: 27%;
    width: 1000px;
  }

  .stage_1 {
    left: 30%;
    top: 15%;
  }
}
.stage-flag {
  position: absolute;
  font-size: 200%;
  transition: 0.3s;

  .icon {
    transition: 0.3s;
    transform: skewY(345deg);
    filter: drop-shadow(4px 6px 3px rgba(0, 0, 0, 0.4));
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(190, 54, 54);
  }
  &:hover {
    transform: translateY(-5px);
    .icon {
      filter: drop-shadow(4px 9px 3px rgba(0, 0, 0, 0.2));
    }
  }
}
@keyframes active {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
