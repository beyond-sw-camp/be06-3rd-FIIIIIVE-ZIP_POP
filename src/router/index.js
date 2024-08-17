import CompanySignupComponent from "@/components/signup/CompanySignupComponent.vue";
import CustomerSignupComponent from "@/components/signup/CustomerSignupComponent.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PaymentPage from "@/pages/PaymentPage.vue";
import CommunityPage from "@/pages/PostPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import { createRouter, createWebHistory } from "vue-router";

import CartComponent from "@/components/cart/CartComponent.vue";
import ChatComponent from "@/components/chat/ChatComponent.vue";
import EditProfileComponent from "@/components/mypage/EditProfileComponent.vue";
import FeeHistoryComponent from "@/components/mypage/FeeHistoryComponent.vue";
import MyReviewsComponent from "@/components/mypage/MyReviewsComponent.vue";
import OrderHistoryComponent from "@/components/mypage/OrderHistoryComponent.vue";
import StoreRegisterComponent from "@/components/mypage/StoreRegisterComponent.vue";
import PostAllComponent from "@/components/post/all/PostAllComponent.vue";
import PostCreateComponent from "@/components/post/edit/PostCreateComponent.vue";
import StoreListComponent from "@/components/store/all/StoreListComponent.vue";
import StroeAllComponent from "@/components/store/all/StroeAllComponent.vue";
import ChatPage from "@/pages/ChatPage.vue";
import MyPage from "@/pages/MyPage.vue";
import WishPage from "@/pages/WishPage.vue";

// 로그인 한사람에게만 허용하는 라우터 미들웨어
// 역할별로 허용하는 라우터 미들웨어(회원, 고객)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: StroeAllComponent },
    { path: "/login", component: LoginPage },
    {
      path: "/signup",
      children: [
        { path: "customer", component: CustomerSignupComponent },
        { path: "company", component: CompanySignupComponent },
      ],
      component: SignupPage,
    },
    { path: '/chats', component: ChatComponent },
    { path: "/wish", component: WishPage },
    { path: "/payment", component: PaymentPage },
    { path: '/cart', component: CartComponent },
    {
      path: '/mypage',
      children: [
          { path: "customer", 
            children: [
              { path: 'edit-acoount', component: EditProfileComponent },
              { path: 'my-reviw', component: MyReviewsComponent },
              { path: 'order-history', component: OrderHistoryComponent},
              { path: 'chat', component: ChatPage},
            ]
          },
          { path: "company",
            children: [
            { path: 'edit-acoount', component: EditProfileComponent },
            { path: 'fee-history', component: FeeHistoryComponent },
            { path: 'popup-register', component: StoreRegisterComponent },
            { path: 'popup-store', component: StoreListComponent },
          ]
          }
        ],
      component: MyPage,
    },
    {
      path: "/post",
      children: [
        { path: "post-all", component: PostAllComponent },
        {
          path: "post-edit",
          children: [
            { path: "create", component: PostCreateComponent },
            // { path: "update/:postIdx", component: CustomerSignupComponent }
          ],
        }
      ],
      component: CommunityPage
    },
],
});

export default router;
