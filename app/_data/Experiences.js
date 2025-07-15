export const experiences = [
  // Baobabs de sapaga
  {
    type: "internship",
    categorie: "primary",
    annee: "2023",
    nbrMois: "21",
    ville: "Bram",
    pays: "France",
    entreprise: "Association les baobabs de sapaga",
    rapportStage: "",
    infosEntreprise:
      "A small association located in Bram, in the Aude department near Carcassonne in France. It carries out actions to combat illiteracy and non-schooling of children in the village of Sapaga, Burkina Faso.",
    poste: "Full-Stack developer and data analyst",
    problematique: {
      titre: `The association "Les Baobabs de Sapaga" faces major difficulties in managing data related to internally displaced persons in Burkina Faso. The lack of dedicated software leads to poor organization of information, scattered between paper forms and unstructured Excel files. This situation complicates data processing, limits statistical analysis and hinders strategic decision-making.`,
      limites: [
        {
          titre: "Absence of dedicated software",
          contenu:
           ["No centralized system to store and manage data"],
        },
        {
          titre: "Scattered information",
          contenu:
            ["Data spread between paper forms and poorly structured Excel files, making management complex"],
        },
        {
          titre: "Difficulty in data processing",
          contenu:
            ["Impossible to easily extract relevant information"],
        },
        {
          titre: "Limited statistical analysis",
          contenu:
            ["Unstructured data, making it difficult to produce reliable statistics"],
        },
        {
          titre: "Hindered decision-making",
          contenu:
            ["Lack of up-to-date and accurate information to guide the association's actions"],
        },
        {
          titre: "Risk of errors and data loss",
          contenu:
            ["Paper documents subject to deterioration or loss, Excel files that may be corrupted or incorrectly filled"],
        },
        {
          titre: "Lack of automation",
          contenu:
           [ "All tasks are performed manually, resulting in wasted time and increased inefficiency"],
        },
        {
          titre: "Difficulty accessing data",
          contenu:
            ["No online system allowing quick and secure access to information"],
        },
        {
          titre: "Inability to make forecasts",
          contenu:
            ["No solution to analyze trends and anticipate changes in internal displacement"],
        },
        {
          titre: "Compromised security and confidentiality",
          contenu:
            ["Sensitive data exposed to uncontrolled access, increasing the risk of leaks or manipulation"],
        },
      ],
    },
    action: {
      titre:
        "Faced with this problem, the need for an effective IT solution becomes clear. The objective is to design and develop a Full-Stack web application integrating a relational database",
      objectifs: [
        {
          titre: "Centralize and structure data",
          contenu: ["on internally displaced persons for better management"],
        },
        {
          titre:
            "Facilitate data collection, modification and deletion",
          contenu: ["through an intuitive user interface"],
        },
        {
          titre: "Automate statistics display",
          contenu: ["for better decision-making"],
        },
        {
          titre: "Enable data printing in PDF",
          contenu: ["to facilitate sharing and archiving"],
        },
        {
          titre: "Ensure information accessibility and security",
          contenu: ["through online hosting"],
        },
        {
          titre: "Develop statistical forecasts",
          contenu: [
            "to anticipate trends and guide the association's actions",
          ],
        },
      ],
    },
    missions: [
      {
        titre: "Needs analysis",
        contenu: [
          "Study existing data (paper forms, Excel files) to understand their structure",
          "Ask association members questions to better understand their expectations",
          "Identify relationships between different data and define functional requirements",
        ],
      },
      {
        titre: "Database design",
        contenu: [
          "Perform data modeling using UML",
          "Design a relational database adapted to the needs of managing internally displaced persons",
          "Define necessary tables and relationships (families, individuals, other information related to families)",
        ],
      },
      {
        titre: "Web platform development",
        contenu: [
          "Develop a Full-Stack web application for data management",
          "Implement data creation, modification, deletion and display functionalities",
          "Set up an authentication and user management system",
        ],
      },
      {
        titre: "Data automation and processing",
        contenu: [
          "Generate dynamic statistics for better data analysis",
          "Enable data printing in PDF to facilitate sharing",
          "Ensure advanced information search and filtering",
        ],
      },
      {
        titre: "Project hosting and accessibility",
        contenu: [
          "Host the platform online to guarantee secure and permanent access",
          "Implement data backup and protection measures",
        ],
      },
      {
        titre: "Optimization and scalability",
        contenu: [
          "Ensure project maintenance and administration after going live",
          "Allow addition of new features according to the association's future needs",
          "Work on continuous platform improvement to ensure its effectiveness",
        ],
      },
      {
        titre: "Statistical forecasting implementation",
        contenu: [
          "Implement tools to anticipate internal displacement trends",
          "Develop predictive models based on collected data",
          "Enable the association to make strategic decisions based on these forecasts",
        ],
      },
      {
        titre: "Documentation and training",
        contenu: [
          "Write technical and user documentation to facilitate system adoption",
          "Train association members on platform use",
          "Provide technical support when needed",
        ],
      },
    ],
    technologies: {
      langage: ["PHP (Laravel)", "Javascript"],
      database: ["SQL", "MySQL"],
      framework: [
        "Laravel (Backend)",
        "Livewire (Dynamic Frontend)",
        "Alpine.js",
        "Bootstrap",
      ],
      frontEnd: ["HTML", "CSS", "JavaScript"],
      outils: ["Github", "git"],
      autres: ["DompPDF"],
    },

    conclusion:
      "The project was carried out completely independently, from needs analysis to production deployment, including UML modeling, database design and web platform development. Today, this solution records more than 500 families, each potentially including up to 15 people, not to mention other tables linked to a family containing essential information for more detailed and complete management of internally displaced persons. The project continues to evolve under my supervision as administrator.",
  },
  // Fin Baobabs de sapaga
  // Debut Akilisoft

  {
    type: "internship",
    categorie: "primairy",
    annee: "2021",
    nbrMois: "10",
    ville: "Bobo Dioulasso",
    pays: "Burkina Faso",
    entreprise: "Akili-Soft",
    rapportStage: "",
    infosEntreprise:
      "AkiliSoft is a software development, digital marketing and IT services company.",
    poste: "Full-Stack web developer",
    problematique: {
      titre: `Currently, booking a ticket with a road transport company mainly relies on two methods: physically going to a ticket office or calling a telephone center.`,
      limites: [
        {
          titre: "Travel constraints",
          contenu:
            ["forcing customers to go to the station to book a ticket"],
        },
        {
          titre: "Often overloaded phone lines",
          contenu:
            ["resulting in long waiting times and inefficient exchanges"],
        },
        {
          titre: "Scattered information",
          contenu:
            ["about schedules and fares, only available at stations or on different channels (social networks, WhatsApp, Facebook)"],
        },
      ],
    },

    action: {
      titre: `Faced with these difficulties, Akili-Soft wants to develop a web application for travel ticket booking, called "Etrans", which centralizes all information and facilitates remote booking. This solution will offer travelers time savings, cost reduction and improved user experience, while optimizing reservation management for transport companies.`,
      objectifs: [
        {
          titre: "Facilitate travel ticket booking",
          contenu: [
            "Allow users to book their tickets without traveling",
            "Provide an alternative to often overloaded call centers",
          ],
        },
        {
          titre: "Centralize travel information",
          contenu: [
            "Group schedules, fares and availability on a single platform",
            "Avoid information dispersion across multiple channels (stations, social networks, WhatsApp)",
          ],
        },
        {
          titre:
            "Optimize reservation management for transport companies",
          contenu: [
            "Automate request processing to reduce errors and workload",
            "Ensure real-time tracking of reservations and availability",
          ],
        },
        {
          titre: "Improve user experience",
          contenu: [
            "Implement a simple and intuitive interface",
            "Offer advanced features: travel search, quick booking, secure payment",
          ],
        },
        {
          titre: "Reduce costs and booking time",
          contenu: [
            "Eliminate the need to physically go to sales points",
            "Minimize waiting times related to phone calls",
          ],
        },
        {
          titre: "Enable real-time travel tracking",
          contenu: [
            "Inform travelers about departure times and possible changes",
            "Provide automatic notifications about reservation status",
          ],
        },
        {
          titre: "Implement a secure and reliable system",
          contenu: [
            "Ensure protection of users' personal data",
            "Implement secure payment mechanisms",
          ],
        },
        {
          titre: "Promote solution evolution and adaptability",
          contenu: [
            "Design a scalable application that can integrate new features",
            "Allow addition of new transport companies over time",
          ],
        },
      ],
    },

    missions: [
      {
        titre: "Familiarization with road transport sector",
        contenu: ["to identify business needs"],
      },
      {
        titre: "Writing specifications",
        contenu: ["detailing functional and technical requirements"],
      },
      {
        titre: "Data modeling",
        contenu: [
          "with UML and MERISE to structure the information system",
        ],
      },
      {
        titre: "Web application development",
        contenu: ["following best practices"],
      },
      {
        titre: "Database design and implementation",
        contenu: ["and SQL query writing"],
      },
      {
        titre: "Full-Stack programming",
        contenu: ["using modern frameworks"],
      },
      {
        titre: "Version control system implementation",
        contenu: [
          "with GitHub to ensure collaboration and project tracking",
        ],
      },
      {
        titre: "Testing and validation",
        contenu: ["of the system before production deployment"],
      },
      {
        titre: "Project report writing",
        contenu: "",
      },
    ],
    technologies: {
      langage: ["PHP (Laravel)", "Javascript"],
      database: ["SQL", "MySQL"],
      framework: [
        "Laravel (Backend)",
        "Livewire (Dynamic Frontend)",
        "Bootstrap",
      ],
      frontEnd: ["HTML", "CSS", "JavaScript"],
      outils: ["Github", "git"],
    },

    conclusion:
      "This project was carried out in collaboration between two people, allowing better task distribution and development optimization",
  },
];

