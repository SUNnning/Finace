<template>
    <Panel title="流光按钮" :cname="$style.panel">
        <section :class="$style.content">
            <btn :cname="$style.light">sunning</btn>
        </section>
        
    </Panel>
</template>

<script>
import Panel from '../core/panel'
import btn from '../core/btn'
export default {
    components: {
        Panel,
        btn
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    background-color: #999;
    margin-top: 100px;
    >h4{
        color: #f441a5;
    }
    .content{
        @include list;
        justify-content: center;
        align-items: center;
        width: 640px;
        height: 200px;
        background-color: #666;
        .light{
            width: 320px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            font-size: 30px;
            color: #fff;
            border: 0px;
            border-radius: 24px;
            background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
            background-size: 400%;
            position: relative;
        }
        .light:before{
            content: " ";
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border-radius: 24px;
            background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
            background-size: 400%;
            filter: blur(10px);
            z-index: -1;
        }
        .light:hover{
            animation: sunning 8s linear infinite;
        }
        .light:hover:before{
            animation: sunning 8s linear infinite;
        }
        @keyframes sunning{
            100%{
                background-position: -400% 100%; 
            }
        }
    }
}
</style>
