<template>
    <h1>User id {{ $route.params.id }}</h1>
    <h1>Name {{ posts.nama_buku }}</h1>
    </template>
    
    <script>
    
    import axios from 'axios';
    
    export default {
    name: 'BacaDetails'   ,
    
    data() {
        return {
            posts: {}
        };
    },
    methods: {
        setPost(data) {
            this.posts = data;
        }
    },
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/posts/"  + this.$route.params.id)
        .then((response) => this.setPost = (response.data.data))
        .catch(err => console.log(err));
    },    
    
    
    }
    
    
    
    </script>
    
    
    <style scoped>
    
    
    </style>