// export const experiences = [
//   // Baobabs de sapaga
//   {
//     type: "stage",
//     categorie: "primaire",
//     annee: "2023",
//     nbrMois: "6",
//     ville: "Bram",
//     pays: "France",
//     entreprise: "Association les baobabs de sapaga",
//     rapportStage: "",
//     infosEntreprise:
//       "Une petite association située à Bram, dans le département de l'Aude, près de Carcassonne en France. Elle mène des actions de lutte contre l'illettrisme et la non-scolarisation des enfants dans le village de Sapaga, au Burkina Faso.",
//     poste:
//       "développeur Full-Stack et  analyste de données",
//     problematique: {
//       titre: `L'association "Les Baobabs de Sapaga" rencontre de grandes difficultés dans la gestion des données relatives aux déplacés internes au Burkina Faso. L'absence d'un logiciel dédié entraîne une organisation défaillante des informations, dispersées entre des fiches papier et des fichiers Excel non structurés. Cette situation complique l'exploitation des données, limite l'analyse statistique et nuit à la prise de décision stratégique.`,
//       limites: [
//         {
//           titre: "Absence de logiciel dédié",
//           contenu:
//            ["Pas de système centralisé pour stocker et gérer les données"],
//         },
//         {
//           titre: "Dispersion des informations",
//           contenu:
//             ["Données réparties entre fiches papier et fichiers Excel mal structurés, rendant la gestion complexe"],
//         },
//         {
//           titre: "Difficulté d'exploitation des données",
//           contenu:
//             ["Impossible d'extraire facilement des informations pertinentes"],
//         },
//         {
//           titre: "Analyse statistique limitée",
//           contenu:
//             ["Données non structurées, compliquant l’élaboration de statistiques fiables"],
//         },
//         {
//           titre: "Prise de décision entravée",
//           contenu:
//             ["Manque d'informations actualisées et précises pour orienter les actions de l'association"],
//         },
//         {
//           titre: "Risques d'erreurs et de pertes de données",
//           contenu:
//             ["Documents papier sujets à la dégradation ou à la perte, fichiers Excel pouvant être corrompus ou mal remplis"],
//         },
//         {
//           titre: "Absence d'automatisation",
//           contenu:
//            [ "Toutes les tâches sont réalisées manuellement, entraînant une perte de temps et une inefficacité accrue"],
//         },
//         {
//           titre: "Difficulté d'accès aux données",
//           contenu:
//             ["Pas de système en ligne permettant un accès rapide et sécurisé aux informations"],
//         },
//         {
//           titre: "Incapacité à faire des prévisions",
//           contenu:
//             ["Aucune solution permettant d'analyser les tendances et d'anticiper les évolutions des déplacements internes"],
//         },
//         {
//           titre: "Sécurité et confidentialité compromises",
//           contenu:
//             ["Données sensibles exposées à des accès non contrôlés, augmentant le risque de fuite ou de manipulation"],
//         },
//       ],
//     },
//     action: {
//       titre:
//         "Face à cette problématique, la nécessité d'une solution informatique performante s'impose. L'objectif est de concevoir et développer une application web Full-Stack intégrant une base de données relationnelle",
//       objectifs: [
//         {
//           titre: "Centraliser et structurer les données",
//           contenu: ["sur les déplacés internes pour une meilleure gestion"],
//         },
//         {
//           titre:
//             "Faciliter la collecte, la modification et la suppression des données",
//           contenu: ["via une interface utilisateur intuitive"],
//         },
//         {
//           titre: "Automatiser l’affichage des statistiques",
//           contenu: ["pour une meilleure prise de décision"],
//         },
//         {
//           titre: "Permettre l'impression des données en PDF",
//           contenu: ["afin de faciliter leur partage et leur archivage"],
//         },
//         {
//           titre: "Garantir l'accessibilité et la sécurité des informations",
//           contenu: ["via un hébergement en ligne"],
//         },
//         {
//           titre: "Élaborer des prévisions statistiques",
//           contenu: [
//             "pour anticiper les tendances et orienter les actions de l'association",
//           ],
//         },
//       ],
//     },
//     missions: [
//       {
//         titre: "Analyse des besoins",
//         contenu: [
//           "Étudier les données existantes (fiches papier, fichiers Excel) pour comprendre leur structure",
//           "Poser des questions aux membres de l'association pour mieux cerner leurs attentes",
//           "Identifier les relations entre les différentes données et définir les exigences fonctionnelles",
//         ],
//       },
//       {
//         titre: "Conception de la base de données",
//         contenu: [
//           "Effectuer une modélisation des données en utilisant UML.",
//           "Concevoir une base de données relationnelle adaptée aux besoins de gestion des déplacés internes",
//           "Définir les tables et relations nécessaires (familles, individus, autres informations liées aux familles)",
//         ],
//       },
//       {
//         titre: "Développement de la plateforme web",
//         contenu: [
//           "Développer une application web Full-Stack pour la gestion des données.",
//           "Implémenter les fonctionnalités de création, modification, suppression et affichage des données",
//           "Mettre en place un système d’authentification et de gestion des utilisateurs",
//         ],
//       },
//       {
//         titre: "Automatisation et exploitation des données",
//         contenu: [
//           "Générer des statistiques dynamiques pour une meilleure analyse des données",
//           "Permettre l’impression des données en PDF pour faciliter leur partage.",
//           "Assurer la recherche et le filtrage avancé des informations",
//         ],
//       },
//       {
//         titre: "Hébergement et accessibilité du projet",
//         contenu: [
//           "Héberger la plateforme en ligne pour garantir un accès sécurisé et permanent",
//           "Mettre en place des mesures de sauvegarde et de protection des données",
//         ],
//       },
//       {
//         titre: "Optimisation et évolutivité",
//         contenu: [
//           "Assurer la maintenance et l’administration du projet après sa mise en ligne",
//           "Permettre l’ajout de nouvelles fonctionnalités selon les besoins futurs de l’association",
//           "Travailler sur l’amélioration continue de la plateforme pour garantir son efficacité",
//         ],
//       },
//       {
//         titre: "Prise en charge des prévisions statistiques",
//         contenu: [
//           "Mettre en place des outils permettant d’anticiper les tendances des déplacements internes",
//           "Élaborer des modèles prédictifs basés sur les données collectées",
//           "Permettre à l’association de prendre des décisions stratégiques basées sur ces prévisions",
//         ],
//       },
//       {
//         titre: "Documentation et formation",
//         contenu: [
//           "Rédiger une documentation technique et utilisateur pour faciliter la prise en main du système.",
//           "Former les membres de l’association à l’utilisation de la plateforme",
//           "Assurer un support technique en cas de besoin",
//         ],
//       },
//     ],
//     technologies: {
//       langage: ["PHP (Laravel)", "Javascript"],
//       database: ["SQL", "MySQL"],
//       framework: [
//         "Laravel (Backend)",
//         "Livewire (Frontend dynamique)",
//         "Alpine.js",
//         "Bootstrap",
//       ],
//       frontEnd: ["HTML", "CSS", "JavaScript"],
//       outils: ["Github", "git"],
//       autres: ["DompPDF"],
//     },

