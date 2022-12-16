const { createApp} = Vue

createApp({
    data(){
        return{
            message : 'hello vue js',
            image : 'IMG_1987.JPG'
        }
    }
}).mount('#hello-vue')