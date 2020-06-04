<template>
    <div :class="$style.header">
        <span :class="$style.left">
            <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
        </span>
        <btn :class="$style.right">APP下载</btn>
    </div>
</template>

<script>
    import btn from '../core/btn';
    export default {
        name: 'Heador',
        data(){
            return{}
        },
        components:{
            btn
        }
    }
</script>

<style lang="scss" module>
.header{
    color: #666;
    font-size: 28px;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff url("https://storage.360buyimg.com/base/images/jdjr-logo/logo-jr-r.png?20181203") center center no-repeat;
    background-size: auto 60%;
    z-index: 100;
    .left{
        padding: 24px auto;
        font-size: 24px;
        height: 30px;
        line-height: 30px;
        margin: 17px 0 0 32px;
        display: inline-block;
    }
    .right{
        float: right;
        font-size: 24px;
        border-width: 0;
        height: 56px;
        line-height: 56px;
        min-width: 120px;
        padding: 0;
        border-radius: 4px;
        margin: 28px 24px 0 0;
    }
}

</style>
          