var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        operand: '+'

    },
    computed: {
        suma() {
            switch (op){
            case '+':
            return this.a + this.b;
            break;

            case '-':
            return this.a - this.b;
                break;
            case '*':
            return this.a * this.b;
                break;
            case "/":
                return this.a / this.b;
        }
        }
    }
})