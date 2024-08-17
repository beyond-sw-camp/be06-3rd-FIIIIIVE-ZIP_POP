
<template>
  <div id="app-body">
    <div class="community-container container" data-v-c05eb1ae="">
      <div class="soomgo-life-container" data-v-0352d1b6="" data-v-c05eb1ae="">
        <section id="community" class="community" data-v-4b40be3a="" data-v-0352d1b6="">
          <!-- 헤더 -->
          <div class="observer-container" data-v-71844fb9="" data-v-74db39ba="" data-v-4b40be3a="">
            <section data-v-74db39ba="" data-v-71844fb9="" data-observe="community-header" class="community-header" id="community-header">
                <h1 data-v-74db39ba="" data-v-71844fb9="" data-testid="community-main" class="community-title">장바구니</h1>
            </section>
          </div>

          <!-- 바디 -->
          <div data-v-05cd076e="" data-v-4b40be3a="">
            <!-- 장바구니 정보 -->
            <div class="cart-items-container">
                <div class="cart-total-price-title">
                  장바구니 정보 
                </div>
                <div data-v-1eaba17a="" class="top-desktop">
                  <div data-v-47a56272="" data-v-1eaba17a="" class="actions">
                    <div data-v-47a56272="" class="all-check-wrapper">
                        <input data-v-47a56272="" id="all-check" disabled="disabled" name="allCheck" type="checkbox" class="all-check">
                        <label data-v-47a56272="" for="all-check">
                          <span data-v-47a56272="" class="label-text">전체 선택(0/0)</span>
                        </label>
                      </div>
                    <div data-v-47a56272="" class="delete">선택 항목 삭제</div>
                  </div>
                </div>
              <table class="cartTable cartTable-v2">
                <tbody id="cartTable-other" class="cart-bundle-list">
                  <tr v-for="item in cartItems" :key="item.cartIdx">
                    <td class="cart-deal-item__image">
                      <img v-if="item.getPopupGoodsRes.getPopupGoodsImageResList && item.getPopupGoodsRes.getPopupGoodsImageResList.length > 0" 
                          :src="item.getPopupGoodsRes.getPopupGoodsImageResList[0].imageUrl || '/default_image.jpg'" 
                          :alt="item.getPopupGoodsRes.productName" 
                          width="140" 
                          height="140" />
                      <img v-else src="/default_image.jpg" alt="Default Image" width="140" height="140" />
                    </td>
                    <td class="product-box">
                      <div class="product-name-part">
                        <div class="product-name-part-content">
                          <a href="#" class="moveProduct">
                            <span v-if="item.getPopupGoodsRes" class="product-name">{{ item.getPopupGoodsRes.productName }}</span>
                            <span v-else class="product-name">상품명 없음</span>
                          </a>
                        </div>
                        <div class="quantity-input-container">
                          <div class="quantity-input-content">
                            <div class="quantity-input-icon minus" @click="adjustCartCount(item, -1)"></div>
                            <input :value="item.itemCount" class="quantity-input" type="text" readonly />
                            <div class="quantity-input-icon plus" @click="adjustCartCount(item, 1)"></div>
                          </div>
                        </div>
                        <a href="#" class="delete-option" @click="deleteCartItem(item.cartIdx)">삭제</a>
                      </div>
                    </td>
                    <td class="option-price-part option-item-info-padding item-status-checked">
                      <div class="price-area unit-total-price">
                        <div class="unit-total-sale-price">{{ item.itemPrice * item.itemCount }}원</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr>
            <!-- 포인트 사용 -->
            <div class="cart-total-price">
              <div class="cart-total-price-title">
                포인트 적용
                <div class="cart-total-price-item-title">
                  <label class="coupon-label">
                    <input type="checkbox" id="couponb6c7ab33-0f31-4568-83d1-0d4c1b831653" name="coupon" class="coupon-chk" value="b6c7ab33-0f31-4568-83d1-0d4c1b831653" v-model="usePoints">
                    <strong>{{ " " + userPoints }} points</strong>
                  </label>
                </div>
              </div>
              <div class="faraway-notice">
                <img class="payment-reward-cash-area__icon" src="//img1a.coupangcdn.com/image/cart/generalCart/ico_cash_m_2x.png"><strong> 포인트적립 혜택 </strong>: 결제 시 결제 금액의 10% 적립 <span class="faraway-address"></span><br>
              </div>
            </div>
            <hr>
            <!-- 주문예상금액 -->
            <div class="cart-total-price">
              <div class="cart-total-price__inner">
                <div class="cart-total-price-title">주문 예상 금액</div>
                <div class="cart-total-price-item">
                  <div class="cart-total-price-item-title">총 상품 가격</div>
                  <div class="cart-total-price-item-price total-sale-price">
                    <span class="price-panel-price-area">
                      <em class="final-product-price" id="totalProductPrice">{{ totalPrice }}</em>원
                    </span>
                  </div>
                </div>
                <div class="cart-total-price-item total-discount total-discount-panel">
                  <div class="cart-total-price-item-title">총 할인</div>
                  <div class="cart-total-price-item-price discount-price">
                    <span id="totalEventDiscount" class="final-sale-area price-panel-price-area">
                      <em class="operator">-</em><em class="final-sale-price" id="totalDiscountPrice">{{ totalDiscount }}</em>원
                    </span>
                  </div>
                </div>
                <div class="cart-total-price-item total-delivery-fee">
                  <div class="cart-total-price-item-title">총 배송비</div>
                  <div class="cart-total-price-item-price">
                    <span id="totalDeliveryPrice" class="price-panel-price-area">
                      <em class="operator">+</em>
                      <em class="final-product-price" id="deliveryFee">{{ deliveryFee }}</em>원
                    </span>
                  </div>
                </div>
              </div>
              <div id="finalOrderPrice" class="cart-final-order-price">
                <span class="default-value">
                  <em class="order-product-price" id="finalOrderPriceValue">{{ finalOrderPrice }}</em>원
                </span>
              </div>

              <div class="user-points">
                <span>사용자 포인트: </span><span id="userPoints">{{ userPoints }} points</span>
              </div>
              <div class="faraway-notice">
                <strong>도서산간 배송안내 </strong>: 도서산간 추가배송비 발생 시 함께 결제할 수 있습니다. <span class="faraway-address"></span><br>
              </div>
            </div>
            <hr>
            <div class="order-buttons"> 구매하기 </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_BASE_URL = '/api/api/v1/cart';

