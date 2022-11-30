<template>
    <h1>Nama buku {{ bukuDetails.nama_buku }}</h1>
    </template>
    
    <script>
    
    import axios from 'axios';
    
    export default {
    name: 'BacaDetails'   ,
    
    data() {
        return {
            bukuDetails: []
        };
    },
    
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/posts/"  + this.$route.params.id)
        .then(res => this.bukuDetails= res.data.data)
        .catch(err => console.log(err));
    },    
    
    
    }
    
    
    
    </script>
    
    
    <style scoped>
    
    
    </style>