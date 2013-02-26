var data = {
    villes: [
        {
            name: "Paris",
            ville_img: "img/BBL.jpg",
            lat: 48.856614,
            lng: 2.352222,

            baggers: [
                {
                    name: "François Sarradin",
                    bio: "Consultant Java et &#955; développeur",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/2/000/060/077/1aa37ac.jpg/",
                    websites: [
                        {title: "Blog personnel", href: "http://kerflyn.wordpress.com/"},
                        {title: "Blog Xebia", href: "http://blog.xebia.fr/author/fsarradin"}
                    ],
                    twitter: "fsarradin",
                    contact: "<a href='http://kerflyn.wordpress.com/2013/02/06/bbl/'>Brown Bag Lunch (BBL)</a>",
                    location: "La Défense et alentours uniquement",
                    sessions: [
                        {
                            title: "Un framework Web qui poutre en Scala, le tout en moins d'une heure",
                            summary: "(live coding) Découverte de Scala à travers la réalisation d'un mini framework tout en restant lisible."
                        },
                        {
                            title: "Kata : un type Option en Java",
                            summary: "(live coding) Tests unitaires et refactoring pour un type Option en Java"
                        }
                    ]
                },
                {
                    name: "Nathaniel Richand",
                    bio: "Coach agile",
                    picture: "img/photo_nathaniel.jpg",
                    websites: [
                        {title: "Blog Xebia", href: "http://blog.xebia.fr/author/nrichand"}
                    ],
                    twitter: "nrichand",
                    contact: "nrichand@brownbaglunch.fr",
                    location: "La Défense et alentours uniquement",
                    sessions: [
                        {
                            title: "Plus de fun et de diversité dans vos rétrospectives",
                            summary: "Discussion sur comment bien animer une rétrospective et présentation de nombreux formats."
                        },
                        {
                            title: "Introduction au Lean Startup",
                            summary: "Présentation des concepts et de quelques outils phares du Lean Startup."
                        }
                    ]
                },
                {
                    name: "Mathilde Lemée",
                    bio: "Ingénieur R&amp;D - Terracotta",
                    picture: "img/photo_mathilde.jpeg",
                    websites: [
                        {title: "Blog personnel", href: "http://www.java-freelance.fr/"}
                    ],
                    twitter: "mathildelemeee",
                    contact: "prenom.nom@yahoo.fr",
                    location: "Paris, La Défense, Banlieue",
                    sessions: [
                        {
                            title: "Cache & BigData",
                            summary: "Différents sujets : Terracotta, ehcache, clustering, scalabilité, concepts avancés sur le cache ..."
                        },
                        {
                            title: "Les tests",
                            summary: "Différents sujets : Selenium, FluentLenium, Mise en place de Selenium, Byteman ..."
                        },
                        {
                            title: "Le mobile",
                            summary: "Premier pas avec Corona SDK, REX sur 6 mois de dev et de marketing d'applis mobile (http://www.aetys.fr)"
                        }
                    ]
                },
                {
                    name: "David Gageot",
                    bio: "Professional Geek - Freelance",
                    picture: "http://gravatar.com/avatar/f0887bf6175ba40dca795eb37883a8cf?s=256",
                    websites: [
                        {title: "Blog personnel", href: "http://blog.javabien.net/"}
                    ],
                    twitter: "dgageot",
                    contact: "david@gageot.net",
                    location: "Paris, La Défense, (France/Etranger selon mes déplacements)",
                    sessions: [
                        {
                            title: "Du Legacy au Cloud en moins d’une heure",
                            summary: "Live coding sur les techniques de refactoring par les tests et démontrant comment déployer rapidement sur le Cloud."
                        },
                        {
                            title: "Kitten FaceMash – Marre des frameworks, oui aux bons outils",
                            summary: "Live coding sur le développement d'un site web en TDD, sans framework mais une combinaison de bonnes librairies."
                        },
                        {
                            title: "Mockito – Ecrire des tests simples et peu sensibles au refactoring",
                            summary: "Slides démontrant l’utilisation de la librairie Mockito. L’accent est mis sur la forte tolérance au refactoring par rapport aux mocks codés à la main."
                        },
                        {
                            title: "Introduction à Git",
                            summary: "Slides présentant les avantages de Git. En particulier la grande liberté laissée aux équipes, la tolérance au refactoring, l’utilisation dans l'analyse de régressions."
                        },
                        {
                            title: "Let’s make these tests run faster",
                            summary: "Slides présentant des techniques pour accélérer les tests unitaires/fonctionnels. Le but étant de passer tout un build en quelques minutes afin d’avoir le feedback le plus court possible."
                        },
                        {
                            title: "Outils de test avancés",
                            summary: "Slides présentant des outils pour écrire des tests plus simples, plus clairs, plus rapides. (JUnit4 Rules, Infinitest, FestAssert...)"
                        }
                    ]
                },
                {
                    name: "Romain Maton",
                    bio: "Consultant Java/Web/Agile - Freelance",
                    picture: "https://lh4.googleusercontent.com/-VcEH4WuA6XE/ThmqIx4nf_I/AAAAAAAAAso/Az2a4TtTgmA/s800/avatar_rmat0n.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://www.web-tambouille.fr/"}
                    ],
                    twitter: "rmat0n",
                    contact: "prenom.nom@gmail.com ou prenom@tamlab.fr",
                    location: "La Défense et alentours uniquement",
                    sessions: [
                        {
                            title: "Tout ce que vous devez savoir sur Node.js",
                            summary: "Découvrez les bases de Node.js, son écosystème, ses atouts, ses faiblesses et tout ce que vous devez savoir du démarrage votre premier projet jusqu'à sa mise en ligne !"
                        },
                        {
                            title: "Optimiser votre site Web sur mobile",
                            summary: "Nous regarderons l'évolution de ce marché mobile, les normes existantes, les bonnes pratiques de développement mobile ainsi que les outils et frameworks qui vous permettront de sublimer votre site web pour smartphone."
                        },
                        {
                            title: "24 plugins chrono",
                            summary: "Pas de Jack Bauer dans cette session mais un développeur qui passe en revue 24 plugins pour <span style=\"text-decoration: line-through;\">sauver le monde</span> booster votre IDE !"
                        }
                    ]
                },
                {
                    name: "Florent Biville",
                    bio: "Développeur Java &amp; JS, partenaire Neo4J avec Lateral Thoughts",
                    picture: "http://m.c.lnkd.licdn.com/media/p/3/000/0be/019/0a2b80a.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://florent.biville.net/"},
                        {title: "Lateral Thoughts", href: "http://www.lateral-thoughts.com"}
                    ],
                    twitter: "fbiville",
                    contact: "f POINT biville AT lateral TIRET thoughts POINT com",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Découvrons Neo4J",
                            summary: "Découvrons ensemble la toute-puissance de LA base de données graphe <strong>Neo4J</strong>, ses cas d'utilisation, ses différentes APIs Java, son langage de requêtage Cypher."
                        },
                        {
                            title: "+ de productivité avec SpringData",
                            summary: "Introduction à SpringData : ses motivations, son socle commun et son interfaçage avec différents stores NoSQL et relationnels (MongoDB, Neo4J, JPA...)."
                        },
                        {
                            title: "Liquibase : gestionnaire de versions pour RDBMS",
                            summary: "Vous suivez des itérations de développement courtes, mais vous devez attendre des semaines avant de pouvoir passer vos changements de schéma ? Au contraire, vous échangez vos changements de base par email ? Le temps est venu de s'industrialiser avec Liquibase. Nous verrons ensemble les notions de changesets, d'incréments  portées par Liquibase et ses différents modes d'intégration (plugin Maven, intégration avec Spring)."
                        }
                    ]
                },
                {
                    name: "Bernard Notarianni",
                    bio: "Créateur de logiciels et coach agile",
                    picture: "img/photo_bernard.jpg",
                    websites: [
                        {title: "LinkedIn", href: "http://fr.linkedin.com/in/notarianni/"}
                    ],
                    twitter: "notarianni",
                    contact: "prenom.nom@gmail.com",
                    location: "Paris, banlieue nord (St Denis..) ou ouest (La Défense...)",
                    sessions: [
                        {
                            title: "Agile...",
                            summary: "Comment passer à l'agile. Comment convaincre ses managers et/ou ses collègues. Créer un backlog, devenir product manager. Améliorer son projet agile existant. Créer une communauté de praticiens dans sa boite. Etc."
                        },
                        {
                            title: "Startup...",
                            summary: "Retour d'expérience en tant que jeune co-créateur de startup qui s'est lancé depuis début 2012. Lean Startup, l'agile et le reste in real life."
                        },
                        {
                            title: "Erlang...",
                            summary: "C'est quoi Erlang? Ca marche comment? Pourquoi je dois faire de l'Erlang?"
                        },
                        {
                            title: "Ember JS...",
                            summary: "Retour d'expérience, live coding, dojo..."
                        }
                    ]
                },
                {
                    name: "Romain Linsolas",
                    bio: "Développeur Java & architecte technique à SGCIB",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/8/000/1ce/3fe/25d1ddc.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://linsolas.github.com/"}
                    ],
                    twitter: "romaintaz",
                    contact: "linsolas [at] gmail.com",
                    location: "La Défense et alentours",
                    sessions: [
                        {
                            title: "Industrialiser ses tests JavaScripts pour un développeur Java",
                            summary: "Où il est question de montrer que l'industrialisation du code JavaScript est aujourd'hui aussi aisée qu'en Java : frameworks de tests, interfaçage avec Maven, intégration dans Jenkins, utilisation de Sonar pour l'analyse de la qualité."
                        }
                    ]
                },
                {
                    name: "David Pilato",
                    bio: "Technical Advocate",
                    picture: "http://www.gravatar.com/avatar/20049a614b7f6838dc87b4bc39c42079.png",
                    websites: [
                        {title: "Blog personnel", href: "http://dev.david.pilato.fr/"}
                    ],
                    twitter: "dadoonet",
                    contact: "david [at] pilato.fr",
                    location: "Régions francophones",
                    sessions: [
                        {
                            title: "Elasticsearch",
                            summary: "Vous utilisez encore des requêtes SQL pour faire des recherches ? Vos utilisateurs vous reprochent de ne pas pouvoir chercher sur toutes les rubriques ? Votre temps de réponse moyen est supérieur à la demi-seconde avec seulement quelques millions de documents ? Il vous faut 3 jours pour produire des statistiques sur vos données ? Vous rêvez d’offrir une recherche 'à la google' sur les données de votre SI ?<br/><br/>Ne cherchez plus ! Cette conférence est faite pour vous.<br/><br/>David présentera au cours de du BBL pourquoi et comment il est passé de la recherche SQL à Elasticsearch en détaillant les apports de ce moteur par rapport à une solution pure Lucene :<ul><li>Pourquoi Elasticsearch ?</li><li>L'indexation</li><li>La recherche</li><li>La collecte de données (rivers)</li><li>Les facettes et le principe de navigation par facettes</li><li>La scalabilité horizontale</li><li>L'analyse et le mapping</li><li>La percolation</li><li>La communauté</li></ul>"
                        }
                    ]
                },
                {
                    name: "Jean-Louis Rigau",
                    bio: "Développeur Java, Cloud Addict",
                    picture: "http://m.c.lnkd.licdn.com/media/p/4/000/15f/25a/14e30e7.jpg",
                    websites: [
                        {title: "Blog Xebia", href: "http://blog.xebia.fr/author/jlrigau"},
                        {title: "LinkedIn", href: "http://fr.linkedin.com/in/jlrigau/"}
                    ],
                    twitter: "jlrigau",
                    contact: "jeanlouis.rigau@gmail.com",
                    location: "La Défense et alentours",
                    sessions: [
                        {
                            title: "Continuous Deployment avec CloudBees",
                            summary: "Déployer une application dans le Cloud depuis un simple « git push », à travers la mise en oeuvre du modèle de Continuous Deployment sur les environnements DEV@Cloud et RUN@Cloud de CloudBees."
                        },
                        {
                            title: "Blue/Green Deployment avec AWS Elastic Beanstalk",
                            summary: "Déployer simplement une application sur Amazon à l'aide d'Elastic BeanStalk, et mise en œuvre du principe de Blue-Green Deployment grâce à la fonctionnalité d’URL swapping."
                        }
                    ]
                },
                {
                    name: "Frédéric Menou",
                    bio: "Développeur chez CapitaineTrain",
                    picture: "https://secure.gravatar.com/avatar/252ef00042fda3ab4cf67a36b956fa33?s=210",
                    websites: [
                        { title: "Capitaine Train", href: "http://www.capitainetrain.com/" },
                        { title: "about.me", href: "http://about.me/ptitfred" }
                    ],
                    twitter: "ptit_fred",
                    contact: "frederic.menou@gmail.com",
                    location: "Paris, proche banlieue et La Défense",
                    sessions: [
                        {
                            title: "Code review avec Git",
                            summary: "Vous utilisez Github et les PullRequests vous donnent envie ? Mais ça peut devenir compliqué quand il s'agit d'appliquer les commentaires dans le code.<br/> Je vous propose d'exploiter git à ce sujet. L'agilité ça passe aussi par la maîtrise de ses outils."
                        },
                        {
                            title: "Be a git Jedi Master",
                            summary: "Vous connaissez add -p et rebase -i ? Pas mal, mais il y a plus fort encore !<br/> Je vous propose de plonger dans les arcanes de git, les options cachées dans les manpages et tout ce que vous pourriez en faire au quotidien. Pas de magie noire, mais attention, vous ne serez plus tout à fait le même développeur !"
                        },
                        {
                            title: "Livraison Continue chez CapitaineTrain",
                            summary: "Retour d'expérience sur les mises en production chez CapitaineTrain.<br/> On parlera d'intégration continue, de code review, de release management et de mises en production transparentes.<br /> Livrer tous les jours c'est possible et c'est même assez banal !"
                        }
                    ]
                },
                {
                    name: "Yannick Grenzinger",
                    bio: "Consultant Java/Web/Agile passionné par l'UX",
                    picture: "https://fr.gravatar.com/userimage/45029487/b60c363784b0fd99398c74086b10d8b7.png?size=200",
                    websites: [
                        { title: "ux-fr", href: "http://ux-fr.com/" },
                        { title: "about.me", href: "http://about.me/ygrenzinger" }
                    ],
                    twitter: "ygrenzinger",
                    contact: "yannick.grenzinger@gmail.com",
                    location: "Paris et La Défense",
                    sessions: [
                        {
                            title: "Qu'est que l'expérience utilisateur ?",
                            summary: "Bien qu'étant vous même un utilisateur régulier, vous vous ne savez pas comment créer une bonne expérience utilisateur. <br/>Je vous présenterais rapidement le domaine puis comment l'intégrer à moindre coût dans votre projet avec une méthode centrée sur l'utilisateur."
                        },
                        {
                            title: "Découvrez les principes d'ergonomie",
                            summary: "Les principes d'ergonomie issues des sciences cognitives vous permettrons d'améliorer l'utilisabilité de vos interfaces mais aussi de vos API et de votre code.<br/>Bonus: vous ne verrez plus les portes de la même façon ;)."
                        },
                        {
                            title: "Bien développer son produit c'est bien, Développer le bon produit c'est mieux",
                            summary: "On parle de qualité de code, de tests, d'agilité ... mais on se pose rarement la question: est-ce que ce que je développe est utile?<br/> Pour répondre à cette question, je vous parlerais de Lean Startup, de MVP ou encore de Design Thinking pour améliorer la valeur de vos produits."
                        }
                    ]
                },
                {
                    name: "Mathieu Gandin",
                    bio: "Développeur passionné, Technical Leader, Coach Agile",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/1/000/1a1/3d1/258cb42.jpg",
                    websites: [
                        { title: "Playground Change", href: "http://playgroundchange.wordpress.com/" },
                        { title: "Blog Octo", href: "http://blog.octo.com/author/mga/" },
                    ],
                    twitter: "octomga",
                    contact: "mga@octo.com",
                    location: "Paris et La Défense",
                    sessions: [
                        {
                            title: "Travailler efficacement sur du code legacy",
                            summary: "C'est quoi le code legacy ? Comment commencer de le refactorer ? Quelles pratiques d'équipes peut-on mettre en place avec les développeurs pour nettoyer le code legacy ? Je vous propose d'apporter des réponses à ses sujets au cours de cette présentation illustrée avec du live-coding"
                        },
                        {
                            title: "De la User Story aux tests fonctionnels avec Cucumber",
                            summary: "Vous avez des User Story, je vous propose d'écrire ses tests fonctionnels. Petite présentation et live coding avec Cucumber."
                        },
                        {
                            title: "Le cadrage fonctionnel d'un projet agile",
                            summary: "Comment cadrer le démarrage d'un projet agile ? Sur quoi se concentrer ? Quels ateliers sont importants à jouer pour un cadrage ? Je vous présenterais mon retour d'expériences sur le sujet et partageons ensuite sur ces pratiques"
                        },
                        {
                            title: "Bonus : Groupe de lecture",
                            summary: "Si tu veux mettre en place un groupe de lecture pendant un brownbaglunch sur 'Clean Code' de Bob Martin et 'Quality Software Management' de Gerald Weinberg, je peux t'aider ..."
                        }
                    ]
                },
                {
                    name: "Sylvain Abélard",
                    bio: "Problem Solver chez Faveod",
                    picture: "https://secure.gravatar.com/avatar/4eb4b55cece0e2f81bb7e506ac484cd0?s=210",
                    websites: [
                        { title: "Faveod", href: "http://www.faveod.com" },
                        { title: "Site perso", href: "http://maitre-du-monde.fr" }
                    ],
                    twitter: "abelar_s",
                    contact: "sylvain.abelard@gmail.com",
                    location: "Paris + ce qui est accessible en transports",
                    sessions: [
                        {
                            title: "Ruby",
                            summary: "Présentation de Ruby, de débutant à expert"
                        },
                        {
                            title: "Ruby on Rails",
                            summary: "Présentation de Rails, de débutant à expert"
                        },
                        {
                            title: "Known Unknowns - ce qui risque de changer dans votre projet",
                            summary: "Tous les projets changent. De toutes les règles que l'on vous jure gravées dans le marbre, certaines vont changer : tôt ou tard, radicalement ou subtilement, induisant un effort minime ou majeur. Avec la pratique, on peut avoir une intuition pour mieux chiffrer et mieux trouver les points de friction et de changement probable. Parlons de cas concrets, les vôtres ou les miens, pour améliorer cette perception."
                        },
                        {
                            title: "on demand",
                            summary: "Tout ce qui est relié à mon expertise : web, MVC, architecture logicielle, retours d'expérience..."
                        }
                    ]
                }
            ]
        },
        {
            name: "Toulouse",
            ville_img: "img/BBL_Toulouse.jpg",
            lat: 43.604652,
            lng: 1.444209,

            baggers: [
                {
                    name: "Nicolas Deverge",
                    bio: "Facilitateur agile et développeur - ekito",
                    picture: "https://twimg0-a.akamaihd.net/profile_images/2050038189/picto.jpg",
                    websites: [
                        {title: "Blog ekito", href: "http://www.ekito.fr/people?author_name=ndeverge"}
                    ],
                    twitter: "ndeverge",
                    contact: "ndeverge [at] gmail [dot] com",
                    location: "Toulouse et agglomération",
                    sessions: [
                        {
                            title: "Introduction à l'agilité",
                            summary: "Le pourquoi et le comment de l'agilité en quelques slides et petits ateliers."
                        },
                        {
                            title: "Introduction au LeanStartup",
                            summary: "Ou comment éviter de partir dans de gros dev la tête dans le guidon pour réaliser un nouveau produit dont personne n'a besoin."
                        },
                        {
                            title: "Et pourquoi pas un coding dojo ?",
                            summary: "Organisation d'un coding dojo chez vous en Scala ou Java."
                        }
                    ]
                },
                {
                    name: "Sylvain Wallez",
                    bio: "Architecte et développeur Java/Web/Scala freelance, startuper invétéré",
                    picture: "http://bluxte.net/archives/sylvain_wallez.png",
                    websites: [
                        {title: "Blog", href: "http://bluxte.net"}
                    ],
                    twitter: "bluxte",
                    contact: "sylvain@bluxte.net",
                    location: "Toulouse et environs, ailleurs selon les déplacements",
                    sessions: [
                        {
                            title: "War stories",
                            summary: "Anecdotes vécues sur des systèmes en production, ou \"Heeeelp ! Ca se met à vibrer de partout quand on monte en régime !!!\""
                        },
                        {
                            title: "Hazelcast, le développement distribué facile",
                            summary: "Coordonner les activités dans un cluster peut sembler complexe. Hazelcast apporte des réponses simples à ces problèmes, pour une scalabilité horizontale sans peine."
                        },
                        {
                            title: "L'open source, la fondation Apache, comment ça marche ?",
                            summary: "Nous utilisons tous des produits open source. Introduction à la dynamique sociale des organisations open source, et de Apache en particulier dont je suis membre depuis 10 ans."
                        },
                        {
                            title: "Introduction à MongoDB",
                            summary: "MongoDB est parfois appelé \"le MySQL du noSQL\". Introduction aux principes de base : cas d'application, modélisation des données, capacités de montée en charge."
                        },
                        {
                            title: "Open Hardware : késako ?",
                            summary: "Arduino, imprimantes 3D, hacker spaces : le hardware fait sa révolution. Introduction à cette mouvance qui prend de l'ampleur"
                        }
                    ]
                }
            ]
        },
        {
            name: "Rennes (et alentours...)",
            ville_img: "img/BBL_BZH.png",
            lat:48.0686257,
            lng: -1.7253652,

            baggers: [
                {
                    name: "Nicolas De Loof",
                    bio: "Committer Maven et Jenkins, Support Engineer et évangéliste chez CloudBees",
                    picture: "https://photos-3.dropbox.com/t/0/AABSVFnhuif1ETe0xTqpL7HAqS7zTuL6fMMK2IiVrMlhvg/12/509147/jpeg/1024x768/2/1361797200/0/2/IMG_2614.jpg/5ilg6IkZWeBNaV541YCsMJZqQxauyrEZDQHv7uFLm0Q",
                    websites: [
                        {title: "new Blog(perso);", href: "http://blog.loof.fr"},
                        {title: "CloudBees", href: "http://www.cloudbees.com"}
                    ],
                    twitter: "ndeloof",
                    contact: "nicolas.deloof@gmail.com",
                    location: "Rennes et alentours, possibilités sur Paris",
                    sessions: [
                        {
                            title: "Cloud Patterns",
                            summary: "Comprendre les avantages et contraintes du cloud et les patterns d'architecture associés."
                        },
                        {
                            title: "Intégration continue avec Jenkins",
                            summary: "Présentation du concept d'intégration continue, mise en oeuvre avec Jenkins et utilisations avancées."
                        },
                        {
                            title: "Games of Codes",
                            summary: "Atelier pratique : développer avec la plateforme CloudBees"
                        }
                    ]
                }
             ]
        },
        {
            name: "Nantes",
            ville_img: "",
            lat:46,
            lng: 2,

            baggers: [
                {
                    name: "Cécilia Bossard",
                    bio: "Développeuse Java/J2EE, agiliste convaincue et joueuse invétérée. Membre d'Agile Nantes et de l'équipe organisatrice de l'Agile Tour nantais.",
                    picture: "http://timwi.com/fichiers/cecilia.jpg",
                    websites: [
                        {title: "Timwi", href: "http://timwi.com/"}
                    ],
                    twitter: "ceciliaBossard",
                    contact: "cecilia.bossard@gmail.com",
                    location: "Nantes et environs. Possible à Rennes",
                    sessions: [
                        {
                            title: "Introduction aux méthodes agiles",
                            summary: "L'agilité, vous en entendez beaucoup parler, mais concrètement, qu'est ce que c'est ?"
                        },
                        {
                            title: "Jouons !",
                            summary: "Possibilité de réaliser plusieurs jeux agiles afin de découvrir l'agilité ou d'approfondir certains concepts."
                        }
                    ]
                }
            ]
        }
    ]
};

var map;
$(document).ready(function () {
    map = new GMaps({
        div: '#map',
        lat: 47.081012,
        lng: 2.352222,
        zoom: 5,
        disableDefaultUI: true
    });

    for (var villeIndex = 0; villeIndex < data['villes'].length; villeIndex++) {
        var ville = data['villes'][villeIndex];
        createVilleMarker(ville);
        var baggers = ville['baggers'];
        if (baggers !== undefined) {
            for (baggerIndex=0; baggerIndex < baggers.length; baggerIndex++) {
                baggers[baggerIndex]['paire'] = (baggerIndex % 2 == 1);
            }
        }
    }

    function createVilleMarker(ville) {
        var action = function (e) {
            window.location = window.location + "#" + ville['name'];
        };
        map.addMarker({
            lat: ville['lat'],
            lng: ville['lng'],
            title: ville['name'],
            click: action
        });
    }

});
