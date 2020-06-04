<template>
    <article>
        <Slider :cname="$style.slider" :items="items"/>
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
            items: [
                {
                    href: 'funny0',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/93607/27/9768/38387/5e11d688E04270824/2d9495f7de2365ca.jpg'
                },
                {
                    href: 'funny1',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/106678/1/12210/92914/5e4535daE1770d4c3/30137746303353c1.jpg'
                },
                {
                    href: 'funny2',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/122349/17/1613/199131/5ebe417bE9608b120/2d1eafa4647e5801.jpg'
                }
            ],
            enters: [
                {
                    href: 'fun',
                    title: '优惠券',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/101844/12/9760/11216/5e11d703Ec915a9b9/014b4c8a90f4f970.png'
                },
                {
                    href: 'fun',
                    title: '领钢镚',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/90523/1/9767/16031/5e11d735E29291893/7ea1474e22f075a3.png'
                },
                {
                    href: 'fun',
                    title: '白条提额',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png'
                },
                {
                    href: 'fun',
                    title: '白条提额',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/95010/16/9777/10019/5e11d791E1d2871b3/66a53d1849c687e7.png'
                },
                {
                    href: 'fun',
                    title: '领京豆',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/105209/4/9857/12579/5e11d770E4e458bc7/fbbbec1918b041e3.png'
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
    margin-top: 120px;
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