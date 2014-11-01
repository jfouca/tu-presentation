'use strict';

var translator = angular.module('translator', ['pascalprecht.translate']);

translator.config(function($translateProvider) {
    $translateProvider.translations('en', {
        HEADLINE: 'Hello there, This is my awesome app!',
        INTRO_TEXT: 'And it has i18n support!'
    });
    $translateProvider.translations('fr', {
        HEADLINE: 'en fr',
        INTRO_TEXT: 'And it has i18n support!'
    });
    $translateProvider.preferredLanguage('fr');
});
