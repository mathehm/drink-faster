<script setup lang="ts">
const config = useRuntimeConfig()
import { type DrinkData } from '@/types'
const route = useRoute()
const category = route.params.name

const { data: drinksCategory } = await useFetch(`filter.php?c=${category}`, {
  baseURL: config.public.apiBase,
  transform: (response: DrinkData) => response.drinks,
})

if (!drinksCategory.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Error in the request',
    fatal: true,
  })
}
</script>

<template>
  <div class="content">
    <span v-for="i in drinksCategory" :key="i.idDrink" class="content__card">
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
