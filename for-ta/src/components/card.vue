<template>
    <div>
          <div class="card" style="width: 18rem;" v-for="itemPost in posts" v-bind:key="itemPost.id">
            <img src="#" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ itemPost.nama_buku }}</h5>
              <h5 class="card-title">{{ itemPost.jurusan.nama_jurusan }}</h5>
              <h5 class="card-title">{{ itemPost.kelas.nama_kelas }}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a :href="itemPost.url" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

</template>

<script>

import axios from "axios";

export default {
    name: 'cardVue',

    data() {
    return {
        posts: []
    };
},
mounted() {
    axios
    .get("http://127.0.0.1:8000/api/posts")
    .then(res => (this.posts = res.data.data))
    .catch(err => console.log(err));
},

}


</script>