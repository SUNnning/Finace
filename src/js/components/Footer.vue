<template>
    <Panel title="法务信息" :cname="$style.panel">
        <section :class="$style.content">
            <ul>
                <li>©2020 Cossoc</li>
                <li>苏ICP备19035583号-1</li>
                <li>靠谱董哥</li>
                <li>谈人生</li>
                <li>聊理想</li>
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
        // display: none;
    }
    .content{
        background-color: #eee;
        li{
            height: 40px;
            line-height: 40px;
            color: grey;
            font-size: 24px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }
    }
}
</style>
          