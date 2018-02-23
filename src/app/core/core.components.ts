import homeComponent from "../home/home.component";

export default class CoreComponents {
    public static Register(ngApp: ng.IModule) {
        ngApp.component('homeComponent', homeComponent);
    }
}