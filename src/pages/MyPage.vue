<template>
    <CompanyPageComponent v-show="this.memberStore.userRole=='ROLE_COMPANY'"></CompanyPageComponent>
    <CustomerPageComponent v-show="this.memberStore.userRole=='ROLE_CUSTOMER'"></CustomerPageComponent>
</template>
 
<script>
import CompanyPageComponent from '@/components/mypage/CompanyPageComponent.vue';
import CustomerPageComponent from '@/components/mypage/CustomerPageComponent.vue';
import { useMemberStore } from '@/stores/useMemberStore';
import { mapStores } from 'pinia';

export default {
    name: "MyPage",
    components: {  CompanyPageComponent, CustomerPageComponent },
    computed: { ...mapStores(useMemberStore) },
}
</script>
 
 <style>
</style>