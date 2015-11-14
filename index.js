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
v.test();

var service = {
    doSomeThing: function(fn){
        fn();
    }
}
service.doSomeThing(v.test);