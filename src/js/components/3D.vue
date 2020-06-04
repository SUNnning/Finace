<template>
    <Panel title="3D BOX" :cname="$style.panel">
        <section :class="$style.wrap">
            <div :class="$style.cube">
                <!-- 前面图片 -->
                <div :class="$style.out_front">
                </div>
                <!-- 后面图片 -->
                <div :class="$style.out_back">
                </div>
                <!-- 左边图片 -->
                <div :class="$style.out_left">
                </div>
                <!-- 右边图片 -->
                <div :class="$style.out_right">
                </div>
                <!-- 上边图片 -->
                <div :class="$style.out_top">
                </div>
                <!-- 下边图片 -->
                <div :class="$style.out_bottom">
                </div>

                <!-- 中心立方体 -->
                <span :class="$style.in_front">
                </span>

                <span :class="$style.in_back">
                </span>

                <span :class="$style.in_left">
                </span>

                <span :class="$style.in_right">
                </span>

                <span :class="$style.in_top">
                </span>

                <span :class="$style.in_bottom">
                </span>
            </div>
        </section>

    </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
    components: {
        Panel
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    background-color: #333;
    margin-top: 100px;
    >h4{
        // display: none;
    }
    .wrap{
        @include list;
        justify-content: center;
        align-items: center;
        height: 50vh;
        padding: 200px 0;
        position: relative;  
        .cube{
            width: 200px;
            height: 200px;
            margin: 0 auto;
            transform-style: preserve-3d;
            transform: rotateX(-15deg) rotateY(30deg);
            animation: rotate linear 20s infinite;
            div{
                position: absolute;
                width: 200px;
                height: 200px;
                opacity: 0.8;
                /* transition: all .4s; */
                background-color: blue;
                border: 1px solid gold;
            }
            .pic{
                width: 200px;
                height: 200px;
            }
            span{
                display: block;
                width: 100px;
                height: 100px;
                position: absolute;
                top: 50px;
                left: 50px;
                background-color: coral;
                border: 1px solid blue;
            }
            .in_front{
                transform: translateZ(50px) rotateY(0deg);
            }
            .in_back{
                transform: translateZ(-50px) rotateY(180deg);
            }
            .in_left{
                transform: rotateY(-90deg) translateZ(50px);
            }
            .in_right{
                transform: rotateY(90deg) translateZ(50px);
            }
            .in_top{
                transform: rotateX(-90deg) translateZ(50px);
            }
            .in_bottom{
                transform: rotateX(90deg) translateZ(50px);
            }
    
            .out_front{
                transform: rotateY(0deg) translateZ(100px);
            }
            .out_back{
                transform: translateZ(-100px) rotateY(180deg);
            }
            .out_left{
                transform: rotateY(-90deg) translateZ(100px);
            }
            .out_right{
                transform: rotateY(90deg) translateZ(100px);
            }
            .out_top{
                transform: rotateX(90deg) translateZ(100px);
            }
            .out_bottom{
                transform: rotateX(-90deg) translateZ(100px);
            }
        }
        /* 鼠标悬浮羽翼咋开 */
        .cube:hover .out_front{
            transform: rotateY(0deg) translateZ(200px);
        }
        .cube:hover .out_back{
            transform: translateZ(-200px) rotateY(180deg);
        }
        .cube:hover .out_left{
            transform: rotateY(-90deg) translateZ(200px);
        }
        .cube:hover .out_right{
            transform: rotateY(90deg) translateZ(200px);
        }
        .cube:hover .out_top{
            transform: rotateX(90deg) translateZ(200px);
        }
        .cube:hover .out_bottom{
            transform: rotateX(-90deg) translateZ(200px);
        }
        @keyframes rotate{
            from{
                transform: rotateX(0deg) rotateY(0deg);
            }
            to{
                transform: rotateX(360deg) rotateY(360deg);
            }
        }
    }         
}
</style>


