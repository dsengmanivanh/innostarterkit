exports.NAV = ["Install","Stack","Push","Deploy","Test"];

exports.TOOLBOX = [
    { id: '1', label: 'IntelliJ', language:["java","kotlin"],description:'IntelliJ IDEA est un IDE Java commercial développé par JetBrains. Il est fréquemment appelé par le simple nom d’« IntelliJ », « IDEA » ou « IDJ ».', ref:[{title:'install',link:'https://www.jetbrains.com/idea/'}]},
    { id: '2', label: 'Java', language:["java"],description:'Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld.', ref:[{title:'install',link:'http://www.oracle.com/technetwork/java/javase/downloads/index.html'}]},
    { id: '3', label: 'Kotlin', language:["kotlin"],description:'Kotlin est un langage de programmation orienté objet et fonctionnel, avec un typage statique qui permet de compiler pour la machine virtuelle Java et JavaScript. Son développement provient principalement d\'une équipe de programmeurs chez JetBrains basée à Saint-Pétersbourg en Russie (son nom vient de l\'île de Kotline, près de St. Pétersbourg).', ref:[{title:'install',link:'http://kotlinlang.org/'}]},
    { id: '4', label: 'Atom', language:["javascript"],description:'Atom est un éditeur de texte libre pour macOS, GNU/Linux et Windows développé par GitHub. Il supporte des plug-ins écrits en Node.js et implémente Git Control. La plupart des extensions sont sous licence libre et sont maintenues par la communauté6. Atom est basé sur Chromium et Electron, et est écrit en CoffeeScript7. Il est aussi utilisé en tant qu’IDE.', ref:[{title:'install',link:'https://atom.io/'},{title:'addons',link:'https://www.sitepoint.com/10-essential-atom-add-ons/'}]},
    { id: '5', label: 'Node', language:["javascript"],description:'Node.js est une plateforme logicielle libre et événementielle en JavaScript orientée vers les applications réseau qui doivent pouvoir monter en charge.', ref:[{title:'install',link:'https://nodejs.org'}]},
    { id: '6', label: 'Docker', language:["java","kotlin","javascript"],description:'Docker est un logiciel libre qui automatise le déploiement d\'applications dans des conteneurs logiciels5. Selon la firme de recherche sur l\'industrie 451 Research, « Docker est un outil qui peut empaqueter une application et ses dépendances dans un conteneur isolé, qui pourra être exécuté sur n\'importe quel serveur ». Ceci permet d\'étendre la flexibilité et la portabilité d’exécution d\'une application, que ce soit sur la machine locale, un cloud privé ou public, une machine nue, etc.6.', ref:[{title:'install',link:'https://www.docker.com/'}]},
    { id: '7', label: 'Git', language:["java","kotlin","javascript"],description:'Git est un logiciel de gestion de versions décentralisé. C\'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2. En 2016, il s\'agit du logiciel de gestion de versions le plus populaire qui est utilisé par plus de douze millions de personnes.', ref:[{title:'install',link:'https://git-scm.com/'},{title:'addons',link:'https://danielkummer.github.io/git-flow-cheatsheet/'}]}
];

