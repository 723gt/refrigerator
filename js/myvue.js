var config = new Vue({
    el: "#config",
    data: {
        config: false
    },
    methods:{
        config_open: function(){
            if(this.config){this.config = false;}
            else{this.config = true;}
        }
    }
})

var kondate = new Vue({
    el: "#kondate",
    data:{
        kondate: false
    },
    methods:{
        kondate_open: function(){
            if(this.kondate){this.kondate = false;}
            else{this.kondate = true;}
        }
    }
})

var scans = new Vue({
    el: "#scans",
    data:{
        scnacheck: false
    },
    methods:{
        scan_open: function(){
            if(this.scnacheck){this.scnacheck = false}
            else{this.scnacheck = true}
        }
    }
})

var soibarg = new Vue({
    el: "#soibarg",
    data:{
        soibarg: false
    },
    methods:{
        soibarg_open: function(){
            if(this.soibarg){this.soibarg = false}
            else{this.soibarg = true}
        }
    }
})

var maerbor = new Vue({
    el: "#maerbor",
    data:{
        maerbor: false
    },
    methods:{
        maerbor_open: function(){
            if(this.maerbor){this.maerbor = false}
            else{this.maerbor = true}
        }
    }
})