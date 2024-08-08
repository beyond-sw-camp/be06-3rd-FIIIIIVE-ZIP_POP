<template>
  <div>
    <h2>회원정보 수정</h2>
    <form @submit.prevent="updateProfile">
      <div>
        <label for="name">이름:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="phone">전화번호:</label>
        <input type="tel" id="phone" v-model="phoneNumber" required />
      </div>
      <div>
        <label for="address">주소:</label>
        <input type="text" id="address" v-model="address" required />
      </div>
      <button type="submit">수정하기</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditProfileComponent',
  data() {
    return {
      name: '',
      phoneNumber: '',
      address: ''
    };
  },
  methods: {
    async updateProfile() {
      try {
        const response = await axios.patch('http://localhost:8080/api/v1/member/edit-info', {
          name: this.name,
          phoneNumber: this.phoneNumber,
          address: this.address
        }, {
          withCredentials: true // 인증 정보 포함
        });
        if (response.data.success) {
          alert('회원정보가 성공적으로 수정되었습니다.');
        } else {
          alert('회원정보 수정에 실패했습니다.');
        }
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('회원정보 수정 중 오류가 발생했습니다.');
      }
    }
  }
};
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
}

form div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