//     conclusion:
//       "Le projet a été mené en autonomie complète, de l'analyse des besoins à la mise en production, en passant par la modélisation UML, la conception de la base de données et le développement de la plateforme web. Aujourd'hui, cette solution enregistre plus de 500 familles, chacune pouvant compter jusqu'à 15 personnes, sans oublier les autres tables liées à une famille, contenant des informations essentielles pour une gestion plus détaillée et complète des déplacés internes. Le projet continue d’évoluer sous ma supervision en tant qu’administrateur.",
//   },
//   // Fin Baobabs de sapaga
//   // Debut Akilisoft

//   {
//     type: "stage",
//     categorie: "primaire",
//     annee: "2021",
//     nbrMois: "4",
//     ville: "Bobo Dioulasso",
//     pays: "Burkina Faso",
//     entreprise: "Akili-Soft",
//     rapportStage: "",
//     infosEntreprise:
//       "AkiliSoft est une entreprise de développement de logiciel, de marketing digital et de prestation de service informatique.",
//     poste: "développeur web Full-Stack",
//     problematique: {
//       titre: `Actuellement, la réservation d’un billet dans une compagnie de transport routier repose principalement sur deux méthodes : le déplacement physique vers un titre de vente ou l’appel à un centre téléphonique. `,
//       limites: [
//         {
//           titre: "Contraintes de déplacement",
//           contenu:
//             [" obligeant les clients à se rendre en gare pour réserver un billet"],
//         },
//         {
//           titre: "Lignes téléphoniques souvent saturées",
//           contenu:
//             ["entraînant des temps d’attente longs et des échanges inefficaces"],
//         },
//         {
//           titre: "Dispersion des informations",
//           contenu:
//             ["sur les horaires et tarifs, accessibles uniquement en gare ou sur différents canaux (réseaux sociaux, WhatsApp, Facebook)"],
//         },
//       ],
//     },

