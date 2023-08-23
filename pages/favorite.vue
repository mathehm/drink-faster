<script lang="ts" setup>
const favorite = useFavorite()
const drinks = favorite.value.drinks

const title = 'Favorite'
const description = 'Favorite drinks'

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<template>
  <div class="content">
    <div v-if="drinks.length > 0" class="content__cards">
      <div v-for="i in drinks" :key="i.idDrink">
        <CardItemComponent :drink="i" />
      </div>
    </div>
    <div v-else class="content__empty">
      <span class="material-symbols-outlined">
        heart_plus
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;

  &__cards {
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

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    span {
      font-size: 6rem;
      color: &dark-blue;
    }
  }
}
</style>
