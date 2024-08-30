<template>
  <div>
    <div class="profile">
      <div class="profile-nav">
        <div class="profile-item">
          <div class="profile-icon">
            <svg
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <g data-name="1" id="_1">
                <path
                  d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM10.71,20.29,7.41,17H18V15H7.41l3.3-3.29L9.29,10.29l-5,5a1,1,0,0,0,0,1.42l5,5Z"
                  id="logout_account_exit_door"
                />
              </g>
            </svg>
          </div>
          <div class="profile__nav-exit" @click="logout()">
            <h4>Выход</h4>
          </div>
        </div>
      </div>
      <div class="profile-main">
        <div class="user-info">
          <div class="user-info-header">   
            <div class="profile__user-main">
              <div class="profile__user-icon">
                <svg
                  style="enable-background: new 0 0 24 24"
                  height="20px"
                  width="20px"
                  version="1.1"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="info" />
                  <g id="icons">
                    <g id="user">
                      <ellipse cx="12" cy="8" rx="5" ry="6" />
                      <path
                        d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <span>Личные Данные</span>
            </div>
            <button class="profile__user-btn">Изменить</button>
          </div>
          <div class="user-info-main">
            <h4>{{ store.userInfo?.firstname }}</h4>
            <h5>Номер телефона: {{ store.userInfo?.username }}</h5>
          </div>
        </div>
        <div class="user-info">
          <div class="user-info-header">   
            <div class="profile__user-main">
              <div class="profile__user-icon">
                <!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 48 48" height="25px" id="Layer_3" version="1.1" viewBox="0 0 48 48" width="25px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M33.021,2.026V0H14.979v2.026H4V48h40V2.026H33.021z M40,42H8V6h6.979v3h18.042V6H40V42z" fill="#241F20"/><rect fill="#241F20" height="4" width="24.062" x="12" y="14.938"/><rect fill="#241F20" height="4" width="24.062" x="12" y="22.938"/><rect fill="#241F20" height="4" width="24.062" x="12" y="30.938"/></g></svg>
              </div>
              <span>Мои заказы</span>
            </div>
            <div class="profile__user-btns">
              <button class="active-order">Текущий</button>
              <button class="profile__user-btn">Все</button>
            </div>
          </div>
          <div class="user-info-main cards">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../store/store";
import services from "~/services/services";
const store = useStore();
const allDelivery = ref({});

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

async function getAll() {
  const res = await services.getAll(store.token);
  allDelivery.value = res.data;
  console.log(getAll);
}
getAll();
</script>

<style lang="scss" scoped></style>
