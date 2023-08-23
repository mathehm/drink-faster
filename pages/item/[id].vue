<script setup lang="ts">
import type { DrinkFullData, DrinkFull } from 'types'
const favorite = useFavorite()
const route = useRoute()
const id = route.params.id
const isFavorite = ref(false)

const { data: itemDrink } = await useFetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, {
  transform: (response: DrinkFullData) => response.drinks[0]
})

function isDrinkInFavorites (drink: DrinkFull): boolean {
  return favorite.value.drinks.some(d => d.idDrink === drink.idDrink)
}

function addDrinkToFavorites (drink: DrinkFull) {
  favorite.value.drinks.push({
    strDrink: drink.strDrink || '',
    strDrinkThumb: drink.strDrinkThumb || '',
    idDrink: drink.idDrink || ''
  })
}

function removeDrinkFromFavorites (drink: DrinkFull) {
  const indexToRemove = favorite.value.drinks.findIndex(d => d.idDrink === drink.idDrink)
  if (indexToRemove !== -1) {
    favorite.value.drinks.splice(indexToRemove, 1)
  }
}

function saveFavorite () {
  if (!itemDrink.value || !itemDrink.value.idDrink) {
    return
  }

  const drink = itemDrink.value
  const isCurrentlyFavorite = isDrinkInFavorites(drink)

  if (!isCurrentlyFavorite) {
    addDrinkToFavorites(drink)
  } else {
    removeDrinkFromFavorites(drink)
  }

  isFavorite.value = !isCurrentlyFavorite
}

if (itemDrink.value && itemDrink.value.idDrink) {
  const drink = itemDrink.value
  isFavorite.value = isDrinkInFavorites(drink)
}
</script>

<template>
  <div
    v-if="itemDrink?.strDrinkThumb && itemDrink.strGlass"
    class="content"
  >
    <div class="content__image">
      <img class="image" :src="itemDrink?.strDrinkThumb" :alt="itemDrink.strGlass">
    </div>
    <div class="content__info">
      <button class="favorite" @click="saveFavorite">
        <span v-if="isFavorite" class="material-symbols-outlined favorite__red">
          heart_check
        </span>
        <span v-else class="material-symbols-outlined">
          favorite
        </span>
      </button>
      <h2 class="title">
        {{ itemDrink.strDrink }}
      </h2>
      <p class="description">
        {{ itemDrink.strInstructions }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 6rem;

  @include breakpoint(small-only) {
    flex-direction: column;
    padding: 0;
  }

  &__image {
    max-width: 25rem;
    overflow: hidden;
    object-fit: cover;

    @include breakpoint(small-only) {
      max-width: 100%;
      max-height: 40vh;
    }

    .image {
      width: 100%;
    }
  }

  &__info {
    width: 100%;
    max-width: 25rem;
    position: relative;

    @include breakpoint(small-only) {
      padding: 1rem;
    }

    .favorite {
      position: absolute;
      top: 8px;
      right: 8px;
      background-color: inherit;

      &:hover {
        transform: scale(1.25);
      }
    }

    .title {
      margin-bottom: 1rem;
      width: 80%;
    }
  }
}
</style>
