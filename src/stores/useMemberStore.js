import { defineStore } from "pinia";
import axios from "axios";
import { backendUrl } from "@/const";

export const useMemberStore = defineStore("member", {
    state: () => (
        {   
            userName: "",
            userRole: "",
            isLoggedIn: false 
        }
    ),
    persist: { storage: sessionStorage, },
    actions: {
        async signup(member) {
            try{
                const response = await axios.post(backendUrl + "/member/signup", member);
                if (response.data.success) {
                    alert('이메일 인증 요청이 전송되었습니다. 이메일 인증 후 회원가입이 완료됩니다.');
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                alert('회원가입 중 오류가 발생했습니다.');
            }
        },
        async login(member) {
            try {
                const response = await axios.post(backendUrl + "/member/login", member);
                if (response.status === 200) {
                    this.isLoggedIn = true;
                    let utoken = `${document.cookie}`.split("UTOKEN=")[1].split('|');
                    this.userName = utoken[0];
                    this.userRole = utoken[1];
                    alert("ZIPPOP에 오신걸 환영합니다.")
                    return true;
                } else {
                    return false;
                }
                
            } catch (error) {
                alert("로그인 중 오류가 발생했습니다.")
            }

        },
        async logout() {
            try {
                let response = await axios.post(backendUrl + "/member/logout");
                if (response.status === 200) {
                    this.isLoggedIn = false;
                    this.userName = '';
                    this.userRole = '';
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                alert("로그아웃 중 오류가 발생했습니다.")
            }

        },
        async getUserInfo() {
            try {
                const response = await axios.get(backendUrl + "/member/profile", {withCredentials:true})
                const userInfo = response.data.result;
                return userInfo
            } catch (error) {
                alert("유저정보 로드 중 오류가 발생했습니다.")
            }
        },
        async editProfile(member) {
            try {
              const response = await axios.patch(backendUrl + "/member/edit-info", member, { withCredentials: true });
              if (response.data.success) {
                alert('회원정보가 성공적으로 수정되었습니다.');
              } else {
                alert('회원정보 수정에 실패했습니다.');
              }
            } catch (error) {
              console.error('Error updating profile:', error);
              alert('회원정보 수정 중 오류가 발생했습니다.');
            }
        },
        async editPassword(passwordInfo) {
            try {
              const response = await axios.patch(backendUrl + "/member/edit-password", passwordInfo, { withCredentials: true });
              if (response.data.success) {
                alert('회원정보가 성공적으로 수정되었습니다.');
              } else {
                alert('회원정보 수정에 실패했습니다.');
              }
            } catch (error) {
              console.error('Error updating profile:', error);
              alert('회원정보 수정 중 오류가 발생했습니다.');
            }
        },
        async inactive() {
            try {
              const response = await axios.get(backendUrl + "/member/inactive", { withCredentials: true });
              if (response.data.success) {
                alert('회원정보가 성공적으로 수정되었습니다.');
                this.logout()
              } else {
                alert('회원정보 수정에 실패했습니다.');
              }
            } catch (error) {
              console.error('Error updating profile:', error);
              alert('회원정보 수정 중 오류가 발생했습니다.');
            }
        }
    },
});