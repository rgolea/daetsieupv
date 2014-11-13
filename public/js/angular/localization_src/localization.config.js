angular.module('ngLocalize.Config', [])
    .value('localeConf', {
        basePath: 'languages',
        defaultLocale: 'es-ES',
        sharedDictionary: 'common',
        fileExtension: '.lang.json',
        persistSelection: true,
        cookieName: 'COOKIE_LOCALE_LANG',
        observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
        delimiter: '::'
    });