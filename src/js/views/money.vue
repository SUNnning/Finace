<template>
    <div>
        <Heador/>
        
        <Lightbtn/>
        <Shopcart/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../components/Header'
import Navbar from '../components/Navbar'
import Shopcart from '../components/Shopcart'
import Lightbtn from '../components/Lightbtn'
export default {
    components: {
        Heador,
        Navbar,
        Shopcart,
        Lightbtn
    }
}
</script>

