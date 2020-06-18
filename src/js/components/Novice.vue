<template>
    <Panel title="需要听一听自己的内心" :cname="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP<span :class="$style.red">和偶像吃饭</span></h4>
                <p>帅的人专享</p>
                <img src="https://jdda.jd.com/btyingxiao/marketing/css/i/3.png" alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="https://m.jr.jd.com/ck/dingqicunkuan/css/i/images/icon2.png" alt="">
                        <h4 :class="$style.red">和董哥零距离接触</h4>
                        <p>赶紧行动</p>
                    </li>
                    <li>
                        <img src="https://m.jr.jd.com/ck/dingqicunkuan/css/i/images/icon1.png" alt="">
                        <h4>打白条儿</h4>
                        <p>开通<span :class="$style.red">享好礼</span></p>
                    </li>
                </ul>
            </div>
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
    >h4{
        border-bottom: 1px solid #ddd;
        color: #269;
    }
    .content{
        @include list(row);
        .item{
            width: 50%;
            box-sizing: border-box;
            h4{
                font-size: 26px;
                line-height: 40px;
            }
            .red{
                color: red;
            }
            p{
                font-size: 20px;
                color: #999;
                margin: 6px 0;
            }
            &:first-child{
                height: 288px;
                text-align: center;
                padding: 32px 20px;
                border-right: 1px solid #ddd;
                img{
                    width: 132px;
                    height: 132px;
                    margin: 24px 0;
                }
            }
            ul{
                li{
                    height: 144px;
                    padding: 32px 28px;
                    box-sizing: border-box;
                    h4{
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        text-align: left;
                    }
                    img{
                        width: 80px;
                        float: right;
                    }
                    &:first-child{
                    border-bottom: 1px solid #ddd;
                }
                }
            }
        }
    }
}
</style>