<script lang="ts" setup>
import { Drink } from '@/types'
const isFavorite = ref(false)
const favorite = useFavorite()

const props = defineProps({
  drink: {
    type: Object as () => Drink,
    required: true
  }
})

function isDrinkInFavorites (drink: Drink): boolean {
  return favorite.value.drinks.some(d => d.idDrink === drink.idDrink)
}

if (props.drink) {
  isFavorite.value = isDrinkInFavorites(props.drink)
}
</script>

<template>
  <NuxtLink :to="`/item/${drink.idDrink}`">
    <div class="card">
      <div v-if="isFavorite" class="card__favorite">
        <span class="material-symbols-outlined">
          heart_check
        </span>
      </div>
      <div class="card__image">
        <img class="image" :src="drink.strDrinkThumb" :alt="drink.strDrink">
      </div>
      <p class="card__title">
        {{ drink.strDrink }}
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card {
  background-color: $white;
  color: $black;
  border: 1px solid $light-blue;
  width: 12rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s;

  @include breakpoint(small-only) {
    width: 100%;
  }

  &__favorite {
    position: absolute;
    right: 5px;
    top: 5px;

    .material-symbols-outlined {
      color: $white;
    }
  }

  &__image {
    width: 100%;
    height: 60%;
    overflow: hidden;

    .image {
      width: 100%;
      object-fit: cover;
    }
  }

  &__title {
    text-align: center;
    margin-top: 1rem;
    width: 80%;
  }

  &:hover {
    transform: scale(1.03);
  }
}
</style>
