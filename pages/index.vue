<script lang="ts" setup>
import type { DrinkData } from 'types'
const config = useRuntimeConfig()

const { data: drinks } = await useFetch('/filter.php?a=Non_Alcoholic', {
  baseURL: config.public.apiBase,
  transform: (response: DrinkData) => response.drinks
})

if (!drinks.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Error in the request',
    fatal: true
  })
}

const title = 'Drink Faster'
const description = 'Drink Faster project'

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
const drinkPartial = drinks.value?.slice(0, 5)
</script>

<template>
  <main class="content">
    <carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
      <slide v-for="d in drinkPartial" :key="d.idDrink">
        <NuxtLink :to="`/item/${d.idDrink}`">
          <div class="banner">
            <img class="banner__image" :src="d.strDrinkThumb" :alt="d.strDrink">
          </div>
        </NuxtLink>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </main>
</template>

<style lang="scss" scoped>
.content {
  .banner {
    height: calc(100vh - 266px);
    width: 100%;
    overflow: hidden;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
