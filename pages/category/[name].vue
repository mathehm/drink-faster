<script setup lang="ts">
import { type DrinkData } from '@/types'
const route = useRoute()
const category = route.params.name

const { data: itemDrink } = await useFetch(`/filter.php?c=${category}`, {
  baseURL: process.env.BASE_URL,
  transform: (response: DrinkData) => response.drinks,
})
</script>

<template>
  <div class="content">
    <span v-for="i in itemDrink" :key="i.idDrink" class="content__card">
      <CardItemComponent :drink="i" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 2rem 6rem;

  @include breakpoint(small-only) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
  }
}
</style>
