<template>
    <article>
        <table>
            <tr>
                <th>name</th>
                <th>number</th>
                <th>price</th>
                <th>operate</th>
            </tr>
            <tr v-for="item in shopList" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.id }}</td>
                <td><butten></butten></td>
            </tr>
        </table>
    </article>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: mapState({
        shopList: state=>state.shopList
    })
}
</script>

<style>
</style>