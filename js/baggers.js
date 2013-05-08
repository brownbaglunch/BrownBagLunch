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
                    picture: "http://m.c.lnkd.licdn.com/media/p/7/000/240/3bd/3dea7b4.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://kerflyn.wordpress.com/"},
                        {title: "Blog Xebia", href: "http://blog.xebia.fr/author/fsarradin"}
                    ],
                    twitter: "fsarradin",
                    contact: "<a href='http://kerflyn.wordpress.com/2013/02/06/bbl/'>Brown Bag Lunch (BBL)</a>",
                    location: "La Défense et alentours",
                    sessions: [
                        {
                            title: "Un framework Web qui poutre en Scala, le tout en moins d'une heure",
                            summary: "(live coding) Découverte de Scala à travers la réalisation d'un mini framework tout en restant lisible."
                        }
                        , { 
                            title: "Kata : un type Option en Java",
                            summary: "(live coding) Tests unitaires et refactoring pour un type Option en Java"
                        }
//                        , {
//                        	title: "De Java à Java 8 en passant par Guava",
//                        	summary: "(à venir) Introduction à la programmation fonctionnelle. Pourquoi et comment l'appliquer au quotidien ?"
//                        }
                        , {
                        	title: "Une alternative à AOP ?",
                        	summary: "(poney / live coding / présentation) Découvrez quelle alternative la programmation fonctionnelle propose face à AOP (session jouée à Devoxx FR 2013 sous le titre \"FlatMap Zat Shit\")"
                        }
                    ],
                    tags: ["java", "scala", "programmation fonctionnelle"]
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
                    ],
                    tags: ["agile"]
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
                    ],
                    tags: ["cache", "big data", "tests", "mobile", "java"]
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
                    ],
                    tags: ["code", "tests", "git", "outils", "refactoring"]
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
                    ],
                    tags: ["javascript", "nodejs", "outils"]
                },
                {
                    name: "Florent Biville",
                    bio: "Développeur Java &amp; JS, partenaire Neo4J avec Lateral Thoughts",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/7/000/231/02a/0abe3b2.jpg",
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
                        },
                        {
                            title: "AngularJS démystifié",
                            summary: "Cette session vous permettra de bien comprendre les partis pris d'Angular, son approche originale de MVC, le scaffolding avec Yeoman, sa testabilité avec Karma et également son intégration dans un environnement AMD (RequireJS). Hé oui, AngularJS a beau être full-stack, nous verrons au travers de ce talk comment le configurer dans des environnements existants."
                        }
                    ],
                    tags: ["nosql", "spring", "database", "angularjs", "javascript"]
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
                    ],
                    tags: ["agile", "startup", "erlang", "javascript"]
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
                        },
                        {
		                	title: "Du JavaScript propre ? Challenge Accepted! - Avec Julien Jakubowski",
                			summary: "Ecrire du code JavaScript propre, c'est aujourd'hui possible. L'écosystème autour de ce langage a atteint une maturité suffisante pour se lancer dans le développement de larges applications basées sur ce langage. Cette présentation est un tour d'horizon de cet écosystème, pour que vous n'ayez plus peur de coder en JavaScript !"
                        }
                    ],
                    tags: ["javascript", "usine logicielle"]
                },
                {
                    name: "Henri Tremblay",
                    bio: "Amateur d'algorithmie et de performance. Souvent en Java",
                    picture: "http://gravatar.com/avatar/02b547234fa2cf147e85aa1b460f2f03?s=256",
                    websites: [
                        { title: "EasyMock", href: "http://easymock.org/" },
                        { title: "Objenesis", href: "http://objenesis.org/" },
                        { title: "Blog Octo", href: "http://blog.octo.com" }
                    ],
                    twitter: "henri_tremblay",
                    contact: "htremblay [at] octo.com",
                    location: "Paris et alentours",
                    sessions: [
                        {
                            title: "Vivre en parallèle",
                            summary: "Un petit état des lieux des utilisations possibles de la parallélisation et des technologies disponibles pour se faire."
                        },
                        {
                            title: "Lambda et génériques: Le cocktail explosif",
                            summary: "Tout ce qu'il faut savoir pour bien comprendre les génériques et surtout, comment s'en sortir avec les lambdas. Parce que les lambdas, c'est plein de génériques"
                        },
                        {
                            title: "Performance perpétuelle",
                            summary: "Mise en place de tests de performance automatisés. Pourquoi et comment"
                        },
                        {
                            title: "Discussion informelle",
                            summary: "Sur l'optimisation, EasyMock, les tests en général, les méandres de Java, le déploiement continu ou tout autre sujet qui vous passe par la tête"
                        }
                    ],
                    tags: ["java", "performance", "calcul parallèle", "optimisation", "test"]
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
                    ],
                    tags: ["elasticsearch"]
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
                    ],
                    tags: ["cloud", "usine logicielle"]
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
                    ],
                    tags: ["git", "usine logicielle"]
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
                            summary: "L'objectif est de vous présenter rapidement ce qu'est l'UX et comment la prendre en compte à moindre coût dans votre projet avec une méthode centrée sur l'utilisateur."
                        },
                        {
                            title: "Faire du code centré sur l'humain",
                            summary: "Les principes d'ergonomie issues des sciences cognitives vous permettrons d'améliorer l'utilisabilité de vos interfaces mais aussi de vos API et de votre code."
                        },
                        {
                            title: "Bien développer son produit c'est bien, Développer le bon produit c'est mieux",
                            summary: "On parle de qualité de code, de tests, d'agilité ... mais on se pose rarement la question: est-ce que ce que je développe est utile?<br/> Pour répondre à cette question, je vous parlerais de Lean Startup, de MVP ou encore de Design Thinking pour améliorer la valeur de vos produits."
                        },
                        {
                            title: "Angular, le spectacular framework web moderne",
                            summary: "Retour d'expérience sur le framework Angular avec Testacular ainsi qu'une pointe de Yeoman et de Foundation."
                        }
                    ],
                    tags: ["user experience", "ergonomie", "lean startup", "angularjs", "javascript"]
                },
                {
                    name: "Mathieu Gandin",
                    bio: "Développeur passionné, Technical Leader, Coach Agile",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/1/000/1a1/3d1/258cb42.jpg",
                    websites: [
                        { title: "Playground Change", href: "http://playgroundchange.wordpress.com/" },
                        { title: "Blog Octo", href: "http://blog.octo.com/author/mga/" }
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
                    ],
                    tags: ["code", "refactoring", "bdd"]
                },
                {
                    name: "Sylvain Abélard",
                    bio: "Problem Solver chez Faveod",
                    picture: "img/photo_sylvain.png",
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
                    ],
                    tags: ["ruby", "ruby on rails"]
                },
                {
                    name: "Vincent Heuschling",
                    bio: "Fondateur d'Affini-Tech et expert BigData, NOSQL & Analytics",
                    picture: "img/photo_vhe.jpg",
                    websites: [
                        { title: "Affini-Tech", href: "http://www.affini-tech.com" },
                        { title: "Site perso", href: "http://www.vhe74.com" }
                    ],
                    twitter: "vhe74",
                    contact: "vhe@affini-tech.com",
                    location: "Paris + Banlieue ouest",
                    sessions: [
                      {
                        title: "Hadoop et son écosystème",
                        summary: "Comprendre le fonctionnement d'Hadoop et de son écosystème, exemple simple de job Map/Reduce à l'appui"
                      },
                      {
                        title: "Hadoop Pig",
                        summary: "Utiliser Pig pour construire des traitements sur Hadoop. Une alternative à Map/Reduce Java beaucoup plus simple et productive."
                      },
                      {
                        title: "Développement Hadoop avec Scalding",
                        summary: "Utiliser la librairie Cascading avec Scala pour construire des jobs Map/Reduce avec toutes les capacités propres à Scala."
                      },
                      {
                        title: "Bases de données NOSQL",
                        summary: "Comprendre les différences entre Redis, Cassandra, HBase et MongoDB. Quelle base pour quel usage ?"
                      }
                    ],
                    tags: ["hadoop", "nosql"]
                },
                {
                    name: "Katia Aresti",
                    bio: "Développeuse - Freelance",
                    picture: "http://www.gravatar.com/avatar/04e3a46efd2e243319b1bf9f7ef316f7.png",
                    websites: [
                        {title: "Duchess France", href: "http://www.duchess-france.org/"}
                    ],
                    twitter: "karesti",
                    contact: "katia.aresti@gmail.com",
                    location: "Paris, La Défense",
                    sessions: [
                        {
                            title: "MongoDB from scratch",
                            summary: "Live coding MongoDB (avec Java). Création d'une application from scratch"
                        },
                        {
                            title: "From SQL to MongoDB",
                            summary: "Présentation formelle de MongoDB pour les développeurs. Présentation de la base de données, cas d'utilisation réels, et ensemble de bonnes pratiques"
                        },
                        {
                            title: "Gym TDD",
                            summary: "Kata TDD pour aprendre la technique de base."
                        },
                        {
                            title: "J'irai coder chez vous",
                            summary: "(Experimental) Je viens coder chez vous pendant une matinée sur une story lambda, en TDD !!"
                        }
                        
                    ],
                    tags: ["mongodb", "refactoring", "code", "tests"]
                },
                {
                    name: "Eric Lefevre-Ardant",
                    bio: "Consultant Java - Freelance",
                    picture: "img/photo_eric.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://ericlefevre.net/"}
                    ],
                    twitter: "elefevre",
                    contact: "contact@ericlefevre.net",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Boucles Etranges : Etranges Boucles",
                            summary: "Une promenade décousue dans les limites du code source Java, à la manière de Douglas Hofstadter. Nous parlons de code, d'apparences trompeuses, d'art et de la vie."
                        }
                    ],
                    tags: ["java", "code"]
                }, 
  		        {
                    name: "Guillaume Tardif",
                    bio: "Consultant Java",
                    picture: "img/photo_guillaume.jpg",
                    websites: [
                        {title: "Site", href: "http://melodiousthunkcode.fr/"}
                    ],
                    twitter: "gtardif",
                    contact: "guillaume.tardif@gmail.com",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Boucles Etranges : Etranges Boucles",
                            summary: "Une promenade décousue dans les limites du code source Java, à la manière de Douglas Hofstadter. Nous parlons de code, d'apparences trompeuses, d'art et de la vie."
                        }
                    ],
                    tags: ["mongo", "search", "big data", "java", "code"]
                },
                {
                    name: "Cyrille Martraire",
                    bio: "Développeur avec passion depuis 1999, Paris. Fondateur de la communauté Software Craftsmanship Paris, et Directeur Technique de la société Arolla",
                    picture: "http://gravatar.com/avatar/51dec3feb906404b8564a3c31d1050f3.png",
                    websites: [
                        { title: "Arolla", href: "http://www.arolla.fr" },
                        { title: "Blog perso", href: "http://cyrille.martraire.com"}
                    ],
                    twitter: "cyriux",
                    contact: "cyrillemartraire [at] gmail.com",
                    location: "Paris, La Défense et à proximité",
                    sessions: [
                        {
                           title: "DDD Games",
                           summary: "Découvrez quelques points essentiels de Domain-Driven Design par la pratique sous forme de petits jeux sur papier."
                        },
                        {
                           title: "Legacy Code : faire évoluer ou ré-écrire ?",
                           summary: "Comment livrer des fonctionnalités ambitieuses malgré le code existant sans aucun test ? Visite guidée au travers de retours d'expérience."
                        },
                        {
			   title: "Domain-Driven Design dans un contexte legacy",
                	   summary: "Un tour d'horizon d'aspects importants de DDD sous la forme d'un retour d'expérience dans le domaine de la finance"
                        },
                        {
                           title: "Votre sujet sur-mesure",
                           summary: "Atelier sur papier, en code autour d'un kata original, présentation ou retour d'expérience sur l'un des thèmes qui me passionnent: TDD, BDD, DDD, Legacy Code, Style FP"
                        },
                    ],
                    tags: ["DDD", "BDD", "TDD", "Legacy Code", "FP-Style", "Clean Code"]
                },
                {
                    name: "Dimitri BAELI",
                    bio: "Chien de berger agile, développeur de plus de 30 ans, joyeux testeur et sérieusement ops chez LesFurets.com. Organisateur AgileTour/CodeursEnSeine à Rouen, Lean Kanban France à Paris",
                    picture: "http://gravatar.com/avatar/7f73df517fdea1028d28f39980edf441.png",
                    websites: [
                        { title: "LesFurets.com", href: "http://www.lesfurets.com" },
                        { title: "Lean Kanban France", href: "http://www.leankanban.fr"},
                        { title: "Codeurs En Seine", href: "http://www.codeursenseine.com"},
                    ],
                    twitter: "dbaeli",
                    contact: "dbaeli [at] gmail.com",
                    location: "Paris, Défense, (Rouen)",
                    sessions: [
                        {
                           title: "Kanban pour les nuls",
                           summary: "Découvrez Kanban et quelques principes fondamentaux du développement en flux tiré."
                        },
                        {
                           title: "Miss i18n, Mr APT loves you !",
                           summary: "Découvrez le processing d'annotation et une façon moderne de localiser une application java via @Message"
                        },
                        {
                           title: "Mercenaire Devops replay !",
                           summary: "Un condensé de la présentation Devops Mercenaries faite à Devoxx, déploiement continu avec tests gatling, thucydides, ... work in progress"
                        },
                    ],
                    tags: ["Kanban", "Agile", "Java", "Devops"]
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
                    ],
                    tags: ["agile", "code", "dojo"]
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
                    ],
                    tags: ["nosql", "mongodb", "hardware"]
                }
            ]
        },
        {
            name: "Rennes",
            ville_img: "img/BBL_BZH.png",
            lat:48.0686257,
            lng: -1.7253652,

            baggers: [
                {
                    name: "Nicolas De Loof",
                    bio: "Committer Maven et Jenkins, Support Engineer et évangéliste chez CloudBees",
                    picture: "img/photo_NicolasDeLoof.jpg",
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
                    ],
                    tags: ["cloud", "usine logicielle"]
                },
                {
                    name: "Christophe Bégot",
                    bio: "Facilitateur Agile",
                    picture: "http://www.timwi.com/fichiers/cbegot.png",
                    websites: [
                        {title: "Timwi", href: "http://timwi.com/"}
                    ],
                    contact: "cbegot@gmail.com",
                    location: "Rennes et alentours, possibilités sur toute la Bretagne",
                    sessions: [
                        {
                            title: "Méthodes et pratiques Agiles",
                            summary: "Présentations et échanges pour une première approche ou un appronfondissement."
                        },
                        {
                            title: "Rétrospective",
                            summary: "Dérouler une rétrospective Agile avec votre équipe."
                        },
                        {
                            title: "Coaching individuel",
                            summary: "Présentation de la démarche et sessions de coaching."
                        }
                    ],
                    tags: ["agile", "coaching"]
                }
             ]
        },
        {
            name: "Nantes",
            ville_img: "img/BBL_Nantes.jpg",
            lat: 47.219102,
            lng: -1.551132,

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
                    ],
                    tags: ["agile", "serious game"]
                },
                {
                    name: "Cécile Especel",
                    bio: "Développeuse puis chef de projet c'est suite à une conférence à l'Agile Tour Nantes 2010 que je m'intéresse puis me passionne pour l'agilité. ScrumMaster chez A2F j'intervient chez différents clients pour guider des équipes et des responsables métier vers plus d'agilité au quotidien. En dehors de mes activités professionnelles j'intègre en 2011 l'équipe d'Agile Nantes et participe à l'organisation des Agile Tour.",
                    picture: "http://www.cecile-especel.com/var/users/7831/avatar/8108/avatar_cp.jpg",
                    websites: [
                        {title: "A2F", href: "http://www.a2f-services.fr/"},
                        {title: "Mon CV DoYouBuzz", href: "http://www.cecile-especel.com/"}
                    ],
                    twitter: "Cecile_Especel",
                    contact: "cespecel@gmail.com",
                    location: "Nantes et environs.",
                    sessions: [
                        {
                            title: "Introduction aux méthodes agiles",
                            summary: "L'agilité, vous en entendez beaucoup parler, mais concrètement, qu'est ce que c'est ?"
                        },
                        {
                            title: "Jeux Agiles",
                            summary: "Animation de différents jeux agiles pour s'initier ou approfondir : Lego4Scrum, Marshmallow Challenge, ensemble de jeux courts tels que La Vache et Les Spécifications, Origami Agile etc."
                        }
                    ],
                    tags: ["agile", "serious game"]
                },
                {
                    name: "Clément Delafargue",
                    bio: "Consultant, développeur, entrepreneur, λ geek",
                    picture: "http://clement.delafargue.name/profile_square.jpg",
                    websites: [
                        {title: "Clément Delafargue", href: "http://clement.delafargue.name"},
                        {title: "Tech blog", href: "http://blog.clement.delafargue.name"},
                        {title: "LinkedIn", href: "http://fr.linkedin.com/in/cdelafargue"}
                    ],
                    twitter: "clementd",
                    contact: "clement+bbl@delafargue.name",
                    location: "Nantes et environs.",
                    sessions: [
                        {
                            title: "FP Jedi tricks",
                            summary: "Apprentissage de la programmation fonctionnelle. Live coding autour de notions fonctionnelles."
                        },
                        {
                            title: "Ma première REST API",
                            summary: "Live coding d'une petite API REST en scala"
                        },
                        {
                            title: "How I learned to stop worrying and love static typing",
                            summary: "Pourquoi et comment un bon système de type est votre meilleur ami pour écrire du code sans vous prendre la tête."
                        }
                    ],
                    tags: ["scala", "haskell", "functional programming"]
                },
                {
                    name: "Geoffroy Couprie",
                    bio: "Consultant freelance en développement web et sécurité, développeur mobile, hacker",
                    picture: "http://1.gravatar.com/avatar/ed9901b9b80743c05aedf58b4f4926dd?s=256",
                    websites: [
                        {title: "Geoffroy Couprie", href: "http://geoffroycouprie.com"},
                        {title: "Unhandled Expression", href: "http://unhandledexpression.com/"},
                        {title: "Pilot SSH", href: "http://pilotssh.com/"}
                    ],
                    twitter: "gcouprie",
                    contact: "contact@geoffroycouprie.com",
                    location: "Nantes et environs.",
                    sessions: [
                        {
                            title: "Le stockage des mots de passe",
                            summary: "Comment stocker des mots de passe de manière sécurisée? Quel impact sur l'application et les utilisateurs?"
                        },
                        {
                            title: "Introduction à la cryptographie",
                            summary: "La cryptographie n'est pas qu'une science mathématique. C'est un outil pratique pour des problèmes de confiance, de confidentialité, etc.<br />Je vous présenterai les idées menant à la conception d'un protocole sécurisé, et comment je choisis un algorithme pour y répondre."
                        },
                        {
                            title: "Optimisation SSL",
                            summary: "SSL est probablement déployé sur vos serveurs, mais avez-vous pensé à renforcer sa configuration? A l'accélérer?<br />Je vous fournirai une série d'astuces et d'outils pour mieux sécuriser un serveur TLS et en obtenir une performance intéressante."
                        },
                        {
                            title: "Quick tips of Web Security",
                            summary: "Les navigateurs récents ont intégré des fonctionnalités utiles pour la sécurité des applications web, qui sont souvent faciles à mettre en place.<br />Présentation de quelques failles classiques, et comment les corriger facilement."
                        }
                    ],
                    tags: ["sécurité", "cryptographie", "SSL", "performance"]
                }
            ]
        },
        {
            name: "Lille",
            ville_img: "img/BBL_Lille.jpg",
            lat:50.637222,
            lng: 3.063333,
            baggers: [
                {
                    name: "Julien Jakubowski",
                    bio: "Développeur passionné, technical leader. Co-animateur du Ch'ti JUG et de l'Agile Tour Lille.",
                    picture: "http://s3.amazonaws.com/askbob/users/photos/70/preview/carree.jpg",
                    websites: [
                        { title: "Ch'ti JUG", href: "http://chtijug.org/" },
                        { title: "Blog Octo", href: "http://blog.octo.com/" }
                    ],
                    twitter: "jak78",
                    contact: "jja@octo.com",
                    location: "Métropole lilloise, région parisienne",
                    sessions: [
                        {
                            title: "Du JavaScript propre ? Challenge accepted !",
                            summary: "Mes recettes pour écrire, sans stress, des applications JavaScript complexes. Présentation ou mise en pratique sous forme de coding dojo."
                        },
                        {
                            title: "Spring Batch : par quel bout le prendre ?",
                            summary: "En Java, quand je fais du batch : je suis à poil ? Et bien non, il y a Spring Batch. Je vous propose de vous le présenter. Et pourquoi pas coder notre premier batch ensemble."
                        },
                        {
                            title: "Les tests automatisés, ça n'est pas possible chez moi...",
                            summary: "...vraiment ? Et si on regardait ?"
                        },
                        {
                            title: "Coding dojo sur mesure",
                            summary: "Organiser un coding dojo chez vous, sur mesure. Langages Java, JavaScript, Ruby. Mise en pratique clean code, TDD, ATDD..."
                        },
                        {
                            title: "Speed consulting sur la productivité des développements",
                            summary: "Comment être plus productif ? Avoir moins de bugs ? Que faire concrètement sur mon projet pour cela ? Même le temps d'un déj, on peut trouver quelques pistes."
                        }
                    ],
                    tags: ["javascript", "spring", "tests", "dojo"]
                }
            ]
        },
    	{
            name: "Lyon",
            ville_img: "img/BBL_Lyon.jpg",
            lat:45.764043,
            lng: 4.835659,
            baggers: [
                {
                    name: "Hugo Lassiège",
                    bio: "Geek et entrepreneur. Un bon cocktail pour parler technologie et production de valeur.",
                    picture: "http://res.cloudinary.com/hopwork/image/upload/t_bigprofile/go08sv2fmb7zxdotfqyq.png",
                    websites: [
                        { title: "Blog perso", href: "http://hakanai.free.fr/" },
                        { title: "Localizeyourapps (fondateur)", href: "http://www.localizeyourapps.com/" },
						{ title: "Hopwork (co-fondateur)", href: "http://www.hopwork.com/" },
						{ title: "Lateral-Thoughts (co-fondateur)", href: "http://www.lateral-thoughts.com/" },
						{ title: "Blog sur developpez.com", href: "http://hugo.developpez.com" }
                    ],
                    twitter: "hugolassiege",
                    contact: "hlassiege+bbl@gmail.com",
                    location: "Lyon",
                    sessions: [
                        {
                            title: "Le web en Java, c'est possible ?",
                            summary: "Java commence à trainer derrière lui quelques casserolles et une réputation mérité d'écosystème complexe. Pourtant sa force c'est bien le web mais avec plus de 100 frameworks web comment choisir ? Ce sera l'occasion de faire un tour d'horizon des frameworks, des approches et de comprendre pragmatiquement ce qui vous convient le mieux."
                        },
                        {
                            title: "Développer à l'âge adulte.",
                            summary: "On aborde les années 2010 et il reste encore beaucoup à faire pour que les pratiques de développement arrivent à maturité dans les entreprises. Etes-vous adulte ? Et si non quelles sont les étapes à franchir ? Quels sont les anniversaires à célébrer ? Ce sera l'occasion d'aborder non seulement les pratiques de test mais aussi la qualimétrie, le déploiement, les frontières entre développeurs et opérationnels, tout cet écosystème qui permet de délivrer de la valeur."
                        },
                        {
                            title: "Big Data, pourquoi, comment ?",
                            summary: "Au delà des buzz word, qu'entends-on par Nosql, bigdata, cloud, machine learning etc... ? Vous vous sentez dépassés ou curieux ? Vous n'êtes pas sûr d'en avoir besoin mais vous avez un doute ? Faisons déjà le point sur la réalité que recouvre ces technologies, essayons de comprendre sur vos données si vous avez de la richesse non exploitée qui pourrait en profiter."
                        },
                        {
                            title: "Organisez vos documents avec Mongo",
                            summary: "Derrière le terme Nosql se cache une multitude de base de données avec des objectifs bien distincts. Mongodb est l'une d'entre elles. Orienté document, cette base propose un modèle de requêtage riche, des bonnes performances, une très bonne scalabilité et d'autres fonctionnalités avancées (recherche full text, géocalisation, mapreduce). Mongo peut-il répondre à vos cas d'usage ? Pouvez-vous vivre sans transactions et sans contraintes relationnelles. Comment conçoit-on un schéma de données orienté document ? Comment manipule-t'on ces données ? Comment tirer parti de ces spécificités ?"
                        },
                        {
                            title: "Elastic Search, parce qu'on a toujours besoin de rechercher quelque chose",
                            summary: "Rechercher des données est sans doute ce qui se fait le plus couramment dans toutes les applications. Mais le faites-vous bien ? Etes vous capable de guider votre utilisateur pour qu'il trouve ses résultats ? Lui suggérez-vous d'autres pistes ? Ou tout simplement, pensez-vous que WHERE mon champ like '%s%' commence à être vraiment trop limité pour vos besoins ?"
                        },
                        {
                            title: "Architecture distribuées",
                            summary: "Le temps des applications monolithiques multi fonctions s'éloigne. Désormais on recherche à composer par services, on recherche la haute disponibilité, la résistance aux erreurs, le déploiement ciblé. Comment peut-on y arriver sans construire un monstre inmaintenable ? Comment faire simple tout en répondant à des problématiques complexes ? On pourra discuter d'architecture orientée message, de bonnes pratiques de déploiement, de monitoring, d'interropérabilité. Il faudra choisir car le sujet est vaste ;)"
                        }
                    ],
                    tags: ["web", "java", "big data", "mongodb", "elasticsearch"]
                },
                {
                    name: "Cédric Exbrayat",
                    bio: "Développe des trucs cools en Java et Javascript par passion et pour vivre. Leader du Lyon Java User Group, de la conférence Mix-it, et co-fondateur de la société Ninja Squad.",
                    picture: "http://www.gravatar.com/avatar/0f0edb7904c4eea5f1b60fba0bf88537?s=250",
                    websites: [
                        { title: "Blog", href: "http://hypedrivendev.wordpress.com/" },
                        { title: "Ninja Squad (co-fondateur)", href: "http://ninja-squad.fr/" },
                        { title: "Mix-it", href: "http://mix-it.fr" }
                    ],
                    twitter: "cedric_exbrayat",
                    contact: "contact+bbl@ninja-squad.com",
                    location: "Lyon",
                    sessions: [
                        {
                            title: "Java 8 - découvrir les lambdas",
                            summary: "Les lambdas sont la fonctionnalité majeure de Java 8! Si vous voulez découvrir la programmation fonctionnelle, les nouvelles fonctions utilisables sur les collections et l'impact sur votre code de demain, ce talk est fait pour vous!"
                        },
                        {
                          title: "AngularJS - le framework javascript de demain",
                            summary: "Une plongée en douceur dans ce framework développé par Google et qui pourrait devenir le standard de demain."  
                        },
                        {
                            title: "Git - l'incontournable",
                            summary: "Introduction à Git et comment en tirer partie dans votre entreprise."
                        },
                        {
                            title: "Play! Framework - fast web development",
                            summary: "Play! Framework fait aujourd’hui figure d’incontournable, utilisé aussi bien par des startups, des grands groupes et des géants du Web. Venez découvrir les concepts et la philosophie derrière ce fantastique outil, depuis les bases de la 1.2 jusqu’aux révolutions de la 2.1!"
                        },
                        {
                            title: "Apache Camel - un framework d'intégration ultralight",
                            summary: "Parce que l'on a toujours besoin de communiquer entre plusieurs applications, découvrez la puissance et la simplicité de Camel."
                        }
                    ],
                    tags: ["java", "lambda", "angularjs", "javascript", "play framework", "git"]
                },
                {
                    name: "Alfred Almendra",
                    bio: "Facilitateur et accompagnateur agile et lean",
                    picture: "https://fr.gravatar.com/userimage/31482138/9a46acc84c01ac2a04e72849850fb7d3.jpg?size=250",
                    websites: [
                        { title: "Blog perso", href: "http://atelierlogiciel.wordpress.com" }
                    ],
                    twitter: "AlfredAlmendra",
                    contact: "alfred.almendra@gmail.com",
                    location: "Lyon",
                    sessions: [
                        {
                            title: "Découvrir l'agilité",
                            summary: "Les jeux de sensibilisation permettent de se familiariser avec les valeurs et les principes agiles."
                        },
                        {
                            title: "Créer de la valeur et innover",
                            summary: "Les ateliers UX et autres jeux sérieux sont un moyen efficace de créer de la valeur et d'innover. Ils permettent notamment d'obtenir un feedback rapide avant même de coder."
                        },
                        {
                            title: "Techniques de programmation",
                            summary: "Coder proprement c'est tester d'abord et remanier souvent. Il s'agit d'une introduction aux pratiques techniques de test, de programmation, de refactoring, et de conception émergente. Format : coding dojo en Java."
                        },
                        {
                            title: "Gestion de projet en mode agile",
                            summary: "Etre agile c'est avant tout un état d'esprit. Mais pour pratiquer concrètement l'agilité, il est intéressant de mettre en place quelques rituels, et de faire appel aux \"jeux qui font le travail\"."
                        },
                        {
                            title: "Management, leadership : bienvenue au 21è siècle !",
                            summary: "Les individus ne sont pas des ressources ! Une nouvelle posture et de nouvelles pratiques permettent de soutenir la créativité et l'efficacité des équipes et des organisations agiles."
                        },
                        {
                            title: "SLA : viser l'engagement de service",
                            summary: "L'industrialisation passe par l'automatisation, mais cela ne suffit pas. Quelques pratiques simples pour challenger votre organisation."
                        },
                        {
                            title: "Entreprendre en mode agile",
                            summary: "Présentation des techniques popularisées par le Lean Startup pour construire un modèle économique de façon empirique."
                        }
                    ],
                    tags: ["agile", "agilité", "ux", "expérience utilisateur", "lean", "extreme programming", "scrum", "kanban", "jeux sérieux", "jeux agiles", "lean startup", "visual management", "management 3.0"]
                }
            ]
        }
    ]
};
