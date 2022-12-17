const { createApp} = Vue

createApp({
    data(){
        return{
            message : 'hello vue js',
            image : 'jumbo.png',
            name_user: '',
            surname : ''
        }
    }
}).mount('#hello-vue')