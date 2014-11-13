var app = angular.module('app', ['ngLocalize', 'ngLocalize.Config', 'ngLocalize.InstalledLanguages', 'ngCookies', 'ngResource', 'ngSanitize', 'ngLocalize.Events']);

app.value('localeConf', {
    basePath: 'lang',
    defaultLocale: 'es-ES',
    sharedDictionary: 'main',
    fileExtension: '.json',
    persistSelection: true,
    cookieName: 'COOKIE_LOCALE_LANG',
    observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
    delimiter: '::'
});

app.value('localeSupported', [
    'es-ES',
    'ca-ES',
    'en-US'
])
.value('localeFallbacks', {
    'es': 'es-ES',
    'ca': 'ca-ES',
    'en': 'en-US'
});

app.controller('langCtrl', ['$scope', 'locale', function($scope, locale){

    $scope.setLocale = locale.setLocale;

}]);