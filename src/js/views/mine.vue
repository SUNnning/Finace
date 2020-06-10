<template>
    <div>
        <Heador/>
        <Upload/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../components/Header'
import Navbar from '../components/Navbar'
import Upload from '../components/Upload'
export default {
    components: {
        Heador,
        Navbar,
        Upload
    }
}
</script>
