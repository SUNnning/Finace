<template>
    <article>
        <Slider :cname="$style.slider" :swiperOption="swiperOption" :items="items"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.src">
                <router-link :to="{name: item.href}">
                    <img :src="item.src" alt="">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
            <router-view></router-view>
        </section>
    </article>
</template>

<script>
import Slider from '../core/slider'
export default {
    components: {
        Slider
    },
    data(){
        return {
            swiperOption: {
                // classType: "swiper-pagination",
                // slotType: "pagination",
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination'
                },
            },
            items: [
                {
                    href: 'funny0',
                    src: 'http://p1.music.126.net/AC2-YtjaXZVp-v6B64CmZw==/109951165051200034.jpg'
                },
                {
                    href: 'funny1',
                    src: 'http://p1.music.126.net/lUT8qxM9kj7s43OfcxVBfg==/109951165051178363.jpg'
                },
                {
                    href: 'funny2',
                    src: 'http://p1.music.126.net/OV9tq6ij6t02-G3apAL69w==/109951165050734196.jpg'
                }
            ],
            enters: [
                {
                    href: 'fun',
                    title: '我',
                    src: '//img20.360buyimg.com/mcpageview/jfs/t1/101844/12/9760/11216/5e11d703Ec915a9b9/014b4c8a90f4f970.png'
                },
                {
                    href: 'fun',
                    title: '董',
                    src: '//img20.360buyimg.com/mcpageview/jfs/t1/90523/1/9767/16031/5e11d735E29291893/7ea1474e22f075a3.png'
                },
                {
                    href: 'fun',
                    title: '哥',
                    src: '//img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png'
                },
                {
                    href: 'fun',
                    title: '最',
                    src: '//img20.360buyimg.com/mcpageview/jfs/t1/95010/16/9777/10019/5e11d791E1d2871b3/66a53d1849c687e7.png'
                },
                {
                    href: 'fun',
                    title: '帅',
                    src: '//img20.360buyimg.com/mcpageview/jfs/t1/105209/4/9857/12579/5e11d770E4e458bc7/fbbbec1918b041e3.png'
                }
            ],   
        }
    }
}
</script>

<style lang="scss" module>
/* @import url(); 引入css类 */
@import '../../css/element.scss';
.slider{
    margin-top: 100px;
    width: 640px;
    height: 300px;
    background-color: #000;
    img{
        width: 640px;
        height: 300px;
    }
}
.list{
    @include list(row);
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
        text-decoration: none;
    }
    .item{
        text-align: center;
        img{
            display: inline-block;
            width: 90px;
            height: 90px;
        }
        h4{
            font-size: 26px;
            margin-top: 12px;
            color: #666
        }
    }
}
</style>