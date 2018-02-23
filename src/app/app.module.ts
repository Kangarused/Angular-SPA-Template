import { module } from 'angular';
import Core from './core/core.module';
import Shared from './shared/shared.module';
import CoreRoutes from './core/core.routes';
import { StateService } from 'angular-ui-router';
import CoreControllers from './core/core.controllers';
import CoreComponents from './core/core.components';

export default class AppModuleLoader {
    public static ngApp: ng.IModule;
    constructor() {
        AppModuleLoader.ngApp = module('app', [Core, Shared]);
        
        CoreControllers.Register(AppModuleLoader.ngApp);
        CoreComponents.Register(AppModuleLoader.ngApp);

        AppModuleLoader.ngApp.config(['$compileProvider', '$stateProvider', ($compileProvider, $stateProvider) => {
            let isProductionBuild: boolean = __ENV !== "build";
            $compileProvider.debugInfoEnabled(!isProductionBuild);

            CoreRoutes.Register($stateProvider);
        }]);

        AppModuleLoader.ngApp.run(['$state', ($state: StateService) => {
            $state.go('home');
        }]);
    }
}
new AppModuleLoader();