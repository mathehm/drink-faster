<template>
  <div class="layout">
    <HeaderComponent />
    <NavComponent />
    <div class="layout__content">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>

<style lang="scss">
.layout {
  font-family: $font-family;
  display: grid;
  grid-template-rows: min-content min-content auto 120px;
  min-height: 100vh;
}
</style>
