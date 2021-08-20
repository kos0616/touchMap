<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
    style="backdrop-filter: blur(5px)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <div @click="gogo" class="btn">
        <i class="fas fa-plus"></i>
        clicked: {{ counter }}
      </div>
      <div id="log"></div>
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
      <div class="navbar-collapse collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view style="height: 100vh" />
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
