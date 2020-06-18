<template>
    <div>
        <Heador/>
        <Adslider/>
        <Live/>
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
import Live from '../components/Live'
import Bill from '../components/Bill'
import Recommend from '../components/Recommend'
import Footer from '../components/Footer'
export default {
    components: {
        Heador,
        Adslider,
        Novice,
        Live,
        Bill,
        Recommend,
        Footer,
        Navbar
    }
}
</script>
