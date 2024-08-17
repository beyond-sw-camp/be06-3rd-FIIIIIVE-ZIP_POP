<template>
    <div data-v-11ae1556="" data-v-1eaba17a="" class="pro-bucket-card pro-bucket-list-item">
        <!-- 팝업 아이템 헤더 -->
        <div data-v-11ae1556="" class="pro-name-wrapper">
            <h5 data-v-11ae1556="" class="pro-name text-truncate">{{ store.storeName }}</h5>
            <button @click="handleDeleteFavorite(store.storeIdx)" class="btn-delete">찜 취소</button>
        </div>
        <hr>
        <!-- 팝업 아이템 내용 -->
        <div data-v-11ae1556="" class="d-flex">
            <div data-v-11ae1556="" class="pro-info text-truncate">
                <!-- 팝업 스토어 등록 기업 이메일 -->
                <p data-v-11ae1556="" class="pro-introduction text-truncate">{{ store.companyEmail }}</p>
                <!-- 팝업 스토어 등록 주소 -->
                <span data-v-959ba008="" class="badge-item"> {{ store.storeAddress }}</span>
                <!-- 팝업 스토어 본문 -->
                <p data-v-11ae1556="" class="pro-introduction text-truncate">{{ store.storeContent }}</p>
                <!-- 팝업 스토어 기간 -->
                <div data-v-959ba008="" data-v-11ae1556="" class="profile-badges">
                    <span>기간 : {{ store.storeStartDate }} ~ </span>
                    <span class="avg-response-time">{{ store.storeEndDate }}</span>
                </div>
                <!-- 팝업 스토어 카테고리 -->
                <span data-v-959ba008="" class="count">{{ store.category }}&nbsp;</span>
                <!-- 팝업 스토어 좋아요 수-->
                <div data-v-959ba008="" data-v-11ae1556="" class="profile-badges">
                    <div data-v-959ba008="" class="review-rate">
                        <img data-v-959ba008="" />
                        <span data-v-959ba008="" class="rate">좋아요 {{ store.likeCount }}&nbsp;</span>
                    </div>
                </div>
            </div>
            <!-- 팝업스토어 이미지 -->
            <div data-v-29d5164e="" data-v-11ae1556="" class="user-profile-picture pro-profile-picture">
                <div data-v-29d5164e="" data-name="image" class="is-square"
                    :style="{ backgroundImage: `url(${store.getPopupStoreImageResList[0]?.imageUrl})` }">
                </div>
            </div>
        </div>
    </div>
    <br>
</template>


<script>

import { useFavoriteStore } from '@/stores/useFavoriteStore';
import { mapStores } from 'pinia';

export default {
    name: "WishListItemComponent",
    props: {  store: { type: Object, required: true }},
    computed: { ...mapStores(useFavoriteStore),},
    methods: {
        async handleDeleteFavorite(storeIdx) {
            await this.favoriteStore.toggleFavorite(storeIdx);
            this.favoriteStore.favorites = this.favoriteStore.favorites.filter(store => store.storeIdx !== storeIdx);
        }
    }
}
</script>

<style>
.btn-delete {
    padding: 0px 15px;
    background-color: #00c7ae;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
.pro-bucket-card .pro-profile-picture[data-v-11ae1556] {
    width: 6rem !important;
    height: 6rem !important;
    border-radius: 12px;
}
</style>