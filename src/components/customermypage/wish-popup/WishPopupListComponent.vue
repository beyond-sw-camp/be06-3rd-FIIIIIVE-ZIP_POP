<template>
    <div>
        <article topic-id="all" class="community-feed-list">
            <ul class="feed-list">
                <WishPopupItemComponent 
                v-for="(store, index) in favoriteStore.favorites.getPopupStoreRes"
                    :key="index" :store="store">
                </WishPopupItemComponent>
            </ul>
        </article>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useFavoriteStore } from '@/stores/useFavoriteStore';
import WishPopupItemComponent from './WishPopupItemComponent';

export default {
    name: "WishPopupListComponent",
    components: { WishPopupItemComponent },
    computed: { ...mapStores(useFavoriteStore) },
    mounted() {
        this.favoriteStore.fetchFavoriteStores()
        console.log(this.favoriteStore.favorites)
    },
};
</script>

<style></style>