//     action: {
//       titre: `Face à ces difficultés, l’entreprise Akili-Soft souhaite développer une application web de réservation de tickets de voyage, nommée "Etrans", qui centralise toutes les informations et facilite la réservation à distance. Cette solution offrira aux voyageurs un gain de temps, une réduction des coûts et une expérience utilisateur améliorée, tout en optimisant la gestion des réservations pour les compagnies de transport.`,
//       objectifs: [
//         {
//           titre: "Faciliter la réservation des tickets de voyage",
//           contenu: [
//             "Permettre aux utilisateurs de réserver leurs billets sans se déplacer",
//             "Offrir une alternative aux centres d’appel souvent saturés",
//           ],
//         },
//         {
//           titre: "Centraliser les informations sur les voyages",
//           contenu: [
//             "Regrouper les horaires, tarifs et disponibilités sur une seule plateforme",
//             "Éviter la dispersion des informations sur plusieurs canaux (gares, réseaux sociaux, WhatsApp)",
//           ],
//         },
//         {
//           titre:
//             "Optimiser la gestion des réservations pour les compagnies de transport",
//           contenu: [
//             "Automatiser le traitement des demandes pour réduire les erreurs et la charge de travail",
//             "Assurer un suivi en temps réel des réservations et des disponibilités",
//           ],
//         },
//         {
//           titre: "Améliorer l’expérience utilisateur",
//           contenu: [
//             "Mettre en place une interface simple et intuitive",
//             "Offrir des fonctionnalités avancées : recherche de voyages, réservation rapide, paiement sécurisé",
//           ],
//         },
//         {
//           titre: "Réduire les coûts et le temps de réservation",
//           contenu: [
//             "Supprimer la nécessité de se rendre physiquement aux points de vente",
//             "Minimiser les temps d’attente liés aux appels téléphoniques",
//           ],
//         },
//         {
//           titre: "Permettre un suivi en temps réel des voyages",
//           contenu: [
//             "Informer les voyageurs sur les horaires de départ et les modifications éventuelles",
//             "Offrir des notifications automatiques sur l’état des réservations",
//           ],
//         },
//         {
//           titre: "Mettre en place un système sécurisé et fiable",
//           contenu: [
//             "Assurer la protection des données personnelles des utilisateurs",
//             "Mettre en œuvre des mécanismes de paiement sécurisé",
//           ],
//         },
//         {
//           titre: "Favoriser l’évolution et l’adaptabilité de la solution",
//           contenu: [
//             "Concevoir une application évolutive pouvant intégrer de nouvelles fonctionnalités",
//             "Permettre l’ajout de nouvelles compagnies de transport au fil du temps",
//           ],
//         },
//       ],
//     },

