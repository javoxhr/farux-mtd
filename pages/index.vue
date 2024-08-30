<template>
  <div>
    <div class="hero">
      <div class="container">
        <swiper
          class="hero__swiper"
          :modules="[SwiperPagination, SwiperNavigation]"
          :loop="true"
          :pagination="true"
          :navigation="true"
          :spaceBetween="30"
        >
          <swiper-slide v-for="banner in banners" :key="banner.id">
            <img :src="banner?.imageUrl" alt="Banner" class="hero__banner" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="special__cards">
      <div class="container">
        <div class="special__cards-top">
          <h1>{{ t("cheapProducts") }}</h1>
          <div class="special__cards-all">
            <a href="#">Посмотреть все</a>
            <img src="" alt="" />
          </div>
        </div>
        <div class="special__cards-bottom">
          <card v-for="item in product" :key="item" :product="item" />
        </div>
      </div>
    </div>

    <!-- <div class="popular-categories-wrap">     
      <div class="popular-categories">
        <div class="container">
          <h1 class="popular-categories-h1">{{ t("popularCategories") }}</h1>
          <div class="popular__categories-cards">
            <div
              class="popular__categories-card"
              v-for="item in popular"
              :key="item"
            >
              <h1>{{ item?.name }}</h1>
              <img :src="item?.imageUrl" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="wheelchair">
      <div class="container">
        <swiper
          class="wheelchair-swiper"
          :modules="[SwiperNavigation]"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :spaceBetween="30"
        >
          <swiper-slide
            class="wheelchair-wrapper"
            v-for="item in webBanners"
            :key="item"
          >
            <div class="wheelchair__wrapper-text">
              <h1>{{ item.title }}</h1>
              <p>{{ item?.description }}</p>
            </div>
            <div class="wheelchair__wrapper-image">
              <img :src="item?.imageUrl" alt="" />
            </div>
            <div class="wheelchair-wrapper__price">
              <h4>{{ item?.price }}</h4>
              <button>{{ t("more") }}</button>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>

    <div class="cheap-products-two">
      <div class="container">
        <div class="special__cards">
          <div class="container">
            <div class="special__cards-top">
              <h1>{{ t("cheap") }}</h1>
              <div class="special__cards-all">
                <a href="#">Посмотреть все</a>
                <img src="" alt="" />
              </div>
            </div>
            <div class="special__cards-bottom">
              <card v-for="item in cheap" :key="item" :product="item" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cheap-products">
      <div class="container">
        <div class="cheap__brands-all">
          <div class="cheap__brands">
            <h1>{{ t("brand") }}</h1>
            <div class="cheap__brands-wrap">
              <a href="#">
                <img src="./images/svg/Arrow 2 (1).svg" alt="" />
              </a>
              <a href="#">
                <img src="./images/svg/Arrow 3.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="cheap__brands-border">
            <swiper
              class="cheap__brands-card"
              :slides-per-view="4"
              :modules="[SwiperPagination, SwiperNavigation]"
              :loop="true"
              :navigation="true"
              :spaceBetween="15"
            >
              <swiper-slide
                class="swiper-brands"
                v-for="item in brands"
                :key="item"
              >
                <img :src="item?.imageUrl" alt="brands" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <div class="special__cards-bottom">
  <card v-for="item in cheap" :key="item" :cheap="item"></card>
</div> -->
<script setup>
import services from "~/services/services";

const product = ref({});
const cheap = ref({});
const banners = ref({});
const brands = ref({});
const popular = ref({});
const webBanners = ref({});

const swithcLocalePath = useSwitchLocalePath();
const { locale, locales, t } = useI18n();
async function getProduct() {
  const res = await services.getProduct(locale.value);
  product.value = res.data;
  console.log(res);
}
getProduct();

watch(
  () => locale.value,
  () => {
    getProduct();
  }
);

async function getBrands() {
  const res = await services.getBrands();
  brands.value = res.data;
  console.log(res);
}

async function getBanner() {
  const res = await services.getBanners();
  banners.value = res.data;
  // console.log(res);
}
getBrands();
getBanner();

async function getPopularCategoryy() {
  const res = await services.getPopularCategory(locale.value);
  popular.value = res.data;
  console.log(res);
}
getPopularCategoryy();

watch(
  () => locale.value,
  () => {
    getPopularCategoryy();
  }
);

async function getWebBanner() {
  const res = await services.getWebBanners(locale.value);
  webBanners.value = res.data;
  console.log(res);
}
getWebBanner();
watch(
  () => locale.value,
  () => {
    getWebBanner();
  }
);

async function getCheapProduct() {
  const res = await services.getCheapProduct(locale.value);
  cheap.value = res.data;
  console.log(res);
}
getCheapProduct();
</script>

<style lang="scss" scoped>
.hero__banner {
  width: 100%;
}
.swiper-brands {
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
