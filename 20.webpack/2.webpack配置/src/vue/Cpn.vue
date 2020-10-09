<template>
    <div>
        <h2>Cpn组件</h2>
        <p>{{info}}</p>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return {
                info:"这是子组件套用的内容"
            }
        }
    }
</script>

<style scoped>

</style>