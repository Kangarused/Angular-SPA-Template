import AppController from "../app.controller";

export default class CoreControllers {
    public static Register(ngApp: ng.IModule) {
        ngApp.controller('appController', AppController);
    }
}