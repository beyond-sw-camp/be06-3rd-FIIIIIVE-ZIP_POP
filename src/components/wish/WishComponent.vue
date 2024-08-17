<template>
    <div id="app-body">
        <div class="community-container container" data-v-c05eb1ae="">
            <div class="soomgo-life-container" data-v-0352d1b6="" data-v-c05eb1ae="">
                <section id="community" class="community" data-v-4b40be3a="" data-v-0352d1b6="">
                    <!-- 헤더 -->
                    <div class="observer-container" data-v-71844fb9="" data-v-74db39ba="" data-v-4b40be3a="">
                        <section data-v-74db39ba="" data-v-71844fb9="" data-observe="community-header" class="community-header" id="community-header">
                            <h1 data-v-74db39ba="" data-v-71844fb9="" data-testid="community-main" class="community-title">찜한 팝업</h1>
                            <div data-v-74db39ba="" data-v-71844fb9="">
                                <div data-v-32970c25="" class="write-button-desktop">
                                    <button aria-haspopup="true" aria-expanded="false" type="button" class="btn btn-primary">
                                    <router-link to="/">팝업 찾아보기</router-link>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!-- 바디 -->
                    <main class="main" data-v-1eaba17a="">
                        <!-- <div data-v-1eaba17a="" class="top-desktop">
                            <div data-v-47a56272="" data-v-1eaba17a="" class="actions">
                                <div data-v-47a56272="" class="all-check-wrapper">
                                    <input data-v-47a56272="" id="all-check" disabled="disabled" name="allCheck" type="checkbox" class="all-check">
                                    <label data-v-47a56272="" for="all-check"><span data-v-47a56272="" class="label-text">전체 선택(0/0)</span></label></div>
                                <div data-v-47a56272="" class="delete">선택 항목 삭제</div>
                            </div>
                        </div> -->
                        <WishListComponent></WishListComponent>

                        <!-- <div data-v-644ea9c9="" data-v-1eaba17a="" class="infinite-loading-container">
                            <div data-v-644ea9c9="" class="infinite-status-prompt" style="display: none;">
                                <div data-v-fc3fcce8="" data-v-1eaba17a="" class="" data-v-644ea9c9="">
                                    <div data-v-fc3fcce8="" class="indicator-body center"
                                        style="width: 24px; height: 24px; border-width: 0.25rem; border-style: solid; border-color: rgb(0, 199, 174) rgba(0, 199, 174, 0.2) rgba(0, 199, 174, 0.2); border-image: initial;">
                                    </div>
                                    <p data-v-fc3fcce8="" style="display: none;"></p>
                                </div>
                            </div>
                            <div data-v-644ea9c9="" class="infinite-status-prompt"
                                style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px; display: none;"></div>
                            <div data-v-644ea9c9="" class="infinite-status-prompt"
                                style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px;"></div>
                            <div data-v-644ea9c9="" class="infinite-status-prompt"
                                style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px; display: none;">

                                <br data-v-644ea9c9=""> <button data-v-644ea9c9="" class="btn-try-infinite"></button>
                            </div>
                        </div> -->
                    </main>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import WishListComponent from './WishListComponent.vue';


export default {
    name: "WishComponent",
    components: { WishListComponent, },
}
</script>

<style></style>