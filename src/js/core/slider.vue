<template>
    <section :class="cname">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{name: item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"/>
        </swiper>
    </section>
</template>



<script>   
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
            }
        },
        props: {
            cname: {
                type: String,
                default: ''
            },
            swiperOption: {
                type: Object,
                default(){
                    return {
                        loop: true,
                        autoplay: {
                            delay: 1500,
                            stopOnLastSlide: false,
                            disableOnInteraction: false
                        },
                        pagination: {
                            el: '.swiper-pagination'
                        } 
                    } 
                }
            },
            items: {
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '~swiper/css/swiper.css';
</style>


