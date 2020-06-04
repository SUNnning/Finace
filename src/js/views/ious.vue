<template>
    <div>
        <Heador/>
        <Plotlight/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../components/Header'
import Navbar from '../components/Navbar'
import Plotlight from '../components/Plotlight'
export default {
    components: {
        Heador,
        Navbar,
        Plotlight
    }
}
</script>
