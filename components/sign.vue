<template>
  <!-- 4 -->
    <div>
    <div class="sign" v-if="store.signUp">
        <div class="container">
            <form @submit.prevent="signUp()">
              <div class="login-top">
                <h4>Вход</h4>
                <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                <svg
                  enable-background="new 0 0 512 512"
                  height="512px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M255.997,460.351c112.685,0,204.355-91.668,204.355-204.348S368.682,51.648,255.997,51.648  c-112.68,0-204.348,91.676-204.348,204.355S143.317,460.351,255.997,460.351z M255.997,83.888  c94.906,0,172.123,77.209,172.123,172.115c0,94.898-77.217,172.117-172.123,172.117c-94.9,0-172.108-77.219-172.108-172.117  C83.888,161.097,161.096,83.888,255.997,83.888z"
                  />
                  <path
                    d="M172.077,341.508c3.586,3.523,8.25,5.27,12.903,5.27c4.776,0,9.54-1.84,13.151-5.512l57.865-58.973l57.878,58.973  c3.609,3.672,8.375,5.512,13.146,5.512c4.658,0,9.316-1.746,12.902-5.27c7.264-7.125,7.369-18.793,0.242-26.051l-58.357-59.453  l58.357-59.461c7.127-7.258,7.021-18.92-0.242-26.047c-7.252-7.123-18.914-7.018-26.049,0.24l-57.878,58.971l-57.865-58.971  c-7.135-7.264-18.797-7.363-26.055-0.24c-7.258,7.127-7.369,18.789-0.236,26.047l58.351,59.461l-58.351,59.453  C164.708,322.715,164.819,334.383,172.077,341.508z"
                  />
                </svg>
              </div>
              <div class="login-bottom">
                <h4>Имя</h4>
                <input  v-model="firstName"  type="text"/>
                <div class="login__bottom-password">
                  <h1>Фамилия</h1>
                </div>
                <input v-model="lastName"   type="text"/>
                <div class="login__bottom-password">
                  <h1>Пароль</h1>
                </div>
                <input  v-model="password"  type="password"/>
                <div class="login__bottom-password">
                  <h1>Подтвердите пароль</h1>
                </div>
                <input  v-model="passwordRepeat"  type="password"/>
                <button class="login-btn" type="submit">Вход</button>
              </div>
            </form>
        </div>
    </div>
    <div class="overlay" v-if="store.signUp"></div>
    </div>
</template>

<script setup>
import { useStore } from '~/store/store';
const store = useStore();

 const firstName = ref("");
 const lastName  = ref("");
 const password  = ref("");
 const passwordRepeat = ref("");


 async function signUp() {
  const res = await $fetch("https://vadalar.uz/api/auth/register/sign-up", {
    method: "POST",
    body: {
      firstname: firstName.value,
      lastname: lastName.value,
      password: password.value,
      password_repeat: passwordRepeat.value,
      code: store.code,
      phone: store.phone,

    },
  });
  if (res.status == 200) {
    localStorage.setItem("authKey", res.data.auth_key);
    store.token = res.data.auth_key;
    store.open = true;
    store.signUp = false;
    
  }
 }
</script>

<style lang="scss" scoped>

</style>