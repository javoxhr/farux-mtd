import Slug from "~/pages/products/[slug].vue";

const baseUrl = ref("");
if (process.client) {
  baseUrl.value = useRuntimeConfig().public.apiBase;
}
export default {
  getProduct(lang) {
    return $fetch(
      `${baseUrl.value}/product-manager/our-offers/index?parentCategoryKey=smartfon-va-gadjetlar`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
  },
  getBanners() {
    return $fetch(`${baseUrl.value}/banner/web-site-banners`);
  },
  getLike() {
    return $fetch(`${baseUrl.value}/product-manager/product-save/index`);
  },
  search(s, l) {
    return $fetch(
      `${baseUrl.value}/product-manager/product/search?searchKey=${s}`,
      {
        headers: {
          "Accept-Language": l,
        },
      }
    );
  },
  getBrands() {
    return $fetch(`${baseUrl.value}/brand/index`);
  },
  getPopularCategory() {
    return $fetch(
      `${baseUrl.value}/category-manager/category/popular-categories`
    );
  },
  getWebBanners(l) {
    return $fetch(`${baseUrl.value}/banner/body-banners`, {
      headers: {
        "Accept-Language": l,
      },
    });
  },
  getDetail(token, slug) {
    return $fetch(
      `${baseUrl.value}/product-manager/product/detail?productKey=${slug}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  getCategory(params, lang) {
    return $fetch(
      `${baseUrl.value}/product-manager/category-product/category?${params}`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
  },
  getHeaderCategory(l) {
    return $fetch(
      `${baseUrl.value}/category-manager/category/header-categories`,
      {
        headers: {
          "Accept-Language": l,
        },
      }
    );
  },
  getCheapProduct(l) {
    return $fetch(`${baseUrl.value}/product-manager/cheap-product/index`, {
      headers: {
        "Accept-Language": l,
      },
    });
  },
  getPageCategory(l,id) {
    return $fetch(`${baseUrl.value}/page-info/category`, {
      headers: {
        "Accept-Language": l,
      },
    });
  },
  getСategoryProducts(l) {
    return $fetch(`${baseUrl.value}/category-manager/category/index`, {
      headers: {
        "Accept-Language": l,
      },
    });
  },
  getPageCategoryDetail(id , l) {
    return $fetch(
      `${baseUrl.value}/page-info/category-detail?category_id=${id}`,
      {
        headers: {
          "Accept-Language": l,
        },
      }
    );
  },
  delivery(){
    return $fetch(`${baseUrl.value}/order-manager/store/home-delivery-sum`);
  },
  getRegion() {
    return $fetch(`${baseUrl.value}/order-manager/region/index`);
  },
  getRegionDestriks() {
    return $fetch(`${baseUrl.value}/order-manager/region/districts?region_id=1`)
  },
  getPayment(l, id) {
    return $fetch(`${baseUrl.value}/order-manager/store/payment-types`, {
      headers: {
        "Accept-Language": l,
      },
    })
  },
  getMarket(token,lang) {
    return $fetch(`${baseUrl.value}/order-manager/store/index`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Accept-Langugage": lang,
      },
    });
  },
  getSubCategory(params, lang) {
    return $fetch(
      `${baseUrl.value}/product-manager/category-product/sub-category?${params}`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
  },
  deliverDelivery(token, body) {
    return $fetch(`${baseUrl.value}/order-manager/order/delivery`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });
  },
  getAll() {
    return $fetch(`${baseUrl.value}/api/order-manager/my-order/currently`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  // getDeliveryy() {
  //   return $fetch(`${baseUrl.value}/api/order-manager/store/home-delivery-sum`)
  // }
};
