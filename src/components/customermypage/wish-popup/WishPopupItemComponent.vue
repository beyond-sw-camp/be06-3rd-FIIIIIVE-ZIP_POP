<template>
    <div data-v-11ae1556="" data-v-1eaba17a="" class="pro-bucket-card pro-bucket-list-item">
        <div data-v-11ae1556="" class="d-flex">
            <div data-v-11ae1556="" class="pro-info text-truncate">
                <div data-v-11ae1556="" class="pro-name-wrapper">
                    <span data-v-11ae1556="" class="checked"></span>
                    <h5 data-v-11ae1556="" class="pro-name text-truncate">{{ store.storeName }}</h5>
                </div>
                <p data-v-11ae1556="" class="pro-introduction text-truncate">{{ store.storeContent }}</p>
                <div data-v-959ba008="" data-v-11ae1556="" class="profile-badges">
                    <div data-v-959ba008="" class="review-rate">
                        <img data-v-959ba008="" />
                        <span data-v-959ba008="" class="rate">찜 {{ store.likeCount }}</span>
                        <span data-v-959ba008="" class="count">{{ store.category }}</span>
                    </div>
                    <span data-v-959ba008="" class="badge-item"> {{ store.storeAddress }}</span>
                </div>
            </div>
            <div data-v-11ae1556="">
                <div data-v-29d5164e="" data-v-11ae1556="" class="user-profile-picture pro-profile-picture">
                    <div data-v-29d5164e="" data-name="image" class="is-square"
                        :style="{ backgroundImage: `url(${store.getPopupStoreImageResList[0]?.imageUrl})` }">
                    </div>
                </div>
            </div>
        </div>
        <div data-v-11ae1556="" class="pro-extra-info">
            <span data-v-11ae1556="">{{ store.storeStartDate }}</span>
            <span data-v-11ae1556="" class="avg-response-time">{{ store.storeEndDate }}</span>
        </div>
    </div>
</template>


<script>
export default {
    name: "WishPopupItemComponent",
    props: {
        store: {
            type: Object,
            required: true
        }
    }
}
</script>

<style></style>
