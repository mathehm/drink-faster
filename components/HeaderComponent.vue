<script setup lang="ts">
import { type DrinkFullData } from '@/types'
const search = ref('')
const searchResult = ref()
const isMobile = computed(() => window.innerWidth > 480)

function drinkSearch () {
  /* eslint prefer-const: ["error", { ignoreReadBeforeAssign: true }] */
  let debounceTimer
  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(() => {
    handleSearch()
  }, 500)
}

async function handleSearch () {
  const { data: itemDrink } = await useFetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}`, {
    transform: (response: DrinkFullData) => response.drinks
  })

  searchResult.value = itemDrink.value
}
</script>

<template>
  <header class="content">
    <div class="content__logo">
      <NuxtLink to="/">
        <img src="https://media.licdn.com/dms/image/C560BAQEIKSg9WeNOlQ/company-logo_200_200/0/1627569199028?e=2147483647&v=beta&t=ZytxzxM7FIL9wCW0W5CbUBd-ApbiId0LaVqrSD6ufVw" alt="Logo faster">
      </NuxtLink>
    </div>
    <div class="content__search">
      <input v-model="search" class="input" placeholder="Search" @input="drinkSearch">
      <session v-if="search" class="block" @click="search=''">
        <div class="block__list">
          <ul v-if="searchResult" v-for="i in searchResult" :key="i">
            <NuxtLink :to="`/item/${i.idDrink}`">
              <li>{{ i.strDrink }}</li>
            </NuxtLink>
          </ul>
          <div v-else class="block__list__empty">
            <span class="material-symbols-outlined">
              search_off
            </span>
          </div>
        </div>
      </session>
    </div>
    <NuxtLink to="/favorite" class="content__favorite">
      <span class="material-symbols-outlined">
        favorite
      </span>
      <span v-if="isMobile">
        Favorites
      </span>
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: $dark-blue;
  color: $white;
  display: grid;
  grid-template-columns: 150px auto 150px;
  align-items: center;

  @include breakpoint(small-only) {
    grid-template-columns: none;
    grid-template-areas:
      "logo none favorite"
      "search search search"
      ;
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;

    @include breakpoint(small-only) {
      grid-area: logo;
    }

    img {
      width: 100%;
      max-width: 5rem;
    }
  }

  &__search {

    @include breakpoint(small-only) {
      padding: 0 1rem 1rem 1rem;
      grid-area: search;
    }
    .input {
      height: 2.5rem;
      border-radius: 8px;
      padding: 0 1rem;
      width: 100%;

      &:focus,
      &:focus-visible {
        outline: 0;
      }
    }

    .block {
      position: absolute;
      top: 90px;
      left: 0;
      right: 0;
      bottom: 0;
      color: $black;
      z-index: 5;

      &__list {
        position: relative;
        top: 0;
        left: 20%;
        width: 60%;
        height: 40%;
        border: 2px solid $dark-blue;
        background-color: $white;
        z-index: 10;
        border-radius: 8px;
        overflow-y: auto;

        @include breakpoint(small-only) {
          top: 60px;
          left: 10%;
          width: 80%;
        }

        li {
          padding: 1rem 2rem;

          &:hover {
            font-weight: 900;
            font-size: 115%;
          }
        }

        &::-webkit-scrollbar {
          width: 12px;
          margin: 5px;
        }

        &::-webkit-scrollbar-track {
          background: none;
        }

        &::-webkit-scrollbar-thumb {
          background-color: $dark-blue;
          border-radius: 20px;
          border: 2px solid $white;
        }

        &__empty {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;

          span {
            font-size: 4rem;
            color: $dark-blue;
          }
        }
      }
    }
  }

  &__favorite {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-left: 1rem;

    @include breakpoint(small-only) {
      grid-area: favorite;
    }
  }
}
</style>