//     missions: [
//       {
//         titre: "Familiarisation avec le domaine du transport routier",
//         contenu: ["pour identifier les besoins métier"],
//       },
//       {
//         titre: "Rédaction d’un cahier des charges ",
//         contenu: ["détaillant les spécifications fonctionnelles et techniques"],
//       },
//       {
//         titre: "Modélisation des données",
//         contenu: [
//           "avec UML et MERISE pour structurer le système d’information",
//         ],
//       },
//       {
//         titre: "Développement de l’application web",
//         contenu: ["en respectant les bonnes pratiques"],
//       },
//       {
//         titre: "Conception et mise en place de la base de données",
//         contenu: ["et réalisation des requêtes en SQL"],
//       },
//       {
//         titre: "Programmation Full-Stack",
//         contenu: ["en utilisant des frameworks modernes"],
//       },
//       {
//         titre: "Mise en place d’un système de gestion de versions",
//         contenu: [
//           "avec GitHub pour assurer la collaboration et le suivi du projet",
//         ],
//       },
//       {
//         titre: "Tests et validation",
//         contenu: ["du système avant la mise en production"],
//       },
//       {
//         titre: "Rédaction du rapport de projet",
//         contenu: "",
//       },
//     ],
//     technologies: {
//       langage: ["PHP (Laravel)", "Javascript"],
//       database: ["SQL", "MySQL"],
//       framework: [
//         "Laravel (Backend)",
//         "Livewire (Frontend dynamique)",

