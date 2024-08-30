<template>
  <div>
    <div class="basket-product">
      <div class="basket__product-image">
        <img :src="basketProduct?.imageUrl" alt="" />
      </div>
      <div class="basket__text-wrapper">
        <NuxtLink class="basket__product-text">{{
          basketProduct?.name
        }}</NuxtLink>
        <span class="basket__product-price">{{ basketProduct?.price * basketProduct?.quantity }} сум</span>
      </div>
      <div class="basket-modal__card-btn-wrapper">
        <div class="basket__product-btn-wrappers">
          <div class="quantity-all">
            <button class="rem" @click="remCountProduct(basketProduct)">-</button>
            <span class="quantity">{{ basketProduct?.quantity }}</span>
            <button class="add" @click="addCountProduct(basketProduct)">+</button>
          </div>
        </div>
        <div class="basket__modal-card-btn-wrapper">
          <button class="fvrt">
            <Cart-Icon></Cart-Icon>
          </button>
          <button class="delete">
            <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
            <svg
              enable-background="new 0 0 48 48"
              height="20px"
              version="1.1"
              viewBox="0 0 48 48"
              width="20px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="Expanded">
                <g>
                  <g><path d="M41,48H7V7h34V48z M9,46h30V9H9V46z" /></g>
                  <g><path d="M35,9H13V1h22V9z M15,7h18V3H15V7z" /></g>
                  <g>
                    <path
                      d="M16,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C17,40.553,16.553,41,16,41z"
                    />
                  </g>
                  <g>
                    <path
                      d="M24,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C25,40.553,24.553,41,24,41z"
                    />
                  </g>
                  <g>
                    <path
                      d="M32,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C33,40.553,32.553,41,32,41z"
                    />
                  </g>
                  <g><rect height="2" width="48" y="7" /></g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartIcon from "~/components/icons/CartIcon.vue";
import { useStore } from "~/store/store";
import { remCountProduct } from "../composables/remCountProduct";
import { addCountProduct } from "../composables/addCountProduct";
const store = useStore();
const { basketProduct } = defineProps(["basketProduct"]);
</script>

<style lang="scss" scoped>
.basket-product {
  margin-top: 20px;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 20px 50px 20px 0px;
  align-items: center;
  .basket__product-image {
    height: 60px;
    width: 130px;
    img {
      height: 100%;
      // width: 100%;7
      object-fit: contain;
      object-position: center;
    }
  }
  .basket__text-wrapper {
    width: 55%;
    .basket__product-text {
      display: block;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 1.3rem;
      text-decoration: none;
      color: #909090;
    }
  }
  .basket__product-price {
    color: var(--black);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
  // quantity rem count wrappers
  .quantity-all {
    display: flex;
    align-items: center;
    margin-bottom: 1.8rem;
    gap: 8px;
    .quantity {
      background: none;
      border: 1px solid #bdbdbd;
      border-radius: 8px;
      color: #4675ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      height: 42px;
      width: 42px;
    }
    .rem {
      cursor: pointer;
      border: 1px solid #bdbdbd;
      background: none;
      border-radius: 8px;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .add {
      cursor: pointer;
      border: 1px solid #bdbdbd;
      background: none;
      border-radius: 8px;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  // favourite and delete wrap
  .basket__modal-card-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    .fvrt {
      background: none;
      border: none;
      cursor: pointer;
      svg {
        height: 26px;
        width: 26px;
        background: none;
      }
    }
    .delete {
      border: none;
      cursor: pointer;
      background: none;
      transition: all 0.3s ease;
      svg {
        height: 20px;
        width: 20px;
        background: none;
      }
    }
  }
}
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 6px;
  height: 300px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}
.delete {
  svg {
    &:hover {
      svg {
        fill: #4675ff;
      }
    }
  }
}
</style>
