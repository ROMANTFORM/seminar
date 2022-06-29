<template>
  <div>
    <header class="header">
      <div class="main-container">
        <div class="header-container">

          <div class="mob-burger__btn" >
            <button @click="openMenu"></button>
          </div>

          <div class="logo-container"></div>
          <div class="input-container">
            <input type="text" class="search-input" placeholder="Шукайте будь-що..." v-model="searchValue">
            <button class="search__btn" @click="onSearch"></button>
          </div>
         
            <div class="autorize-block">
              <div class="account">
                <span class="account__img"></span>
                <span class="account__count"></span>
                <span class="account__text">person@gmail.com</span>
              </div>

              <div class="notification">
                <span class="notification__count"></span>
              </div> 
            </div>
        </div>
      </div>
    </header>
    
    <nav class="nav">
      <div class="main-container">
        <div class="nav-container">
          <div>
            <router-link to="/" exact-active-class = "_active" class="nav-link">Усі відео</router-link>
            <router-link to="/docs" class="nav-link">Документи</router-link>
            <router-link to="/themes" class="nav-link">Теми</router-link>
            <router-link to="/automatic" class="nav-link">Автоматизація</router-link>
            <router-link to="/heading" class="nav-link">Рубрики</router-link>
            <router-link to="/consultant" class="nav-link">Особистий консультант</router-link> 
          </div>
          <button class="subscribe-btn">передлатити</button>
        </div>
        
      </div> 
    </nav>

    <transition name="slide-fade">
    <div class="mob-nav" v-if="openBurger" @click="away">
      
        <router-link to="/" class="mob-nav-link">Усі відео</router-link>
        <router-link to="/docs" class="mob-nav-link">Документи</router-link>
        <router-link to="/themes" class="mob-nav-link">Теми</router-link>
        <router-link to="/automatic" class="mob-nav-link">Автоматизація</router-link>
        <router-link to="/heading" class="mob-nav-link">Рубрики</router-link>
        <router-link to="/consultant" class="mob-nav-link">Особистий консультант</router-link> 
      
    </div>
    </transition>

  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { mapActions } from 'vuex'
export default{
    mixins: [ clickaway ],
    name: 'my-header',
    data(){
      return{
        openBurger: false,
        searchValue: '',
      }
    },
    
    methods:{
     ...mapActions(['UPDATE_SEARCH']),
      onSearch(){
       
        this.UPDATE_SEARCH(this.searchValue)
      },
      openMenu(e){
        console.log(e.target)
        this.openBurger = !this.openBurger
      },
      away(){
        this.openBurger = false
      }
    }
}
</script>


<style scoped lang="scss">
.header{
    background-color: $black;
    padding: 12px 0 8px 0;
    width: 100%;
}
.header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mob-burger__btn{
    display: none;
}
.logo-container{
    display: inline-block;
    width: 17%;
    height: 32px;
    background-image: url('../images/logo_white_and_color\ 1.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @include _480{
        width: 47%;
    }
}
.input-container{
    position: relative;
    width: 60%;
    height: 40px;
    @include _480{
        display: none;
    }
}
.search-input{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    outline: none;
    padding-left: 15px;
}
.search__btn{
    position: absolute;
    top: 20%;
    right: 3%;
    width: 22px;
    height: 22px;
    background-color: transparent;
    background-image: url('../images/search.png');
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
}
.autorize-block{
    display: flex;
    align-items: center;
}
.account{
    display: flex;
    position: relative;
    margin-right: 18px;
}
.account__img{
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    background-image: url('../images/account.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.account__count,
.notification__count{
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: $red;
    border-radius: 50%;
}
.account__count{
    position: absolute;
    bottom: 0;
    left: 9px;
}
.account__text{
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    text-transform: lowercase;
    color: $white;
    @include _480{
        display: none;
    }
}
.notification{
    display: inline-block;
    width: 21px;
    height: 24px;
    background-image: url('../images/ring.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    @include _985{
        display: none;
    }
}
.notification__count{
    position: absolute;
    top: 2px;
    right: 0;
}
.mob-burger__btn{
    @include _480{
      display: block;
        width: 18px;
        height: 20px;  
    }   
}
.mob-burger__btn button{
    @include _480{
      width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        background-image: url('../images/list.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;  
    }
}
.mob-nav{
    @include _480{
       position: absolute;
        z-index: 1;
        top: 6%;
        left: 0;
        width: 310px;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        background-color: $red; 
    }
}
.mob-nav-link{
    @include _480{
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: $white;
        text-decoration: none;
        display: inline-block;
        padding: 18px 12px; 
    }
}
.nav{
    background-color: $grey;
    width: 100%;
    @include _480{
        display: none;
    }
}
.nav-link{
font-weight: 300;
font-size: 16px;
line-height: 150%;
color: $white;
text-decoration: none;
display: inline-block;
padding: 18px 12px;
transition: all 200ms linear;
}
.nav-link:first-child{
    padding-left: 6px;
}

.nav-link:hover{
    transition: all 200ms linear;
    background-color: $red;
}
.subscribe-btn{
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: $white;
    padding: 7px 119px 6px 89px;
    background-color: $red;
    border-radius: 5px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    @include _1270 {
        padding: 7px 30px 6px 30px;
    }
}
.nav-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>