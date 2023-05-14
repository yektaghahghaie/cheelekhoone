<script>
import all from '../views/All.vue'
import axios from 'axios';
export default{
    name:'home',
    components:{all},
    data(){
    return{
      np:'',
        passworderrm:null,
        emailerr:null,
      passworderr:null,
       email:'',
        username:'',
      password:'',

    }
},
methods:{
postregester(){
  axios.post('https://api.realworld.io/api/users',{
  "user":{
    "email":this.email,
        "username":this.username,
     "password":this.password,
  }
})
  .then(res=>{
    console.log(res);
    this.$router.push('/about')
  })
  .catch(err=>{
    console.log(12,err);
  })
},
eror(){
if(this.password.length<5){
  this.passworderr=true
  this.passworderrm="Required field"
}else{
  this.passworderr=false
}
  }
},
}
</script>

<template>
<section class="Register">
  <div class="w-1440 h-1024 bg-gry2 pt-8 pr-8 pb-80 pl-495">
      <div class="w-450 h-523 bg-silver mt-56 mr-2 mb-0 ml-0 pr-5 pt-9 pb-24 pl-7 rounded ">
          <div class="w-36 h-11 pb-24 pl-28 text-5xl text-gry">
              Register
          </div>
          <form @submit.prevent="eror">
          <label class="mb-1.5 text-base" for="emile">User</label>
          <input v-model="username" type="email" id="emile" name="emile" class="mt-1.5 w-405 h-8 pt-39 mb-6 border border-solid border-gry3 bg-gry2 rounded" required>
          <label class="mb-1.5 text-base" for="emile">Email</label>
          <input v-model="email" type="email" id="emile" name="emile" class="mt-1.5 w-405 h-8 pt-39 mb-6 border border-solid border-gry3 bg-gry2 rounded" required>
          <label for="Password" :class="{'text-base text-red' :passworderr===true}">Password</label>
          <input v-model="password" type="password" id="password" name="password" class=" mb-1.5 mt-1.5 pt-3 w-405 h-8 border border-solid border-gry3 bg-gry2 rounded" required>
          <div class="text-base text-red" v-if="passworderr">{{ passworderrm }}</div>
          <button @click="postregester" class="border border-solid border-blue bg-blue mt-4 w-405 h-8 text-xs text-center mb-2 text-gry2 rounded">Register</button>
          </form>
          <div class="flex">
              <div class="ml-1 text-base">Already Registered?</div>
              <div><router-link to="/about" class="ml-1 text-base"><b>Login</b></router-link></div>
          </div>
      </div>
  </div>
</section>
</template>
<style scoped>

</style>