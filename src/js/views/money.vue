<template>
    <div>
        <Heador/>
        <Lightbtn/>
        <Shoplist/>
        <Shopcart/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../components/Header'
import Navbar from '../components/Navbar'
import Shoplist from '../components/Shoplist'
import Shopcart from '../components/Shopcart'
import Lightbtn from '../components/Lightbtn'
export default {
    components: {
        Heador,
        Navbar,
        Shoplist,
        Shopcart,
        Lightbtn
    }
}
</script>

