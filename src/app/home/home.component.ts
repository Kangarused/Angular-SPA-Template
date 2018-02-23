import { IComponentController, IComponentOptions } from 'angular';
import './home.styles.scss';

export class HomeController implements IComponentController {

    public title: string = "Home Page";
    static $inject = ['$scope'];

    constructor(
        private $scope: Core.IVmScope
    ) {
        this.$scope.vm = this;
    }

    public $onInit() {}
}

const homeComponent: IComponentOptions = {
    controller: HomeController,
    template: require('./home.html') as string
};

export default homeComponent;