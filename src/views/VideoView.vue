<template>
    <div class="video-section">
        <div class="main-container">
            <div class="video-content__container">
                <my-filter/> 
                <div class="video-content">
                    <h1 class="section-title">Усі відео</h1>
                    <hr>
                    <div class="catalog-controls">
                        <my-select
                        :options="this.options"
                        :selected="this.selected"
                        @select="optionSelect"
                        ></my-select>
                        <button class="filter-btn btn-tile" :class="{activeTile: this.tile}" @click="openTile"></button>
                        <button class="filter-btn btn-list" :class="{activeList: !this.tile}" @click="openList"></button>
                    </div>
                    <ul class="video-tile" v-if="this.tile">
                        <li 
                        v-for="card in sortedData" 
                        :key="card.id" 
                        class="video-tile__card"
                        >
                            <img :src="`${card.covers.main}`" alt="pic" class="card__img">
                            <span class="card__date">{{card.date.substring(0, 10)}}</span>
                            <div class="card-info__container">
                                <p class="card__text">{{card.title}}</p>
                                <div class="card__rating">
                                    <span class="rating__point">5.0</span>
                                    <span class="rating__star"></span>
                                    <span class="rating__star"></span>
                                    <span class="rating__star"></span>
                                    <span class="rating__star"></span>
                                    <span class="rating__star"></span>
                                    <span class="rating__count">(231)</span>
                                </div>
                                <div class="card-btn__container">
                                    <button class="card__btn">Дивитися<span></span></button>
                                    <input class="my-checkbox" type="checkbox" name="like" :id="card.id">
                                    <label :for="card.id"></label>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="video-list" v-if="!this.tile">
                        <li 
                        class="video-list__card" 
                        v-for="card in sortedData" 
                        :key="card.id">
                        <div class="card-list__img-container">
                          <img :src="`${card.covers.main}`" alt="pic" class="card-list__img">  
                        </div>
                        
                        <div class="card-list__info-container">
                            <span class="card-list__date">{{card.date.substring(0, 10)}}</span>
                            <p class="card-list__text">{{card.title}}</p>
                            <div class="card-list__rating">
                                <span class="rating__point">5.0</span>
                                <span class="rating__star"></span>
                                <span class="rating__star"></span>
                                <span class="rating__star"></span>
                                <span class="rating__star"></span>
                                <span class="rating__star"></span>
                                <span class="rating__count">(231)</span>
                            </div>
                        </div>

                        <div class="card-list-btn__container">
                            <button class="card__btn">Дивитися<span></span></button>
                            <input class="my-checkbox" type="checkbox" name="like" :id="card.id">
                            <label class="card-list__label" :for="card.id"></label>
                        </div>

                        </li>
                    </ul> 
                    <button class="load-more__btn" @click="loadMore"><span></span>Показати ще...</button>
                </div> 
            </div>  
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import MyFilter from '../components/MyFilter.vue';
import MySelect from '../components/MySelect.vue';

export default{
    name: "VideoView",
    components: {
        MyFilter,
        MySelect
    },

    data(){
        return{
           options: [
            {name: 'Спочатку нові', value: 1},
            {name: 'Популярні', value: 2},
            {name: 'За рейтингом', value: 3},
           ],
           selected: 'Сортувати',
           sortedItems: [],
           tile: true, 
        }
    },
    computed:{ 
        ...mapGetters(["GET_DATA", "GET_SEARCH"]),
        sortedData(){
            if(this.sortedItems.length){
                return this.sortedItems
            } else {
                return this.GET_DATA
            }
        }
        },
    methods: {
        optionSelect(option){
            this.selected = option.name;
            this.sortedItems = [];
            let ctx = this;
            this.GET_DATA.map(function(item){
                if(item.options.popular){
                   ctx.sortedItems.push(item) 
                }
            })
        },
        loadMore(){
            this.$store.dispatch('UPDATE_LIMIT');
            this.$store.dispatch('GET_DATA_FROM_API');
        },
        openTile(){
            this.tile = true
        },
        openList(){
            this.tile = false
        },
        sortProductBySearch(value){
            if(value){
               this.sortedItems = this.sortedItems.filter(item => {
                item.title.toLowerCase().include(value.toLowerCase())
            }) 
            } else {
                return
            }
            
        }
    },
    watch:{
        GET_SEARCH(){
            this.sortProductBySearch(this.GET_SEARCH)
        }
    },
    mounted(){
        this.$store.dispatch('GET_DATA_FROM_API')
    }
}
</script>

