<template>
  <div>
    <div class="verification" v-if="store.verifyCode">
      <div class="container">
        <form id="verification-form" @submit.prevent="verifyCode">
          <div class="login-top">
            <h4>Регистрация</h4>
          </div>
          <div class="login-bottom">
            <h4>Введите код в поле</h4>
            <div style="display: flex; flex-direction: row">
              <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                :conditionalClass="['one', 'two', 'three', 'four']"
                separator="-"
                inputType="letter-numeric"
                :num-inputs="4"
                v-model:value="code"
                :should-auto-focus="true"
                :should-focus-order="true"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
                :placeholder="['*', '*', '*', '*']"   
              />
            </div>
            <button @click="clearInput()" type="button" class="clear">Clear Input</button>
            <button  type="submit" class="login-btn">Регистрация</button>
          </div>
        </form>
      </div>
    </div>
    <div class="overlay" v-if="store.verifyCode"></div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const store = useStore();

import VOtpInput from "vue3-otp-input";
const otpInput = ref(null);
const code = ref("");

async function verifyCode() {
  const res = await fetch("https://vadalar.uz/api/auth/register/verify", {
    method: "POST",
    body: JSON.stringify({
      phone: store.phone,
      code: code.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) {
    store.code = code.value;
    store.verifyCode = false;
    store.signUp = true;
  }
}

const clearInput = () => {
  otpInput.value?.clearInput();
};


</script>

<style lang="scss" scoped>

</style>
