var app = new Vue({
	el: '#app',
	data: {
		num: 0
	},

	computed: {
		
	},

    methods: {
        sumar(){
			this.num = this.num + 1;
		},

		restar(){
			this.num = this.num - 1;
		},
    }
})