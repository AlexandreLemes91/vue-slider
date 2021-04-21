const app = new Vue({
    el: "#app",

    created(){
        this.picTransition();
    },

    data: {
        pictures: [
            "./img/0.jpg",
            "./img/1.jpg",
            "./img/2.jpg",
            "./img/3.jpg",
        ],
        indexPic: 0,
        intervalID: null,
    },

    methods: {
        nextPic(){
            this.indexPic++;
            if( this.indexPic > (this.pictures.length) - 1 ){
                this.indexPic = 0;
            }
        },
        prevPic(){
            this.indexPic--;
            if( this.indexPic < 0 ){
                this.indexPic = this.pictures.length - 1;
            }
        },
        setPic(element){
            this.indexPic = element;
        },
        picTransition(){
            this.intervalID = setInterval(() =>{
                this.nextPic();
            }, 3000);
        },
        stopTransition(){
            clearInterval(this.intervalID);
        }
    }
});