import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;
const backend = "http://localhost:8080/api/v1";

export const useMemberStore = defineStore("member", {
    state: () => ({
        isLoggedIn: false,
        favoriteStores: [], // 찜한 팝업 목록을 저장하는 상태
    }),
    persist: {
        storage: sessionStorage,
    },
    actions: {
        async login(member) {
            let response = await axios.post(backend + "/member/login", member);
            if (response.status === 200) {
                this.isLoggedIn = true;
                return true;
            } else {
                return false;
            }
        },
        logout() {
            this.isLoggedIn = false;
        },
    },
});
