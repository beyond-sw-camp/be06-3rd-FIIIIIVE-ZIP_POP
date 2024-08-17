<template>
  <div id="app-body">
    <div class="community-container container" data-v-c05eb1ae="">
      <div class="soomgo-life-container" data-v-0352d1b6="" data-v-c05eb1ae="">
        <section id="community" class="community" data-v-4b40be3a="" data-v-0352d1b6="">
          <!-- 헤더 -->
          <div class="observer-container" data-v-71844fb9="" data-v-74db39ba="" data-v-4b40be3a="">
            <section data-v-74db39ba="" data-v-71844fb9="" data-observe="community-header" class="community-header" id="community-header">
                <h1 data-v-74db39ba="" data-v-71844fb9="" data-testid="community-main" class="community-title">마이페이지(기업)</h1>
                <div data-v-74db39ba="" data-v-71844fb9="">
                  <span class="name-length">{{ userInfo.name }} / </span>
                  <span class="id-length">{{ userInfo.email }}</span>
                </div>
            </section>
          </div>
          <!-- 메뉴 -->
          <ul data-v-34757494="" data-v-74db39ba="" class="category" data-v-71844fb9="" style="">
            <li data-v-746dd3c0="" data-v-6e832d9f="" data-v-34757494="" class="legacy-typography interface-body2 lg:interface-body1 gray-400 text-align-left">
              <router-link 
                data-v-6e832d9f="" class="link-text" data-v-746dd3c0=""
                active-class="active-link"
                to="/mypage/company/popup-register">
                팝업 관리
              </router-link>
            </li>
            <li data-v-746dd3c0="" data-v-6e832d9f="" data-v-34757494="" class="legacy-typography interface-body2 lg:interface-body1 gray-400 text-align-left">
              <router-link 
                data-v-6e832d9f="" class="link-text" data-v-746dd3c0="" 
                active-class="active-link"
                to="/mypage/company/fee-history">
                수수료 결제 내역
              </router-link>
            </li>
            <li data-v-746dd3c0="" data-v-6e832d9f="" data-v-34757494="" class="legacy-typography interface-body2 lg:interface-body1 gray-400 text-align-left">
              <router-link 
                data-v-6e832d9f="" class="link-text" data-v-746dd3c0=""
                active-class="active-link"
                to="mypage/company/popup-store">
                팝업 리스트
              </router-link>
            </li>
            <li data-v-746dd3c0="" data-v-6e832d9f="" data-v-34757494="" class="legacy-typography interface-body2 lg:interface-body1 gray-400 text-align-left">
              <router-link 
                data-v-6e832d9f="" class="link-text" data-v-746dd3c0=""
                active-class="active-link"
                to="mypage/company/chat">
                문의 내역
              </router-link>
            </li>
            <li data-v-746dd3c0="" data-v-6e832d9f="" data-v-34757494="" class="legacy-typography interface-body2 lg:interface-body1 gray-400 text-align-left">
              <router-link 
                data-v-6e832d9f="" class="link-text" data-v-746dd3c0="" 
                active-class="active-link"
                to="/mypage/company/edit-acoount">
                내 정보 수정
              </router-link>
            </li>
          </ul>
          <!-- 바디 -->
          <div class="component-display">
            <router-view></router-view>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { useMemberStore } from '@/stores/useMemberStore';
import { mapStores } from 'pinia';
  

export default {
  name: 'CustomerPageComponent',
  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        point: 0,
        phoneNumber: "",
        address: "",
        crn: "",
      }
    };
  },
  computed: { ...mapStores(useMemberStore),},
  async mounted() { this.userInfo = await this.memberStore.getUserInfo() }

};
</script>

<style scoped>
:root {
  --font-family-sans-serif: "Noto Sans KR", "Malgun Gothic", -apple-system,
    "Segoe UI", Roboto, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

body {
  font-family: var(--font-family-sans-serif);
}

/* 메뉴 스타일 바꾸는거 */
.active-link {
  color: #2d2d2d;
  font-weight: 500;
    border-bottom: .125rem solid #2d2d2d;
  /* legacy-typography headline-subhead4 lg:headline-subhead2 gray-900 text-align-left selected */
}


.mypage-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  min-height: 80vh; /* 최소 높이 설정 */
}

.mypage-title {
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
}

.content-wrapper {
  display: flex;
  flex-grow: 1;
  padding: 20px;
}

.profile-container {
  padding: 20px;
  border-right: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px; /* 고정 너비 설정 */
}

.profile-container .thumb {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.profile-container .user-info {
  text-align: center;
  margin-bottom: 20px;
}

.profile-container .user-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
}

.profile-container .user-id {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #888888;
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
}

.my-page-menu {
  text-align: center;
  width: 200px; /* 고정 너비 설정 */
  border-right: 1px solid #eaeaea;
  padding-right: 20px;
}

.my-page-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
}

.my-page-menu .main-menu {
  margin-bottom: 10px;
}

.my-page-menu .main-menu router-link {
  width: 100%;
  display: block;
  text-align: left;
  padding: 10px 15px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  height: 40px; /* 고정 높이 설정 */
  text-decoration: none;
  color: inherit;
}

.my-page-menu .main-menu router-link:hover {
  background-color: #f0f0f0;
}

.component-display {
  flex-grow: 1;
  padding-left: 20px;
}

.user-profile-picture div[data-name=image] {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #e1e1e1;
  border: 0.0625rem solid #f2f2f2;
  border-radius: 50%;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
