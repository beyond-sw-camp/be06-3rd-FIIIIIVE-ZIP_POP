import { defineStore } from "pinia";
import axios from "axios";

const API_BASE_URL = '/api/api/v1/cart';


export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
    totalPrice: 0,
    totalDiscount: 0,
    deliveryFee: 2500,
    finalOrderPrice: 2500,
    userPoints: 0, // 포인트를 저장할 상태
    usePoints: false,
  }),
  
  getters: {
    // 추가적인 계산 로직이 필요할 경우 사용
    getFinalOrderPrice: (state) => {
      return state.totalPrice - state.totalDiscount + state.deliveryFee;
    },
  },
  
  actions: {
    async fetchCart() {
        try {
          const response = await axios.get(`/api/api/v1/cart/search-all`, { withCredentials: true });
          if (response.data.success) {
            this.cartItems = response.data.result;
            this.cartItems.forEach(item => {
              item.itemTotalPrice = item.itemPrice * item.itemCount;
            });
            this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.itemTotalPrice, 0);
            this.updateFinalOrderPrice();
          } else {
            console.error('Failed to fetch cart data:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      },
      
      async fetchUserPoints() {
        try {
          const response = await axios.get(`/api/api/v1/member/profile`, { withCredentials: true });
          if (response.data.success) {
            this.userPoints = response.data.result.point;
          } else {
            console.error('Failed to fetch user points:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching user points:', error);
        }
      },
    
    async adjustCartCount(item, operation) {
      const operationValue = operation === -1 ? 1 : 0; // `1` for decrement, `0` for increment
      try {
        const response = await axios.get(`${API_BASE_URL}/count`, { 
          params: { cartIdx: item.cartIdx, operation: operationValue },
          withCredentials: true 
        });
        if (response.data.success) {
          item.itemCount = operation === -1 ? item.itemCount - 1 : item.itemCount + 1;
          item.itemTotalPrice = item.itemPrice * item.itemCount;
          this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.itemTotalPrice, 0);
          this.updateFinalOrderPrice();
        } else {
          console.error('Failed to adjust cart count:', response.data.message);
        }
      } catch (error) {
        console.error('Error adjusting cart count:', error);
      }
    },
    
    async deleteCartItem(cartIdx) {
      try {
        const response = await axios.delete(`${API_BASE_URL}/delete`, { 
          params: { cartIdx },
          withCredentials: true 
        });
        if (response.data.success) {
          this.cartItems = this.cartItems.filter(item => item.cartIdx !== cartIdx);
          this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.itemTotalPrice, 0);
          this.updateFinalOrderPrice();
        } else {
          console.error('Failed to delete cart item:', response.data.message);
        }
      } catch (error) {
        console.error('Error deleting cart item:', error);
      }
    },
    
    async deleteAllCartItems() {
      try {
        const response = await axios.delete(`${API_BASE_URL}/delete-all`, { withCredentials: true });
        if (response.data.success) {
          this.cartItems = [];
          this.totalPrice = 0;
          this.updateFinalOrderPrice();
        } else {
          console.error('Failed to delete all cart items:', response.data.message);
        }
      } catch (error) {
        console.error('Error deleting all cart items:', error);
      }
    },
    
    updateTotalDiscount() {
      this.totalDiscount = this.usePoints ? this.userPoints : 0;
    },
    
    updateFinalOrderPrice() {
      this.finalOrderPrice = this.totalPrice - this.totalDiscount + this.deliveryFee;
    },
    applyPoints() {
        if (this.cartStore.usePoints) {
          // 포인트를 사용하려고 할 때
          this.cartStore.totalDiscount = this.cartStore.userPoints;
        } else {
          // 포인트 사용을 취소했을 때
          this.cartStore.totalDiscount = 0;
        }
        this.cartStore.updateFinalOrderPrice();
      }

  },
  
  
  persist: {
    storage: sessionStorage,
  },
});
