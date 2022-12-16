const { createApp} = Vue

createApp({
    data(){
        return{
            message : 'hello vue js',
            image : 'jumbo.png',
            width : 'img-width'
        }
    }
}).mount('#hello-vue')