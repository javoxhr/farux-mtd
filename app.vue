<template>
  <div>
    <!-- <h2>{{ store.token }}</h2> -->
    <NuxtLayout />
    <div>
      <!-- <h2>{{ store.userInfo?.firstname }} {{ store.userInfo?.lastname }}</h2> -->
      <!-- <h1>{{ store.userInfo?.username }}</h1> -->
    </div>
  </div>
</template>

<script setup>
import { useStore } from "./store/store";
const store = useStore();
async function getUserInfo() {
  const res = await $fetch(
    "https://vadalar.uz/api/profile-manager/profile/index",
    {
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    }
  );
  store.userInfo = res.data;
}

onMounted(() => {
  if (process.client) {
    store.token = localStorage.getItem("authKey")
      ? localStorage.getItem("authKey")
      : null;
    store.cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  } else {
    store.cart = [];
  }

  getUserInfo();
});
watch(
  () => store.token,
  () => {
    getUserInfo();
  }
);
</script>

<style lang="scss" scoped></style>
