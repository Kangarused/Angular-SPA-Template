import * as moment from 'moment';
import { ILocationProvider } from 'angular';

function configure(
    $mdThemingProvider: ng.material.IThemingProvider,
    $mdDateLocaleProvider: ng.material.IDateLocaleProvider,
    $locationProvider: ILocationProvider) {

    const dateFormat = "DD/MM/YYYY";

    // Angular material theme configuration
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('cyan', {
            'default': '500'
        });

    // Angular material datepicker configuration    
    $mdDateLocaleProvider.formatDate = function (date) {
        return date ? moment(date).format(dateFormat) : '';
    };

    $mdDateLocaleProvider.parseDate = function (dateString) {
        var m = moment(dateString, dateFormat, true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };

    $locationProvider.html5Mode(true);
}

configure.$inject = ['$mdThemingProvider', '$mdDateLocaleProvider', '$locationProvider'];

export default configure;