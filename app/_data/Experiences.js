

export const experiences = [
  // Baobabs de sapaga
  {
    type: "stage",
    categorie: "primaire",
    annee: "2023",
    nbrMois: "3",
    ville: "Bram",
    pays: "France",
    entreprise: "Association les baobabs de sapaga",
    rapportStage: "",
    infosEntreprise:
      "Une petite association située à Bram, dans le département de l'Aude, près de Carcassonne en France. Elle mène des actions de lutte contre l'illettrisme et la non-scolarisation des enfants dans le village de Sapaga, au Burkina Faso.",
    poste:
      "développeur Full-Stack et  analyste de données",
    problematique: {
      titre: `L'association "Les Baobabs de Sapaga" rencontre de grandes difficultés dans la gestion des données relatives aux déplacés internes au Burkina Faso. L'absence d'un logiciel dédié entraîne une organisation défaillante des informations, dispersées entre des fiches papier et des fichiers Excel non structurés. Cette situation complique l'exploitation des données, limite l'analyse statistique et nuit à la prise de décision stratégique.`,
      limites: [
        {
          titre: "Absence de logiciel dédié",
          contenu:
           ["Pas de système centralisé pour stocker et gérer les données"],
        },
        {
          titre: "Dispersion des informations",
          contenu:
            ["Données réparties entre fiches papier et fichiers Excel mal structurés, rendant la gestion complexe"],
        },
        {
          titre: "Difficulté d'exploitation des données",
          contenu:
            ["Impossible d'extraire facilement des informations pertinentes"],
        },
        {
          titre: "Analyse statistique limitée",
          contenu:
            ["Données non structurées, compliquant l’élaboration de statistiques fiables"],
        },
        {
          titre: "Prise de décision entravée",
          contenu:
            ["Manque d'informations actualisées et précises pour orienter les actions de l'association"],
        },
        {
          titre: "Risques d'erreurs et de pertes de données",
          contenu:
            ["Documents papier sujets à la dégradation ou à la perte, fichiers Excel pouvant être corrompus ou mal remplis"],
        },
        {
          titre: "Absence d'automatisation",
          contenu:
           [ "Toutes les tâches sont réalisées manuellement, entraînant une perte de temps et une inefficacité accrue"],
        },
        {
          titre: "Difficulté d'accès aux données",
          contenu:
            ["Pas de système en ligne permettant un accès rapide et sécurisé aux informations"],
        },
        {
          titre: "Incapacité à faire des prévisions",
          contenu:
            ["Aucune solution permettant d'analyser les tendances et d'anticiper les évolutions des déplacements internes"],
        },
        {
          titre: "Sécurité et confidentialité compromises",
          contenu:
            ["Données sensibles exposées à des accès non contrôlés, augmentant le risque de fuite ou de manipulation"],
        },
      ],
    },
    action: {
      titre:
        "Face à cette problématique, la nécessité d'une solution informatique performante s'impose. L'objectif est de concevoir et développer une application web Full-Stack intégrant une base de données relationnelle",
      objectifs: [
        {
          titre: "Centraliser et structurer les données",
          contenu: ["sur les déplacés internes pour une meilleure gestion"],
        },
        {
          titre:
            "Faciliter la collecte, la modification et la suppression des données",
          contenu: ["via une interface utilisateur intuitive"],
        },
        {
          titre: "Automatiser l’affichage des statistiques",
          contenu: ["pour une meilleure prise de décision"],
        },
        {
          titre: "Permettre l'impression des données en PDF",
          contenu: ["afin de faciliter leur partage et leur archivage"],
        },
        {
          titre: "Garantir l'accessibilité et la sécurité des informations",
          contenu: ["via un hébergement en ligne"],
        },
        {
          titre: "Élaborer des prévisions statistiques",
          contenu: [
            "pour anticiper les tendances et orienter les actions de l'association",
          ],
        },
      ],
    },
    missions: [
      {
        titre: "Analyse des besoins",
        contenu: [
          "Étudier les données existantes (fiches papier, fichiers Excel) pour comprendre leur structure",
          "Poser des questions aux membres de l'association pour mieux cerner leurs attentes",
          "Identifier les relations entre les différentes données et définir les exigences fonctionnelles",
        ],
      },
      {
        titre: "Conception de la base de données",
        contenu: [
          "Effectuer une modélisation des données en utilisant UML.",
          "Concevoir une base de données relationnelle adaptée aux besoins de gestion des déplacés internes",
          "Définir les tables et relations nécessaires (familles, individus, autres informations liées aux familles)",
        ],
      },
      {
        titre: "Développement de la plateforme web",
        contenu: [
          "Développer une application web Full-Stack pour la gestion des données.",
          "Implémenter les fonctionnalités de création, modification, suppression et affichage des données",
          "Mettre en place un système d’authentification et de gestion des utilisateurs",
        ],
      },
      {
        titre: "Automatisation et exploitation des données",
        contenu: [
          "Générer des statistiques dynamiques pour une meilleure analyse des données",
          "Permettre l’impression des données en PDF pour faciliter leur partage.",
          "Assurer la recherche et le filtrage avancé des informations",
        ],
      },
      {
        titre: "Hébergement et accessibilité du projet",
        contenu: [
          "Héberger la plateforme en ligne pour garantir un accès sécurisé et permanent",
          "Mettre en place des mesures de sauvegarde et de protection des données",
        ],
      },
      {
        titre: "Optimisation et évolutivité",
        contenu: [
          "Assurer la maintenance et l’administration du projet après sa mise en ligne",
          "Permettre l’ajout de nouvelles fonctionnalités selon les besoins futurs de l’association",
          "Travailler sur l’amélioration continue de la plateforme pour garantir son efficacité",
        ],
      },
      {
        titre: "Prise en charge des prévisions statistiques",
        contenu: [
          "Mettre en place des outils permettant d’anticiper les tendances des déplacements internes",
          "Élaborer des modèles prédictifs basés sur les données collectées",
          "Permettre à l’association de prendre des décisions stratégiques basées sur ces prévisions",
        ],
      },
      {
        titre: "Documentation et formation",
        contenu: [
          "Rédiger une documentation technique et utilisateur pour faciliter la prise en main du système.",
          "Former les membres de l’association à l’utilisation de la plateforme",
          "Assurer un support technique en cas de besoin",
        ],
      },
    ],
    technologies: {
      langage: ["PHP (Laravel)", "Javascript"],
      database: ["SQL", "MySQL"],
      framework: [
        "Laravel (Backend)",
        "Livewire (Frontend dynamique)",
        "Alpine.js",
        "Bootstrap",
      ],
      frontEnd: ["HTML", "CSS", "JavaScript"],
      outils: ["Github", "git"],
      autres: ["DompPDF"],
    },

    conclusion:
      "Le projet a été mené en autonomie complète, de l'analyse des besoins à la mise en production, en passant par la modélisation UML, la conception de la base de données et le développement de la plateforme web. Aujourd'hui, cette solution enregistre plus de 500 familles, chacune pouvant compter jusqu'à 15 personnes, sans oublier les autres tables liées à une famille, contenant des informations essentielles pour une gestion plus détaillée et complète des déplacés internes. Le projet continue d’évoluer sous ma supervision en tant qu’administrateur.",
  },
  // Fin Baobabs de sapaga
  // Debut Akilisoft

  {
    type: "stage",
    categorie: "primaire",
    annee: "2021",
    nbrMois: "3",
    ville: "Bobo Dioulasso",
    pays: "Burkina Faso",
    entreprise: "Akili-Soft",
    rapportStage: "",
    infosEntreprise:
      "AkiliSoft est une entreprise de développement de logiciel, de marketing digital et de prestation de service informatique.",
    poste: "développeur web Full-Stack",
    problematique: {
      titre: `Actuellement, la réservation d’un billet dans une compagnie de transport routier repose principalement sur deux méthodes : le déplacement physique vers un titre de vente ou l’appel à un centre téléphonique. `,
      limites: [
        {
          titre: "Contraintes de déplacement",
          contenu:
            [" obligeant les clients à se rendre en gare pour réserver un billet"],
        },
        {
          titre: "Lignes téléphoniques souvent saturées",
          contenu:
            ["entraînant des temps d’attente longs et des échanges inefficaces"],
        },
        {
          titre: "Dispersion des informations",
          contenu:
            ["sur les horaires et tarifs, accessibles uniquement en gare ou sur différents canaux (réseaux sociaux, WhatsApp, Facebook)"],
        },
      ],
    },

    action: {
      titre: `Face à ces difficultés, l’entreprise Akili-Soft souhaite développer une application web de réservation de tickets de voyage, nommée "Etrans", qui centralise toutes les informations et facilite la réservation à distance. Cette solution offrira aux voyageurs un gain de temps, une réduction des coûts et une expérience utilisateur améliorée, tout en optimisant la gestion des réservations pour les compagnies de transport.`,
      objectifs: [
        {
          titre: "Faciliter la réservation des tickets de voyage",
          contenu: [
            "Permettre aux utilisateurs de réserver leurs billets sans se déplacer",
            "Offrir une alternative aux centres d’appel souvent saturés",
          ],
        },
        {
          titre: "Centraliser les informations sur les voyages",
          contenu: [
            "Regrouper les horaires, tarifs et disponibilités sur une seule plateforme",
            "Éviter la dispersion des informations sur plusieurs canaux (gares, réseaux sociaux, WhatsApp)",
          ],
        },
        {
          titre:
            "Optimiser la gestion des réservations pour les compagnies de transport",
          contenu: [
            "Automatiser le traitement des demandes pour réduire les erreurs et la charge de travail",
            "Assurer un suivi en temps réel des réservations et des disponibilités",
          ],
        },
        {
          titre: "Améliorer l’expérience utilisateur",
          contenu: [
            "Mettre en place une interface simple et intuitive",
            "Offrir des fonctionnalités avancées : recherche de voyages, réservation rapide, paiement sécurisé",
          ],
        },
        {
          titre: "Réduire les coûts et le temps de réservation",
          contenu: [
            "Supprimer la nécessité de se rendre physiquement aux points de vente",
            "Minimiser les temps d’attente liés aux appels téléphoniques",
          ],
        },
        {
          titre: "Permettre un suivi en temps réel des voyages",
          contenu: [
            "Informer les voyageurs sur les horaires de départ et les modifications éventuelles",
            "Offrir des notifications automatiques sur l’état des réservations",
          ],
        },
        {
          titre: "Mettre en place un système sécurisé et fiable",
          contenu: [
            "Assurer la protection des données personnelles des utilisateurs",
            "Mettre en œuvre des mécanismes de paiement sécurisé",
          ],
        },
        {
          titre: "Favoriser l’évolution et l’adaptabilité de la solution",
          contenu: [
            "Concevoir une application évolutive pouvant intégrer de nouvelles fonctionnalités",
            "Permettre l’ajout de nouvelles compagnies de transport au fil du temps",
          ],
        },
      ],
    },

    missions: [
      {
        titre: "Familiarisation avec le domaine du transport routier",
        contenu: ["pour identifier les besoins métier"],
      },
      {
        titre: "Rédaction d’un cahier des charges ",
        contenu: ["détaillant les spécifications fonctionnelles et techniques"],
      },
      {
        titre: "Modélisation des données",
        contenu: [
          "avec UML et MERISE pour structurer le système d’information",
        ],
      },
      {
        titre: "Développement de l’application web",
        contenu: ["en respectant les bonnes pratiques"],
      },
      {
        titre: "Conception et mise en place de la base de données",
        contenu: ["et réalisation des requêtes en SQL"],
      },
      {
        titre: "Programmation Full-Stack",
        contenu: ["en utilisant des frameworks modernes"],
      },
      {
        titre: "Mise en place d’un système de gestion de versions",
        contenu: [
          "avec GitHub pour assurer la collaboration et le suivi du projet",
        ],
      },
      {
        titre: "Tests et validation",
        contenu: ["du système avant la mise en production"],
      },
      {
        titre: "Rédaction du rapport de projet",
        contenu: "",
      },
    ],
    technologies: {
      langage: ["PHP (Laravel)", "Javascript"],
      database: ["SQL", "MySQL"],
      framework: [
        "Laravel (Backend)",
        "Livewire (Frontend dynamique)",

        "Bootstrap",
      ],
      frontEnd: ["HTML", "CSS", "JavaScript"],
      outils: ["Github", "git"],
    },

    conclusion:
      "Ce projet a été réalisé en collaboration à deux, permettant une meilleure répartition des tâches et une optimisation du développement",
  },
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
];
