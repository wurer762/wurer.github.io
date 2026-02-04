// Translation data
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.certificates': 'Certificates',
        'nav.experiences': 'Experiences',

        // Home page
        'home.title': 'Würth Eric',
        'home.subtitle': 'Cloud Computing Student & IT Infrastructure Specialist. Building secure hosting environments, managing virtualized systems, and developing scalable web applications.',
        'home.about': 'About Me',
        'home.about.title': 'Cloud Computing Student & IT Infrastructure Specialist',
        'home.about.desc': 'Currently pursuing a BTS in Cloud Computing at Lycée Guillaume Kroll. Passionate about building secure infrastructure, automating systems, and developing modern web applications.',
        'home.about.experience': 'Professional Experience',
        'home.about.exp1': '✓ Securitec - Security systems installation and maintenance',
        'home.about.exp2': '✓ National Library of Luxembourg - IT support and user assistance',
        'home.about.exp3': '✓ Municipality of Differdange - Event coordination and technical support',
        'home.about.competencies': 'Core Competencies',
        'home.about.competencies.list': 'Cloud Computing • Server Management • Virtualization • Networking • Web Development • Security Systems',
        'home.about.languages': 'Languages',
        'home.about.languages.list': 'Luxembourgish (C2) • German (C1) • English (B2) • French (B1)',
        'home.skills': 'Skills',
        'home.skills.infrastructure': 'Infrastructure',
        'home.skills.webdev': 'Web Development',
        'home.skills.databases': 'Databases',
        'home.skills.other': 'Other',
        'home.skills.networking': 'Networking',
        'home.skills.hardware': 'Computer Hardware',
        'home.education': 'Education',
        'home.edu.bts': 'BTS Diploma - Cloud Computing',
        'home.edu.bts.school': 'Lycée Guillaume Kroll',
        'home.edu.bts.date': '2025 - Present',
        'home.edu.tech': 'Diplôme de technicien',
        'home.edu.tech.school': 'Lycée Guillaume Kroll',
        'home.edu.tech.date': '2021 - 2025',
        'home.edu.general': 'General Secondary Education',
        'home.edu.general.school': 'Lycée Guillaume Kroll',
        'home.edu.general.date': '2018 - 2021',
        'home.contact': 'Contact',
        'home.contact.desc': "I'm always open to connect and explore new opportunities!",
        'home.contact.email': 'Email: eric.wurth@proton.me',
        'home.contact.linkedin': 'LinkedIn',
        'home.contact.cv': 'Download CV',

        // Projects page
        'projects.title': 'My Projects',
        'projects.desc': 'A showcase of my technical projects spanning web development, cloud computing, and system administration. Each project demonstrates practical application of modern technologies and problem-solving approaches.',
        'projects.grading.tag': '(School Project)',
        'projects.grading.desc': 'A grade management web application developed as a BTS Cloud Computing group project. Built with Django 5.0 and Python 3.11, containerized with Docker, and secured with Argon2 password hashing. The system enables teachers to create classrooms, manage student grades, and write observations, while students can track their academic progress across multiple grading scales.',
        'projects.grading.cta': 'View Project Details →',
        'projects.lme.tag': '(Group Project)',
        'projects.lme.desc': 'A secure multi-tenant hosting platform on Hetzner dedicated server. Client websites are isolated using Proxmox VMs and Docker Compose, with Cloudflare for DNS and security, and external monitoring via Raspberry Pi.',
        'projects.lme.cta': 'View Project Details →',

        // Certificates page
        'certificates.title': 'Professional Certificates',
        'certificates.desc': 'A collection of my professional certifications demonstrating expertise in Microsoft Office applications and Azure cloud services. Each certification represents validated skills and knowledge through official Microsoft assessments.',
        'certificates.counter': 'Certificates Earned',
        'cert.word.title': 'Microsoft Office Specialist: Word Associate',
        'cert.word.desc': 'Demonstrates competency in creating and managing Word documents, including formatting text, paragraphs, and sections, as well as managing tables, lists, and references for Microsoft 365 Apps.',
        'cert.word.link': 'View Certification on Credly →',
        'cert.word.expert.title': 'Microsoft Office Specialist: Word Expert',
        'cert.word.expert.desc': 'Advanced certification showcasing expert-level skills in managing document options, designing advanced documents, creating custom references, and utilizing advanced Word features for Microsoft 365 Apps.',
        'cert.word.expert.link': 'View Certification on Credly →',
        'cert.powerpoint.title': 'Microsoft Office Specialist: PowerPoint Associate',
        'cert.powerpoint.desc': 'Certified proficiency in creating and managing presentations, including inserting and formatting text, shapes, and images, as well as applying transitions and animations for Microsoft 365 Apps.',
        'cert.powerpoint.link': 'View Certification on Credly →',
        'cert.azure.title': 'Microsoft Certified: Azure Fundamentals',
        'cert.azure.desc': 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure, including core Azure services, security, privacy, compliance, trust, and Azure pricing and support.',
        'cert.azure.link': 'View Certification on Credly →',
        'cert.excel.title': 'Microsoft Office Specialist: Excel Associate',
        'cert.excel.desc': 'Demonstrates proficiency in creating and managing worksheets and workbooks, creating cells and ranges, managing tables and table data, performing operations with formulas and functions, and managing charts for Microsoft 365 Apps.',
        'cert.excel.link': 'View Certification on Credly →',
        'cert.mos.title': 'Microsoft Office Specialist: Associate',
        'cert.mos.desc': 'Earned by demonstrating competency in multiple Microsoft Office applications. This certification validates comprehensive skills across Word, Excel, and PowerPoint, proving proficiency in the most essential productivity tools for Microsoft 365 Apps.',
        'cert.mos.link': 'View Certification on Credly →',

        // Experiences page
        'experiences.title': 'Professional Experiences',
        'experiences.desc': 'My professional journey through internships, practical work experiences, and educational visits. Each experience has contributed to developing my technical skills and understanding of real-world IT operations.',
        'exp.bnl.title': 'Internship - National Library of Luxembourg',
        'exp.bnl.date': 'September - October 2024 | 6 Weeks',
        'exp.bnl.desc': 'Provided comprehensive IT and user support services, assisting library staff and visitors with technical issues, system troubleshooting, and digital resource access.',
        'exp.securitec.title': 'Internship - Securitec',
        'exp.securitec.date': 'February - March 2023 | 6 Weeks',
        'exp.securitec.desc': 'Assisted technicians with security system installation and maintenance. Gained hands-on experience with alarm systems, surveillance equipment, and security infrastructure.',
        'exp.luxconnect.title': 'Educational Visit - LuxConnect',
        'exp.luxconnect.date': '2026',
        'exp.luxconnect.desc': "Participated in an educational visit to LuxConnect's data center facilities. Learned about enterprise-scale infrastructure, data center operations, cooling systems, and modern cloud hosting architecture.",

        // Grading Dino project page
        'grading.subtitle': 'School Project - Educational Application',
        'grading.overview': 'Project Overview',
        'grading.about': 'About the Project',
        'grading.about.desc': 'GradingDino is a grade management web application developed as a BTS Cloud Computing group project by a four-person team. The system enables teachers to create classrooms, manage student grades, and write observations, while students can track their academic progress and maintain personal notes.',
        'grading.features.title': 'Key Features',
        'grading.features.1': '• Role-based access control (Admin, Teacher, Student)',
        'grading.features.2': '• Classroom creation and management',
        'grading.features.3': '• Grade tracking by semester and subject',
        'grading.features.4': '• Multiple grading scale support (20-point, 60-point, letter grades)',
        'grading.features.5': '• Teacher observation records',
        'grading.features.6': '• Personal notes functionality for students',
        'grading.features.7': '• Django admin panel for user and scale management',
        'grading.features': 'Features',
        'grading.features.students': 'For Students',
        'grading.features.students.1': '• View grades and academic results by semester and subject',
        'grading.features.students.2': '• Access personalized dashboard',
        'grading.features.students.3': '• Track progress across multiple grading scales',
        'grading.features.students.4': '• Maintain personal notes for academic organization',
        'grading.features.teachers': 'For Teachers',
        'grading.features.teachers.1': '• Create and manage classrooms',
        'grading.features.teachers.2': '• Grade students using multiple scale formats (20-point, 60-point, letter grades)',
        'grading.features.teachers.3': '• Write and track observation records for students',
        'grading.features.teachers.4': '• Update grades with concurrent write support',
        'grading.features.admins': 'For Administrators',
        'grading.features.admins.1': '• Full system access through Django admin panel',
        'grading.features.admins.2': '• User management and role assignment',
        'grading.features.admins.3': '• Grading scale configuration and customization',
        'grading.features.admins.4': '• System-wide settings and security controls',
        'grading.stack': 'Technical Stack',
        'grading.stack.framework': 'Framework & Language',
        'grading.stack.framework.desc': "Built with Django 5.0 and Python 3.11-slim, leveraging Django's \"batteries included\" approach for rapid development with built-in authentication, ORM, admin panel, forms, validation, and security features.",
        'grading.stack.db': 'Database',
        'grading.stack.db.desc': 'PostgreSQL 16 was selected for its Docker-native integration, concurrent write support allowing multiple teachers to grade simultaneously, and full ACID compliance for data integrity.',
        'grading.stack.security': 'Security',
        'grading.stack.security.desc': 'Implements Argon2 password hashing, developed at the University of Luxembourg and winner of the Password Hashing Competition (2015). Features memory-hard design resistant to GPU/ASIC brute-force attacks.',
        'grading.stack.frontend': 'Frontend',
        'grading.stack.frontend.desc': 'Uses Pico.css minimalist framework (~10KB) with server-side rendering through Django templates. All validation and logic handled server-side for enhanced security and simplicity.',
        'grading.stack.deployment': 'Deployment',
        'grading.stack.deployment.desc': 'Containerized with Docker and Docker Compose for environment consistency and production-ready architecture. System starts with a single docker compose up command.',
        'grading.docs': 'Project Documentation',
        'grading.docs.desc': 'Complete technical research and technology decision documentation:',
        'grading.docs.link': '📄 Research Document (PDF)',

        // LME project page
        'lme.subtitle': 'Luxembourg Media Engineering - Secure Multi-Tenant Hosting Platform',
        'lme.overview': 'Project Overview',
        'lme.about': 'About the Project',
        'lme.about.desc': 'Small organizations and individual clients often need reliable web hosting without the complexity and cost of large cloud providers. This project designs and implements a secure and scalable hosting environment on a Hetzner dedicated server. Client websites are isolated using Proxmox virtual machines and Docker Compose, while Cloudflare provides DNS management and security features. An external monitoring solution based on a Raspberry Pi ensures independent availability checks using the Hetzner API.',
        'lme.goal': 'Project Goal',
        'lme.goal.desc': 'To deploy a secure multi-tenant hosting environment, capable of running multiple websites with isolation and monitoring.',
        'lme.team': 'Team',
        'lme.tech': 'Technology Stack',
        'lme.stack.virtualization': 'Virtualization',
        'lme.stack.virtualization.desc': 'Proxmox VE provides the hypervisor layer for creating isolated virtual machines per client. Each VM runs independently, ensuring tenant separation and resource allocation control.',
        'lme.stack.containerization': 'Containerization',
        'lme.stack.containerization.desc': 'Docker Compose orchestrates services within each VM, allowing easy deployment and management of web applications, databases, and supporting services with reproducible configurations.',
        'lme.stack.webserver': 'Web Server',
        'lme.stack.webserver.desc': 'Nginx serves as the reverse proxy and web server, handling SSL termination, load balancing, and routing requests to the appropriate containers.',
        'lme.stack.dns': 'DNS & Security',
        'lme.stack.dns.desc': 'Cloudflare manages DNS records and provides DDoS protection, WAF capabilities, and SSL certificates, adding an extra security layer before traffic reaches the server.',
        'lme.stack.monitoring': 'Monitoring',
        'lme.stack.monitoring.desc': 'An external Raspberry Pi monitors server availability independently using the Hetzner API, enabling automated alerts and recovery actions when issues are detected.',
        'lme.stack.access': 'Access Control',
        'lme.stack.access.desc': 'SSH with key-based authentication provides secure remote access. Firewall rules restrict traffic to essential ports, and Git enables version-controlled configuration management.',
        'lme.features': 'Key Features',
        'lme.features.1': '• Host multiple client websites on a Hetzner dedicated server',
        'lme.features.2': '• Use Proxmox to create VMs for client isolation',
        'lme.features.3': '• Use Docker Compose to separate services',
        'lme.features.4': '• Integrate Cloudflare for DNS management and DDoS/Security features',
        'lme.features.5': '• External monitoring on a Raspberry Pi using the Hetzner API',
        'lme.features.6': '• Secure SSH access and firewall configuration',
        'lme.docs': 'Project Documentation',
        'lme.docs.desc': 'Project Proposal for the LME Project.',
        'lme.docs.link': '📄 Project Proposal - PROMA Project (PDF)',

        // OSYCL DFS project page
        'projects.osycl.tag': '(School Project)',
        'projects.osycl.desc': 'A comprehensive presentation on Windows Server File and Storage Services with a live demonstration of Distributed File System (DFS) implementation, including DFS Namespaces and Replication configuration.',
        'projects.osycl.cta': 'View Project Details →',
        'osycl.subtitle': 'DFS Demonstration - Windows Server',
        'osycl.overview': 'Project Overview',
        'osycl.about': 'About the Project',
        'osycl.about.desc': 'A comprehensive lab presentation on Windows Server File and Storage Services, focusing on the Distributed File System (DFS). The project included both theoretical documentation and a live demonstration of DFS implementation in an enterprise environment.',
        'osycl.goal': 'Project Goal',
        'osycl.goal.desc': 'To demonstrate how DFS Namespaces and DFS Replication can be used to create a centralized, highly available file structure for enterprise environments.',
        'osycl.team': 'Team',
        'osycl.tech': 'Technology Stack',
        'osycl.stack.server': 'Windows Server',
        'osycl.stack.server.desc': 'Windows Server provides the foundation for File and Storage Services, enabling the organization, management, and provision of files and storage resources within a network.',
        'osycl.stack.dfs': 'DFS Namespaces',
        'osycl.stack.dfs.desc': 'Organizes file shares across multiple servers into a single logical namespace. Users access files through a consistent path regardless of which server actually stores the data.',
        'osycl.stack.replication': 'DFS Replication',
        'osycl.stack.replication.desc': 'Replicates data between multiple servers using an efficient delta-transfer mechanism. Provides redundancy, high availability, and load distribution across servers.',
        'osycl.stack.ad': 'Active Directory',
        'osycl.stack.ad.desc': 'Provides the domain environment required for domain-based DFS namespaces, enabling centralized authentication and permission management.',
        'osycl.topics': 'Topics Covered',
        'osycl.topics.documentation': 'Documentation',
        'osycl.topics.doc.1': 'File and Storage Services introduction',
        'osycl.topics.doc.2': 'DFS definition, components, and advantages',
        'osycl.topics.doc.3': 'Work Folders for BYOD scenarios',
        'osycl.topics.demo': 'Live Demonstration',
        'osycl.topics.demo.1': 'Setting up a domain server with Active Directory',
        'osycl.topics.demo.2': 'Installing DFS Namespaces and DFS Replication roles',
        'osycl.topics.demo.3': 'Creating and configuring DFS namespaces',
        'osycl.topics.demo.4': 'Adding folders and folder targets',
        'osycl.topics.demo.5': 'Configuring DFS Replication between servers',
        'osycl.topics.demo.6': 'Client configuration and network drive mapping',
        'osycl.docs': 'Project Documentation',
        'osycl.docs.desc': 'Complete documentation and demonstration guide for DFS implementation:',
        'osycl.docs.link': '📄 DFS Demonstration Document (PDF)',

        // Status tags
        'status.completed': 'Completed',
        'status.inprogress': 'In Progress',

        // Breadcrumbs
        'breadcrumb.home': 'Home',
        'breadcrumb.projects': 'Projects'
    },
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.projects': 'Projets',
        'nav.certificates': 'Certificats',
        'nav.experiences': 'Expériences',

        // Home page
        'home.title': 'Würth Eric',
        'home.subtitle': 'Étudiant en Cloud Computing & Spécialiste en Infrastructure IT. Création d\'environnements d\'hébergement sécurisés, gestion de systèmes virtualisés et développement d\'applications web évolutives.',
        'home.about': 'À propos de moi',
        'home.about.title': 'Étudiant en Cloud Computing & Spécialiste en Infrastructure IT',
        'home.about.desc': 'Actuellement en BTS Cloud Computing au Lycée Guillaume Kroll. Passionné par la création d\'infrastructures sécurisées, l\'automatisation des systèmes et le développement d\'applications web modernes.',
        'home.about.experience': 'Expérience professionnelle',
        'home.about.exp1': '✓ Securitec - Installation et maintenance de systèmes de sécurité',
        'home.about.exp2': '✓ Bibliothèque nationale du Luxembourg - Support informatique et assistance utilisateurs',
        'home.about.exp3': '✓ Commune de Differdange - Coordination d\'événements et support technique',
        'home.about.competencies': 'Compétences clés',
        'home.about.competencies.list': 'Cloud Computing • Gestion de serveurs • Virtualisation • Réseaux • Développement web • Systèmes de sécurité',
        'home.about.languages': 'Langues',
        'home.about.languages.list': 'Luxembourgeois (C2) • Allemand (C1) • Anglais (B2) • Français (B1)',
        'home.skills': 'Compétences',
        'home.skills.infrastructure': 'Infrastructure',
        'home.skills.webdev': 'Développement Web',
        'home.skills.databases': 'Bases de données',
        'home.skills.other': 'Autres',
        'home.skills.networking': 'Réseaux',
        'home.skills.hardware': 'Matériel informatique',
        'home.education': 'Formation',
        'home.edu.bts': 'BTS - Cloud Computing',
        'home.edu.bts.school': 'Lycée Guillaume Kroll',
        'home.edu.bts.date': '2025 - Présent',
        'home.edu.tech': 'Diplôme de technicien',
        'home.edu.tech.school': 'Lycée Guillaume Kroll',
        'home.edu.tech.date': '2021 - 2025',
        'home.edu.general': 'Enseignement secondaire général',
        'home.edu.general.school': 'Lycée Guillaume Kroll',
        'home.edu.general.date': '2018 - 2021',
        'home.contact': 'Contact',
        'home.contact.desc': 'Je suis toujours ouvert à de nouvelles connexions et opportunités !',
        'home.contact.email': 'Email : eric.wurth@proton.me',
        'home.contact.linkedin': 'LinkedIn',
        'home.contact.cv': 'Télécharger CV',

        // Projects page
        'projects.title': 'Mes Projets',
        'projects.desc': 'Une vitrine de mes projets techniques couvrant le développement web, le cloud computing et l\'administration système. Chaque projet démontre l\'application pratique des technologies modernes et des approches de résolution de problèmes.',
        'projects.grading.tag': '(Projet scolaire)',
        'projects.grading.desc': 'Une application web de gestion des notes développée dans le cadre d\'un projet de groupe BTS Cloud Computing. Construite avec Django 5.0 et Python 3.11, conteneurisée avec Docker et sécurisée avec le hachage de mots de passe Argon2. Le système permet aux enseignants de créer des classes, gérer les notes des élèves et rédiger des observations, tandis que les élèves peuvent suivre leur progression académique sur plusieurs échelles de notation.',
        'projects.grading.cta': 'Voir les détails du projet →',
        'projects.lme.tag': '(Projet de groupe)',
        'projects.lme.desc': 'Une plateforme d\'hébergement multi-tenant sécurisée sur serveur dédié Hetzner. Les sites clients sont isolés avec des VMs Proxmox et Docker Compose, avec Cloudflare pour le DNS et la sécurité, et une surveillance externe via Raspberry Pi.',
        'projects.lme.cta': 'Voir les détails du projet →',

        // Certificates page
        'certificates.title': 'Certificats professionnels',
        'certificates.desc': 'Une collection de mes certifications professionnelles démontrant mon expertise dans les applications Microsoft Office et les services cloud Azure. Chaque certification représente des compétences et connaissances validées par des évaluations officielles Microsoft.',
        'certificates.counter': 'Certificats obtenus',
        'cert.word.title': 'Microsoft Office Specialist : Word Associate',
        'cert.word.desc': 'Démontre la compétence dans la création et la gestion de documents Word, y compris le formatage du texte, des paragraphes et des sections, ainsi que la gestion des tableaux, listes et références pour Microsoft 365 Apps.',
        'cert.word.link': 'Voir la certification sur Credly →',
        'cert.word.expert.title': 'Microsoft Office Specialist : Word Expert',
        'cert.word.expert.desc': 'Certification avancée démontrant des compétences de niveau expert dans la gestion des options de document, la conception de documents avancés, la création de références personnalisées et l\'utilisation des fonctionnalités avancées de Word pour Microsoft 365 Apps.',
        'cert.word.expert.link': 'Voir la certification sur Credly →',
        'cert.powerpoint.title': 'Microsoft Office Specialist : PowerPoint Associate',
        'cert.powerpoint.desc': 'Compétence certifiée dans la création et la gestion de présentations, y compris l\'insertion et le formatage de texte, formes et images, ainsi que l\'application de transitions et animations pour Microsoft 365 Apps.',
        'cert.powerpoint.link': 'Voir la certification sur Credly →',
        'cert.azure.title': 'Microsoft Certified : Azure Fundamentals',
        'cert.azure.desc': 'Connaissances fondamentales des services cloud et de leur fourniture avec Microsoft Azure, y compris les services Azure principaux, la sécurité, la confidentialité, la conformité, la confiance et la tarification et le support Azure.',
        'cert.azure.link': 'Voir la certification sur Credly →',
        'cert.excel.title': 'Microsoft Office Specialist : Excel Associate',
        'cert.excel.desc': 'Démontre la maîtrise de la création et de la gestion de feuilles de calcul et de classeurs, la création de cellules et de plages, la gestion de tableaux et de données, l\'exécution d\'opérations avec des formules et des fonctions, et la gestion de graphiques pour Microsoft 365 Apps.',
        'cert.excel.link': 'Voir la certification sur Credly →',
        'cert.mos.title': 'Microsoft Office Specialist : Associate',
        'cert.mos.desc': 'Obtenu en démontrant des compétences dans plusieurs applications Microsoft Office. Cette certification valide des compétences complètes dans Word, Excel et PowerPoint, prouvant la maîtrise des outils de productivité essentiels pour Microsoft 365 Apps.',
        'cert.mos.link': 'Voir la certification sur Credly →',

        // Experiences page
        'experiences.title': 'Expériences professionnelles',
        'experiences.desc': 'Mon parcours professionnel à travers des stages, des expériences de travail pratiques et des visites éducatives. Chaque expérience a contribué au développement de mes compétences techniques et à ma compréhension des opérations informatiques réelles.',
        'exp.bnl.title': 'Stage - Bibliothèque nationale du Luxembourg',
        'exp.bnl.date': 'Septembre - Octobre 2024 | 6 semaines',
        'exp.bnl.desc': 'Services complets de support informatique et utilisateur, aide au personnel de la bibliothèque et aux visiteurs pour les problèmes techniques, le dépannage système et l\'accès aux ressources numériques.',
        'exp.securitec.title': 'Stage - Securitec',
        'exp.securitec.date': 'Février - Mars 2023 | 6 semaines',
        'exp.securitec.desc': 'Assistance aux techniciens pour l\'installation et la maintenance des systèmes de sécurité. Expérience pratique avec les systèmes d\'alarme, les équipements de surveillance et l\'infrastructure de sécurité.',
        'exp.luxconnect.title': 'Visite éducative - LuxConnect',
        'exp.luxconnect.date': '2026',
        'exp.luxconnect.desc': 'Visite éducative des installations du centre de données LuxConnect. Découverte de l\'infrastructure à grande échelle, des opérations du centre de données, des systèmes de refroidissement et de l\'architecture moderne d\'hébergement cloud.',

        // Grading Dino project page
        'grading.subtitle': 'Projet scolaire - Application éducative',
        'grading.overview': 'Aperçu du projet',
        'grading.about': 'À propos du projet',
        'grading.about.desc': 'GradingDino est une application web de gestion des notes développée dans le cadre d\'un projet de groupe BTS Cloud Computing par une équipe de quatre personnes. Le système permet aux enseignants de créer des classes, gérer les notes des élèves et rédiger des observations, tandis que les élèves peuvent suivre leur progression académique et gérer leurs notes personnelles.',
        'grading.features.title': 'Fonctionnalités clés',
        'grading.features.1': '• Contrôle d\'accès basé sur les rôles (Admin, Enseignant, Élève)',
        'grading.features.2': '• Création et gestion de classes',
        'grading.features.3': '• Suivi des notes par semestre et matière',
        'grading.features.4': '• Support de plusieurs échelles de notation (sur 20, sur 60, lettres)',
        'grading.features.5': '• Registres d\'observations des enseignants',
        'grading.features.6': '• Gestion de notes personnelles pour les élèves',
        'grading.features.7': '• Panneau d\'administration Django pour la gestion des utilisateurs et des échelles',
        'grading.features': 'Fonctionnalités',
        'grading.features.students': 'Pour les élèves',
        'grading.features.students.1': '• Consulter les notes et résultats académiques par semestre et matière',
        'grading.features.students.2': '• Accéder au tableau de bord personnalisé',
        'grading.features.students.3': '• Suivre la progression sur plusieurs échelles de notation',
        'grading.features.students.4': '• Gérer des notes personnelles pour l\'organisation académique',
        'grading.features.teachers': 'Pour les enseignants',
        'grading.features.teachers.1': '• Créer et gérer des classes',
        'grading.features.teachers.2': '• Noter les élèves en utilisant plusieurs formats d\'échelle (sur 20, sur 60, lettres)',
        'grading.features.teachers.3': '• Rédiger et suivre les registres d\'observations des élèves',
        'grading.features.teachers.4': '• Mettre à jour les notes avec support d\'écriture concurrente',
        'grading.features.admins': 'Pour les administrateurs',
        'grading.features.admins.1': '• Accès complet au système via le panneau d\'administration Django',
        'grading.features.admins.2': '• Gestion des utilisateurs et attribution des rôles',
        'grading.features.admins.3': '• Configuration et personnalisation des échelles de notation',
        'grading.features.admins.4': '• Paramètres système et contrôles de sécurité',
        'grading.stack': 'Stack technique',
        'grading.stack.framework': 'Framework & Langage',
        'grading.stack.framework.desc': 'Construit avec Django 5.0 et Python 3.11-slim, exploitant l\'approche "batteries incluses" de Django pour un développement rapide avec authentification intégrée, ORM, panneau d\'administration, formulaires, validation et fonctionnalités de sécurité.',
        'grading.stack.db': 'Base de données',
        'grading.stack.db.desc': 'PostgreSQL 16 a été sélectionné pour son intégration native Docker, son support d\'écriture concurrente permettant à plusieurs enseignants de noter simultanément, et sa conformité ACID complète pour l\'intégrité des données.',
        'grading.stack.security': 'Sécurité',
        'grading.stack.security.desc': 'Implémente le hachage de mots de passe Argon2, développé à l\'Université du Luxembourg et gagnant du Password Hashing Competition (2015). Conception memory-hard résistante aux attaques par force brute GPU/ASIC.',
        'grading.stack.frontend': 'Frontend',
        'grading.stack.frontend.desc': 'Utilise le framework minimaliste Pico.css (~10KB) avec rendu côté serveur via les templates Django. Toute la validation et la logique sont gérées côté serveur pour une sécurité et une simplicité améliorées.',
        'grading.stack.deployment': 'Déploiement',
        'grading.stack.deployment.desc': 'Conteneurisé avec Docker et Docker Compose pour la cohérence de l\'environnement et une architecture prête pour la production. Le système démarre avec une seule commande docker compose up.',
        'grading.docs': 'Documentation du projet',
        'grading.docs.desc': 'Documentation complète de recherche technique et de décisions technologiques :',
        'grading.docs.link': '📄 Document de recherche (PDF)',

        // LME project page
        'lme.subtitle': 'Luxembourg Media Engineering - Plateforme d\'hébergement multi-tenant sécurisée',
        'lme.overview': 'Aperçu du projet',
        'lme.about': 'À propos du projet',
        'lme.about.desc': 'Les petites organisations et les clients individuels ont souvent besoin d\'un hébergement web fiable sans la complexité et le coût des grands fournisseurs cloud. Ce projet conçoit et implémente un environnement d\'hébergement sécurisé et évolutif sur un serveur dédié Hetzner. Les sites clients sont isolés à l\'aide de machines virtuelles Proxmox et Docker Compose, tandis que Cloudflare fournit la gestion DNS et les fonctionnalités de sécurité. Une solution de surveillance externe basée sur un Raspberry Pi assure des vérifications de disponibilité indépendantes via l\'API Hetzner.',
        'lme.goal': 'Objectif du projet',
        'lme.goal.desc': 'Déployer un environnement d\'hébergement multi-tenant sécurisé, capable d\'exécuter plusieurs sites web avec isolation et surveillance.',
        'lme.team': 'Équipe',
        'lme.tech': 'Stack technologique',
        'lme.stack.virtualization': 'Virtualisation',
        'lme.stack.virtualization.desc': 'Proxmox VE fournit la couche hyperviseur pour créer des machines virtuelles isolées par client. Chaque VM fonctionne indépendamment, assurant la séparation des locataires et le contrôle de l\'allocation des ressources.',
        'lme.stack.containerization': 'Conteneurisation',
        'lme.stack.containerization.desc': 'Docker Compose orchestre les services au sein de chaque VM, permettant un déploiement et une gestion faciles des applications web, bases de données et services de support avec des configurations reproductibles.',
        'lme.stack.webserver': 'Serveur Web',
        'lme.stack.webserver.desc': 'Nginx sert de proxy inverse et serveur web, gérant la terminaison SSL, l\'équilibrage de charge et le routage des requêtes vers les conteneurs appropriés.',
        'lme.stack.dns': 'DNS & Sécurité',
        'lme.stack.dns.desc': 'Cloudflare gère les enregistrements DNS et fournit une protection DDoS, des capacités WAF et des certificats SSL, ajoutant une couche de sécurité supplémentaire avant que le trafic n\'atteigne le serveur.',
        'lme.stack.monitoring': 'Surveillance',
        'lme.stack.monitoring.desc': 'Un Raspberry Pi externe surveille la disponibilité du serveur de manière indépendante via l\'API Hetzner, permettant des alertes automatisées et des actions de récupération lorsque des problèmes sont détectés.',
        'lme.stack.access': 'Contrôle d\'accès',
        'lme.stack.access.desc': 'SSH avec authentification par clé fournit un accès distant sécurisé. Les règles de pare-feu limitent le trafic aux ports essentiels, et Git permet une gestion de configuration contrôlée par version.',
        'lme.features': 'Fonctionnalités clés',
        'lme.features.1': '• Héberger plusieurs sites clients sur un serveur dédié Hetzner',
        'lme.features.2': '• Utiliser Proxmox pour créer des VMs pour l\'isolation des clients',
        'lme.features.3': '• Utiliser Docker Compose pour séparer les services',
        'lme.features.4': '• Intégrer Cloudflare pour la gestion DNS et les fonctionnalités DDoS/Sécurité',
        'lme.features.5': '• Surveillance externe sur un Raspberry Pi via l\'API Hetzner',
        'lme.features.6': '• Accès SSH sécurisé et configuration du pare-feu',
        'lme.docs': 'Documentation du projet',
        'lme.docs.desc': 'Proposition de projet pour le projet LME.',
        'lme.docs.link': '📄 Proposition de projet - Projet PROMA (PDF)',

        // OSYCL DFS project page
        'projects.osycl.tag': '(Projet scolaire)',
        'projects.osycl.desc': 'Une présentation complète sur les services de fichiers et de stockage Windows Server avec une démonstration en direct de l\'implémentation du système de fichiers distribué (DFS), incluant la configuration des espaces de noms DFS et de la réplication.',
        'projects.osycl.cta': 'Voir les détails du projet →',
        'osycl.subtitle': 'Démonstration DFS - Windows Server',
        'osycl.overview': 'Aperçu du projet',
        'osycl.about': 'À propos du projet',
        'osycl.about.desc': 'Une présentation de laboratoire complète sur les services de fichiers et de stockage Windows Server, axée sur le système de fichiers distribué (DFS). Le projet comprenait une documentation théorique et une démonstration en direct de l\'implémentation DFS dans un environnement d\'entreprise.',
        'osycl.goal': 'Objectif du projet',
        'osycl.goal.desc': 'Démontrer comment les espaces de noms DFS et la réplication DFS peuvent être utilisés pour créer une structure de fichiers centralisée et hautement disponible pour les environnements d\'entreprise.',
        'osycl.team': 'Équipe',
        'osycl.tech': 'Stack technologique',
        'osycl.stack.server': 'Windows Server',
        'osycl.stack.server.desc': 'Windows Server fournit la base des services de fichiers et de stockage, permettant l\'organisation, la gestion et la fourniture de fichiers et de ressources de stockage au sein d\'un réseau.',
        'osycl.stack.dfs': 'Espaces de noms DFS',
        'osycl.stack.dfs.desc': 'Organise les partages de fichiers sur plusieurs serveurs en un seul espace de noms logique. Les utilisateurs accèdent aux fichiers via un chemin cohérent, quel que soit le serveur qui stocke réellement les données.',
        'osycl.stack.replication': 'Réplication DFS',
        'osycl.stack.replication.desc': 'Réplique les données entre plusieurs serveurs en utilisant un mécanisme efficace de transfert delta. Fournit redondance, haute disponibilité et répartition de charge entre les serveurs.',
        'osycl.stack.ad': 'Active Directory',
        'osycl.stack.ad.desc': 'Fournit l\'environnement de domaine requis pour les espaces de noms DFS basés sur le domaine, permettant l\'authentification centralisée et la gestion des permissions.',
        'osycl.topics': 'Sujets couverts',
        'osycl.topics.documentation': 'Documentation',
        'osycl.topics.doc.1': 'Introduction aux services de fichiers et de stockage',
        'osycl.topics.doc.2': 'Définition, composants et avantages de DFS',
        'osycl.topics.doc.3': 'Work Folders pour les scénarios BYOD',
        'osycl.topics.demo': 'Démonstration en direct',
        'osycl.topics.demo.1': 'Configuration d\'un serveur de domaine avec Active Directory',
        'osycl.topics.demo.2': 'Installation des rôles Espaces de noms DFS et Réplication DFS',
        'osycl.topics.demo.3': 'Création et configuration des espaces de noms DFS',
        'osycl.topics.demo.4': 'Ajout de dossiers et de cibles de dossiers',
        'osycl.topics.demo.5': 'Configuration de la réplication DFS entre serveurs',
        'osycl.topics.demo.6': 'Configuration client et mappage de lecteur réseau',
        'osycl.docs': 'Documentation du projet',
        'osycl.docs.desc': 'Documentation complète et guide de démonstration pour l\'implémentation DFS :',
        'osycl.docs.link': '📄 Document de démonstration DFS (PDF)',

        // Status tags
        'status.completed': 'Terminé',
        'status.inprogress': 'En cours',

        // Breadcrumbs
        'breadcrumb.home': 'Accueil',
        'breadcrumb.projects': 'Projets'
    }
};

