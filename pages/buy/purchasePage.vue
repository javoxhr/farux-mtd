<template>
  <div>
    <div class="buy-wrap">
      <div class="container">
        <div class="buy-left">
          <h4 class="buy-now">{{ t("shoping") }}</h4>
          <div class="buy__wrap-count">
            <span>1</span>
            <h4>{{ t("youDelivery") }}</h4>
          </div>
          <div class="purchase-wrap">
            <purchase
              v-for="purchase in store.cart"
              :key="purchase"
              :purchase="purchase"
            />
          </div>
          <div class="payment-bottom">
            <div class="buy__wrap-count">
              <span>2</span>
              <h4>{{ t("select") }}</h4>
            </div>
            <div class="payment-types">
              <div class="payment-type-item">
                <input type="radio" name="payment" checked id="payment-inp" @change="getIdPyment = payment[1]?.id"/>
                <label for="payment-inp">
                  <span></span>
                  <h4>{{ t("typePayme") }}</h4>
                  <img src="@/assets/images/svg/paymee.svg" alt="" />
                </label>
              </div>
              <div class="payment-type-item">
                <input type="radio" name="payment" id="payment-inpp" @change="getIdPyment = payment[0]?.id"/>
                <label for="payment-inpp">
                  <span></span>
                  <h4>{{ t("typeOnline") }}</h4>
                  <img src="@/assets/images/svg/humo.svg" alt="" />
                </label>
              </div>
              <div class="payment-type-item">
                <input type="radio" name="payment" id="payment-inppp" @change="getIdPyment = payment[2]?.id"/>
                <label for="payment-inppp">
                  <span></span>
                  <h4>{{ t("paymentCash") }}</h4>
                  <img src="@/assets/images/svg/nalichka.svg" alt="" />
                </label>
              </div>
              <div class="payment-type-item">
                <input type="radio" name="payment" id="payment-inpppp" @change="getIdPyment = payment[3]?.id"/>
                <label for="payment-inpppp">
                  <span></span>
                  <h4>{{ t("paymentCashh") }}</h4>
                  <img src="@/assets/images/svg/naxt.svg" alt="" />
                </label>
              </div>
              <div class="payment-type-item">
                <input type="radio" name="payment" id="payment-inppppp" @change="getIdPyment = payment[4]?.id"/>
                <label for="payment-inppppp">
                  <span></span>
                  <h4>{{ t("typeOnline") }}</h4>
                  <img src="@/assets/images/svg/naxt.svg" alt="" />
                </label>
              </div>
            </div>
          </div>
          <div class="buy__wrap-count">
            <span>3</span>
            <h4>{{ t("method") }}</h4>
          </div>

          <!-- <div class="delivery-wrap">
            <div class="payment-type-delivery">
              <input
                type="radio"
                checked
                name="bring"
                @change="
                  (store.regionChange = false), (changeHomeDeliver = true)
                "
                id="delivery-payment"
              />
              <label for="delivery-payment">
                <span></span>
                <h4>Yetkazib berish</h4>
              </label>
            </div>
            <div class="payment-type-delivery">
              <input
                type="radio"
                name="bring"
                @change="
                  (store.regionChange = true), (changeHomeDeliver = false)
                "
                id="bring"
              />
              <label for="bring">
                <span></span>
                <h4>Do'kondan Olib Ketish</h4>
              </label>
            </div>
          </div> -->

          <!-- <div v-if="!selectedLocation">
            <div
              class="payment-location-wrap"
              v-if="!hiddenDivs.includes('first')"
            >
              <h4>Farg‘ona viloyati</h4>
              <p>Farg'ona shahar, Al-Farg'oniy ko'chasi 19 uy</p>
              <p>8:30 dan 17:00 gacha</p>
              <button @click="selectLocation('first')">
                Do'kondan Olib Ketish
              </button>
            </div>

            <div
              class="payment-location-wrap"
              v-if="!hiddenDivs.includes('second')"
            >
              <h4>Andijon viloyati</h4>
              <p>Farg'ona shaxri. A.Qodiry ko'chasi 6-uy</p>
              <p>10:00 dan 22:00 gacha</p>
              <button @click="selectLocation('second')">
                Do'kondan Olib Ketish
              </button>
            </div>
          </div>

          <div v-if="selectedLocation">
            <p>Вы выбрали пункт выдачи:</p>
            <p>{{ selectedLocationDetails }}</p>
          </div> -->

          <div class="delivery-wrap">
            <div class="payment-type-delivery">
              <input
                type="radio"
                checked
                name="bring"
                @change="
                  (store.regionChange = false), (changeHomeDeliver = true)
                "
                id="delivery-payment"
              />
              <label for="delivery-payment">
                <span></span>
                <h4>{{ t("deliveryYandex") }}</h4>
              </label>
            </div>
            <div class="payment-type-delivery">
              <input
                type="radio"
                name="bring"
                @change="
                  (store.regionChange = true), (changeHomeDeliver = false)
                "
                id="bring"
              />
              <label for="bring">
                <span></span>
                <h4>{{ t("yandexHome") }}</h4>
              </label>
            </div>
          </div>
          <div class="delivery-region" v-if="changeHomeDeliver">
            <h4 class="delivery__region">{{ t("shiping") }}</h4>
            <div class="delivery__region-all">
              <div
                class="delivery__region-select"
                @click="store.region = !store.region"
              >
                <h4>{{ t("regionName") }}</h4>
                <button style="text-align: left">
                  <span>{{ getRegionName }}</span>
                </button>
                <div class="select__region-wrap" v-if="store.region">
                  <ul>
                    <li
                      v-for="item in region"
                      @click="getRegionName = item?.name"
                      :key="item"
                    >
                      {{ item?.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="delivery__region-select"
                @click="store.destriks = !store.destriks"
              >
                <h4>{{ t("regionOgrug") }}</h4>
                <button>
                  <span>{{ getOgrug }}</span>
                </button>
                <div class="select__region-wrap" v-if="store.destriks">
                  <ul>
                    <li
                      v-for="item in destriks"
                      @click="getOgrug = item?.name"
                      :key="item"
                    >
                      {{ item?.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="delivery-home">
                <input
                  id="check"
                  type="checkbox"
                  @click="store.deliveryHome = !store.deliveryHome"
                />
                <label for="check" class="home-desc">{{
                  t("homeDeliveryy")
                }}</label>
                <div class="delivery__home-wrap" v-if="store.deliveryHome">
                  <div class="delivery-location-home">
                    <span>{{ t("defoltdelivery") }}</span>
                    <input type="text" />
                  </div>
                  <div class="delivery-location-home">
                    <span>{{ t("floor") }}</span>
                    <input type="number" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="payment-location-wrap"
            v-for="(item, i) in market"
            :key="item"
          >
            <div class="location__wrap-con" v-show="store.regionChange">
              <div class="location__wrap-left">
                <span>{{ item?.regionName }}</span>
                <span>{{ item?.address }}</span>
                <h4>{{ item?.work_time }}</h4>
              </div>
              <div class="location__wrap-right">
                <button>{{ t("buyFergana") }}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="buy-right">
          <div class="payment-right">
            <h5>{{ t("youInfo") }}</h5>
            <div class="all-price">
              <span
                >{{ t("general") }} <span>{{ store.cart.length }}</span
                >{{ t("product") }}</span
              >
              <h4>
                {{ allPrice }} <span>{{ t("priceTitle") }}</span>
              </h4>
            </div>
            <div class="all-price">
              <span>{{ t("deliveryYandex") }}</span>
              <h4>
                {{ getDelivery?.home_delivery_price }}
                <span>{{ t("priceTitle") }}</span>
              </h4>
            </div>
            <div class="all-price">
              <span>{{ t("homeDeliveryy") }}</span>
              <h4>
                {{ getDelivery?.home_delivery_price
                }}<span>{{ t("priceTitle") }}</span>
              </h4>
            </div>
            <div class="all-price">
              <span>{{ t("priceSom") }}</span>
              <h4>
                {{ allPrice + 10000 }} <span>{{ t("priceTitle") }}</span>
              </h4>
            </div>
            <button @click="deliverDelivery()">{{ t("buyProduct") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="buy-left">
    <h4 class="buy-now">Xarid Qilish</h4>
    <div class="buy__wrap-count">
      <span>1</span>
      <h4>Sizning Buyurtmangiz</h4>
    </div>
    <div class="purchase-wrap-all">
      <div class="basket">
        <div class="basket__modal-header"></div>
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
            <span
              >Total {{ store.cart.length }} Products {{ totalPrice }}
              <h2>
                <h1>{{ allPrice }}</h1>
              </h2></span
            >
          </div>
          <button class="purchase">
            {{ t("buy") }}
          </button>
        </div>
      </div>
    </div>
    <div class="payment-bottom">
      <div class="container">
        <div class="buy__wrap-count">
          <span>2</span>
          <h4>Sizning Buyurtmangiz</h4>
        </div>
        <div class="payment-types">
          <div class="payment-type-item">
            <input type="radio" name="payment" />
            <label>
              <span></span>
              <h4>Orqali To'lash Payme</h4>
              <img src="@/assets/images/svg/paymee.svg" alt="" />
            </label>
          </div>
          <div class="payment-type-item">
            <input type="radio" name="payment" />
            <label>
              <span></span>
              <h4>Karta Orqali To'lash</h4>
              <img src="@/assets/images/svg/humo.svg" alt="" />
            </label>
          </div>
          <div class="payment-type-item">
            <input type="radio" name="payment" />
            <label>
              <span></span>
              <h4>Qabul Qilganda Naqt Pul Orqali To'lash</h4>
              <img src="@/assets/images/svg/nalichka.svg" alt="" />
            </label>
          </div>
          <div class="payment-type-item">
            <input type="radio" name="payment" />
            <label>
              <span></span>
              <h4>Qabul Qilganda Karta Orqali To'lash</h4>
              <img src="@/assets/images/svg/naxt.svg" alt="" />
            </label>
          </div>
          <div class="payment-type-item">
            <input type="radio" name="payment" />
            <label>
              <span></span>
              <h4>Karta Orqali To'lash</h4>
              <img src="@/assets/images/svg/naxt.svg" alt="" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="payment-right">
    <h5>Sizning Ma'lumotlaringiz</h5>
    <div class="all-price">
      <span>Jami 1ta Mahsulot</span>
      <h4>6 225 000 cум</h4>
    </div>
    <div class="all-price">
      <span>Jami 1ta Mahsulot</span>
      <h4>6 225 000 cум</h4>
    </div>
    <div class="all-price">
      <span>Jami 1ta Mahsulot</span>
      <h4>6 225 000 cум</h4>
    </div>
    <button>Xarid Qilish</button>
  </div> -->
</template>

<script setup>
import services from "~/services/services";
import { useStore } from "~/store/store";
const store = useStore();
const btnSelect = ref(true);
const getRegionName = ref("");
const getOgrug = ref("");
const changeHomeDeliver = ref(false);
const swithcLocalePath = useSwitchLocalePath();
const { locale, locales, t } = useI18n();
const getDelivery = ref({});
const region = ref({});
const destriks = ref({});
const payment = ref({});
const market = ref({});
// const deliverDeliveryy = ref({});
const postDelivery = ref({});
const allPrice = computed(() => {
  let price = 0;
  store.cart.forEach((el) => {
    price += el.price * el.quantity;
  });
  return price;
});

const getIdPyment = ref()

async function delivery() {
  const res = await services.delivery();
  getDelivery.value = res.data;
  console.log(res.data);
}
delivery();

async function getRegion() {
  const res = await services.getRegion();
  region.value = res.data;
  console.log(res.data);
}
getRegion();

async function getRegionDestriks() {
  const res = await services.getRegionDestriks();
  destriks.value = res.data;
  console.log(res.data);
}
getRegionDestriks();

async function getPayment() {
  const res = await services.getPayment();
  payment.value = res.data;
  console.log(res.data);
}

async function getMarket() {
  const res = await services.getMarket(store.token);
  market.value = res.data;
  console.log(res.data);
}
getMarket();

async function urlFunc(url) {
  if(url == '/') {
    router.push('/')
  } else {
    window.location.href = url
  }
}

async function deliverDelivery() {
  const productss = store.cart.map((el) => {
    let obj = {
      product_id: el.id,
      count: el.quantity,
    };
    return obj;
  });
  const body = {
    payment_type: getIdPyment.value,
    region_id: 1,
    district_id: 15,
    is_delivery_home: "",
    address: "",
    floor: "",
    delivery_date: "",
    home_delivery_sum: 20000,
    products: productss,
  };

  const res = await services.deliverDelivery(store.token, body);
  console.log(res)
  if (res?.status == 200) {
    if (res?.data?.url) {
      urlFunc(res?.data?.url);
    } else {
      urlFunc('/')
    }
  }
}

deliverDelivery();

// async function getDeliveryy() {
//   const res = await services.getDeliveryy();
//   postDelivery.value = res.data;
//   console.log(res.data);
// }

getPayment();
// getDeliveryy();
</script>

<style lang="scss" scoped></style>
