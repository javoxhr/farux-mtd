<template>
  <div>
    <div class="special__cards-card sort-btn">
      <img :src="product?.imageUrl" alt="" />
      <div class="special__card-priceee">
        <span class="special__card-price">
          {{ product?.price * (1.5).toFixed() }}
        </span>
        <div class="line"></div>
        <span class="special__card-pricee">{{ product?.price }}</span>
      </div>
      <NuxtLink :to="localePath(`/products/${product?.slug}`)" @click="store.open = !store.open" v-if="!store.token" >
        <h1>{{ product?.name }}</h1>
      </NuxtLink>
      <NuxtLink :to="localePath(`/products/${product?.slug}`)" v-if="store.token">
        <h1>{{ product?.name }}</h1>
      </NuxtLink>
      <div class="special-card__favourite">
        <button class="buy" @click="addToCart(productCart , store.open = !store.open)"  v-if="!store.token"  >
          <Cart-Buy></Cart-Buy>
        </button>
        <button class="buy" @click="addToCart(productCart)"  v-if="store.token">
          <Cart-Buy></Cart-Buy>
        </button>
        <div class="line"></div>
        <button
          class="asd"
          @click="sendLike(store.open = !store.open) "
          v-if="!store.token" 
        >
          <Cart-Icon></Cart-Icon>
        </button>
        <button
          class="asd"
          @click="sendLike() "
          v-if="store.token" 
        >
          <Cart-Icon></Cart-Icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartBuy from "~/components/icons/CartBuy.vue";
import CartIcon from "~/components/icons/CartIcon.vue";
import { favouriteCard } from "../composables/favouriteCard";
import { addToCart } from "~/composables/addToCart";
import { useStore } from "~/store/store";
import services from "~/services/services";
const category = ref({});
const localePath = useLocalePath();
const store = useStore();
const { product } = defineProps(["product"]);

const sendLike = async () => {
  const res = await $fetch(
    `https://vadalar.uz/api/product-manager/product-save/create?productKey=${product?.slug}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${store.token}`,
        body: {},
      },
    }
  );
  console.log(res);
};

const productCart = computed(() => {
  const item = {
    name: product?.name,
    imageUrl: product?.imageUrl,
    price: product?.price,
    id: product?.id,
    category: product?.category,
    quantity: 1,
  };
  return item;
});

// const checkSaved = computed(() => {
//   const item = store?.cart?.find((el) => el.id == product.id);
//   if (item) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const like = computed(() => {
//   const item = store.like.find((el) => el.id == product.id);
//   if (item) {
//     return item;
//   } else {
//     return false;
//   }
// });
// const likeItem = computed(() => {
//   const item = {
//     name: product?.name,
//     imageUrl: product?.imageUrl,
//     price: product?.price,
//     id: product?.id,
//     category: product?.category,
//     quantity: 1,
//   };
//   return item;
// });
// const likeSaved = computed(() => {
//   const item = store.like.find((el) => el.id == product.id);
//   if (item) {
//     return true;
//   } else {
//     return false;
//   }
// });
</script>

<style lang="scss" scoped>
.active-cart {
  svg {
    fill: var(--br-color);
    path {
      fill: var(--br-color);
    }
  }
}
.active-link {
  svg {
    fill: var(--br-color);
    path {
      fill: var(--br-color);
    }
  }
}
</style>
