<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import login from './components/login.vue'
import axios from 'axios';
export default{
    name:'App',
    components:{HelloWorld,TheWelcome,WelcomeItem,login},
   
    data(){
        return{
t:'jjjjjjeeeffff',
e:true
        }
    },
methods:{
v(){
console.log("k")
document.getElementById('g').classList.add('dh')
this.e=!this.e
}
}
}
</script>

<template>
    <HelloWorld/>
    <TheWelcome/>
    <WelcomeItem/>
    <login/>
    <a href='/login'>jjj</a>
 <h2>iiii</h2>
<div v-if="e"><input id="g" type="text" ref="n"/>
    </div>
 <button @click="v">click</button>
 <h1 class="text-3xl font-bold underline bg-red">aaaaaaaaaaaa</h1>
</template>

<style>
 
</style>
