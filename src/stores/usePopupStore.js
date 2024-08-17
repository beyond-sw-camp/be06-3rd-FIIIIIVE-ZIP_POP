import { defineStore } from "pinia";
import axios from "axios";

import { backendUrl } from "@/const";

// 전역 저장소 생성
export const usePopupStore = defineStore("popupstore", {
  state: () => ({ 
    data: [],
    dataList: [],
    totalPages: null,
    totalCount: null
  }),
  actions: {
    async register(formData) {
      try {
        let response = await axios.post(
          backendUrl + "/popup-store/register",
          formData,
          { headers: { "Content-Type": "multipart/form-data", }, },
          { withCredentials: true }
        );
        console.log(response);
      } catch (error) {
        console.error("Error", error);
        return false;
      }
    },
    async searchAll(page=0, size = 5) {
      try {
        let response = await axios.get(`${backendUrl}/popup-store/search-all?page=${page}&size=${size}`);
        if (response.status === 200) {
          const newData = response.data.result.content;
          if (this.dataList.content) {
            const existingIds = new Set(this.dataList.content.map(item => item.storeIdx));
            const filteredData = newData.filter(item => !existingIds.has(item.storeIdx));
            this.dataList.content = [...this.dataList.content, ...filteredData];
          } else {
            this.dataList = response.data.result;
          }
          this.totalPage = response.data.result.totalPages;
          this.totalCount = response.data.result.totalElements;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Error", error);
        return false;
      }
    }
    
  },
});
