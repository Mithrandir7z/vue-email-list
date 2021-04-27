//cdn vue V
//cdn api v
//sintassi vue V
//sintassi api V
//importare api boolean V
//stampare email ...

//https://flynn.boolean.careers/exercises/api/random/mail


var app = new Vue({


    el: '#root',

    data: {
        emailGen: "",
        arrayEmails: [],
        status: false
    },

    methods: {
        
    },

    mounted() {
        
        for (let i = 0; i < 10; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                
                this.emailGen = response.data;
                console.log(this.emailGen.response);

                this.arrayEmails.push(this.emailGen.response);
                console.log(this.arrayEmails);
                
                
            });
        } 

        this.status = true;
        console.log("status", this.status);

    }


})
  