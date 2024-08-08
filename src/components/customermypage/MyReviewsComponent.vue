<template>
  <div>
    <h2>내 리뷰</h2>
    <div v-if="reviews.length > 0">
      <div v-for="review in reviews" :key="review.reviewIdx">
        <h3>{{ review.reviewTitle }}</h3>
        <p>{{ review.reviewContent }}</p>
        <p>Rating: {{ review.rating }}</p>
        <div v-if="review.getPopupReviewImageResList.length > 0">
          <img
            v-for="image in review.getPopupReviewImageResList"
            :key="image.reviewImageIdx"
            :src="image.imageUrl"
            :alt="review.reviewTitle"
            style="max-width: 200px; max-height: 200px;"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <p>No reviews available</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyReviewsComponent',
  data() {
    return {
      reviews: []
    };
  },
  mounted() {
    this.fetchReviews();
  },
  methods: {
    async fetchReviews(page = 0) {
      try {
        // axios 요청에 page 파라미터를 추가
        const apiUrl = 'http://localhost:8080/api/v1/review/search-customer';
        const response = await axios.get(apiUrl, {
          params: {
            page: page,
            size: 10 // 한 페이지에 표시할 리뷰 수
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });
        this.reviews = response.data.result.content;
      } catch (error) {
        // 오류 메시지 출력 및 백엔드 로그 확인
        console.error('Error fetching the reviews', error);
      }
    }
  }
};
</script>

<style scoped>
/* 스타일 추가 */
</style>
