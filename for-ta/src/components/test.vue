<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark shadow-1-strong fixed-top">
    <div class="container">
      <a class="navbar-brand" route-link to="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li class="nav-item">
            <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link to="/sains">Sains</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link to="/social">Social</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
    name : 'testAja'
}
</script>

<style>

.navbar .navbar-collapse {
  text-align: center;
  font-weight: bold;
  margin-right: 10%;
  
}
.navbar-nav .nav-link.active  {
  color: #1E1E1E;
}

.nav-item a {
  color: #1E1E1E;
}



</style>