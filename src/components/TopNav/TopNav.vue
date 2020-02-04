<template>
  <nav aria-label="primary top nav">
    <div class="nav-container">
        <ul class="menu" data-dropdown-menu>
          <li><router-link v-bind:to="'/request-quote'">Request A Quote</router-link></li>
        </ul>
        <div class="">
          <span><a href="mailto:4d-den@globaltranz.com?subject=Mail from 4D Local Movers App">4D-DEN@GlobalTranz.com</a></span>
          <span>(720) 996 9800</span>
        </div>
    </div>
  </nav>
</template>
  
<script>
  export default {
    name: 'top-nav'
  }
</script>

<style lang="scss" scoped>
  .title-bar {
    background: #bbc4db;
    top: -91px;
    position: relative;
  }
      
  .nav-container {
    display: none;
  }

  @media only screen and (max-width: 320px) {
    .title-bar {
      top: -83px;
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 376px) {
    .title-bar {
      top: -108px;
    }

    .nav-container {
      display: none;
    }
  }

  @media only screen and (min-width: 769px) {
    .title-bar {
      display:none;
    }

    .nav-container {
      display: block;
      padding-bottom: 0px;
      padding-top: 0px;
      border-bottom: 1px rgba(179, 179, 179, 0.5) solid;
      padding-left: 2px;
      margin-top: -20px;
      margin-bottom: 40px;
      background-color: #bbc4db;

      ul {
        margin-top: 20px;
        li {
          a {
            background-color: #bbc4db;
            color: #FFF;
          }
        }
      }

      span {
        float: right;
        position: relative;
        top: -28px;
        padding-right: 20px;
        color: #FFFFFF;
        font-weight: 700;

        a {
          color: #FFFFFF;
        }
      }
    }
    .js-dropdown-active {
      display: none;
    }
    .projects-accordion:hover {
      .js-dropdown-active {
        display: block;
      }
    }
    .nav-containers {
      background-color: #bbc4db;
    }
  }
</style>