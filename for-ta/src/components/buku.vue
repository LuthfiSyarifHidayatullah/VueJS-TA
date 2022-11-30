<template>
    
<h5>Daftar Buku</h5>
    <div class="container">
        <!-- pencarian berdasarkan nama buku -->
        <label class="form-label">Cari buku</label>
        <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="search" aria-describedby="basic-addon3" placeholder="Cari buku Apa hari ini?">
    </div>

    <!-- pencarian berdasarkan jurusan -->
        <div class="card-group">
        <div class="card" style="width: 15rem; " v-for="jur in filteredPosts" v-bind:key="jur.id">
          <img src="img/sains.png" class="card-img-top" >
          <div class="card-body">
            <h4 class="card-title">{{ jur.nama_buku }}</h4>
            <p class="card-text">{{ jur.jurusan.nama_jurusan }}</p>
            <p class="card-text">{{ jur.kelas.nama_kelas }}</p>
            <a :href="'http://127.0.0.1:8000/storage/'+jur.name"  class="btn btn-primary">Baca</a> 
          </div>
        </div>
    </div>
      </div>
</template>

<script>

import axios from 'axios';

export default {
name: 'TampilBuku'   ,

data() {
    return {
        search : '',
        select : '',
        posts: []
    };
},
mounted() {
    axios
    .get("http://127.0.0.1:8000/api/posts")
    .then(res => (this.posts = res.data.data))
    .catch(err => console.log(err));
},

computed: {
    filteredPosts() {
        return this.posts.filter(post => post.nama_buku.toLowerCase().includes(this.search.toLowerCase())) 
        // return this.posts.filter(jur => jur.jurusan.nama_jurusan.includes("Sains")) 
    }
    // filteredSelect() {
    //     return this.posts.filter(post => post.jurusan.nama_jurusan.toLowerCase().includes(this.select.toLowerCase()))
    // }

    
}


}



</script>


<style scoped>
.buku {
    padding-top: 1%;
}

h5 {
    text-align: left;
    margin-left: 8.5%;
}

.card {
    padding-left: 2%;
    margin-right: 10px;
    max-width: 254px;
    max-height: 330px;
}

.form-control {
max-width: 230px;
}


.card img {
    max-width: 120px;
    max-height: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

h4 p {
    text-align: left;
}

</style>