<template>
 <section class="login">
    <div class="w-1440 h-1024 bg-gry2 pt-8 pr-8 pb-80 pl-495">
        <div class="w-450 h-415 bg-silver mb-0 ml-0 mr-2 mt-56 pr-5 pt-9 pb-24 pl-7 rounded ">
            <div class="w-36 h-16 text-5xl pl-102 mt-0 mr-32 mb-7 ml-8 text-gry">
                LOGIN
            </div>
            <form @submit.prevent="eror">
            <label class=" text-base" for="emile">Email</label>
            <input v-model="email" type="email" id="emile" name="emile" class="w-405 h-8 pt-39 mt-1.5 mb-6 border border-solid border-gry3 bg-gry2 rounded" required>
            <br>
            <label :class="{'text-base text-red' :passworderr===true}">Password</label>
            <input v-model="password" type="password" id="password" name="password" class=" mb-1.5 mt-1.5 pt-3 w-405 h-8 border border-solid border-gry3 bg-gry2 rounded" required>
            <div class="text-base text-red" v-if="passworderr">{{ passworderrm }}</div>
            <div>
            <button  class="border border-solid border-blue bg-blue pt-1 mt-5 w-405 h-8 text-xs text-center mb-2 text-gry2 rounded" @click="postlogin">Login</button>
            </div>
          </form>
            <div class="flex">
                <div class="ml-1 text-base">Don’t have account?</div>
                <div><router-link to="/" class="ml-1 text-base "><b>Register Now</b></router-link></div>
            
            </div>
        </div>
    </div>
</section>

</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      token:'',
        passworderr:null,
        passworderrm:null,
        emailerr:null,
        email: '',
    password:''
   }
    },
    created(){
      this.token= localStorage.getItem('token')
    },
  methods: {
    postlogin(){
  axios.post('https://api.realworld.io/api/users/login',{
    headers:{
      Authorization:'Bearer '+ this.token
    },
  'user': {
    'email': this.email,
    'password': this.password
  }
})
  .then(res=>{
    this.token=res.data.user.token;
    localStorage.setItem('token', this.token)
    this.$router.push('/')
  })
  .catch(err=>{
    console.log(13,err);
  })
},
  post(){
    console.log(this.email)
    console.log(this.password)
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
getarticlfeed(){
  axios.get('https://api.realworld.io/api/articles/feed',{
    headers:{
      Authorization:'Bearer '+ this.token
    }
})
}
}
</script>

<style>

</style>
