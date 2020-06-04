<template>
    <div :class="$style.content">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {
        
    }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.content{
    @include list;
    justify-content: center;
    align-items: center;
    width: 640px;
    height: 500px;
    ul{
        list-style: none;
        // height: 200px;
        display: flex;
        li{
            list-style: none;
			width: 20px;
			height: 20px;
			border-radius: 10px;
			background-color: red;
			margin-right: 20px;
		}
		li:nth-child(1){
			background-color: red;
			animation: love1 5s 0s linear infinite;
		}
		li:nth-child(2){
			background-color: darkturquoise;
			animation: love2 5s 0.2s linear infinite;
		}
		li:nth-child(3){
			background-color: darksalmon;
			animation: love3 5s 0.4s linear infinite;
		}
		li:nth-child(4){
			background-color: deeppink;
			animation: love4 5s 0.6s linear infinite;
		}
		li:nth-child(5){
			background-color: yellow;
			animation: love5 5s 0.8s linear infinite;
		}
		li:nth-child(9){
			background-color: red;
			animation: love1 5s 1.6s linear infinite;
		}
		li:nth-child(8){
			background-color: darkturquoise;
			animation: love2 5s 1.4s linear infinite;
		}
		li:nth-child(7){
			background-color: darksalmon;
			animation: love3 5s 1.2s linear infinite;
		}
		li:nth-child(6){
			background-color: deeppink;
			animation: love4 5s 1s linear infinite;
		}
		@keyframes love1{
			30%, 50%{
				height: 60px;
				transform: translateY(-30px)
			}
			70%,100%{
				height: 20px;
				transform: translateY(0px)
			}
		}
		@keyframes love2{
			30%, 50%{
				height: 125px;
				transform: translateY(-60px)
			}
			70%,100%{
				height: 20px;
				transform: translateY(0px)
			}
		}
		@keyframes love3{
			30%, 50%{
				height: 160px;
				transform: translateY(-75px)
			}
			70%,100%{
				height: 20px;
				transform: translateY(0px)
			}
		}
		@keyframes love4{
			30%, 50%{
				height: 180px;
				transform: translateY(-60px)
			}
			70%,100%{
				height: 20px;
				transform: translateY(0px)
			}
		}
		@keyframes love5{
			30%, 50%{
				height: 200px;
				transform: translateY(-45px)
			}
			70%,100%{
				height: 20px;
				transform: translateY(0px)
			}
		}
    }
}
</style>