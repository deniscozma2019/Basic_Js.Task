const app = new Vue({
    el: '#app',
    data: {
    username: 'Denis' ,age :20
    },
    methods:{
        checkAge: function(){
            console.log("method");
            if(this.age > 17)
                return "доступ разрешен";
            else
                return "доступ запрещен";

    }
    }
})
