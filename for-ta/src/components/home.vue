<template>
    <div class="homePage">
        <div class="row">
            <div class="img-banner">
                <img src="home.png" alt="">
                <h4 class="title-text">Temukan <span id="Buku"> Buku </span> Pelajaran <br/> Yang Kamu Butuhkan </h4>
                <p class="title-desc">
                    Lebih dari 50+ buku bisa kamu jadikan proses <br/>  
                    belajar kamu jadi lebih menyenangkan     
                </p>
            </div>
        </div>
        
        
        
    </div>
</template>

<script>
export default {
    name : 'homePage'
}
    
</script>

<style>
.homePage img {
    width: 1350px;
    height: 1000px;
    margin-top: -60px;
}

.title-text {
    position: absolute;
    top: 10%;
    margin-left: 30%;
    font-weight: bold;
    text-align: center;
    font-size: 45px;

}
.title-desc {
    position: absolute;
    top: 28%;
    margin-left: 37%;
    text-align: center;
    font-size: 15px;
}

#Buku {
    color: #DF7024;
    text-align: bolder;
}


</style>