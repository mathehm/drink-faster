<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="content">
    <span class="content__image material-symbols-outlined">
      warning
    </span>
    <h1 class="content__code">
      {{ error?.statusCode }}
    </h1>
    <p class="content__message">
      {{ error?.statusMessage }}
    </p>
    <button class="content__button" @click="handleError">
      Clear errors
    </button>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  text-align: center;

  &__image {
    font-size: 8rem;
    color: $pink;
    margin: 0;
  }

  &__code {
    font-size: 3rem;
    color: $dark-blue;
    margin: 0;
  }

  &__message {
    font-size: 2rem;
    color: $dark-blue;
    margin: 0;
  }

  &__button {
    background-color: $dark-blue;
    color: $white;
    width: 10rem;
    height: 3rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 2rem;
  }
}
</style>
