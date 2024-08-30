<template>
  <div>
    <div class="login" v-if="store.open">
      <div class="container">
        <form @submit.prevent="login()">
          <div class="login-top">
            <h4>Вход</h4>
            <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
            <button @click="store.open = false" class="login__btn">
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
            </button>
          </div>
          <div class="login-bottom">
            <h4>Номер Телефона</h4>
            <input
              v-model="userName"
              @keydown="mask"
              @input="mask"
              type="text"
              placeholder="tell"
            />
            <div class="login__bottom-password">
              <h1>Пароль</h1>
              <button>Забыли пароль</button>
            </div>
            <input v-model="password" type="password" />
            <button class="login-btn">Вход</button>
            <button
              class="register-btn"
              @click="
                (store.enterRegister = !enterRegister), (store.open = false), (store.overlay = true)
              "
            >
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="overlay" v-if="store.open"></div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const store = useStore();

const userName = ref("");
const password = ref("");
const login = async () => {
  const res = await $fetch("https://vadalar.uz/api/auth/login/index/", {
    method: "POST",
    body: {
      username: userName.value,
      password: password.value,
    },
  });
  if (res.status == 200) {
    localStorage.setItem("authKey", res.data.auth_key);
    store.token = res.data.auth_key;
  }
};

const mask = (event) => {
    let keyCode;
    event.keyCode && (keyCode = event.keyCode);
    let pos = event.target.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+998 (__) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = event.target.value.replace(/\D/g, ""),
        newValue = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
    i = newValue.indexOf("_");
    if (i !== -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
    }
    let reg = matrix.substr(0, event.target.value.length).replace(/_+/g,
        function (a) {
            return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(event.target.value) || event.target.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
        event.target.value = newValue;
    }
    if (event.type === "blur" && event.target.value.length < 5) {
        event.target.value = "";
    }
};
</script>

<style lang="scss" scoped>

</style>
