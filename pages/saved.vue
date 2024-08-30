<template>
  <div>
    <div class="products">
      <div class="container">
        <div class="products-title">
          <h1>{{ t("favourite") }}</h1>
        </div>
        <div class="products-wrapper">
          <card
            v-for="item in store.savedProducts?.items"
            :key="item"
            :product="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";

const store = useStore();
const swithcLocalePath = useSwitchLocalePath();
const { locale, locales, t } = useI18n();

async function getSavedProduct() {
  const res = await $fetch(
    "https://vadalar.uz/api/product-manager/product-save/index",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${store?.token}`,
      },
    }
  );
  store.savedProducts = res.data;
  console.log(res);
}

getSavedProduct();
</script>

<style lang="scss">



</style>