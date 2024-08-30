<template>
  <div>
    <div>
      <div class="container">
        <div class="page-wrap">
          <button class="information" @click="toggleNav">Malumotlar</button>
          <div class="page-wrap-info">
            <h4>Ma'lumot</h4>
            <nav class="header__menu">
              <ul class="header__menu-list">
                <li
                  class="header-menu__item"
                  v-for="item in pageCategory"
                  :key="item"
                >
                  <NuxtLink :to="localePath(`/page/${item?.id}`)">{{ item?.name }}</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
          <div class="page-wrap-detial">
            <div class="page__wrap-sub" v-for="item in page" :key="item">
              <h4>
                {{ item?.title }}
              </h4>
              <p>{{ item?.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="help__nav" :class="{ 'help__nav--active': isNavOpen }">
        <div class="page-wrap-info">
          <div class="help__nav-top">
            <h4>Ma'lumot</h4>
            <button @click="toggleNav">
              <svg
                class="feather feather-x-circle"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" x2="9" y1="9" y2="15" />
                <line x1="9" x2="15" y1="9" y2="15" />
              </svg>
            </button>
          </div>
          <nav class="header__menu">
            <ul class="header__menu-list">
              <li
                class="header-menu__item"
                v-for="item in pageCategory"
                :key="item"
              >
                <NuxtLink :to="localePath(`/page/${item?.id}`)">{{ item?.name }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import services from "~/services/services";
import { useStore } from "~/store/store";
import CartBuy from "~/components/icons/CartBuy.vue";
import CartIcon from "~/components/icons/CartIcon.vue";
const localePath = useLocalePath();
const store = useStore();
const page = ref({});
const pageCategory = ref({});
const isNavOpen = ref(false);

const { id } = useRoute().params; 
const { locale } = useI18n();


async function getPageCategoryDetail() {
  const res = await services.getPageCategoryDetail(id, locale.value)
  page.value = res.data;
}

async function getPageCategory() {
  const res = await services.getPageCategory(locale.value);
  pageCategory.value = res.data;
}

getPageCategoryDetail();
getPageCategory();

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>

<style lang="scss" scoped>
.page-wrap {
  display: flex;
  gap: 20px;
  align-items: center;
  .page-wrap-info {
    margin-top: 50px;
    border: 2px solid #f2f2f2;
    display: flex;
    align-items: left;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    a {
      font-size: 20px;
      color: var(--black);
      width: 400px;
      transition: all 0.3s ease;
      display: inline-flex;
      padding: 15px;
      &:hover {
        background: #f2f2f2;
      }
    }
    .header__menu-list {
      display: flex;
      flex-direction: column;
      gap: 3px;
      width: 100%;
    }
    h4 {
      text-align: left;
      padding: 10px;
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 500;
      color: black;
    }
  }
  .page-wrap-detial {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .page__wrap-sub {
      display: flex;
      flex-direction: column;
      align-items: left;
      gap: 20px;
      h4 {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 21px;
        font-weight: 500;
        color: black;
      }
      p {
        font-size: 15px;
        line-height: 1.5;
        font-weight: 400;
        color: var(--black);
      }
    }
  }
}

.help__nav {
  background: #fff;
  height: 100%;
  left: 0;
  max-width: 360px;
  overflow-y: auto;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  width: 100%;
  z-index: 20;
  transition: transform 0.3s ease;
  &--active {
    transform: translateX(0);
  }
  
  .help__nav-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    button {
      border: none;
      background: none;
      cursor: pointer;
    }
    h4 {
      font-size: 22px;
      font-weight: 500;
    }
  }
  .header__menu-list {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0;
    gap: 10px;
    padding: 10px;
    .header-menu__item{
      width: 100%;
    }
    a {
      color: black;
      font-size: 20px;
      padding: 10px;
      display: inline-flex;
      width: 100%;
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }
}

.information {
  margin-top: 40px;
  padding: 12px 79px;
  border: 2px solid #4675ff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #4675ff;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: none;
  &:hover {
    background: none;
    color: #4675ff;
  }
}

@media screen and (max-width: 1205px) {
  .page-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .page-wrap-info {
      display: none;
    }
  }
}

@media screen and (max-width:980px)  {
  .information {
    display: block;
  }
  .page-wrap {
    .page-wrap-detial {
      margin-top: 0;
    }
  }
}
</style>