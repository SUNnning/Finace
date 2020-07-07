<template>
    <panel title="shop cart" :cname="$style.panel">
        <div :class="$style.carttitle">
            <span>shopcart</span>
        </div>
        <table>
            <tr>
                <th>产品名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>操作</th>
            </tr>
            <tr v-if="!cartData.length" :class="$style.nogoods">
                <td colspan="4">暂未添加商品!</td>
            </tr>
            <tr v-for="item in cartData" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.num }}</td>
                <td><button @click="delFromCart(item)">DEL</button></td>
            </tr>
            <tr>
                <td colspan="2">{{ totalNum }}</td>
                <td colspan="2">{{ totalPrice }}</td>
            </tr>
        </table>
    </panel>
</template>

<script>
import Panel from '../core/panel'
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
        }
    },
    components: {
        Panel
    },
    computed: {
        ...mapGetters({
            cartData: "getAddList",
            totalNum: "totalNum",
            totalPrice: "totalPrice"
        })
    },
    methods: {
        ...mapActions({
            delFromCart: 'delFromCart',
            clearCart: 'clearCart'
        })
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    margin-top: 0px;
    margin-bottom: 100px;
    >h4{
        display: none;
    }
    .carttitle{
        margin: 10px auto;
        padding: 10px 0 0 0;
        font-size: 32px;
        color: white;
        border-bottom: 1px solid red;
        span{
            margin: 0 0 0 10px;
            padding: 1px 5px;
            background-color: red;
            border-radius: 10px 10px 0 0; 
        }
    }
    // width: 640px;
    // height: 300px;
    // background-color: #000;
    table{
        width: 100%;
        font-size: 24px;
        tr{
            text-align: center;
        }
        .nogoods{
            font-size: 20px;
            color: grey;
            font-style: "宋体";
            margin: 20px auto;
        }
    }
}
</style>