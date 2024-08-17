<template>
  <div id="layout">
    <StoreListItemComponent v-for="(popup, index) in popupstoreStore.dataList.content" :key="index" :popup="popup" />
  </div>
</template>

<script>
import { usePopupStore } from '@/stores/usePopupStore';
import { mapStores } from 'pinia';
import StoreListItemComponent from './StoreListItemComponent.vue';
export default {
  name: "StoreListComponent",
  components: { StoreListItemComponent },
  computed: { ...mapStores(usePopupStore) },
  mounted() { this.popupstoreStore.searchAll(); },
}
</script>

<style scoped>
#layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>