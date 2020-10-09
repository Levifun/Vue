<template>
    <div>
        <h1 class="header">{{name}}</h1>
        <button @click="getmName">按钮</button>
        <h2>{{message}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from "./Cpn"

    export default {
        name: "App",
        components:{
            Cpn
        },
        data(){
            return {
                name:"LWF",
                message:"loveVue"
            }
        },
        methods:{
            getmName(){
                console.log("Hello World!")
            }
        }
    }
</script>

<style scoped>
 .header {
     color: aquamarine;
 }
</style>