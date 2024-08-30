<template>
  <div>
    <div class="detail">
      <div class="container">
        <div class="detail-wrap">
          <!-- <nav class="detail-list">
            <ul style="display: flex; gap: 10px; margin-top: 25px">
              <li>Главная</li>
              <li>Ноутбуки</li>
              <li>Apple</li>
            </ul>
          </nav> -->
          <div class="detail-wrap-borders">
            <div class="detail-image-wrap">
              <img
                :src="detail?.product?.imageUrl"
                :key="item"
                alt=""
                class="detail-image-header"
              />
              <swiper
                class="detail-footer-swiper"
                :modules="[SwiperNavigation]"
                :slides-per-view="5"
                :loop="true"
                :navigation="true"
                :spaceBetween="30"
              >
                <SwiperSlide
                  class="detail-footer-image"
                  v-for="product in detail?.product?.images"
                  :key="item"
                >
                  <img :src="product" />
                </SwiperSlide>
              </swiper>
            </div>
            <!--  -->
            <div class="detail-all-wrap">
              <!--  -->
              <div class="detail-info-wrap">
                <h1>{{ detail?.product?.name }}</h1>
                <div class="detail-likes-tit">
                  <div class="detail-option">
                    <span>{{ detail?.product?.priceFormat }}</span>
                    <!-- <img src="../assets/images/svg/svoystva.svg" alt="" /> -->
                  </div>
                  <div class="special-card__favourite">
                    <button class="buy">
                      <Cart-Buy></Cart-Buy>
                    </button>
                    <div class="line"></div>
                    <button class="asd"  @click="sendLike()" >
                      <Cart-Icon></Cart-Icon>
                    </button>
                  </div>
                </div>
                <div class="detail-vip">
                  <span> VIP скидки для VIP клиентов</span>
                </div>
                <div class="detail-btn">
                  <button @click="addDetail(productCart, store.open = !store.open)" v-if="!store.token"  >
                    <NuxtLink to="/buy/purchasePage"> {{ t("detail") }} </NuxtLink>
                  </button>
                  <button @click="addDetail(productCart)" v-if="store.token">
                    <NuxtLink to="/buy/purchasePage"> {{ t("detail") }} </NuxtLink>
                  </button>
                </div>
                <div class="detail-name">
                  <span>{{ t("agreement") }}</span>
                  <p>
                    {{ detail?.product?.description }}
                  </p>
                </div>
              </div>
              <!--  -->
              <div
                class="detail-texnic"
                v-for="product in detail?.characterInfo"
                :key="item"
              >
                <span class="detail-texnic-header">
                  {{ product?.groupName }}
                </span>
                <div class="texnic-info" v-for="item in product?.characters">
                  <span class="texnic-name"> {{ item?.name }}</span>
                  <span class="texnic-info-detail">{{ item?.value }}</span>
                </div>
              </div>
              <!--  -->
              <!-- <div class="detail-info-model">
                <span class="detail-texnic-header"> Информация о модели </span>
                <div class="texnic-info">
                  <span class="texnic-name">Парт Номер</span>
                  <span class="texnic-info-detail">NX.A5UAA.006.</span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Линейка</span>
                  <span class="texnic-info-detail">Swift</span>
                </div>
              </div> -->
              <!--  -->
              <!-- <div class="detail-clasifikation">
                <span class="detail-texnic-header">Классификация</span>
                <div class="texnic-info">
                  <span class="texnic-name">Тип</span>
                  <span class="texnic-info-detail">NX.A5UAA.006.</span>
                </div>
              </div> -->
              <!--  -->
              <!-- <div class="detail-autidory">
                <span class="detail-texnic-header">Аудитория</span>
                <div class="texnic-info">
                  <span class="texnic-name">Тип</span>
                  <span class="texnic-info-detail">NX.A5UAA.006.</span>
                </div>
              </div> -->

              <!-- <div class="detail-display">
                <span class="detail-texnic-header">Дисплей</span>
                <div class="texnic-info">
                  <span class="texnic-name">Поверхность</span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Сенсорный экран</span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Частота смены кадров </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">матрицы </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Разрешение </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
              </div> -->

              <!-- <div class="detail-procesor">
                <span class="detail-texnic-header">Процессор</span>
                <div class="texnic-info">
                  <span class="texnic-name">Поверхность</span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Сенсорный экран</span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Частота смены кадров </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">матрицы </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Разрешение </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Разрешение </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Разрешение </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
              </div> -->

              <!-- <div class="detail-storage">
                <span class="detail-texnic-header">Оперативная память</span>
                <div class="texnic-info">
                  <span class="texnic-name">Частота смены кадров </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">матрицы </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
                <div class="texnic-info">
                  <span class="texnic-name">Разрешение </span>
                  <span class="texnic-info-detail">NX.A5UAA.006. </span>
                </div>
              </div> -->
            </div>

            <!-- <pre>{{ detail }}</pre> -->

            <div class="detail-support">
              <div class="support-card">
                <div class="support-card__header">
                  <!-- <img src="../assets/images/svg/change.svg" alt="" /> -->
                  <span>{{ t("answers") }}</span>
                </div>
                <div class="support-card__main">
                  <p>
                    {{ t("phone") }} :<br>
                    <span>+998907872387</span>
                  </p>
                </div>
                <div class="support-more">
                  <a href="#">{{ t("telegram") }} <br>
                    <span>@mtdmarketplace</span>
                  </a>
                </div>
              </div>
              <div class="support-card">
                <div class="support-card__header">
                  <!-- <img src="../assets/images/svg/wallet.svg" alt="" /> -->
                  <span>{{t("tolov")}}:</span>
                </div>
                <div class="support-card__main">
                  <li>{{ t("money") }}</li>
                  <li>{{ t("payme") }}</li>
                  <li>{{ t("transfer") }}</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "~/services/services";
import { useStore } from "~/store/store";
import CartBuy from "~/components/icons/CartBuy.vue";
import CartIcon from "~/components/icons/CartIcon.vue";
import { addDetail } from "~/composables/detailCount";
const store = useStore();
const detail = ref({});
const { slug } = useRoute().params;
const swithcLocalePath = useSwitchLocalePath();
const { locale, locales, t } = useI18n();
const { product } = defineProps(["product"]);
async function getDetail() {
  const res = await services.getDetail(store.token, slug);
  detail.value = res?.data;
  console.log(res);
}

getDetail();
</script>

<style lang="scss" scoped>

.swiper-horizontal {
  width: 400px;
}
</style>