<template>
    <div>
         <!-- 아무것도 없을때 -->
        <div data-v-1eaba17a="" class="divider"></div>
        <div v-if="favoriteStore.favorites[0] == null" data-v-50ee375a="" data-v-1eaba17a="" class="no-result">
            <img data-v-50ee375a=""
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgd2lkdGg9IjgwcHgiIGhlaWdodD0iODBweCIgdmlld0JveD0iMCAwIDgwLjAgODAuMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGNsaXBQYXRoIGlkPSJpMCI+PHBhdGggZD0iTTM3NSwwIEwzNzUsODEyIEwwLDgxMiBMMCwwIEwzNzUsMCBaIj48L3BhdGg+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImkxIj48cGF0aCBkPSJNNDAsMCBDNjIuMDkxNCwwIDgwLDE3LjkwODYgODAsNDAgQzgwLDYyLjA5MTQgNjIuMDkxNCw4MCA0MCw4MCBDMTcuOTA4Niw4MCAwLDYyLjA5MTQgMCw0MCBDMCwxNy45MDg2IDE3LjkwODYsMCA0MCwwIFoiPjwvcGF0aD48L2NsaXBQYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iaTIiIHgxPSIwcHgiIHkxPSI0MHB4IiB4Mj0iODBweCIgeTI9IjQwcHgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBDN0FFIiBvZmZzZXQ9IjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iIzRDQzhFNSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0OC4wIC0zMjAuMCkiPjxyZWN0IHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzc1cHgiIGhlaWdodD0iODEycHgiIGZpbGw9IiNGRkZGRkYiPjwvcmVjdD48ZyBjbGlwLXBhdGg9InVybCgjaTApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDguMCAzMjAuMCkiPjxnIGNsaXAtcGF0aD0idXJsKCNpMSkiPjxwb2x5Z29uIHBvaW50cz0iMCwwIDgwLDAgODAsODAgMCw4MCAwLDAiIHN0cm9rZT0ibm9uZSIgZmlsbD0idXJsKCNpMikiIG9wYWNpdHk9IjYwJSI+PC9wb2x5Z29uPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMS41IDE5LjApIj48cGF0aCBkPSJNOC41LDE3IEMxMy4xOTQ0LDE3IDE3LDEzLjE5NDQgMTcsOC41IEMxNywzLjgwNTYgMTMuMTk0NCwwIDguNSwwIEMzLjgwNTYsMCAwLDMuODA1NiAwLDguNSBDMCwxMy4xOTQ0IDMuODA1NiwxNyA4LjUsMTcgWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy41IDQzLjApIj48cGF0aCBkPSJNMzIsMTYgQzMyLDcuMTYzNCAyNC44MzY2LDAgMTYsMCBDNy4xNjM0LDAgMCw3LjE2MzQgMCwxNiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
                alt="{{ proBucketText }}가 없습니다." class="no-result-img">
            <div data-v-50ee375a="" class="no-result-title">
                <div data-v-50ee375a="" class="title-text">한 번의 예약으로</div>
                <div data-v-50ee375a="" class="title-text">내가 선택한 팝업들을 만나봐요</div>
            </div><span data-v-50ee375a="" class="no-result-text">찜한 팝업이 비어있어요</span>
        </div>
        <!-- 있을때 -->
        <ul class="feed-list">
            <WishListItemComponent v-for="(store, index) in favoriteStore.favorites" :key="index" :store="store">
            </WishListItemComponent>
        </ul>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useFavoriteStore } from '@/stores/useFavoriteStore';
import WishListItemComponent from './WishListItemComponent.vue';
export default {
    name: "WishListComponent",
    components: { WishListItemComponent },
    computed: { ...mapStores(useFavoriteStore) },
    mounted() { this.favoriteStore.fetchFavoriteStores(); },
};
</script>

<style></style>