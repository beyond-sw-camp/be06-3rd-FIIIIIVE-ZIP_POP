<template>
    <Swiper
      :slides-per-view="4"
      :space-between="50"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(popup, index) in popupstoreStore.dataList.content" :key="index">
        <StoreListItemComponent :popup="popup" />
      </SwiperSlide>
    </Swiper>
</template>

<script>
import { ref } from 'vue';
import { usePopupStore } from '@/stores/usePopupStore';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import StoreListItemComponent from './StoreListItemComponent.vue';
import { mapStores } from 'pinia';

export default {
  name: "StoreSwiperComponent",
  components: { StoreListItemComponent, Swiper, SwiperSlide },
  computed: { ...mapStores(usePopupStore) },

  mounted() {
    this.popupstoreStore.searchAll(0, 5); // 초기 로드 시 첫 페이지 데이터를 불러옵니다.
  },
  
  setup() {
    let page = ref(0);
    const popupstoreStore = usePopupStore();

    const onSwiper = (swiper) => {
      page.value = swiper.activeIndex;
    };

    const onSlideChange = async (swiper) => {
      if (swiper.isEnd && popupstoreStore.dataList.content.length < popupstoreStore.totalCount) {
        page.value += 1;
        await popupstoreStore.searchAll(page.value, 5);
      } else {
        return
      }
    };

    return { onSwiper, onSlideChange, page, popupstoreStore };
  }
}
</script>

<style scoped>
</style>
