<template>
    <div>
        <Heador/>
        <D3/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../components/Header'
import Navbar from '../components/Navbar'
import D3 from '../components/3D'
export default {
    components: {
        Heador,
        Navbar,
        D3
    }
}
</script>
