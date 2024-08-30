<template>
    <div class="filter">
      <div class="container">
        <div class="filter-all">
          <div class="filter__wrap">
            <h2>{{ filter?.category?.name }}</h2>
            <div class="filter__wrap-special">
              <img src="./images/svg/bar-chart.svg" alt="" />
            </div>
          </div>
          <div class="filter__btn-wrap">
            <button class="filter__btn-grid">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3H3V10H10V3Z"
                  stroke="#ED3729"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 3H14V10H21V3Z"
                  stroke="#ED3729"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 14H14V21H21V14Z"
                  stroke="#ED3729"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14H3V21H10V14Z"
                  stroke="#ED3729"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="filter__btn-gridd" @click="toggleFlex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7V1L1 1L1 7L19 7Z"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 19V13L1 13L1 19L19 19Z"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="filter-contents">
          <div class="filter-option">
            <div class="filter__option-top" id="one">
              <span>{{ t("price") }}</span>
              <!-- <img src="./images/svg/chevron-up.svg" alt="" /> -->
            </div>
            <div class="filter__option-bottom">
              <div class="filter__option-wrapp">
                <div class="filter__bottom-span">
                  <span>{{ t("to") }} {{ value[1] }}</span>
                </div>
                <div class="filter__bottom-span">
                  <span>{{ t("from") }} {{ value[0] }}</span>
                </div>
              </div>
              <Slider
                v-model="value"
                :max="maxPrice"
                :min="minPrice"
                range
                class="w-56"
              />
              <div class="filter-brand">
                <div class="filter__option-top">
                  <span>Бренд</span>
                  <button class="verx" @click="toggleSection('brands')">
                    <img src="@/assets/images/svg/verxx.svg" alt="" />
                  </button>
                </div>
                <label
                  class="filter__brand-label"
                  v-for="item in filter?.brands"
                  :key="item"
                  v-if="activeSection === 'brands'"
                >
                  <input type="checkbox" @change="selected(item.id)" />
                  <span class="input-type">{{ item?.name }}</span>
                </label>
              </div>
              <div class="filter-capacity">
                <div
                  class="filter__option-top"
                  v-for="charca in filter?.characters"
                  :key="charca"
                >
                  <div class="filter-wrap-btn">
                    <span>{{ charca?.characterName }}</span>
                    <button
                      class="verx"
                      @click="toggleCharcter(charca?.characterId)"
                    >
                      <img src="@/assets/images/svg/verxx.svg" alt="" />
                    </button>
                  </div>
                  <div
                    v-for="charc in charca?.assigns"
                    class="filter-capacity-wrap"
                    v-show="characterTog[charca?.characterId]"
                    :key="charc"
                  >
                    <label class="filter__brand-label">
                      <input
                        type="checkbox"
                        @change="
                          selectorAssignss(charca?.characterId, charc?.value)
                        "
                      />
                      <span class="input-type"> {{ charc?.value }} </span>
                    </label>
                  </div>
                </div>
                <div class="content-bottom">
                  <button class="open-all" @click="filterFunction()">
                    Показать
                  </button>
                </div>
              </div>
              <!-- <div class="filter-manufacturer">
                <div class="filter__option-top">
                  <span>Страна производитель</span>
                  <img src="./images/svg/chevron-up.svg" alt="" />
                </div>
                <label class="filter__brand-label">
                  <input type="checkbox" />
                  <span class="input-type"> Вьетнам </span>
                  <span class="input-typeeee"> Китай </span>
                  <span class="input-typee"> Artel </span>
                  <span class="input-typeee"> Huawei </span>
                </label>
              </div> -->
              <!-- <ul>
                <li>
                  Количество ядер <img src="./images/svg/prava.svg" alt="" />
                </li>
                <li>
                  Фронтальная камера <img src="./images/svg/prava.svg" alt="" />
                </li>
                <li>Фотокамера <img src="./images/svg/prava.svg" alt="" /></li>
                <li>Версия ОС <img src="./images/svg/prava.svg" alt="" /></li>
                <li>
                  Разъем для наушников <img src="./images/svg/prava.svg" alt="" />
                </li>
                <li>
                  Разъем для наушников <img src="./images/svg/prava.svg" alt="" />
                </li>
  
                <button>{{ t("show") }}</button>
              </ul> -->
            </div>
          </div>
          <div class="special__card-bottom">
            <div class="special__cards">
              <div class="special__cards-bottom" :class="cardClass">
                <card
                  :class="{ card: true, 'flex-style': isFlex }"
                  v-for="item in filter?.products?.items"
                  :key="item"
                  :product="item"
                />
                <!-- <div
                  class="special__cards-card"
                  v-for="product in filter?.products?.items"
                  :key="product"
                >
                  <img :src="product?.imageUrl" alt="" />
                  <div class="special__card-priceee">
                    <div class="line"></div>
                    <span class="special__card-pricee">{{ product?.price }} s'om</span>
                  </div>
                  <NuxtLink :to="`/products/${product?.slug}`" class="detail-next">
                    <h1>{{ product?.name }}</h1>
                  </NuxtLink>
                  <div class="special-card__favourite">
                    <button class="buy" @click="addToCart(productCart)">
                      <Cart-Buy></Cart-Buy>
                    </button>
                    <div class="line"></div>
                    <button
                      class="asd"
                      :class="{ 'active-link': likeSaved }"
                      @click="sendLike()"
                    >
                      <Cart-Icon></Cart-Icon>
                    </button>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Slider from "primevue/slider";
  import { Value } from "sass";
  import CartBuy from "~/components/icons/CartBuy.vue";
  import CartIcon from "~/components/icons/CartIcon.vue";
  import services from "~/services/services";
  import { useStore } from "~/store/store";
  const store = useStore();
  const filter = ref({});
  const { slug } = useRoute().params;
  const swithcLocalePath = useSwitchLocalePath();
  const { locale, locales, t } = useI18n();
  const minPrice = ref(0);
  const maxPrice = ref(0);
  const selectorBrands = ref([]);
  const selectorAssigns = ref([]);
  const value = ref([maxPrice.value, maxPrice.value]);
  const isFlex = ref(false);
  
  const characterTog = ref({});
  
  const activeSection = ref(null);
  
  // Функция для переключения активного раздела
  const toggleSection = (section) => {
    // Если выбранный раздел уже активен, закрываем его
    if (activeSection.value === section) {
      activeSection.value = null;
    } else {
      // Иначе открываем новый раздел и закрываем все остальные
      activeSection.value = section;
    }
  };
  
  const cardClass = computed(() => {
    return isFlex.value
      ? "df flex direction-column width-100"
      : "default-card-style";
  });
  const toggleFlex = () => {
    isFlex.value = !isFlex.value;
  };
  
  // Метод для переключения стиля
  const toggleStyle = () => {
    isFlex.value = !isFlex.value;
    isFlex.value = !isFlex.value;
  };
  async function filterFunction() {
    const params = new URLSearchParams();
    params.append("slugKey", slug);
    params.append("maxPrice", value.value[0]);
    params.append("minPrice", value.value[1]);
    selectorBrands.value.forEach((id) => {
      params.append("brandId[]", id);
    });
    selectorAssigns.value.forEach(({ id, value }) => {
      params.append(`filter[${id}][]`, value);
    });
  
    const queryString = decodeURIComponent(params.toString().split("+").join(""));
    try {
      const res = await services.getSubCategory(queryString, locale.value);
      filter.value = res.data;
      minPrice.value = res?.data?.minPrice;
      maxPrice.value = res?.data?.maxPrice;
      value.value = [maxPrice.value, minPrice.value];
      console.log(res.data);
  
      res.data.characters.forEach((character) => {
        characterTog[character?.characterId] = false;
      });
    } catch (error) {
      console.error("Ошибка при получение Данных", error);
    } finally {
      console.log("salam aleykum");
    }
  }
  function selected(id) {
    const index = selectorBrands.value.findIndex((el) => el === id);
    if (index === -1) {
      selectorBrands.value.push(id);
    } else {
      selectorBrands.value.splice(index, 1);
    }
  }
  
  function selectorAssignss(id, value) {
    const obj = { id, value };
    const index = selectorAssigns.value.findIndex(
      (el) => el.id === id && el.value === value
    );
    if (index === -1) {
      selectorAssigns.value.push(obj);
    } else {
      selectorAssigns.value.splice(index, 1);
    }
  }
  
  function toggleCharcter(charcterId) {
    characterTog.value[charcterId] = !characterTog.value[charcterId];
  }
  
  onMounted(() => {
    filterFunction();
  });
  </script>
  
  <style lang="scss" scoped>
  .df.flex.direction-column.width-100 {
    display: flex;
    flex-direction: column;
    width: 100%;
    // max-width: 600px;
    padding: 20px;
    border-radius: 10px;
  }
  .flex-style {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
  }
  </style>
  