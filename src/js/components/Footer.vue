<template>
    <Panel title="联系我们" :cname="$style.panel">
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
    // >h4{
    //     size: 48px;
    // }
    .content{
        background-color: #eee;
        li{
            // height: 40px;
            // line-height: 40px;
            padding: 8px 0;
            color: grey;
            font-size: 24px;
            text-align: center;
            border-bottom: 1px solid #ddd;
            &:nth-child(1){
                @include list(row);
                justify-content: space-around;
                div{
                    box-sizing: border-box;
                    width: 126px;
                    height: 128px;
                    background: url("../../../public/share.png") no-repeat;
                    &:nth-child(1){
                        background-position: 0 2px;
                    }
                    &:nth-child(1):hover{
                        background-position: 0 -124px;
                    }
                    &:nth-child(2){
                        background-position: -126px 2px;
                    }
                    &:nth-child(2):hover{
                        background-position: -126px -124px;
                    }
                    &:nth-child(3){
                        background-position: -252px 2px;
                    }
                    &:nth-child(3):hover{
                        background-position: -252px -124px;
                    }
                }
            }
        }
        
    }
}
</style>
          