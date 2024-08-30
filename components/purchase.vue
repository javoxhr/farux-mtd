<template>
  <div>
    <div class="purchase-card">
      <div class="purchase-card-img">
        <img style="width: 100px" :src="purchase?.imageUrl" alt="" />
      </div>
      <div class="purchase__card-wrapper">
        <h1>{{ purchase?.name }}</h1>
        <h4>{{ purchase?.quantity }} <span>ta</span>  </h4>
        <h3>{{ purchase?.price }} {{ t("priceTitle") }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
import services from "~/services/services";
const store = useStore();
const swithcLocalePath = useSwitchLocalePath();
const { locale, locales, t } = useI18n();
const { purchase } = defineProps(["purchase"]);
</script>

<style lang="scss" scoped>
</style>
