<template>
    <Panel title="PLOTLIGHT" :cname="$style.panel">
        <section :class="$style.content">
            <h1>PLOTLIGHT</h1>
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
        display: none;
    }
    .content{
        @include list;
        justify-content: center;
        align-items: center;
        height: 90vh;
        h1{
            color: #333;
			font-size: 100px;
			position: relative;
        }
        h1:after{
			content: 'PLOTLIGHT';
			position: absolute;
			left: 0;
			top: 0;
			color: transparent;
			/*background: -webkit-linear-gradient(left, blue,gold,pink,grey,green,yellow);*/
			background: linear-gradient(90deg, blue,gold,pink,grey,green,yellow,blue);
			background-clip: text;
			-webkit-background-clip: text;
			clip-path: circle(100px at 0% 50%);
			/*-webkit-clip-path: circle(100px);*/
			animation: light 5s infinite;
		}
		@keyframes light{
			0%{
				clip-path: circle(100px at 0% 50%);
				-webkit-clip-path: circle(100px at 0% 50%);
			}
			50%{
				clip-path: circle(100px at 100% 50%);
				-webkit-clip-path: circle(100px at 100% 50%);
			}
			100%{
				clip-path: circle(100px at 0% 50%);
				-webkit-clip-path: circle(100px at 0% 50%);
			}
		}

    } 
}
</style>
