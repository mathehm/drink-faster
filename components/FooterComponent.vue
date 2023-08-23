<script lang="ts" setup>
  const isDesktopView = computed(() => window.innerWidth > 480)
</script>

<template>
  <footer class="content">
    <div v-if="isDesktopView" class="icon">
      <span class="material-symbols-outlined">
      settings
      </span>
    </div>
    <p class="description">
      Implemented by <b>Matheus Martins</b>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.content {
  background-color: $dark-blue;
  display: flex;
  align-items: center;
  justify-content: center;

  .description {
    color: $white;
    font-size: 1.2rem;

    @include breakpoint(small-only) {
      font-size: 0.75rem;
    }
  }
}

.icon {
    span {
      color: $white;
    }
  }
</style>
