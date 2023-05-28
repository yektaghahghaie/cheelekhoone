<template>
  <div class="list">
    <div v-for='(article,index) in data' :key="index">
      <div class="img">
      <div v-if="article.images"><img :src="article.images[0]" alt=""></div>
        <div v-else><img class="no" :src="article.poster" alt=""></div>
      <div class="box">
        <div class="groh">
          <div class="poster"><img :src="article.poster" alt=""></div>
          <div>
            <div class="title">{{ article.title }}</div>
            <div class="id">2017</div>
            <div class="groh">
              <button class="id">117 min </button>
              <div class="genres">
                <div v-for="(mo,index2) in article.genres" :key="index2">
                <div>{{ mo }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="id">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br>
          Ratione sequi nobis commodi deleniti iste tempora temp<br>
          exercitationem ipsam dolorum vero accusantium recusand<br>
          libero unde praesentium architecto sunt ab vitae!
      </div>
    </div>
  </div>
  </div>
  <button class="btn" @click="b()">movies</button>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
   const data=ref([]);
const movies=ref(1);
 function d(){
    axios.get(`https://moviesapi.ir/api/v1/movies?page=${movies.value}`)
  .then(function (response) {
    console.log(response);
    data.value=response.data.data
  })
  .catch(function (error) {
    console.log(error);
  })
}
function b(){
  movies.value++
  d()
}
 d();
return{data,b};
  },
}


</script>
<style >
.list{
  background: black;
  margin: auto;
  width: 2000px;
  border: 1px solid black;
  border-radius: 30px;
  z-index: -1;
}
.title{
  color: bisque;
}
.genres{
  color: bisque;
  display: flex;
}
.id{
  color: bisque;
}
.box{
position: absolute;
z-index: 1;
top: 30px;
  padding-left:100px;
}
.poster{
  width: 100px;
}
.groh{
  display: flex;
  gap: 30px;
}
.img{
  position: relative;
padding-left: 300px;
z-index: 0;
margin-bottom: 150px;
}
.btn{
  margin-left: 910px;
  background-color: brown;
  padding:20px;
  width: 140px;
}
.no{
  width: 1300px;
  height: 700px;
}
</style>