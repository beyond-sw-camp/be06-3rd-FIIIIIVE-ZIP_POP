<template>
    <div data-v-1eaba17a="" class="pro-bucket container">
    <main data-v-1eaba17a="" class="main">
    <h3>회원정보 수정</h3>
    <form @submit.prevent="editInfo" class="edit-profile-form">
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="member.name" required />
      </div>
      <div class="form-group">
        <label for="phone">전화번호</label>
        <input type="tel" id="phone" v-model="member.phoneNumber" required />
      </div>
      <div class="form-group">
        <label for="address">주소</label>
        <input type="text" id="address" v-model="member.address" required />
      </div>
      <div v-if="this.memberStore.userRole=='ROLE_COMPANY'" class="form-group">
        <label for="crn">사업자 등록 번호</label>
        <input type="text" id="crn" v-model="member.crn" required />
    </div>
      <button type="submit" class="submit-button">수정</button>
  </form>
  <hr>
  <h3>비밀 번호 변경</h3>
    <form @submit.prevent="editPassword" class="edit-profile-form">
      <div class="form-group">
        <label for="originPassword">현재 비밀번호</label>
        <input type="text" id="name" v-model="passwordInfo.originPassword" required />
      </div>
      <div class="form-group">
        <label for="originPassword">새 비밀번호</label>
        <input type="text" id="name" v-model="passwordInfo.newPassword" required />
      </div>
      <button type="submit" class="submit-button">수정</button>
  </form>
  <hr>
  <h3>계정 비활성화</h3>
  <span>계정을 비활성화 하시겠습니까?</span>
  <button class="submit-button" @click="inactive">비활성화</button>
</main>
</div>

</template>

<script>
import { useMemberStore } from '@/stores/useMemberStore';
import { mapStores } from 'pinia';

export default {
  name: 'EditProfileComponent',
  data() {
    return {
      member: {
        name: '',
        phoneNumber: '',
        address: '',
        crn: ''
      },
      passwordInfo: {
        originPassword: "",
        newPassword: ""
      }
    };
  },
  computed: { ...mapStores(useMemberStore),},
  methods: {
    async editInfo() {  await this.memberStore.editProfile(this.member) },
    async editPassword() { await this.memberStore.editPassword(this.passwordInfo)},
    async inactive() {await this.memberStore.inactive()}
  }
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

.edit-profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: var(--font-family-sans-serif);
}

h3 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.edit-profile-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #00c7aa;
}

.submit-button {
  padding: 10px 15px;
  background-color: #00c7aa;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #00a38a;
}
</style>
