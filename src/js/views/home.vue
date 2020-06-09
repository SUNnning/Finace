<template>
    <div>
        <Heador/>
        <Adslider/>
        <Novice/>
        <Bill/>
        <Recommend/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../components/Header'
import Adslider from '../components/Adslider'
import Navbar from '../components/Navbar'
import Novice from '../components/Novice'
import Bill from '../components/bill'
import Recommend from '../components/recommend'
import Footer from '../components/Footer'
export default {
    components: {
        Heador,
        Adslider,
        Novice,
        Bill,
        Recommend,
        Footer,
        Navbar
    }
}
</script>
