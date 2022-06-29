<template>
    <div class="filter-container" >
        <ul class="filter-list">
            <li class="filter-list__item" @click="openList">
                <div class="item-container">
                    <span class="item__icon"></span>
                    <span class="item__text">відео</span>
                </div>
                <div class="item-arrow" :class="{openArrow: isOpen}"></div>
            </li>
            <transition name="slide-fade">
            <div class="filter-sublist" v-if="isOpen">
                <li class="sublist__item">Усі відео (456)</li>
                <li class="sublist__item">Мої відео (15)</li>
                <li class="sublist__item">Безкоштовно (45)</li>
                <li class="sublist__item">Новинки (34)</li>
                <li class="sublist__item">Останні переглянуті (32)</li>
            </div>
            </transition>

            <li class="filter-list__item">
                <div class="item-container">
                    <span class="item__icon--s"></span>
                    <span class="item__text">КОНСУЛЬТАЦІЇ</span>
                </div>
                <div class="item-arrow"></div>
            </li>
            <li class="filter-list__item">
                <div class="item-container">
                    <span class="item__icon--s"></span>
                    <span class="item__text">ДОКУМЕНТИ</span>
                </div>
                <div class="item-arrow"></div>
            </li>
            <li class="filter-list__item">
                <div class="item-container">
                    <span class="item__icon--s"></span>
                    <span class="item__text">ТЕМИ</span>
                </div>
                <div class="item-arrow"></div>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'my-filter',
    data(){
        return{
           isOpen: false,
        }
    },
    methods: {
        openList(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style lang="scss">
.filter-container{
    width: 263px;
    height: 968px;
    background: $white;
    box-shadow: 0px 64px 44px rgba(0, 0, 0, 0.1);
    padding: 24px 17px 0 16px;
    @include _1270{
        width: 25%;
    }
    @include _985{
        display: none;
    }
}
.filter-list__item{
    background: $light-grey;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 230px;
    height: 40px;
    padding: 8px 0 8px 0;
    margin-bottom: 16px;
    cursor: pointer;
    @include _1270 {
        width: 100%;
        flex-wrap: nowrap;
    }
}
.item-container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 130px;
    margin-left: 16px;
}
.item__icon{
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url('../images/video.png');
    background-position: center;
    background-size: contain;
    margin-right: 6px;
    @include _1270{
        width: 16px;
        height: 16px;
    }
}
.item__icon--s{
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: $black;
    border-radius: 50%;
    margin-right: 6px; 
    @include _1270{
        width: 16px;
        height: 16px;
    }
}
.item__text{
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;
    color: $black;
    @include _1270 {
        font-size: 10px;
    }
}
.item-arrow{
    width: 16px;
    height: 16px;
    background-image: url('../images/arrow-black.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40%; 
    transition: all 200ms linear;
    margin-right: 12px;
    @include _1270 {
        width: 12px;
        height: 12px;
    }
}
.openArrow{
    transform: rotate(90deg);
    transition: all 200ms linear;
}
.filter-sublist{
    width: 230px;
    padding: 16px;
    border: 1px solid $light-grey;
    border-radius: 0px 0px 4px 4px;
    margin-top: -16px;
    margin-bottom: 16px;
    @include _1270 {
        width: 100%;
    }
}
.sublist__item{
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: $black;
    margin-bottom: 4px;
    cursor: pointer;
    transition: all 200ms linear;
}
.sublist__item:hover{
    color: $red;
    transition: all 200ms linear;
}
.video-tile__card{
    @include _1270{
        width: 100%;
    }
}
.card__img{
    @include _1270{
        width: 100%;
    }
}





</style>