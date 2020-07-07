<template>
    <panel title="shop list" :cname="$style.panel">
        <table>
            <tr>
                <th>编号</th>
                <th>产品名称</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in shopList" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td> <button @click="addToCart(item)">ADD</button> </td>
            </tr>
        </table>
    </panel>
</template>

<script>
import Panel from '../core/panel'
import {mapActions} from 'vuex'
export default {
    data() {
        return {
        }
    },
    components: {
        Panel
    },
    computed: {
        shopList(){
            return this.$store.getters.getShopList
        }
    },
    methods: {
        ...mapActions(["addToCart"])
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    margin-bottom: 0px;
    table{
        width: 100%;
        font-size: 24px;
        padding: 0 50px;
        tr{
            text-align: left;
        }
    }
}
</style>