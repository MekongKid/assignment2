// The Word Translator
    // Use simple conditional statements
    // language code: 'es','de','en','fr', others = default('en')

let language = prompt('What is your preferred language? Enter code:');
switch (language) {
     case 'es':
        document.write = prompt('Hola Mundo!');
    case 'de':
        document.write = prompt('Hallo Welt!');
    case 'en':
        document.write = prompt('Hello World!');
    case 'fr':
        document.write = prompt('Bonjour le monde!');
    default:
        document.write = prompt('Hello World!');
};