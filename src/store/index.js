import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    shoplist: [
        {
            id: 1,
            name: 'huawei',
            price: 50
        },
        {
            id: 2,
            name: 'apple',
            price: 100
        },
        {
            id: 3,
            name: 'oppo',
            price: 45
        },
        {
            id: 4,
            name: 'mi',
            price: 60
        },
    ],
    addlist: []
}
const getters = {
    getShopList: state => state.shoplist,
    getAddList: state => {
        return state.addlist.map(({id, num}) => {
            let product = state.shoplist.find(item => item.id === id);
            if(product){
                return {
                    ...product,
                    num
                }
            }
        })
    },
    totalNum: (state, getters) => {
        let total = 0;
        getters.getAddList.forEach(item => {
            total += item.num;
        });
        return total;
    },
    totalPrice: (state, getters) => {
        let price = 0;
        getters.getAddList.forEach(item => {
            price += item.num*item.price;
        });
        return price;
    },
}
const actions = {
    addToCart({commit}, prodcut){
        commit("addCart",{
            id: prodcut.id
        })
    },
    delFromCart({commit}, product){
        commit("deleteCart", product)
    },
    clearCart({commit}){
        commit("clearCart")
    }
}
const mutations = {
    addCart(state, {id}){
        let record = state.addlist.find(item=>item.id===id);
        if(!record){
            state.addlist.push({
                id,
                num: 1
            })
            console.log(state.addlist)
        }else{
            record.num++
        }
    },
    deleteCart(state, product){
        state.addlist.forEach((item, i)=>{
            if(item.id === product.id){
                state.addlist.splice(i, 1)
            }
        })
    },
    clearCart(state){
        state.addlist = []
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})