//         "Bootstrap",
//       ],
//       frontEnd: ["HTML", "CSS", "JavaScript"],
//       outils: ["Github", "git"],
//     },

//     conclusion:
//       "Ce projet a été réalisé en collaboration à deux, permettant une meilleure répartition des tâches et une optimisation du développement",
//   },
  
// ];


// FIN AKILISOFT

  //  DEBUT ARTERRIS
  // {
  //   type: "travail",
  //   categorie: "secondaire",
  //   annee: "2024",
  //   nbrMois: "5",
  //   ville: "Alzonne",
  //   pays: "France",
  //   entreprise: "Arterris",
  //   rapportStage: "",
  //   infosEntreprise:
  //     "Arterris est une coopérative agricole présente dans une grande partie du sud de la France (régions Occitanie et Provence-Alpes-Côte d'Azur) et basée à Castelnaudary. Elle compte environ 2300 collaborateurs",
  //   poste: "Manutentionnaire Saisonnier",

  //   missions: [
  //     {
  //       titre: "Effeuilleur",
  //       contenu: [
  //         "de la prise et du passage de consignes en début et en fin de poste, du tri et du contrôle quantitatif et/ou qualitatif du maïs, du nettoyage du poste de travail",
  //       ],
  //     },
  //     {
  //       titre: "Analyste",
  //       contenu: [
  //         "récupération des échantillons au point qualité afin de procéder aux analyses( fusariés, abîmés, cassés, PMG, impuretés) afin de corriger les réglages en fonction de l'analyse, si besoin. Utisation de Excel",
  //       ],
  //     },
  //     {
  //       titre: "Cariste",
  //       contenu: [
  //         `Utiliser des chariots élévateurs pour déplacer les containeurs remplis de maïs vers les zones de stockage appropriées, en respectant les procédures derangement et en optimisant l'espace disponible`,
  //       ],
  //     },
  //   ],
  // },

  // FIN ARTERRIS

  // DEBUT MCDONALDS
  // {
  //   type: "travail",
  //   categorie: "secondaire",
  //   annee: "2023",
  //   nbrMois: "7",
  //   ville: "Carcassonne",
  //   pays: "France",
  //   entreprise: "McDonald's",
  //   rapportStage: "",
  //   infosEntreprise: "",
  //   poste: "Equipier polyvalent",

  //   missions: [
  //     {
  //       titre: "Service à la clientèle",
  //       contenu: [
  //         "au comptoir, en salle ou en cuisine, la mission première del'équipier est de satisfaire le client en l'accueillant et le servant",
  //       ],
  //     },
  //     {
  //       titre:
  //         "Maintenir propre, approvisionnées et en bon état de fonctionnementl'ensemble des zones du restaurant",
  //       contenu: [
  //         "Montage et démontage des équipements,nettoyage et aseptisation",
  //       ],
  //     },
  //     {
  //       titre: `Préparation des produits McDonald's`,
  //       contenu: [
  //         `( frites, garniture des sandwichs, cuissondes viandes, préparation des salades...) conformément aux fi ches de contrôle deposte et en respectant les normes d'hygiène de sécurité, de qualité et de service del'Enseigne`,
  //       ],
  //     },
  //   ],
  // },

  // FIN MCDONALDS