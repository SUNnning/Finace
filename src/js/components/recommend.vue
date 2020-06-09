<template>
    <Panel title="精品推荐" :cname="$style.panel">
        <section :class="$style.content">
            <div class="arrow">more ></div>
            <Slider :swiperOption="swiperOption" :items="items" :cname="$style.slider"/>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel'
import Slider from '../core/slider'
export default {
    name: '',
    components: {
        Panel,
        Slider
    },
    data(){
        return{
            swiperOption: {
                // classType: 'swiper-pagination',
                // slotType: 'pagination',
                slidesPerView: 2.4,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            items: [
                {
                    href: 'funny4',
                    src: 'https://img12.360buyimg.com/n1/s300x300_jfs/t1/99913/37/2658/90553/5dd36ab8E0d80d723/ccc031dad2ad6ee2.jpg!q70'
                },
                {
                    href: 'funny5',
                    src: 'https://img12.360buyimg.com/n1/s300x300_jfs/t1/97097/12/15694/245806/5e7373e6Ec4d1b0ac/9d8c13728cc2544d.jpg!q70'
                },
                {
                    href: 'funny6',
                    src: 'https://img12.360buyimg.com/n1/s300x300_jfs/t1/32602/6/4744/231214/5c7f6916Efd39fd4f/76166e9da4b005d9.jpg!q70'
                },
                {
                    href: 'funny7',
                    src: 'https://img12.360buyimg.com/n1/s300x300_jfs/t1/33643/39/13510/210896/5d008ab3Ecc7dd413/a23b6ace6a959174.jpg!q70'
                },
                {
                    href: 'funny8',
                    src: 'https://img12.360buyimg.com/n1/s300x300_jfs/t5182/126/1716530086/263586/4cb9d74/5913c1adN3ac9b10e.jpg!q70'
                },
            ]
        }
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    .content{
        position: relative;
        &>div{
            position: absolute;
            top: -65px;
            right: 20px;
            font-size: 28px;
            color: #999;
        }
        .slider{
            img{
                width: 200px;
                height: 200px;
                // margin-top: 25px;
                border: 1px solid #eee;
            }
        }
    }
}

</style>