<template>
    <div class="home">
        <testAja/>
        <homePage/>
        <TipeJurusan/>
        <TampilBuku/>
    </div>
</template>

<script>
import testAja from '@/components/test.vue'
import homePage from '@/components/home.vue'
import TipeJurusan from '@/components/jurusan.vue'
import TampilBuku from '@/components/buku.vue'

export default {
    name: 'HomeViews',
    components : {
        testAja,
        homePage,
        TipeJurusan,
        TampilBuku
    }
}

</script>

<style>
#home {
    font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>