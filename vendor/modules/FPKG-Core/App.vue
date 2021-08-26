<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
    style="backdrop-filter: blur(5px)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">One Piece</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <router-view style="min-height: 100vh" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import STATE from './API/state';

export default defineComponent({
  setup() {
    const { state } = STATE;

    const gogo = () => {
      state.count += 1;
    };

    const counter = computed(() => {
      return state.count;
    });

    return {
      counter,
      gogo,
    };
  },
});
</script>
