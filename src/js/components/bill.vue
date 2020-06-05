<template>
    <Panel title="极速借贷">
        <section :class="$style.content">
            <img src="https://img30.360buyimg.com/cf/jfs/t1/107448/20/13858/83118/5ea2ea0dE1acfdf1c/a7ff9d683aa66bde.png" alt="">
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
    name: '',
    components: {
        Panel
    }
    
}
</script>

<style lang="scss" module>
.content{
    width: 640px;
    img{
        width: 100%;
    }
}
</style>