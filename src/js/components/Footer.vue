<template>
    <Panel title="联系作者" :cname="$style.panel">
        <section :class="$style.content">
            <ul>
                <li>
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
                <li>©2020 Cossoc</li>
                <li>苏ICP备19035583号-1</li>
                <li>靠谱董哥</li>
                <li>谈人生聊理想</li>
                <li>微信：america1787</li>
            </ul>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
    name: '',
    components: {
        Panel
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    margin-bottom: 100px;
    >h4{
        background-color: #eee;
        height: 90px;
        // border-bottom: 1px solid #ddd;
    }
    .content{
        background-color: #eee;
        li{
            // height: 40px;
            // line-height: 40px;
            padding: 8px 0;
            color: grey;
            font-size: 24px;
            text-align: center;
            &:nth-child(1){
                @include list(row);
                justify-content: space-around;
                padding: 0 100px;
                div{
                    box-sizing: border-box;
                    width: 88px;
                    height: 89px;
                    background: url("../../../public/share.png") no-repeat;
                    background-size: 4.13rem 2.73rem;
                    &:nth-child(1){
                        background-position: 0 2px;
                    }
                    &:nth-child(1):hover{
                        background-position: 0 -87px;
                    }
                    &:nth-child(2){
                        background-position: -88px 2px;
                    }
                    &:nth-child(2):hover{
                        background-position: -88px -87px;
                    }
                    &:nth-child(3){
                        background-position: -176px 2px;
                    }
                    &:nth-child(3):hover{
                        background-position: -176px -87px;
                    }
                }
            }
        }
        
    }
}
</style>
          