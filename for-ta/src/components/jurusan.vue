<template>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h5>Pilih Buku Sesuai Jurusan Kamu</h5>        
                </div>
              </div>
            </div>
          <div class="container mt-3 mb-5 jurusan">
            <div class="row">
              <div class="col-lg-6 col-md-4 col-12" >
                <router-link to="/sains">
                  <img src="img/sains.png">
                  <h3>Sains</h3>
                </router-link>
              </div>
              <div class="col-lg-6 col-md-4 col-12">
                <router-link to="/social">
                <img src="img/social.png">
                <h3>Social</h3>
              </router-link>      
            </div>
            </div>
          </div>
 
</template>

<script scoped>
export default {
    name: 'TipeJurusan'
}
</script>

<style scoped>

 

h5 {
    font-weight: bold;
    text-align: center;
}

h3 {
  text-align: center;
}

.jurusan img {
    max-height: 230px;
    max-width: 230px;
    margin-left: 27%;
    
}


</style>

