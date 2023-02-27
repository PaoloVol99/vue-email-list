const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        emailList: [],
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
            this.emailList.push(res.data.response)
          })
      },
    },
  }).mount('#app')