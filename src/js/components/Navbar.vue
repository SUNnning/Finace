<template>
    <Panel title="导航条" :cname="$style.panel">
        <ul :class="$style.content">
            <li v-for="item in items" :key="item.href">
                <router-link :to="{name: item.href}">
                    <img :src="item.src"/>
                    <p>{{ item.title }}</p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
    name: '',
    components: {
        Panel
    },
    data() {
        return {
            items: [
                {
                    href: 'home',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/101844/12/9760/11216/5e11d703Ec915a9b9/014b4c8a90f4f970.png',
                    title: '首页'
                },
                {
                    href: 'money',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/85137/14/9816/10770/5e11d7ddE2805969c/9f4f3cdcfeb204e5.png',
                    title: '理财'
                },
                {
                    href: 'ious',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png',
                    title: '白条'
                },
                {
                    href: 'raise',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/101963/37/9857/11372/5e11d7a7E05793a8e/f9371aee1e18ae9a.png',
                    title: '众筹'
                },
                {
                    href: 'mine',
                    src: 'https://img20.360buyimg.com/mcpageview/jfs/t1/95010/16/9777/10019/5e11d791E1d2871b3/66a53d1849c687e7.png',
                    title: '我的'
                },
            ]
        }
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    z-index: 100;
    margin: 0;
    >h4{
        display: none;
    }
    .content{
        @include list(row);
        justify-content: space-around;
        li{
            list-style: none;
            text-align: center;
            a{
                text-decoration: none;
            }
            img{
                width: 44px;
                height: 44px;
                display: inline-block;
                margin: 12px auto -5px;
            }
            p{
                display: block;
                font-size: 22px;
                color: #656565;
            }
        }
    }
    
}
</style>