// Apply translations to the page
function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update page title if needed
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        const titleKey = pageTitle.getAttribute('data-i18n');
        if (titleKey && translations[lang] && translations[lang][titleKey]) {
            pageTitle.textContent = translations[lang][titleKey];
        }
    }
}

// Language switching functionality
function setLanguage(lang) {
    // Save to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Update current language display
    updateCurrentLangDisplay(lang);

    // Close dropdown
    closeLangDropdown();

    // Apply translations
    applyTranslations(lang);
}

// Update the current language display in the button
function updateCurrentLangDisplay(lang) {
    const currentLangSpan = document.getElementById('current-lang');
    const currentFlagSpan = document.getElementById('current-flag');

    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }

    if (currentFlagSpan) {
        const flags = {
            en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="10"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>',
            fr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="20" height="13"><rect width="3" height="2" fill="#ED2939"/><rect width="2" height="2" fill="#fff"/><rect width="1" height="2" fill="#002395"/></svg>'
        };
        currentFlagSpan.innerHTML = flags[lang] || flags.en;
    }
}

// Toggle language dropdown
function toggleLangDropdown() {
    const selector = document.querySelector('.language-selector');
    if (selector) {
        selector.classList.toggle('open');
    }
}

// Close language dropdown
function closeLangDropdown() {
    const selector = document.querySelector('.language-selector');
    if (selector) {
        selector.classList.remove('open');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const selector = document.querySelector('.language-selector');
    if (selector && !selector.contains(e.target)) {
        closeLangDropdown();
    }
});

// Load saved language preference
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';

    // Update current language display
    updateCurrentLangDisplay(savedLang);

    // Apply translations
    applyTranslations(savedLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load language preference and apply translations
    loadLanguagePreference();

    // Initialize certificate counter animation
    initCounterAnimation();
});

// Animated Counter for Certificates
function initCounterAnimation() {
    const counterElement = document.querySelector('.counter-number');
    if (!counterElement) return;

    const targetNumber = parseInt(counterElement.textContent);

    // Check if animation already ran this session
    if (sessionStorage.getItem('counterAnimated')) {
        counterElement.textContent = targetNumber;
        return;
    }

    // Run animation once
    animateCounter(counterElement, targetNumber);
    sessionStorage.setItem('counterAnimated', 'true');
}

function animateCounter(element, target) {
    let current = 0;
    const duration = 1500;
    const stepTime = duration / target;

    const timer = setInterval(() => {
        current++;
        element.textContent = current;
        if (current >= target) {
            clearInterval(timer);
        }
    }, stepTime);
}