<style lang="scss">
.video-content__container{
    display: flex;
    justify-content: space-between;
}
.video-tile{
    width: 59%;
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    gap: 39px;
    margin-top: 26px;
    margin-bottom: 69px;
    @include _985 {
      grid-template-columns: repeat(2, 1fr);
      width: 100%;  
    }
    @include _480{
        grid-template-columns: repeat(1, 1fr);
    }
}
.catalog-controls{
    margin-top: 9px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.filter-btn{
    width: 16px;
    height: 16px;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-left: 9px;
    cursor: pointer;
    transition: all 200ms linear;
}
.btn-tile{
    background-image: url('../images/tile.png');
}
.btn-tile:hover{
    background-image: url('../images/tile-active.png');
    background-size: 150%;
    transition: all 200ms linear;
}
.btn-list{
    background-image: url('../images/list.png');
}
.btn-list:hover{
    background-image: url('../images/list-active.png');
    transition: all 200ms linear;
}
.activeTile{
    background-image: url('../images/tile-active.png');
    background-size: 150%;
}
.activeList{
    background-image: url('../images/list-active.png'); 
}

.video-tile__card{
    position: relative;
    display: block;
    width: 257px;
    height: 430px;
    background: $white;
    border: 1px solid $light-grey;
    border-radius: 5px;
    
}
.card__img{
    width: 255px;
    height: 240px;
    border-radius: 5px 5px 0px 0px;
}
.card-info__container{
    padding: 0 20px 21px 20px;
    height: 185px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card__date{
    position: absolute;
    top: 53%;
    left: 24%;
    display: inline-block;
    padding: 3px 36px;
    background: $white;
    border-radius: 5px;
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    color: $red;
}
.card__text{
    font-weight: 300;
    font-size: 16px;
    line-height: 120%;
    color: $black;
    margin-top: 15px;
}

.card__rating{
    display: flex;
    align-items: center;
    width: 160px;
    margin: 6px auto 0;
}
.rating__point{
    font-weight: 300;
    font-size: 26px;
    line-height: 150%;
    color: $red;
    margin-right: 6px;
}
.rating__star{
    display: block;
    width: 14px;
    height: 14px;
    background-image: url('../images/Star\ 1.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.rating__count{
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: #262D4A;
    margin-left: 4px;
}

.card-btn__container{
    position: relative;
}
.card__btn{
    position: relative;
    cursor: pointer;
    width: 180px;
    height: 34px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    background-color: $white;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    text-align: center;
    text-transform: uppercase;
    color: $black;
    margin: 13px 20px 0 0;
}
.card__btn span{
    position: absolute;
    top: -1px;
    right: -1px;
    width: 34px;
    height: 34px;
    background-color: $red;
    background-image: url("../images/arrow-white.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 15%;
    border-radius: 5px;
}

.my-checkbox{
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.my-checkbox+label {
  
  position: absolute;
    bottom: 6%;
  }
.my-checkbox+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    background-image: url('../images/heart.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
  }
  .my-checkbox:checked+label::before {
    background-image: url("../images/heart-active.png");
  }

  .load-more__btn{
    position: relative;
    display: block;
    width: 150px;
    height: 40px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    color: $black;
    margin: 0 auto;
  }
  .load-more__btn span{
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background-image: url("../images/loader.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }


  .video-list__card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 850px;
    height: 161px;
    background: $white;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    margin-top: 25px;
    @include _985{
        width: 100%;
    }
    @include _480{
        flex-direction: column;
        height: 100%;
        padding: 10px;
    }
  }
  .video-list__card:last-child{
    margin-bottom: 25px;
  }
  
  .card-list__img{
    display: block;
    width: 173px;
    height: 159px;
    border-radius: 5px 0px 0px 5px;
    @include _480{
      display: none;  
    }
  }

.card-list__info-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 377px;
    height: 159px;
    padding: 16px 0;
    @include _985{
       width: 30%; 
    }
    @include _480{
       width: 100%;
        align-items: center; 
    }
}
.card-list__date{
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    color: $red;
}
.card-list__text{
    font-weight: 400;
    font-size: 15px;
    line-height: 120%;
    color: $black;
    @include _480{
       text-align: center; 
    }
}
.card-list__rating{
    display: flex;
    align-items: center;
}
.card-list-btn__container{
    position: relative;
}
input+.card-list__label{
    bottom: 115%;
    right: 15%;
    @include _480{
       bottom: 360%;
        right: -16%; 
    }
}
</style>
