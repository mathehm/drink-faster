<script setup lang="ts">
import { type DrinkCategoriesResponse } from '@/types'
const config = useRuntimeConfig()
const showAllCategories = ref(false)
const menusFit = Math.floor(window.innerWidth / 200) - 1
const partialCategories = computed(() => fullCategories.value?.slice(0, menusFit))

const { data: fullCategories } = await useFetch('/list.php?c=list', {
  baseURL: config.public.apiBase,
  transform: (response: DrinkCategoriesResponse) => response.drinks
})
</script>

<template>
  <nav class="content">
    <button
      :class="[
        'content__full',
        showAllCategories ? 'content__full__open' : ''
      ]"
      @click="showAllCategories = !showAllCategories"
    >
      <span v-if="showAllCategories" class="material-symbols-outlined">
        close
      </span>
      <span v-else>
        <span class="material-symbols-outlined">
          menu
        </span>
        All categories
      </span>
    </button>
    <ul class="content__list">
      <NuxtLink
        v-for="category in (showAllCategories ? fullCategories : partialCategories)"
        :key="category.strCategory"
        :to="`/category/${category.strCategory}`"
        @click="showAllCategories = false"
      >
        <li>
          {{ category.strCategory }}
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  min-height: 50px;
  background-color: $light-blue;
  color: $black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 6rem;

  @include breakpoint(small-only) {
    padding: 0 1rem;
    justify-content: center;
    position: relative;
  }

  &__full {
    background-color: inherit;
    font-size: 1rem;
    height: 50px;
    cursor: pointer;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    &__open {
      @include breakpoint(small-only) {
      position: absolute;
      right: 15px;
      top: 5px;
      width: 3rem;
      height: 3rem;
    }
    }
  }

  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @include breakpoint(small-only) {
      flex-direction: column;
    }

    li {
      padding: 1rem 2rem;
    }
  }

}
</style>
