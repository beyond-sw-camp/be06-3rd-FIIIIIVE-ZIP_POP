<template>
  <div id="app-body">
    <div class="cart-title-new-layout-wrapper">
      <div class="cart-navigator" id="cart-navigator"></div>
      
      <div class="cart-new-title">장바구니</div>
      <section class="cart-title-new-layout"></section>
    </div>
    <div class="tabs-wrap--with-rds-style">
      <div class="tabs">
        <span id="cartItemCount" class="normal-cart" data-item-count="1">구매 정보</span>
      </div>
    </div>
    <div class="shopping-cart-new-layout">
      <div class="cart-items-container">
        <table class="cartTable cartTable-v2">
          <tbody id="cartTable-other" class="cart-bundle-list">
            <tr v-for="item in cartStore.cartItems" :key="item.cartIdx">
              <td class="cart-deal-item__image">
                <img v-if="item.getPopupGoodsRes.getPopupGoodsImageResList && item.getPopupGoodsRes.getPopupGoodsImageResList.length > 0" 
                     :src="item.getPopupGoodsRes.getPopupGoodsImageResList[1].imageUrl " 
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
                      <div class="quantity-input-icon minus" @click="cartStore.adjustCartCount(item, -1)"></div>
                      <input :value="item.itemCount" class="quantity-input" type="text" readonly />
                      <div class="quantity-input-icon plus" @click="cartStore.adjustCartCount(item, 1)"></div>
                    </div>
                  </div>
                  <a href="#" class="delete-option" @click="cartStore.deleteCartItem(item.cartIdx)">삭제</a>
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
      <div class="cart-total-price">
        <div class="cart-total-price__inner">
          <div class="cart-total-price-title">주문 예상 금액</div>
          <div class="cart-total-price-item">
            <div class="cart-total-price-item-title">총 상품 가격</div>
            <div class="cart-total-price-item-price total-sale-price">
              <span class="price-panel-price-area">
                <em class="final-product-price" id="totalProductPrice">{{ cartStore.totalPrice }}</em>원
              </span>
            </div>
          </div>
          <div class="cart-total-price-item total-discount total-discount-panel">
            <div class="cart-total-price-item-title">총 할인</div>
            <div class="cart-total-price-item-price discount-price">
              <span id="totalEventDiscount" class="final-sale-area price-panel-price-area">
                <em class="operator">-</em><em class="final-sale-price" id="totalDiscountPrice">{{ cartStore.totalDiscount }}</em>원
              </span>
            </div>
          </div>
          <div class="cart-total-price-item total-delivery-fee">
            <div class="cart-total-price-item-title">총 배송비</div>
            <div class="cart-total-price-item-price">
              <span id="totalDeliveryPrice" class="price-panel-price-area">
                <em class="operator">+</em>
                <em class="final-product-price" id="deliveryFee">{{ cartStore.deliveryFee }}</em>원
              </span>
            </div>
          </div>
        </div>
        <div id="finalOrderPrice" class="cart-final-order-price">
          <span class="default-value">
            <em class="order-product-price" id="finalOrderPriceValue">{{ cartStore.finalOrderPrice }}</em>원
          </span>
        </div>
        <div class="order-buttons">
          <a href="#" class="goPayment narrow" id="btnPay">구매하기<span>&nbsp;(1)</span></a>
        </div>
        <div class="user-points">
          <span>사용자 포인트: </span><span id="userPoints">{{ cartStore.userPoints }} points</span>
        </div>
      </div>
    </div>
    <div class="order-table-foot">
      <span class="all-select-product">
        <label>
          <input title="모든 상품을 결제상품으로 설정" type="checkbox" checked="checked" class="all-deal-select">
          <span>전체선택</span><span class="cart-count-bottom">( <em>1</em> / 1 )</span>
        </label>
        <a href="#" class="selected-delete" @click="cartStore.deleteAllCartItems">전체삭제</a>
      </span>
    </div>
    <div class="download-coupon-area">
      <div class="coupon-inquire-apply">
        <div class="coupon-title">
          <h2 class="title">포인트 적용</h2>
        </div>
        <div class="coupon-list">
          <div class="download-coupon">
            <dl class="list js-coupon-list" data-coupon-id="b6c7ab33-0f31-4568-83d1-0d4c1b831653" data-available="true" data-wow-only="false">
              <dt>
                <label class="coupon-label">
                  <input type="checkbox" id="couponb6c7ab33-0f31-4568-83d1-0d4c1b831653" name="coupon" class="coupon-chk" value="b6c7ab33-0f31-4568-83d1-0d4c1b831653" v-model="cartStore.usePoints">
                  <strong>{{ cartStore.userPoints }} points</strong>
                </label>
                <span class="label none"></span>
              </dt>
              <dd>
                <span class="name">
                  <strong>고객 포인트</strong>
                </span>
              </dd>
            </dl>
          </div>
          
        </div>
      </div>
    </div>
    <div class="payment-reward-cash-area">
      <img class="payment-reward-cash-area__icon" src="//img1a.coupangcdn.com/image/cart/generalCart/ico_cash_m_2x.png">
      <h3 class="payment-reward-cash-area__title">포인트적립 혜택</h3>
      <span class="payment-reward-cash-area__desc"> 결제 시 결제 금액의 10% 적립</span>
    </div>
    <div class="faraway-notice">
      <strong>도서산간 배송안내 </strong>: 도서산간 추가배송비 발생 시 함께 결제할 수 있습니다. <span class="faraway-address"></span><br>
    </div>
  </div>
</template>

<script>
<<<<<<< Updated upstream
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/cart';
=======
import { useCartStore } from "@/stores/useCartStore"; 
// Pinia store import
>>>>>>> Stashed changes

export default {
  setup() {
    const cartStore = useCartStore();

    cartStore.fetchCart(); // 데이터 초기화
    cartStore.fetchUserPoints();

    return {
      cartStore, // store 객체를 template에서 사용 가능하게 함
    };
  },
};
</script>

<style scoped>

body {
<<<<<<< Updated upstream
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 50px;
=======
  border-style: solid;
  border-color: black;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 100px;
>>>>>>> Stashed changes
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
  padding: 0 20px;
}
.cart-items-container {
  flex: 1;
  margin-right: 20px;
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
  border-bottom: 1px solid #ddd;
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
  margin-left: 10px; 
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
.cart-total-price {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  position: sticky;
  top: 20px;
}
.cart-total-price__inner {
  margin-bottom: 20px;
}
.cart-total-price-title {
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
}
.goPayment {
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
  border: 1px solid red; 
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none; 
  background-color: transparent; 
}
.download-coupon-area {
  margin-top: 20px;
}
.coupon-inquire-apply {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
}
.coupon-title {
  padding: 0 20px;
}
.coupon-title .title {
  font-size: 18px;
  font-weight: bold;
}
.coupon-list {
  padding: 0 20px;
}
.list {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
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
  position: absolute;
  left: 20px;
  top: 16px;
  height: 24px;
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
