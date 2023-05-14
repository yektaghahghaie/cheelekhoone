<template>
    
   <section class="All Posts">
  <div class="flex w-1440 h-16 bg-gry4 pt-2.5 pr-7 pb-2.5 pl-4">
      <div class="text-gry2 mt-1.5 mr-0.5 mb-1.5 ml-0 text-2xl w-44 h-7">Arvan Challenge</div>
      <div class="text-base text-gry2 h-5 w-44 mt-3 mr-953 mb-3 ml-5">Welcome</div>
      <button> <router-link to="/about" class="rounded border border-solid text-blue2 border-blue2 h-10 w-20">Logout</router-link></button>
  </div>
  <div class="flex">
      <div class="w-64 h-964 mr-8 mt-0 mb-0 ml-0 pt-3 pr-0 pb-817 pl-3 bg-blue">
          <div class="w-11 h-7 text-2xl text-gry2 mt-0 mr-48 mb-7">Post</div>
          <button @click="getarticles" class="w-24 h-5 text-gry2 text-lg mt-0 mr-32 mb-4 ml-3.5">All Articles</button>
          <button><router-link to="/new"  class="w-24 h-5 text-gry2 text-lg mt-0 mr-32 mb-4 ml-3.5">New Article</router-link></button>
      </div>
      <div class="mt-6">
          <div class="text-black text-4xl">All Posts</div>
          <div class="flex gap-x-20 pl-6 mt-6 pt-1.5 pb-1.5 bg-blue w-1136">
              <div class="">#</div>
              <div class="mr-32">Title</div>
              <div class="">Author</div>
              <div>Tags</div>
              <div class="ml-12">Excerpt</div>
              <div class="ml-80">Created</div>
          </div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class="">1</div>
              <div class=""></div>
              <div class=""></div>
              <div class=""></div>
              <div class=""></div>
              <div class=""></div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class=""></div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class="">3</div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class="">4</div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class="">5</div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class="">6</div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class="">7</div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class="">8</div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-6 mt-6">
              <div class="">9</div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                  <option value="Edit">Edit</option>
                  <option value="Delete">Delete</option>
              </select>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="flex bg-gry2 w-1440 h-12 gap-x-12 pl-4 mt-6" v-show="dilit">
              <div class="">10</div>
              <div class="">Article title</div>
              <div class="">@author_username</div>
              <div class="">list of tags</div>
              <div class="">First 20 words of article body</div>
              <div class="">June 11 ,2019</div>
              <select class="bg-blue2 rounded pl-3 text-gry2 mb-1">
                  <option value="...">...</option>
                 <option value="Edit"> <router-link to="/">Edit</router-link></option>
                 <option value="Delete" @click="dodelete">Delete</option>
              </select>
              <button @click="dilit=false" value="Delete">Delete</button>
          </div>
          <div class="border-b border-solid border-red mb-3 w-1136"></div>
          <div class="mt-16 ml-467">
            <button class="w-8 border border-solid border-red" @click="backward">w</button>
              <button><router-link to="/all" class="w-8 border border-solid border-red">1</router-link></button>
                      <button><router-link to="/all2" class="w-8 border border-solid border-red">2</router-link></button>
                      <button><router-link to="/all3" class="w-8 border border-solid border-red">3</router-link></button>
                      <button><router-link to="/all4" class="w-8 border border-solid border-red">4</router-link></button>
                      <button class="w-8 border border-solid border-red" @click="forward">f</button>
                    
                     
          </div>
      </div>
  </div>
</section>

                    <div>{{ articles }}</div>
                    <button @click="getarticles">cklic</button>
                  
                    <article v-for='article in articles' :key="article.slug">
                        <div>{{ article.body }}</div>
     </article>
                   
</template>

<script>
import axios from "axios";
export default {
data(){
    return{
        articles:[],
     article:" ",
        dilit:true
    }
},
mounted(){
this.d()
},
methods:{
    d(){
        const $this=this
    this.$axios.get('https://api.realworld.io/api/articles')
  .then(function (response) {
    // handle success
    console.log(response);
    $this.articles=response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
},
dpdelete(){
   axios.delete('https://api.realworld.io/api/articles/{slug}',{
    headers:{
      Authorization:'Bearer '+ this.token
    },
  'article': {
    "title":this.title,
     "description":this.description,
      "body":this.body,
      "tagList":this.tagList,
  }
})
  .then(res=>{
    this.token=res.data.article.token;
    localStorage.setItem('token', this.token)
    this.$router.push('/All')
  })
  .catch(err=>{
    console.log(13,err);
  })
},
   getarticles(){
    axios.get('https://api.realworld.io/api/articles')
  .then(res=>{
    this.articles=res.data.data;
  })
  .catch(err=>{
    console.log(12,err);
  })
},
},
}
</script>

<style>

</style>