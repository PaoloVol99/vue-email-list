const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        emailList: [],
        temporaryArray: [],
      }
    },
    mounted() {
      for (let i = 0; i < 10; i++) {
        this.getEmail()
      }
    },

    methods: {
      getEmail() {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((res) => {
            console.log(res.data.response)
            this.temporaryArray.push(res.data.response)
            if (this.temporaryArray.length === 10) {
              this.pushResults()
            }
          })
      },
      pushResults() {
        for (let i = 0; i < this.temporaryArray.length; i++) {
          this.emailList.push(this.temporaryArray[i])
        }
      }
    },
  }).mount('#app')