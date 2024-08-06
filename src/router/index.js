import { createRouter, createWebHistory } from "vue-router";

import WishPopupComponent from "@/components/WishPopupComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import SignupComponent from "@/components/SignupComponent.vue";
import CompanySignupComponent from "@/components/CompanySignupComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import PopupRegisterComponent from "@/components/PopupRegisterComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainComponent },
        { path: "/wish_popup", component: WishPopupComponent },
        { path: "/login", component: LoginComponent },
        { path: "/signup", component: SignupComponent },
        { path: "/company_signup", component: CompanySignupComponent },
        { path: "/popup_register", component: PopupRegisterComponent },
    ],
});

export default router;