exports.WHY_STACK = [
    {
        id: '1',
        label: 'IntelliJ',
        description:'Every time I visit a Java conference or a meetup and talk to people unfamiliar with IntelliJ IDEA, I get similar questions again and again: “What’s so special about IntelliJ IDEA? What does IntelliJ IDEA has that other Java IDEs don’t?” In response I usually simply demo a few of its features and then just watch their jaws dropping...',
        ref:[{title:'link',link:'https://blog.jetbrains.com/idea/2016/03/enjoying-java-and-being-more-productive-with-intellij-idea/'}]
    },
    {
        id: '2',
        label: 'Kotlin',
        description:'Why Kotlin is my next programming language...',
        ref:[{title:'link',link:'https://medium.com/@octskyward/why-kotlin-is-my-next-programming-language-c25c001e26e3'}]
    },
    {
        id: '3',
        label: 'Atom',
        description:'There are a lot of text editors out there; why should you spend your time learning about and using Atom...',
        ref:[{title:'link',link:'https://flight-manual.atom.io/getting-started/sections/why-atom/'}]
    },
    {
        id: '4',
        label: 'Springboot',
        description:'Spring Boot aims to make it easy to create Spring-powered, production-grade applications and services with minimum fuss. It takes an opinionated view of the Spring platform so that new and existing users can quickly get to the bits they need...',
        ref:[{title:'link',link:'https://spring.io/blog/2013/08/06/spring-boot-simplifying-spring-for-everyone'}, {title:'13..10 reasons why?..',link:'http://blog.ellixo.com/2015/06/08/10-raisons-de-se-mettre-a-Spring-Boot-1ere-partie.html'}]
    },
    {
        id: '5',
        label: 'Node',
        description:'Aujourd\'hui, JavaScript est de retour et il prend sa revanche. En quelque sorte, les développeurs sont en train de découvrir que ce langage qu\'ils ont longtemps ignoré, parfois même méprisé, cache en fait bien son jeu...',
        ref:[{title:'link',link:'https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1056866-node-js-mais-a-quoi-ca-sert'}]
    },
    {
        id: '6',
        label: 'Docker',
        description:'Docker, voilà un mot qui revient souvent sur le web quand on est développeur et que l’on fait de la veille technologique...',
        ref:[{title:'link',link:'https://apprendre-la-programmation.net/docker-for-developers/'}]
    },
    {
        id: '7',
        label: 'Git',
        description:'Why I don’t like IBM RTC as Source Control Management..',
        ref:[{title:'link',link:'https://romixch.wordpress.com/2015/03/10/why-i-dont-like-ibm-rtc-as-source-control-management/'}]
    },
    {
        id: '8',
        label: 'DockerFile',
        description:'Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.',
        ref:[{title:'link',link:'https://docs.docker.com/engine/reference/builder/#usage'}]
    }
];


exports.JAVA_STACK = [
    { id: '1', project: 'Backend', bdd:'none', tech:['springboot','dockerfile'],label:'Building a RESTful Web Service with Springboot', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { id: '2', project: 'Backend', bdd:'sql', label:'Building a RESTful Web Service with Springboot', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { id: '2', project: 'Backend', bdd:'nosql', label:'Building a RESTful Web Service with Springboot', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { id: '2', project: 'Website', bdd:'none', label:'Serving Web Content with Spring MVC', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { id: '3', project: 'Website with sql database', bdd:'sql', label:'Serving Web Content with Spring MVC with sql database', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { id: '4', project: 'Website with nosql database', bdd:'nosql', label:'Serving Web Content with Spring MVC with nosql database', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]}
];

exports.JAVASCRIPT_STACK = [
    { id: '1', project: 'Backend', bdd:'none', label:'Building a RESTful Web Service with Springboot', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { id: '2', project: 'Website', bdd:'none', label:'Serving Web Content with Spring MVC', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { id: '3', project: 'Website with sql database', bdd:'sql', label:'Serving Web Content with Spring MVC with sql database', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { id: '4', project: 'Website with nosql database', bdd:'nosql', label:'Serving Web Content with Spring MVC with nosql database', description:'Start with this guide and complete it with your class. This guide walks you through the process of creating a "hello world" RESTful web service with Spring.', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]}
];

exports.KOTLIN_STACK = [
    { value: '1', label: 'Website', type:'site web', bdd:'none', note:'Serving Web Content with Spring MVC', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { value: '2', label: 'Website with sql database', type:'site web', bdd:'sql', note:'Serving Web Content with Spring MVC with sql database', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { value: '3', label: 'Website with nosql database', type:'site web', bdd:'nosql', note:'Serving Web Content with Spring MVC with nosql database', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { value: '4', label: 'Deploy', type:'deploy', note:'Deploy your web content with Spring MVC with sql database', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { value: '5', label: 'Deploy', type:'deploy', note:'Deploy your web content with Spring MVC with nosql database', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]},
    { value: '6', label: 'Toolbox', type:'toolbox', note:'Deploy your web content with Spring MVC with nosql database', ref:[{title:'guide',link:'https://spring.io/guides/gs/rest-service/'}]}
];

exports.DOCKER_FILE = [
    { id: '1', project: 'Backend', language:'java', bdd:'none',label:'Complete your project with DockerFile', description:'Follow the previous guide and add this file on your base path. (next to pom.xml ;) )', ref:[{title:'file',link:'https://spring.io/guides/gs/rest-service/'}]},
];

