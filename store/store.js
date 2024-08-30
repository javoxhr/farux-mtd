import { defineStore } from "pinia";

export const useStore = defineStore("store", ()=> {
    const phone = ref("");
    const code = ref("");
    const enterRegister = ref(false);
    const verifyCode = ref(false);
    const signUp = ref(false);
    const token = ref("");
    const userInfo = ref({});
    const count = ref(0);
    const cart = ref([]);
    const basket = ref(false);
    const overlay = ref(false)
    const tokken = ref("");
    const savedProducts = ref({});
    const btnLang = ref(false);
    const loader = ref(true);
    const catalog = ref(false);
    const mediaMenu = ref(false);
    const info = ref(false);
    const region = ref(false);
    const destriks = ref(false);
    const deliveryHome = ref(false);
    const open = ref(false);
    const regionChange = ref(false);
    const catalogOpen = ref(false);
    const networkList = ref(false);
    const categoryLi = ref(false)
    return {
        phone,
        enterRegister,
        verifyCode,
        code,
        signUp,
        token,
        userInfo,
        count,
        cart,
        basket,
        overlay,
        tokken,
        savedProducts,
        btnLang,
        loader,
        catalog,
        mediaMenu,
        info,
        region,
        destriks,
        deliveryHome,
        open,
        regionChange,
        catalogOpen,
        networkList,
        categoryLi
    }
});