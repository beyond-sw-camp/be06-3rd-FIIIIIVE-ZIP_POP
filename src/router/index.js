import { createRouter, createWebHistory } from "vue-router";

import MainComponent from "@/components/main/MainComponent.vue";
import CompanySignupComponent from "@/components/signup/CompanySignupComponent.vue";
import CustomerSignupComponent from "@/components/signup/CustomerSignupComponent.vue";
import CommunityPage from "@/pages/CommunityPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PaymentPage from "@/pages/PaymentPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import CustomerMypage from "@/pages/CustomerMypage.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainComponent },
        { path: "/login", component: LoginPage },
        {
            path: "/signup",
            children: [
                { path: "customer", component: CustomerSignupComponent },
                { path: "company", component: CompanySignupComponent },
            ],
            component: SignupPage,
        },
        { path: "/wish_popup", component: CustomerMypage },
        { path: "/payment", component: PaymentPage },
        { path: "/community", component: CommunityPage }
    ],
});

export default router;