export default {
  data() {
    return {
      cartItems: [],
      totalPrice: 0,
      totalDiscount: 0,
      deliveryFee: 2500,
      finalOrderPrice: 2500,
      userPoints: 0,
      usePoints: false
    };
  },
  created() {
    this.fetchCart();
    this.fetchUserPoints();
  },
  watch: {
    usePoints() {
      this.updateTotalDiscount();
      this.updateFinalOrderPrice();
    }
  },
  methods: {
    fetchCart() {
      axios.get(`${API_BASE_URL}/search-all`, { withCredentials: true })
        .then(response => {
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
        })
        .catch(error => console.error('Error fetching cart:', error));
    },
    fetchUserPoints() {
      axios.get(`${API_BASE_URL}/points`, { withCredentials: true })
        .then(response => {
          if (response.data.success) {
            this.userPoints = response.data.result.point;
          } else {
            console.error('Failed to fetch user points:', response.data.message);
          }
        })
        .catch(error => console.error('Error fetching user points:', error));
    },
    adjustCartCount(item, operation) {
      const operationValue = operation === -1 ? 1 : 0; // `1` for decrement, `0` for increment
      axios.get(`${API_BASE_URL}/count`, { 
        params: { cartIdx: item.cartIdx, operation: operationValue },
        withCredentials: true 
      })
        .then(response => {
          if (response.data.success) {
            item.itemCount = operation === -1 ? item.itemCount - 1 : item.itemCount + 1;
            item.itemTotalPrice = item.itemPrice * item.itemCount;
            this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.itemTotalPrice, 0);
            this.updateFinalOrderPrice();
          } else {
            console.error('Failed to adjust cart count:', response.data.message);
          }
        })
        .catch(error => console.error('Error adjusting cart count:', error));
    },
    deleteCartItem(cartIdx) {
      axios.delete(`${API_BASE_URL}/delete`, { 
        params: { cartIdx },
        withCredentials: true 
      })
        .then(response => {
          if (response.data.success) {
            this.cartItems = this.cartItems.filter(item => item.cartIdx !== cartIdx);
            this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.itemTotalPrice, 0);
            this.updateFinalOrderPrice();
          } else {
            console.error('Failed to delete cart item:', response.data.message);
          }
        })
        .catch(error => console.error('Error deleting cart item:', error));
    },
    deleteAllCartItems() {
      axios.delete(`${API_BASE_URL}/delete-all`, { withCredentials: true })
        .then(response => {
          if (response.data.success) {
            this.cartItems = [];
            this.totalPrice = 0;
            this.updateFinalOrderPrice();
          } else {
            console.error('Failed to delete all cart items:', response.data.message);
          }
        })
        .catch(error => console.error('Error deleting all cart items:', error));
    },
    updateTotalDiscount() {
      this.totalDiscount = this.usePoints ? this.userPoints : 0;
    },
    updateFinalOrderPrice() {
      const totalProductPrice = this.totalPrice;
      const totalDiscountPrice = this.usePoints ? this.userPoints : 0;
      const totalDeliveryPrice = this.deliveryFee;

      this.finalOrderPrice = totalProductPrice - totalDiscountPrice + totalDeliveryPrice;
    }
  }
};
</script>
<style scoped>

