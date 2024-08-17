import { defineStore } from "pinia";
import axios from "axios";

import { backendUrl } from "@/const";

// 전역 저장소 생성
export const useProductStore = defineStore("product", {
  state: () => ({ 
    data: {},
    dataList: [],
  }),
  actions: {
    async register(storeIdx, formData) {
      try {
        console.log(backendUrl + "/popup-goods/register?storeIdx=" + storeIdx);
        let response = await axios.post( backendUrl + "/register?storeIdx=" + storeIdx, formData,
          { headers: { "Content-Type": "multipart/form-data", }, },
          { withCredentials: true }
        );
        return response.status;
      } catch (error) {
        console.error("Error", error);
        return false;
      }
    },
  },
});
