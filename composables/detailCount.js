import { useStore } from "../store/store";

export const addDetail = (product) => {
  const store = useStore();
  const item = toRaw(store.cart).find((el) => el.id == product.id);
  if (!item) {
    store.cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(store.cart));
};