body {

  font-family: Arial, sans-serif;
  margin: 0;
 padding: 100px;
 
  background-color: #f8f8f8;
}
#app-body {
  width: 80%;
  margin: 0 auto;
}

header {
  background-color: #333;
  color: #fff;
  padding: 15px;
  text-align: center;
}

header .logo a {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

.contents-cart {
  width: 60%;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.cart-title-new-layout-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cart-new-title {
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
}

.tabs-wrap--with-rds-style {
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  justify-content: space-between;
}

.normal-cart {
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 2px solid #00c7ae;
}

.shopping-cart-new-layout {
  display: flex;
  justify-content: space-between;
  padding: 0 20px; /* 전체 컴포넌트의 양옆에 간격 추가 */
}

.cart-items-container {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-right: 20px; */
}

.cartTable {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

.cart-bundle-title {
  background-color: #f9f9f9;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}

.cart-deal-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd; /* 장바구니 담긴 상품마다 선 추가 */
}

.cart-deal-item__image {
  display: flex;
  align-items: center;
  padding-left: 16px;
}

.product-select-event {
  margin-right: 10px;
}

.product-img {
  width: 140px;
  height: 140px;
}

.product-box {
  flex: 1;
  padding: 0 20px;
}

.product-name-part {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-name-part-content {
  flex: 1;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  color: #212b36;
}

.quantity-input-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.quantity-input-content {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.quantity-input-icon {
  width: 30px;
  height: 30px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.quantity-input-icon.minus::before {
  content: '-';
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #555;
}

.quantity-input-icon.plus::before {
  content: '+';
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #555;
}

.quantity-input {
  width: 50px;
  text-align: center;
  border: none;
}

.delete-option-container {
  margin-top: 10px;
  text-align: right;
  padding-right: 20px; 
}

.delete-option {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: red;
  cursor: pointer;
  text-decoration: none;
  margin-left: 10px; /* 수량 버튼과 삭제 버튼 사이 간격 추가 */
}

.option-price-part {
  text-align: right;
  margin-top: 10px;
}

.unit-total-sale-price {
  font-size: 18px;
  font-weight: bold;
  color: #212b36;
}

/* .cart-total-price {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  position: sticky;
  top: 20px;
} */
.cart-button {
  width: 5rem;
  padding: 0.40625rem 0;
  font-size: 0.875rem;
  border-radius: 6px;
  padding: 6.5px 0px;
  background-color: #00c7aa;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-total-price__inner {
  margin-bottom: 20px;
}

.cart-total-price-title {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cart-total-price-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cart-final-order-price {
  font-size: 20px;
  font-weight: bold;
  text-align: right;
}

.order-buttons {
  text-align: center;
  margin-top: 20px;
  background-color: #00c7ae;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}

.order-table-foot {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.all-select-product {
  display: flex;
  align-items: center;
}

.all-select-product input {
  margin-right: 5px;
}

.selected-delete {
  margin-left: 10px;
  color: black;
  padding: 5px 10px;
  border: 1px solid red; /* 테두리만 빨간 선으로 설정 */
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none; /* 텍스트 데코레이션 제거 */
  background-color: transparent; /* 배경색 투명으로 설정 */
}

.download-coupon-area {
  margin-top: 20px;
}


/* .coupon-title {
  padding: 0 20px;
}

.coupon-title .title {
  font-size: 18px;
  font-weight: bold;
} */

/* .coupon-list {
  padding: 0 20px;
} */

.list {
  padding: 10px 0;
}

.list dt {
  display: inline-block;
  
  width: 150px;
  font-size: 14px;
  color: #111;
}

.list dd {
  display: inline-block;
  width: calc(100% - 150px);
  font-size: 14px;
  color: #111;
}

.payment-reward-cash-area {
  position: relative;
  margin: 20px 0;
  padding: 20px 20px 20px 54px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 14px;
}

.payment-reward-cash-area__icon {
  /* position: absolute; */
  height: 20px;
}

.payment-reward-cash-area__title {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: #111;
}

.payment-reward-cash-area__desc {
  display: block;
  color: #111;
}
.user-points{
  display:none;
}
.faraway-notice {
  margin-top: 20px;
  padding: 12px 0 9px;
  background: #fafafa;
  font-size: 12px;
  color: #555;
  text-align: center;
}

.faraway-notice strong {
  color: #111;
}
</style>
