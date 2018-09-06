exports.NAV = ["Toolbox","Stack"];

exports.TOOLBOX = [
    { id: '1', label: 'IntelliJ', language:["java","kotlin"],description:'IntelliJ IDEA est un IDE Java commercial développé par JetBrains. Il est fréquemment appelé par le simple nom d’« IntelliJ », « IDEA » ou « IDJ ».', ref:[{title:'install',link:'https://www.jetbrains.com/idea/'}]},
    { id: '2', label: 'Java', language:["java"],description:'Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld.', ref:[{title:'install',link:'http://www.oracle.com/technetwork/java/javase/downloads/index.html'}]},
    { id: '3', label: 'Kotlin', language:["kotlin"],description:'Kotlin est un langage de programmation orienté objet et fonctionnel, avec un typage statique qui permet de compiler pour la machine virtuelle Java et JavaScript. Son développement provient principalement d\'une équipe de programmeurs chez JetBrains basée à Saint-Pétersbourg en Russie (son nom vient de l\'île de Kotline, près de St. Pétersbourg).', ref:[{title:'install',link:'http://kotlinlang.org/'}]},
    { id: '4', label: 'Atom', language:["javascript"],description:'Atom est un éditeur de texte libre pour macOS, GNU/Linux et Windows développé par GitHub. Il supporte des plug-ins écrits en Node.js et implémente Git Control. La plupart des extensions sont sous licence libre et sont maintenues par la communauté6. Atom est basé sur Chromium et Electron, et est écrit en CoffeeScript7. Il est aussi utilisé en tant qu’IDE.', ref:[{title:'install',link:'https://atom.io/'},{title:'addons',link:'https://www.sitepoint.com/10-essential-atom-add-ons/'}]},
    { id: '5', label: 'Node', language:["javascript"],description:'Node.js est une plateforme logicielle libre et événementielle en JavaScript orientée vers les applications réseau qui doivent pouvoir monter en charge.', ref:[{title:'install',link:'https://nodejs.org'}]},
    { id: '6', label: 'Docker', language:["java","kotlin","javascript"],description:'Docker est un logiciel libre qui automatise le déploiement d\'applications dans des conteneurs logiciels5. Selon la firme de recherche sur l\'industrie 451 Research, « Docker est un outil qui peut empaqueter une application et ses dépendances dans un conteneur isolé, qui pourra être exécuté sur n\'importe quel serveur ». Ceci permet d\'étendre la flexibilité et la portabilité d’exécution d\'une application, que ce soit sur la machine locale, un cloud privé ou public, une machine nue, etc.6.', ref:[{title:'install',link:'https://www.docker.com/'}]}
];

exports.WHY_STACK = [
    {
        id: '1',
        label: 'IntelliJ',
        description:'Every time I visit a Java conference or a meetup and talk to people unfamiliar with IntelliJ IDEA, I get similar questions again and again: “What’s so special about IntelliJ IDEA? What does IntelliJ IDEA has that other Java IDEs don’t?” In response I usually simply demo a few of its features and then just watch their jaws dropping...',
        links:['https://blog.jetbrains.com/idea/2016/03/enjoying-java-and-being-more-productive-with-intellij-idea/']
    },
    {
        id: '2',
        label: 'Kotlin',
        description:'Why Kotlin is my next programming language...',
        links:['https://medium.com/@octskyward/why-kotlin-is-my-next-programming-language-c25c001e26e3']
    },
    {
        id: '3',
        label: 'Atom',
        description:'There are a lot of text editors out there; why should you spend your time learning about and using Atom...',
        links:['https://flight-manual.atom.io/getting-started/sections/why-atom/']
    },
    {
        id: '4',
        label: 'Springboot',
        description:'Spring Boot aims to make it easy to create Spring-powered, production-grade applications and services with minimum fuss. It takes an opinionated view of the Spring platform so that new and existing users can quickly get to the bits they need...',
        links:['https://spring.io/blog/2013/08/06/spring-boot-simplifying-spring-for-everyone', 'http://blog.ellixo.com/2015/06/08/10-raisons-de-se-mettre-a-Spring-Boot-1ere-partie.html']
    },
    {
        id: '5',
        label: 'Node',
        description:'Aujourd\'hui, JavaScript est de retour et il prend sa revanche. En quelque sorte, les développeurs sont en train de découvrir que ce langage qu\'ils ont longtemps ignoré, parfois même méprisé, cache en fait bien son jeu...',
        links:['https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1056866-node-js-mais-a-quoi-ca-sert']
    },
    {
        id: '6',
        label: 'Docker',
        description:'Docker, voilà un mot qui revient souvent sur le web quand on est développeur et que l’on fait de la veille technologique...',
        links:['https://apprendre-la-programmation.net/docker-for-developers/']
    }
];


exports.JAVA_STACK = [
    { id: '1', project: 'Website', bdd:'none', note:'Serving Web Content with Spring MVC', link:'https://spring.io/guides/gs/serving-web-content/'},
    { id: '2', project: 'Website with sql database', bdd:'sql', note:'Serving Web Content with Spring MVC with sql database', link:'https://spring.io/guides/gs/serving-web-content/'},
    { id: '3', project: 'Website with nosql database', bdd:'nosql', note:'Serving Web Content with Spring MVC with nosql database', link:'https://spring.io/guides/gs/serving-web-content/'},
    { id: '4', project: 'Backend', note:'Deploy your web content with Spring MVC with sql database', link:'https://spring.io/guides/gs/serving-web-content/'},
];


exports.KOTLIN_STACK = [
    { value: '1', label: 'Website', type:'site web', bdd:'none', note:'Serving Web Content with Spring MVC', link:'https://spring.io/guides/gs/serving-web-content/'},
    { value: '2', label: 'Website with sql database', type:'site web', bdd:'sql', note:'Serving Web Content with Spring MVC with sql database', link:'https://spring.io/guides/gs/serving-web-content/'},
    { value: '3', label: 'Website with nosql database', type:'site web', bdd:'nosql', note:'Serving Web Content with Spring MVC with nosql database', link:'https://spring.io/guides/gs/serving-web-content/'},
    { value: '4', label: 'Deploy', type:'deploy', note:'Deploy your web content with Spring MVC with sql database', link:'https://spring.io/guides/gs/serving-web-content/'},
    { value: '5', label: 'Deploy', type:'deploy', note:'Deploy your web content with Spring MVC with nosql database', link:'https://spring.io/guides/gs/serving-web-content/'},
    { value: '6', label: 'Toolbox', type:'toolbox', note:'Deploy your web content with Spring MVC with nosql database', link:'https://spring.io/guides/gs/serving-web-content/'}
];


