<template>
  <div>
    <div class="basket" v-if="store.basket">
      <div class="basket__modal-header">
        <h3 class="basket__header-title">{{ t("cart") }}</h3>
        <button class="basket__header-btn" @click="store.basket = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.00015 4.58569L12.0002 10.5857L18.0002 4.58569L19.4144 5.99991L13.4144 11.9999L19.4144 17.9999L18.0002 19.4141L12.0002 13.4141L6.00015 19.4141L4.58594 17.9999L10.5859 11.9999L4.58594 5.99991L6.00015 4.58569Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div class="not-found" v-if="!store.cart?.length">
        <h2>Ваша корзинка пуста -_-</h2>
      </div>
      <div class="basket__modal-main">
        <div class="basket__main-card">
          <basketProduct
            v-for="item in store.cart"
            :key="item"
            :basketProduct="item"
          />
        </div>
      </div>
      <div class="basket__modal-footer">
        <div class="basket__modal-footer-text-wrap">
          <span>Total {{ store.cart.length }} Products {{ totalPrice  }} <h2><h1>{{ allPrice }}</h1></h2></span>
        </div>
        <button class="purchase">
          <NuxtLink to="/buy/purchasePage" @click="store.basket = false" >{{ t("buy") }}</NuxtLink>
        </button>
      </div>
    </div>
    <div class="overlay" v-if="store.basket"></div>
  </div>
</template>

<script setup>
import Cart from "~/pages/cart.vue";
import { useStore } from "~/store/store";

const store = useStore();
const swithcLocalePath = useSwitchLocalePath();
const { locale, locales, t } = useI18n();
const allPrice = computed(()=> {
  let price = 0
  store.cart.forEach((el)=> {
    price += el.price * el.quantity
  })
  return price
});
</script>

<style lang="scss" scoped>
</style>
