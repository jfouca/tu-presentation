'use strict';

var translator = angular.module('translator', ['pascalprecht.translate']);

translator.config(function($translateProvider) {
    $translateProvider.translations('en', {
        brand: 'Teams\'Up',
        // header
        header_home_title: 'Home',
        header_contact_title: 'Contact',
        header_about_title: 'About',
        header_form_submit: 'Register',
        header_language: 'Choose your language',

        // contact
        contact_title: 'Contact Us !',
        contact_body: 'You have any question ? You have some nice idea you would like us to implement ? Please fill that form, we will be more than happy to get some feedbacks.',
        contact_form_email_label: 'Email address: ',
        contact_form_email_placeholder: 'example@host.com',
        contact_form_title_label: 'Your title: ',
        contact_form_title_placeholder: 'Enter your title',
        contact_form_body_label: 'Your message: ',
        contact_form_body_placeholder: 'Compose your message here...',
        contact_form_submit: 'Send',

        // homepage
        hello: 'Hello World !',
        home_body: 'You want to play some board games, but you have no fellows ? Time to find some !',
        home_learnmore: 'Learn more',

        // about
        about_title: 'is a plateform where you can find some other players near you that want to play some board games as well !',
        about_body: 'It is still currently in development, but please do not hesitate to show us your interest by subscribing ',
        about_link_here: 'Here',

        // register
        register_form_email_label: 'Email address: ',
        register_form_email_placeholder: 'example@host.com',
        register_bloc_1_title: 'It is totally free !',
        register_bloc_1_body: 'We are here only to allow great people to play with each other. Put that credit card in your pocket !',
        register_bloc_2_title: 'Social',
        register_bloc_2_body: 'You meet some new great people with the same interests',
        register_bloc_3_title: 'Time to sign up !',
        register_bloc_3_body: 'Seriously, why haven\'t you signed up yet ?',
        register_form_submit: 'Register',
    });
    $translateProvider.translations('fr', {
        brand: 'Teams\'Up',
        // header
        header_home_title: 'Home',
        header_contact_title: 'Nous contacter',
        header_about_title: 'Qui sommes-nous',
        header_form_submit: 'S\'enregister',
        header_language: 'Choisissez votre langue',

        // contact
        contact_title: 'Contactez nous !',
        contact_body: 'Vous avez une question ? Vous avez une suggestion de fonctionnalité que vous aimeriez avoir sur le site ? Faîtes le nous savoir en remplissant ce formulaire.',
        contact_form_email_label: 'Adresse email: ',
        contact_form_email_placeholder: 'exemple@domaine.com',
        contact_form_title_label: 'Titre de votre message: ',
        contact_form_title_placeholder: 'Tapez votre titre ici...',
        contact_form_body_label: 'Contenu de votre message: ',
        contact_form_body_placeholder: 'Composez votre message ici...',
        contact_form_submit: 'Envoyer',

        // homepage
        hello: 'Hello World !',
        home_body: 'Vous désirez jouer à des jeux de plateau, de cartes, de rôle, mais vous ne connaissez personne ? Le moment est venu pour vous d\'y remédier',
        home_learnmore: 'En apprendre d\'avantage',

        // about
        about_title: 'est une plateforme où vous pouvez facilement trouver d\'autres joueurs près de chez vous qui désirent également se lancer dans un jeu.',
        about_body: 'Ce projet est toujours en cours de développement, mais n\'hésitez pas à nous montrer votre soutien en remplissant dès maintenant le formulaire d\'inscription ',
        about_link_here: 'ici',

        // register
        register_form_email_label: 'Adresse email: ',
        register_form_email_placeholder: 'exemple@domaine.com',
        register_bloc_1_title: 'Totalement gratuit!',
        register_bloc_1_body: 'Rangez cette carte de crédit. Vous pouvez rencontrer des joueurs comme vous gratuitement',
        register_bloc_2_title: 'Social',
        register_bloc_2_body: 'Rencontrez des gens passionnants et passionés par les même domaines que vous.',
        register_bloc_3_title: 'Enregistrez-vous !',
        register_bloc_3_body: 'Sérieusement, vous ne vous êtes pas encore enregistré ? Vous pourrez accéder en exclusivité à l\'ouverture des premières versions du site. Votre avis est très important !',
        register_form_submit: 'S\'enregistrer',
    });
    $translateProvider.preferredLanguage('fr');
});
