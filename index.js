export default class IndexViewCtrl {
    constructor(UserSessionSvc, FLAGS) {
        this.FLAGS = FLAGS;
        this.appTitle = FLAGS.title;
        this.isLoggedIn = false;

        UserSessionSvc.getLoggedInUser()
            .then(() => this.isLoggedIn = true);
    }
}

IndexViewCtrl.$inject = [
    "UserSessionSvc",
    "FLAGS"
];
