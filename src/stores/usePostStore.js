import { defineStore } from "pinia";
import axios from "axios";
import { backendUrl } from "@/const";

axios.defaults.withCredentials = true;
// 전역 저장소 생성
export const usePostStore = defineStore("post", {
    state: () => ({
        data: {},
        dataList: [],
     }),
    persist: { storage: sessionStorage, },
    actions: {
        async searchAll() {
            try {
                let response = await axios.get(backendUrl + "/post/search-all?page=0&size=10",);
                if (response.status === 200) {
                    this.dataList = response.data.result;
                } else {
                    return false;
                }
            } catch (error) {
                console.error("Error", error);
                return false;
            }
        },
        async create(formData) {
            try {
                let response = await axios.post( 
                    backendUrl + "/register", formData,
                    { headers: { "Content-Type": "multipart/form-data", }, },
                    { withCredentials: true }
                );
                console.log(response)
            } catch (error) {
                console.error("Error", error);
                return false;
            }
        }
    },
});