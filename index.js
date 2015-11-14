class IndexViewCtrl {
    constructor(UserSessionSvc, FLAGS) {
        this.FLAGS = FLAGS;
        this.isLoggedIn = false;

    }

    test(){
    	console.dir(this);
    }
}

var v = new IndexViewCtrl();
v.test();//in the console log, the this is IndexViewCtrl

var service = {
    doSomeThing: function(fn){
        fn();//in the console log, the this is undefined
    }
}
service.doSomeThing(v.test);