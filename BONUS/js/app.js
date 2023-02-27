const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        emailList: [],
        temporaryArray: []
      }
    },
    methods: {
      getEmail() {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((res) => {
            console.log(res.data.response)
            this.temporaryArray.push(res.data.response)
          }) 
      }
    },
    mounted() {
      for (let i = 0; i < 10; i++) {
        this.getEmail()
      }
      setTimeout(() => {
        for (let i = 0; i < this.temporaryArray.length; i++) {
          this.emailList.push(this.temporaryArray[i])
        }
      }, 1000)
    }
  }).mount('#app')