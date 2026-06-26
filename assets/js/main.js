// Translation data
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.certificates': 'Certificates',
        'nav.experiences': 'Experiences',
        'nav.bts': 'BTS Progress',
        'nav.flyer': 'Flyer',

        // Home page
        'home.title': 'Eric Würth',
        'home.subtitle': 'Cloud Computing Student. Building secure hosting environments, managing virtualized systems, and developing scalable web applications.',
        'home.about': 'About Me',
        'home.about.title': 'Cloud Computing Student',
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
        'home.skills.cloud': 'Cloud & Virtualization',
        'home.skills.os': 'Operating Systems',
        'home.skills.networking': 'Networking & Storage',
        'home.skills.webdev': 'Web Development',
        'home.skills.databases': 'Databases',
        'home.skills.tools': 'Tools & Methods',
        'home.skills.hardware': 'Computer Hardware',
        'home.education': 'Education',
        'home.edu.bts': 'BTS Diploma - Cloud Computing',
        'home.edu.bts.school': 'Lycée Guillaume Kroll',
        'home.edu.bts.date': '2025 - Present',
        'home.edu.tech': 'IT Technician Diploma',
        'home.edu.tech.school': 'Lycée Guillaume Kroll',
        'home.edu.tech.date': '2021 - 2025',
        'home.edu.tech.mention': 'Mention: Bien',
        'home.edu.general': 'General Secondary Education',
        'home.edu.general.school': 'Lycée Guillaume Kroll',
        'home.edu.general.date': '2018 - 2021',
        'home.stats.projects': 'Projects',
        'home.stats.certs': 'Certifications',
        'home.stats.weeks': 'Weeks Internship',
        'home.contact': 'Contact',
        'home.contact.desc': "I'm always open to connecting and exploring new opportunities!",
        'home.contact.email': 'Email: eric.wurth@proton.me',
        'home.contact.linkedin': 'LinkedIn',
        'home.contact.github': 'GitHub',
        'home.contact.qr': 'LinkedIn QR Code',
        'filter.all': 'All',
        'filter.completed': 'Completed',
        'filter.progress': 'In Progress',
        'home.contact.email.label': 'Email',
        'home.contact.cv': 'Download CV',
        'cv.english': 'English CV',
        'cv.french': 'French CV',

        // Projects page
        'projects.title': 'My Projects',
        'projects.desc': 'A showcase of my technical projects spanning web development, cloud computing, and system administration. Each project demonstrates practical application of modern technologies and problem-solving approaches.',
        'projects.grading.tag': '(School Project)',
        'projects.grading.desc': 'A grade management web application developed as a BTS Cloud Computing group project. Built with Django 5.0 and Python 3.11, containerized with Docker, and secured with Argon2 password hashing. The system enables teachers to create classrooms, manage student grades, and write observations, while students can track their academic progress across multiple grading scales.',
        'projects.grading.cta': 'View Project Details →',
        'projects.lme.tag': '(School/Private Project)',
        'projects.lme.company': 'Company',
        'projects.lme.desc': 'A secure multi-tenant hosting platform built on Proxmox, with Laravel for the web front, Coolify for deployment and containerization, and Forgejo as the self-hosted Git server.',
        'projects.lme.cta': 'View Project Details →',
        'projects.azure.tag': '(School Project)',
        'projects.azure.desc': 'A hands-on lab on Azure Cloud Infrastructure covering VM connectivity methods (Bastion, SSH, Cloud Shell, VNet integration, Jump Host), DMZ-style web hosting with nginx, auto-shutdown configuration, and free-tier VM creation.',
        'projects.azure.cta': 'View Project Details →',
        'projects.vircl.tag': '(School Project)',
        'projects.vircl.desc': 'A hands-on comparison of Proxmox VE and VMware ESXi covering VM deployment, cloning, snapshots, backups, live migration, and remote storage. Group specialization in High Availability — implementing automatic VM failover across hypervisor clusters.',
        'projects.vircl.cta': 'View Project Details →',

        // Server Virtualization Systems project page
        'vircl.subtitle': 'Proxmox VE & VMware ESXi — High Availability Specialization',
        'vircl.overview': 'Project Overview',
        'vircl.about': 'About the Project',
        'vircl.about.desc': 'A comprehensive hands-on project comparing two enterprise-grade type-1 hypervisors: Proxmox VE and VMware ESXi. Working on physical HP servers in the school server room, the team deployed both virtualization environments and implemented every major feature from VM creation and management to live migration, backups, snapshots, and templates. The group\'s specialization topic is High Availability — covering its theoretical foundations and practical implementation on both platforms.',
        'vircl.goal': 'Project Goal',
        'vircl.goal.desc': 'To acquire in-depth expertise in enterprise server virtualization, become proficient in both Proxmox VE and VMware ESXi, and demonstrate the configuration and benefits of High Availability in a virtualized environment.',
        'vircl.team': 'Team',
        'vircl.tech': 'Technology Stack',
        'vircl.stack.proxmox': 'Proxmox VE',
        'vircl.stack.proxmox.desc': 'Open-source type-1 hypervisor based on Debian Linux and KVM. Used to deploy and manage all virtualization features including clustering, live migration, and High Availability configuration.',
        'vircl.stack.esxi': 'VMware ESXi',
        'vircl.stack.esxi.desc': 'Industry-leading commercial type-1 hypervisor from VMware. Managed via the vSphere Client and vCenter Server, covering VM lifecycle, cloning, snapshots, backups, and HA configuration.',
        'vircl.stack.vcenter': 'vCenter Server',
        'vircl.stack.vcenter.desc': 'VMware\'s centralized management platform, required for advanced features such as vMotion live migration, DRS, and High Availability across ESXi hosts.',
        'vircl.stack.nas': 'TrueNAS (Remote Storage)',
        'vircl.stack.nas.desc': 'The CLOIF2 NAS servers running TrueNAS provide shared remote storage over NFS and iSCSI protocols, used for VM file storage and live migration between hypervisors.',
        'vircl.topics': 'Topics Covered',
        'vircl.topics.general': 'General Features',
        'vircl.topics.general.1': '• Deployment of both hypervisor environments on physical HP servers',
        'vircl.topics.general.2': '• VM creation and management via GUI and CLI on both platforms',
        'vircl.topics.general.3': '• Installation of Windows client and Linux server operating systems in VMs',
        'vircl.topics.general.4': '• Hardware reconfiguration of running VMs (CPU, RAM, storage, NICs)',
        'vircl.topics.general.5': '• VM cloning, exporting, and template creation',
        'vircl.topics.general.6': '• Snapshots — creation, rollback, and management',
        'vircl.topics.general.7': '• Hypervisor configuration backup and VM backup (built-in and scripted)',
        'vircl.topics.general.8': '• Live migration of VMs between storage targets and between hypervisor nodes',
        'vircl.topics.general.9': '• Remote storage integration via NFS and iSCSI using TrueNAS',
        'vircl.topics.general.10': '• User and permission management on both hypervisors',
        'vircl.topics.ha': 'Specialization — High Availability',
        'vircl.topics.ha.desc': 'High Availability (HA) ensures that virtual machines automatically restart on another node in a cluster when a host failure is detected, minimizing downtime in production environments.',
        'vircl.topics.ha.1': '• Theoretical concept of HA: quorum, fencing, and failover mechanisms',
        'vircl.topics.ha.2': '• HA implementation and configuration on Proxmox VE using built-in HA Manager',
        'vircl.topics.ha.3': '• HA implementation on VMware ESXi using vSphere HA within a vCenter cluster',
        'vircl.topics.ha.4': '• Dos and don\'ts: shared storage requirements, network redundancy, and avoiding split-brain scenarios',
        'vircl.mypart': 'My Part in the Project',
        'vircl.mypart.intro': 'Within the three-person team, I was responsible for the Proxmox VE side of the project.',
        'vircl.mypart.proxmox': '• Installed and configured Proxmox VE on the assigned HP10 server.',
        'vircl.mypart.vms': '• Created and managed virtual machines via both the Proxmox GUI and CLI.',
        'vircl.mypart.migration': '• Configured NFS remote storage and performed live VM migrations between storage targets and hypervisor nodes.',
        'vircl.mypart.ha': '• Co-developed the High Availability specialization, covering both the theoretical documentation and the practical HA setup on Proxmox.',

        'projects.picluster.tag': '(School Project)',
        'projects.picluster.desc': 'A high-availability Raspberry Pi cluster built for the LGK Porte Ouverte — 5 Pi 4 nodes running K3s and Traefik, hosting a live demo website with automatic failover, load balancing, auto-scaling, and a real-time monitoring dashboard.',
        'projects.picluster.cta': 'View Project Details →',
        'projects.nas.tag': '(School Project)',
        'projects.nas.desc': 'A hands-on lab project deploying TrueNAS Community Edition on a real Intel SR2600URBRPR enterprise rack server — covering hardware setup, OS installation, RAID configuration, network setup, and file sharing over SMB/NFS/iSCSI.',
        'projects.nas.cta': 'View Project Details →',

        // NAS Server Documentation project page
        'nas.subtitle': 'TrueNAS Community Edition — Hands-on Setup & Configuration',
        'nas.overview': 'Project Overview',
        'nas.about': 'About the Project',
        'nas.about.desc': 'A hands-on lab project covering the full setup and configuration of a NAS server running TrueNAS Community Edition on a real enterprise rack server. The project covers everything from the physical hardware of the Intel SR2600URBRPR server, to OS installation, network configuration, storage pool creation, user management, and file sharing — all performed on the actual machine.',
        'nas.team': 'Team',
        'nas.topics': 'Topics Covered',
        'nas.topics.info': 'NAS Fundamentals',
        'nas.topics.info.desc': 'Explains what a NAS is and how it compares to DAS (Direct Attached Storage) and SAN (Storage Area Network), covering the differences between file-level and block-level storage and the benefits of separating compute from storage.',
        'nas.topics.hardware': 'Hardware',
        'nas.topics.hardware.desc': 'Hands-on work with the Intel SR2600URBRPR 2U rack server, covering full hardware specifications, front and back panel ports, internal component layout, and the hardware RAID controller with backup battery.',
        'nas.topics.hardware.specs': '• 2× Intel Xeon X5650 CPUs, 64 GB RAM, 2× 160 GB SATA drives, 3× 146 GB SAS drives (RAID)',
        'nas.topics.os': 'OS Installation — TrueNAS Community Edition',
        'nas.topics.os.desc': 'Covers TrueNAS Community Edition (formerly TrueNAS SCALE), an open-source Linux/Debian-based NAS OS built on ZFS. Includes background on iXsystems, release history, cost (free), key features, and a pros/cons comparison.',
        'nas.topics.network': 'Network Configuration',
        'nas.topics.network.desc': 'Step-by-step configuration of the TrueNAS console and web panel: setting the admin password, enabling DHCP, accessing the web UI, switching to a static IP, and setting the hostname.',
        'nas.topics.storage': 'Storage & File Sharing',
        'nas.topics.storage.desc': 'Creating storage pools for both software RAID (mirror) and hardware RAID (stripe), creating users and datasets, setting ACL permissions, and connecting to shared folders from both Windows (SMB) and Linux (Nautilus). Also covers the difference between iSCSI (block-level) and NFS/SMB (file-level) protocols.',
        'nas.stack': 'Technical Stack',
        'nas.stack.os': 'TrueNAS Community Edition',
        'nas.stack.os.desc': 'Open-source NAS OS built on Debian Linux with the ZFS file system. Provides storage management, file sharing protocols, snapshots, RAID, encryption, and a web-based UI out of the box.',
        'nas.stack.protocols': 'File Sharing Protocols',
        'nas.stack.protocols.desc': 'SMB for Windows clients, NFS for Linux/Mac clients, and iSCSI for block-level access. Includes hands-on setup and testing of SMB shares and practical comparison of when to use iSCSI over NFS/SMB.',
        'nas.stack.hardware': 'Intel SR2600URBRPR',
        'nas.stack.hardware.desc': 'A 2U rack-mounted enterprise server with dual Xeon X5650 CPUs, 64 GB RAM, a hardware RAID controller with backup battery, and support for both SATA and SAS drives.',
        'nas.mypart': 'My Part in the Project',
        'nas.mypart.intro': 'Within the three-person team, I was responsible for the setup and live demonstration side of the project.',
        'nas.mypart.os': '• Installed the TrueNAS Community Edition operating system on the server.',
        'nas.mypart.raid': '• Configured the software RAID and handled user management.',
        'nas.mypart.demo': '• Prepared and delivered the live demonstration of a shared folder between the TrueNAS server and a Windows client.',
        'nas.docs': 'Project Documentation',
        'nas.docs.desc': 'Complete NAS server setup and configuration documentation:',
        'nas.docs.link': '📄 NAS Server Documentation (PDF)',

        // Azure Presentation project page
        'azure.subtitle': 'Hands-on Lab — VM Connectivity, Web Hosting, Auto-Shutdown',
        'azure.overview': 'Project Overview',
        'azure.about': 'About the Project',
        'azure.about.desc': 'A hands-on Azure Cloud Infrastructure lab developed as a two-person school project. Covers practical Azure topics through step-by-step exercises: connecting to virtual machines using multiple methods, hosting a website behind a reverse proxy, configuring auto-shutdown, and working with free-tier Azure VMs.',
        'azure.team': 'Team',
        'azure.topics': 'Topics Covered',
        'azure.topics.connectivity': 'VM Connectivity',
        'azure.topics.connectivity.desc': 'The lab walks through five distinct connection methods for reaching an Azure VM, demonstrating when and why each one is used:',
        'azure.topics.connectivity.1': '• Azure Bastion — browser-based SSH/RDP without exposing the VM to the public internet.',
        'azure.topics.connectivity.2': '• External SSH — classic SSH from a local machine via the VM\'s public IP.',
        'azure.topics.connectivity.3': '• Azure Cloud Shell (public IP) — browser terminal reaching the VM through its public IP.',
        'azure.topics.connectivity.4': '• Cloud Shell with VNet integration — Cloud Shell injected into a private subnet via an Azure Relay Namespace and Network Profile, allowing access to a VM with no public IP.',
        'azure.topics.connectivity.5': '• Jump Host — a second VM with a public IP used as a stepping stone to SSH into the private VM.',
        'azure.topics.connectivity.6': '• SSH Key authentication — setting up key-based SSH on both new and existing VMs.',
        'azure.topics.webhosting': 'Web Hosting with a VM',
        'azure.topics.webhosting.desc': 'Demonstrates a DMZ-style two-VM web hosting architecture:',
        'azure.topics.webhosting.1': '• VM1 acts as the web server (nginx), fully private with no public IP.',
        'azure.topics.webhosting.2': '• VM2 acts as the reverse proxy (nginx), the only internet-facing entry point, forwarding HTTP traffic to VM1 over the private network.',
        'azure.topics.webhosting.3': '• This isolates the web server from direct internet access, so attackers cannot reach it even if they discover its private IP.',
        'azure.topics.autoshutdown': 'Auto-Shutdown',
        'azure.topics.autoshutdown.desc': 'Covers configuring the Azure auto-shutdown feature to automatically power off a VM at a scheduled time daily — a cost-saving measure to avoid charges from VMs left running overnight.',
        'azure.topics.free': 'Free Account Virtual Machines',
        'azure.topics.free.desc': 'Step-by-step guide to creating free-tier Azure VMs, including the available OS images, VM sizes (B1s, B2ats_v2), the 750-hour shared monthly limit, and the key restrictions of the free tier.',
        'azure.topics.visualizer': 'Azure Resource Visualizer',
        'azure.topics.visualizer.desc': 'Explains the built-in Azure Resource Visualizer tool, which generates an interactive node graph of all resources in a Resource Group and their connections — useful for checking the architecture at a glance without opening each resource individually.',
        'azure.stack': 'Technical Stack',
        'azure.stack.azure': 'Microsoft Azure',
        'azure.stack.azure.desc': 'The entire lab runs on Azure. Core services used include Virtual Machines, Virtual Networks, Network Security Groups, Azure Bastion, Azure Relay, Azure Container Instances, and Public IP addresses.',
        'azure.stack.nginx': 'nginx',
        'azure.stack.nginx.desc': 'Used in two roles: as a reverse proxy on VM2 (forwarding external requests to VM1) and as the web server on VM1 (serving the HTML content). Configuration is done by editing the nginx sites-available file.',
        'azure.stack.relay': 'Azure Relay & Cloud Shell VNet',
        'azure.stack.relay.desc': 'An Azure Relay Namespace and Network Profile are deployed via ARM templates to allow Cloud Shell to connect to a private VM. The Relay creates an outbound HTTPS/WebSocket tunnel into the VNet — no inbound firewall rules needed.',
        'azure.docs': 'Project Documentation',
        'azure.docs.desc': 'Complete lab documentation for the Azure Cloud Infrastructure project:',
        'azure.docs.link': '📄 Azure Cloud Infrastructure Lab (PDF)',
        'azure.mypart': 'My Part in the Project',
        'azure.mypart.intro': 'The work was split equally between both team members.',
        'azure.mypart.1': '• Contributed to writing the lab documentation.',
        'azure.mypart.2': '• Performed the practical lab exercises documented in the guide.',
        'azure.mypart.3': '• Tested and verified all connectivity methods and configurations.',

        // BTS Progress page
        'bts.title': 'My BTS Journey',
        'bts.desc': 'An overview of what I have done and learned throughout my BTS Cloud Computing training, from technical projects to professional skills.',
        'bts.sem1': 'Semester 1',
        'bts.sem1.date': 'Sep 2025 – Jan 2026',
        'bts.sem2': 'Semester 2',
        'bts.sem2.date': 'Feb 2026 – Jun 2026',
        'bts.sem3': 'Semester 3',
        'bts.sem3.date': 'Sep 2026 – Jan 2027',
        'bts.sem4': 'Semester 4',
        'bts.sem4.date': 'Feb 2027 – Jun 2027',
        'bts.sem.upcoming': 'Upcoming',
        'bts.journey.heading': 'What I Learned in the BTS',
        'bts.learned.azure.title': 'Microsoft Azure',
        'bts.learned.azure.desc': 'I built a solid foundation in Microsoft Azure by completing the AZ-900 (Azure Fundamentals) certification and working through the AZ-104 (Azure Administrator) preparation path. In practice, I deployed and managed virtual machines, configured network security groups, connected to VMs using multiple methods (Bastion, SSH, Cloud Shell, jump host), set up nginx reverse proxies, and configured auto-shutdown to manage costs.',
        'bts.learned.virt.title': 'Virtualisation',
        'bts.learned.virt.desc': 'I worked hands-on with two major hypervisors: Proxmox VE and VMware ESXi with vCenter. I learned how to create and manage virtual machines, configure storage and networking for VMs, take snapshots, and understand the difference between type-1 and type-2 hypervisors in real enterprise setups.',
        'bts.learned.containers.title': 'Containerisation',
        'bts.learned.containers.desc': 'I learned how to containerise applications using Docker and manage multi-container setups with Docker Compose. I understand how images, containers, volumes, and networks work, and how containerisation makes applications portable and consistent across environments. I also worked with K3s (lightweight Kubernetes) for container orchestration across the Raspberry Pi cluster.',
        'bts.learned.nas.title': 'NAS & Storage',
        'bts.learned.nas.desc': 'I set up and configured a NAS server from scratch using TrueNAS Community Edition on a real enterprise server. I created storage pools using ZFS and RAID, managed users and permissions, and configured file sharing over SMB for Windows clients and NFS for Linux clients. I also learned the difference between file-level sharing (SMB/NFS) and block-level access (iSCSI).',
        'bts.learned.python.title': 'Python',
        'bts.learned.python.desc': 'I learned Python from scratch and used it to build a real web application. I worked with the Django framework for server-side logic, PostgreSQL for database management, and built a full role-based system with authentication, forms, and an admin panel. I also used Python for scripting and automation tasks outside of web development.',
        'bts.learned.github.title': 'Working with GitHub',
        'bts.learned.github.desc': 'I used GitHub throughout the BTS for version control, collaboration, and deployment. I learned how to work with branches, commit changes, and manage repositories — and I use GitHub Pages to host this portfolio. Working with Git gave me a much clearer understanding of how code is tracked, shared, and deployed in team environments.',
        'bts.learned.projectmgmt.title': 'Project Management',
        'bts.learned.projectmgmt.desc': 'Every major project in the BTS required real project management. I learned how to define the scope of a project, write user stories and personas, break the work into phases, and track progress using Scrum and Kanban methods. I also learned how to write proper project documentation — specifications, research documents, and proposals — so that the work is understandable to anyone who picks it up.',
        'bts.learned.networking.title': 'Networking',
        'bts.learned.networking.desc': 'I developed an understanding of network protocols and standards, Active Directory domain management, distributed file systems, DNS configuration, and firewall rules. I learned how to design and secure network environments for real enterprise use cases.',
        'bts.learned.professional.title': 'Professional & Soft Skills',
        'bts.learned.professional.desc': 'I improved my ability to present technical topics in front of an audience, write structured documents applying CRAP design principles, and work effectively in a team. I practiced writing a professional CV and motivation letter, and trained for job interviews in multiple languages. Professional visits — including a LuxConnect data center tour and a guest lecture from NTT Data — gave me direct exposure to enterprise environments.',
        'bts.progress.heading': 'My Progress',
        'bts.progress.intro': 'Beyond the technical skills, the BTS program pushed me to grow in areas I had little experience with at the start.',
        'bts.progress.presentations.title': 'Communication & Public Speaking',
        'bts.progress.presentations.desc': 'I became much more comfortable communicating in professional settings — from presenting technical topics in front of an audience, to practicing job interviews in multiple languages. What started as a real challenge early in the programme turned into confidence when delivering live technical demonstrations, structured group presentations, and mock interviews.',
        'bts.progress.documents.title': 'Writing Documents',
        'bts.progress.documents.desc': 'I improved significantly in writing clear and structured technical documents. I also learned how to make documents look better visually, applying the CRAP design principles (Contrast, Repetition, Alignment, Proximity) to produce cleaner and more readable layouts.',
        'bts.progress.teamwork.title': 'Working in a Team',
        'bts.progress.teamwork.desc': 'Every major project in the BTS was done as a team. I learned how to divide responsibilities, communicate progress, handle disagreements constructively, and deliver work together on time.',
        'bts.progress.s2.planning.title': 'Planning & Managing Projects — Improved Further',
        'bts.progress.s2.planning.desc': 'In Semester 2 I got more structured in how I approach a project from start to finish. I learned to break work down into clear phases, set realistic timelines, and keep track of what still needs to be done — rather than jumping straight into the work without a plan. This made it easier to stay on top of deadlines and spot problems early before they became bigger issues.',
        'bts.progress.s2.documenting.title': 'Documenting Projects — Improved Further',
        'bts.progress.s2.documenting.desc': 'I improved the way I document my work — writing clearer descriptions of what was done, why decisions were made, and how things are set up so someone else could pick it up. I moved away from documenting things as an afterthought and started treating it as part of the project itself.',
        'bts.progress.s2.language.title': 'Language',
        'bts.progress.s2.language.desc': 'In Semester 2 we had a dedicated French course which helped me improve my French.',

        // Certificates page
        'certificates.title': 'Professional Certificates',
        'certificates.desc': 'A collection of my professional certifications demonstrating expertise in Microsoft Office applications and Azure cloud services. Each certification represents validated skills and knowledge through official Microsoft assessments.',
        'certificates.counter': 'Certificates Earned',
        'cert.word.title': 'Microsoft Office Specialist: Word Associate',
        'cert.word.desc': 'Demonstrates competency in creating and managing Word documents, including formatting text, paragraphs, and sections, as well as managing tables, lists, and references for Microsoft 365 Apps.',
        'cert.word.grade': 'Score: 920/1000',
        'cert.word.link': 'View Certification on Credly →',
        'cert.word.expert.title': 'Microsoft Office Specialist: Word Expert',
        'cert.word.expert.desc': 'Advanced certification showcasing expert-level skills in managing document options, designing advanced documents, creating custom references, and utilizing advanced Word features for Microsoft 365 Apps.',
        'cert.word.expert.grade': 'Score: 790/1000',
        'cert.word.expert.link': 'View Certification on Credly →',
        'cert.powerpoint.title': 'Microsoft Office Specialist: PowerPoint Associate',
        'cert.powerpoint.desc': 'Certified proficiency in creating and managing presentations, including inserting and formatting text, shapes, and images, as well as applying transitions and animations for Microsoft 365 Apps.',
        'cert.powerpoint.grade': 'Score: 935/1000',
        'cert.powerpoint.link': 'View Certification on Credly →',
        'cert.azure.title': 'Microsoft Certified: Azure Fundamentals',
        'cert.azure.desc': 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure, including core Azure services, security, privacy, compliance, trust, and Azure pricing and support.',
        'cert.azure.grade': 'Score: 700/1000',
        'cert.azure.link': 'View Certification on Credly →',
        'cert.excel.title': 'Microsoft Office Specialist: Excel Associate',
        'cert.excel.desc': 'Demonstrates proficiency in creating and managing worksheets and workbooks, creating cells and ranges, managing tables and table data, performing operations with formulas and functions, and managing charts for Microsoft 365 Apps.',
        'cert.excel.grade': 'Score: 720/1000',
        'cert.excel.link': 'View Certification on Credly →',
        'cert.mos.title': 'Microsoft Office Specialist: Associate',
        'cert.mos.desc': 'Earned by demonstrating competency in multiple Microsoft Office applications. This certification validates comprehensive skills across Word, Excel, and PowerPoint, proving proficiency in the most essential productivity tools for Microsoft 365 Apps.',
        'cert.mos.link': 'View Certification on Credly →',

        // Experiences page
        'experiences.title': 'Professional Experiences',
        'exp.section.internships': 'Internships',
        'exp.section.visits': 'Professional Visits & Events',
        'exp.section.courses': 'Online Courses',
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
        'exp.marong.title': 'External Professional - Guy Marong',
        'exp.marong.date': '2025/2026 | English Class',
        'exp.marong.desc': 'Guy Marong visited our English class several times to guide us through professional job application skills. He helped us write a CV and a motivation letter, and prepared us for a mock interview conducted by NTT Data Luxembourg.',
        'exp.schluter.title': 'Mock Interview - Yves Schlüter',
        'exp.schluter.date': '2025',
        'exp.schluter.desc': 'Yves Schlüter, an external professional, visited our class to conduct mock job interviews with each student in Luxembourgish, offering a different linguistic challenge compared to the NTT Data interview held in English.',
        'exp.nttdata.title': 'Mock Interview - NTT Data Luxembourg',
        'exp.nttdata.date': '2026',
        'exp.nttdata.desc': 'Two professionals from NTT Data Luxembourg visited our class to conduct mock job interviews with each student, simulating a real recruitment process and providing feedback on performance and presentation.',
        'exp.nix.title': 'External Professional - Xavier Nix',
        'exp.nix.date': '2026 | 1 Week',
        'exp.nix.desc': 'Xavier Nix, an external IT professional, joined our class for one week to deliver a hands-on course on AZ-040 (Automating Administration with PowerShell), covering scripting, automation workflows, and remote system management.',
        'exp.nix2.title': 'External Professional - Xavier Nix',
        'exp.nix2.date': '2025 | 2 Days',
        'exp.nix2.desc': 'Xavier Nix visited for two separate days to introduce Azure cloud concepts, focusing on AZ-900 (Microsoft Azure Fundamentals) and covering the cloud fundamentals that form the basis of the certification curriculum.',
        'exp.charlier.title': 'External Professional - Arnaud Charlier',
        'exp.charlier.date': '2026',
        'exp.charlier.desc': 'Arnaud Charlier, an AWS professional, visited our class to deliver a presentation on Amazon Web Services, covering core cloud concepts, key AWS services, and real-world use cases from his professional experience.',
        'home.skills.ha': 'High Availability',
        'exp.pluralsight.title': 'AZ-900 Exam Preparation - Pluralsight',
        'exp.pluralsight.date': '2026',
        'exp.pluralsight.desc': 'Completed the Microsoft Azure Fundamentals (AZ-900) preparation path on Pluralsight, covering cloud concepts, Azure services, security, privacy, compliance, and Azure pricing and support.',
        'exp.pluralsight.grade': 'Score: 70/100',
        'exp.pluralsight.link': 'View Course Path on Pluralsight →',
        'exp.az104.title': 'AZ-104 Exam Preparation - Pluralsight',
        'exp.az104.date': '2026 - Ongoing',
        'exp.az104.desc': 'Currently working through the Microsoft Azure Administrator (AZ-104) preparation path on Pluralsight, covering Azure identity and governance, storage, virtual networking, and monitoring.',
        'exp.az104.link': 'View Course Path on Pluralsight →',

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
        'grading.stack.security.desc': 'Implements Argon2 password hashing, developed at the University of Luxembourg and the winner of the Password Hashing Competition (2015). Features memory-hard design resistant to GPU/ASIC brute-force attacks.',
        'grading.stack.frontend': 'Frontend',
        'grading.stack.frontend.desc': 'Uses Pico.css minimalist framework (~10KB) with server-side rendering through Django templates. All validation and logic handled server-side for enhanced security and simplicity.',
        'grading.stack.deployment': 'Deployment',
        'grading.stack.deployment.desc': 'Containerized with Docker and Docker Compose for environment consistency and production-ready architecture. System starts with a single docker compose up command.',
        'grading.mypart': 'My Part in the Project',
        'grading.mypart.intro': 'Within the four-person team, I was responsible for the analytical and documentation side of the project.',
        'grading.mypart.personas': '• Created the user personas for each role in the application.',
        'grading.mypart.userstories': '• Wrote the user stories covering the needs of all three user types.',
        'grading.mypart.docs': '• Produced the necessary project documents, including the specifications and the research document.',
        'grading.docs': 'Project Documentation',
        'grading.docs.desc': 'Complete technical research and technology decision documentation:',
        'grading.docs.link': '📄 Research Document (PDF)',
        'grading.docs.github': 'GitHub Repository — GradingDino',

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
        'lme.stack.containerization': 'Deployment & Containerization',
        'lme.stack.containerization.desc': 'Coolify is the self-hosted PaaS used to deploy and manage containers across VMs. It handles the full deployment pipeline, environment management, and provides a clean dashboard for monitoring running services.',
        'lme.stack.webserver': 'Web Framework',
        'lme.stack.webserver.desc': 'Laravel powers the client-facing websites, providing a modern PHP framework with routing, templating, and ORM for building clean, maintainable web applications.',
        'lme.stack.dns': 'DNS & Security',
        'lme.stack.dns.desc': 'Cloudflare manages DNS records and provides DDoS protection, WAF capabilities, and SSL certificates, adding an extra security layer before traffic reaches the server.',
        'lme.stack.monitoring': 'Monitoring',
        'lme.stack.monitoring.desc': 'An external Raspberry Pi monitors server availability independently using the Hetzner API, enabling automated alerts and recovery actions when issues are detected.',
        'lme.stack.access': 'Git',
        'lme.stack.access.desc': 'Forgejo is the self-hosted Git server used for version control across all project repositories. It provides a lightweight, open-source alternative to GitHub with full repository management and collaboration features.',
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
        'lme.company': 'Company Vision',
        'lme.company.startup': 'Startup in Formation',
        'lme.company.startup.desc': 'LME (Luxembourg Media Engineering) is more than a school project - it\'s the foundation for a real company currently being established. The infrastructure and services developed here will serve as the technical backbone for commercial operations.',
        'lme.company.initial': 'Initial Services',
        'lme.company.initial.desc': 'The company will launch focusing on web development and website hosting services, leveraging the secure multi-tenant infrastructure built for this project to offer reliable, affordable hosting to small businesses and individuals.',
        'lme.company.future': 'Future Expansion',
        'lme.company.future.desc': 'The long-term vision is to grow LME into a full-service IT company, expanding beyond web services to offer general IT solutions, consulting, and support services to businesses in Luxembourg and beyond.',

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
        'osycl.topics.doc.1': '• File and Storage Services introduction',
        'osycl.topics.doc.2': '• DFS definition, components, and advantages',
        'osycl.topics.doc.3': '• Work Folders for BYOD scenarios',
        'osycl.topics.demo': 'Live Demonstration',
        'osycl.topics.demo.1': '• Setting up a domain server with Active Directory',
        'osycl.topics.demo.2': '• Installing DFS Namespaces and DFS Replication roles',
        'osycl.topics.demo.3': '• Creating and configuring DFS namespaces',
        'osycl.topics.demo.4': '• Adding folders and folder targets',
        'osycl.topics.demo.5': '• Configuring DFS Replication between servers',
        'osycl.topics.demo.6': '• Client configuration and network drive mapping',
        'osycl.mypart': 'My Part in the Project',
        'osycl.mypart.intro': 'Within the three-person team, I was responsible for the documentation and the live demonstration of the project.',
        'osycl.mypart.docs': '• Wrote the necessary documents for the presentation.',
        'osycl.mypart.demo': '• Prepared and delivered the live DFS demonstration during the presentation.',
        'osycl.docs': 'Project Documentation',
        'osycl.docs.desc': 'Complete documentation and demonstration guide for DFS implementation:',
        'osycl.docs.link': '📄 DFS Demonstration Document (PDF)',

        // PowerApps Budget Planner project page
        'projects.powerapps.tag': '(School Project)',
        'projects.powerapps.desc': 'A budget management application built with Microsoft PowerApps featuring budget tracking, recurring costs, and monthly expenses with Power Automate integration for automatic monthly resets.',
        'projects.powerapps.cta': 'View Project Details →',
        'powerapps.subtitle': 'PowerApps Budget Management Application',
        'powerapps.overview': 'Project Overview',
        'powerapps.about': 'About the Project',
        'powerapps.about.desc': 'A budget planning application built with Microsoft PowerApps that allows users to manage their finances by tracking their budget, recurring costs, and monthly expenses. The app integrates with Power Automate to automatically handle monthly cost resets.',
        'powerapps.goal': 'Project Goal',
        'powerapps.goal.desc': 'To create a functional and user-friendly budget management tool using the Microsoft Power Platform, demonstrating proficiency in PowerApps development, data management, and Power Automate integration.',
        'powerapps.tech': 'Technology Stack',
        'powerapps.stack.powerapps': 'Microsoft PowerApps',
        'powerapps.stack.powerapps.desc': 'Low-code platform used to build the main application interface, including screens for budget management, cost tracking, and data visualization.',
        'powerapps.stack.automate': 'Power Automate',
        'powerapps.stack.automate.desc': 'Used to create automated flows that handle monthly cost resets, deleting one-time monthly costs at the end of each month to keep the budget accurate.',
        'powerapps.stack.datasource': 'Data Source',
        'powerapps.stack.datasource.desc': 'Excel/SharePoint-based data storage for persisting budget information, recurring costs, and monthly expenses across sessions.',
        'powerapps.features': 'Features',
        'powerapps.features.budget': 'Budget Management',
        'powerapps.features.budget.desc': 'Set and track your total budget with a clear overview of remaining funds after all costs are calculated.',
        'powerapps.features.recurring': 'Recurring Costs',
        'powerapps.features.recurring.desc': 'Add repeating costs that are automatically deducted from your budget every month, such as subscriptions, rent, or utilities.',
        'powerapps.features.monthly': 'Monthly Costs',
        'powerapps.features.monthly.desc': 'Track one-time monthly expenses that are automatically cleared at the end of each month via Power Automate integration.',
        'powerapps.features.search': 'Search & Sort',
        'powerapps.features.search.desc': 'Search for specific expenses and sort your cost list by different fields to quickly find what you\'re looking for.',
        'powerapps.screenshots': 'Screenshots',
        'powerapps.screenshot.1': 'Home screen — monthly overview showing budget, recurring costs, manual costs, and remaining balance.',
        'powerapps.screenshot.2': 'Settings screen — configure monthly budget and manage recurring expenses.',
        'powerapps.screenshot.3': 'Transactions screen — search and sort individual expense entries by date.',
        'powerapps.screenshots.desc': 'Screenshots of the Budget Planner application:',
        'powerapps.docs': 'Project Documentation',
        'powerapps.docs.desc': 'Project assignment documentation coming soon.',
        'powerapps.docs.link': '📄 PowerApps Project Assignment (PDF)',

        // Portfolio project page
        'projects.portfolio.tag': '(School Project)',
        'projects.portfolio.desc': 'A personal portfolio website showcasing my skills, projects, certificates, and professional experiences. Features multi-language support, responsive design, and glass morphism styling.',
        'projects.portfolio.cta': 'View Project Details →',
        'portfolio.subtitle': 'Personal Portfolio Website',
        'portfolio.overview': 'Project Overview',
        'portfolio.about': 'About the Project',
        'portfolio.about.desc': 'A personal portfolio website built from scratch to document my BTS Cloud Computing journey. It covers all my projects with dedicated detail pages, professional certifications, internships and external professional visits, a BTS progress overview, and a contact section — all in English and French.',
        'portfolio.goal': 'Project Goal',
        'portfolio.goal.desc': 'To create a living digital portfolio that grows alongside my studies, giving anyone a clear and complete picture of my technical skills, projects, and professional development.',
        'portfolio.tech': 'Technology Stack',
        'portfolio.stack.html.desc': 'Semantic HTML structure providing the foundation for all pages, ensuring accessibility and proper document organization.',
        'portfolio.stack.css.desc': 'Custom styling with modern CSS features including glass morphism effects, responsive design, flexbox layouts, and smooth animations.',
        'portfolio.stack.js.desc': 'Client-side functionality including a custom-built internationalization (i18n) system that handles all EN/FR translations via a single translations object, with language preference persisted in localStorage.',
        'portfolio.stack.github.desc': 'Free static site hosting through GitHub Pages, enabling easy deployment and version control for continuous updates.',
        'portfolio.features': 'Features',
        'portfolio.features.i18n': 'Multi-Language Support',
        'portfolio.features.i18n.desc': 'Full EN/FR internationalization across every page and project, with a language switcher in the navigation bar and persistent preference via localStorage.',
        'portfolio.features.glass': 'Glass Morphism Design',
        'portfolio.features.glass.desc': 'Modern UI aesthetic with frosted glass effects, animated background shapes, and a cohesive dark theme throughout all pages.',
        'portfolio.features.projects': 'Project Showcase Pages',
        'portfolio.features.projects.desc': 'Dedicated project pages each covering an overview, topics, technical stack, my personal contribution, and downloadable documentation where available.',
        'portfolio.features.certs': 'Certificate Gallery',
        'portfolio.features.certs.desc': 'Display of professional Microsoft certifications with links to official verification on Credly.',
        'portfolio.features.experiences': 'Experiences Page',
        'portfolio.features.experiences.desc': 'Documents internships, educational visits, and external professional visits — including mock interviews, guest lectures, and company tours done as part of the BTS programme.',
        'portfolio.features.bts': 'BTS Progress Page',
        'portfolio.features.bts.desc': 'An overview of what I learned throughout the BTS, covering technical skills and soft skill development across all courses and projects.',
        'portfolio.features.cv': 'CV Download',
        'portfolio.features.cv.desc': 'Direct download buttons for both English and French versions of my CV, accessible from the home page.',
        'portfolio.source': 'Source Code',
        'portfolio.source.desc': 'The full source code for this portfolio is publicly available on GitHub:',
        'portfolio.source.link': 'GitHub Repository — wurer762/wurer.github.io',
        'portfolio.future': 'Future Plans',
        'portfolio.future.desc': 'This portfolio will keep evolving throughout and beyond the BTS:',
        'portfolio.future.1': '• Add new projects as they are completed',
        'portfolio.future.2': '• Include additional certifications and achievements',
        'portfolio.future.3': '• Keep the BTS Progress and Experiences pages up to date',
        'portfolio.future.4': '• Continue refining the design and user experience',

        // Portable Computing project page
        'projects.portable.tag': '(School Project)',
        'projects.portable.desc': 'A technical presentation on portable computing devices, covering their evolution, types, hardware components, and technologies that enable mobile computing.',
        'projects.portable.cta': 'View Project Details →',
        'portable.subtitle': 'Technical Presentation on Portable Devices',
        'portable.overview': 'Project Overview',
        'portable.about': 'About the Project',
        'portable.about.desc': 'A technical presentation created for the CLOIF course covering the topic of portable computing. The presentation explores the evolution, types, and technologies behind portable computing devices that have transformed how we work and communicate.',
        'portable.goal': 'Project Goal',
        'portable.goal.desc': 'To research and present comprehensive information about portable computing devices, their history, current technologies, and their impact on modern computing and everyday life.',
        'portable.format': 'Presentation Format',
        'portable.format.desc': 'The project was delivered as a PowerPoint presentation to the class, covering key concepts, device categories, and technical specifications of portable computing hardware.',
        'portable.topics': 'Topics Covered',
        'portable.topics.desc': 'The presentation covers various aspects of portable computing, including:',
        'portable.topics.1': '• History and evolution of portable computers',
        'portable.topics.2': '• Types of portable devices (laptops, tablets, smartphones)',
        'portable.topics.3': '• Key hardware components and specifications',
        'portable.topics.4': '• Battery technology and power management',
        'portable.topics.5': '• Connectivity and wireless technologies',
        'portable.topics.6': '• Current trends and future developments',
        'portable.docs': 'Presentation',
        'portable.docs.desc': 'Download the full presentation for detailed technical information:',
        'portable.docs.link': '📊 Portable Computing Presentation (PPTX)',

        // Pi Cluster project page
        'picluster.subtitle': 'High-Availability Cluster — Porte Ouverte Demo',
        'picluster.overview': 'Project Overview',
        'picluster.about': 'About the Project',
        'picluster.about.desc': 'A high-availability Raspberry Pi cluster built for the LGK Porte Ouverte, designed to make cloud computing concepts like redundancy, load balancing, and automatic scaling immediately visible and understandable. Five Raspberry Pi 4 nodes work together to host a website. Visitors could unplug any Pi and watch the site stay online, or hit a stress test button to spike the CPU load and see the cluster shift which node was serving the site — all reflected live on an integrated monitoring dashboard. Built as an interactive demo to attract prospective students to the BTS Cloud Computing programme.',
        'picluster.goal': 'Project Goal',
        'picluster.goal.desc': 'To demonstrate core cloud concepts — high availability, automatic failover, load balancing, and auto-scaling — through a physical, interactive cluster that non-technical visitors can understand within one minute without any verbal explanation.',
        'picluster.team': 'Team',
        'picluster.tech': 'Technology Stack',
        'picluster.stack.pi': 'Raspberry Pi 4 (×5)',
        'picluster.stack.pi.desc': 'Five ARM-based single-board computers acting as cluster nodes, each running Raspberry Pi OS and booting from microSD storage. Connected through a D-Link switch to form a local cluster network.',
        'picluster.stack.k3s': 'K3s',
        'picluster.stack.k3s.desc': 'Lightweight Kubernetes distribution optimised for ARM devices and edge deployments. Manages container orchestration, node health monitoring, and automatic scaling across all five Pi nodes.',
        'picluster.stack.traefik': 'Traefik',
        'picluster.stack.traefik.desc': 'Reverse proxy and load balancer built into K3s. Distributes incoming HTTP traffic across healthy nodes and automatically removes failed nodes from the pool without any manual intervention.',
        'picluster.stack.node': 'Node.js + Express',
        'picluster.stack.node.desc': 'The demo website and integrated monitoring API, containerised and deployed across the cluster. Collects and exposes per-node metrics — CPU, RAM, temperature, and serving status — in real time.',
        'picluster.features': 'Key Features',
        'picluster.features.ha': 'High Availability & Automatic Failover',
        'picluster.features.ha.desc': 'K3s continuously monitors node health. When a Pi is unplugged or goes offline, Traefik detects the failure and redistributes traffic to the remaining healthy nodes within seconds. The website stays reachable throughout.',
        'picluster.features.monitoring': 'Live Monitoring Page',
        'picluster.features.monitoring.desc': 'A monitoring dashboard is built directly into the demo website, showing the real-time status of each Pi: online/offline state, CPU usage, RAM, temperature, and which node is currently serving the visitor\'s request. Designed to be immediately readable by non-technical visitors.',
        'picluster.features.scaling': 'Automatic Load Balancing & Auto-Scaling',
        'picluster.features.scaling.desc': 'Traefik distributes incoming requests evenly across all active nodes. K3s automatically adjusts the number of running containers as traffic increases or decreases and as nodes join or leave the pool — all without any manual intervention.',
        'picluster.features.selfheal': 'Self-Healing',
        'picluster.features.selfheal.desc': 'When a failed Pi is powered back on and rejoins the cluster, K3s and Traefik automatically reintegrate it into the pool. No manual steps are required to restore full cluster capacity.',
        'picluster.features.stress': 'Interactive Stress Test',
        'picluster.features.stress.desc': 'A stress test button built into the demo website artificially raises the CPU load on the node currently serving requests. Visitors can watch the CPU usage spike in real time on the monitoring page and see which Pi is hosting the site change as Traefik redistributes traffic to a less loaded node — making load balancing visible and interactive without unplugging any hardware.',
        'picluster.gallery': 'Photos',
        'picluster.gallery.hardware': 'The assembled Pi cluster with RGB cooling fans.',
        'picluster.gallery.event': 'The cluster running at the LGK Porte Ouverte, with the monitoring dashboard on the display.',
        'picluster.gallery.monitor': 'The live monitoring dashboard showing node status, CPU, memory, temperature, and which Pi is currently serving.',
        'picluster.mypart': 'My Part in the Project',
        'picluster.mypart.desc': 'I was responsible for the entire infrastructure side of the project. I installed Raspberry Pi OS on all five nodes, deployed and configured K3s across the cluster, set up the cluster networking, and implemented the data pipeline that collects per-node metrics and exposes them to the monitoring website.',
        'picluster.wip': 'Taking It Further',
        'picluster.wip.desc': 'The Porte Ouverte version delivered a working proof of concept using K3s. However, during the demo we noticed that the monitoring website was slow to reflect node state changes — when a Pi was unplugged or a stress test caused the cluster to shift which node was serving traffic, the updates were not fast enough to make the failover feel immediate and convincing to visitors. After discussing this with a teacher, we decided to take the project further and address these shortcomings by migrating the orchestration layer to Docker Swarm. The goal is to build a more responsive, production-ready architecture with faster state propagation, improved monitoring, and a cleaner deployment workflow.',
        'picluster.docs': 'Project Documentation',
        'picluster.docs.desc': 'Project proposal and technical specification:',
        'picluster.docs.link': '📄 Pi Cluster Project Proposal (DOCX)',

        // Status tags
        'status.completed': 'Completed',
        'status.inprogress': 'In Progress',

        // Breadcrumbs
        'notfound.title': 'Page Not Found',
        'notfound.desc': 'The page you\'re looking for doesn\'t exist or has been moved.',
        'notfound.home': '← Back to Home',
        'breadcrumb.home': 'Home',
        'breadcrumb.projects': 'Projects',

        // Projects list — AZ-104
        'projects.az104.tag': '(School Project)',
        'projects.az104.desc': 'A hands-on Azure team project proving practical understanding of two AZ-104 Pluralsight courses — Manage Azure Identities and Governance, and Deploy and Manage Azure Compute Resources. The team deployed an Entra ID tenant, a management group / subscription / resource group hierarchy, and compute resources including a public VM Scale Set proxying to a private web container and App Service.',
        'projects.az104.cta': 'View Project Details →',

        // AZ-104 project page
        'az104.subtitle': 'Hands-on Team Deployment — VM Scale Set, Web Container & App Service',
        'az104.overview': 'Project Overview',
        'az104.about': 'About the Project',
        'az104.about.desc': 'A hands-on Azure team project built to prove that we understood and could practically apply two AZ-104 Pluralsight courses: Manage Azure Identities and Governance, and Deploy and Manage Azure Compute Resources. Rather than just following the courses, the team designed and deployed a small but realistic cloud environment — an Entra ID tenant with users, a proper management group / subscription / resource group hierarchy, and a set of compute resources (a VM Scale Set, a web container, and an App Service) wired together with a public-facing proxy and private back-end services.',
        'az104.goal': 'Goal',
        'az104.goal.desc': 'Demonstrate that we not only completed the two Pluralsight courses but can actually utilize the concepts — building identity and governance structures and deploying and managing Azure compute resources in a real shared environment.',
        'az104.team': 'Team',
        'az104.team.members': 'Würth Eric, Simon Max, Jervis Yona — working in the same subscription and the same resource group.',
        'az104.architecture': 'Architecture',
        'az104.architecture.desc': 'The diagram below shows the deployed environment: an Entra ID tenant for identity, the Management Group → Subscription → Resource Group governance hierarchy, and the compute resources inside the resource group. A client on the internet reaches only the public-facing VM Scale Set, whose proxy forwards traffic to the website running on the web container. The container and the App Service hold private IPs only and are never exposed directly.',
        'az104.topics': 'Topics Covered',
        'az104.topics.identity': 'Manage Azure Identities and Governance',
        'az104.topics.identity.desc': 'Applying the first Pluralsight course in practice:',
        'az104.topics.identity.1': '• Entra ID Tenant — created the directory and managed users that secure access to the environment.',
        'az104.topics.identity.2': '• Governance hierarchy — organised resources under a Management Group → Subscription → Resource Group structure so the whole team works within a single, well-scoped resource group.',
        'az104.topics.identity.3': '• Shared subscription — all three members operated in the same subscription and resource group, coordinating access and naming.',
        'az104.topics.compute': 'Deploy and Manage Azure Compute Resources',
        'az104.topics.compute.desc': 'Applying the second Pluralsight course in practice:',
        'az104.topics.compute.1': '• VM Scale Set — a public-facing scale set acting as the single internet entry point into the environment.',
        'az104.topics.compute.2': '• Web Container — a containerised website running behind the scale set, reachable only on a private IP.',
        'az104.topics.compute.3': '• App Service — a second, privately-hosted website serving additional content.',
        'az104.topics.compute.4': '• Network segmentation — only the scale set holds a public IP; the container and App Service are private-only, so they cannot be reached directly from the internet.',
        'az104.stack': 'Technical Stack',
        'az104.stack.azure': 'Microsoft Azure',
        'az104.stack.azure.desc': 'The whole environment runs on Azure: Entra ID for identity, a Management Group / Subscription / Resource Group hierarchy for governance, plus Virtual Machine Scale Sets, Container Instances, App Service, Virtual Networks and Public IP addresses for the compute layer.',
        'az104.stack.scaleset': 'VM Scale Set & Proxy',
        'az104.stack.scaleset.desc': 'A Virtual Machine Scale Set is the only public-facing resource. It runs a proxy that forwards incoming HTTP traffic over the private network to the website hosted on the web container, keeping the back-end isolated from the internet.',
        'az104.stack.container': 'Web Container & App Service',
        'az104.stack.container.desc': 'A containerised website runs behind the scale set, while a separate App Service hosts a second website. Both carry private IPs only and are reached through the network rather than directly from the internet.',
        'az104.mypart': 'My Part in the Project',
        'az104.mypart.intro': 'Within the three-person team I owned the public entry point and the web-container side of the compute layer.',
        'az104.mypart.1': '• Deployed and configured the web container running the website.',
        'az104.mypart.2': '• Set up the VM Scale Set as the single public-facing resource of the environment.',
        'az104.mypart.3': '• Built the proxy on the scale set that forwards traffic to the website on the web container.',
        'az104.mypart.4': '• Ensured only the scale set is reachable over a public IP, while the container and App Service stay private-only.',
        'az104.courses': 'Course References',
        'az104.courses.desc': 'The two Pluralsight courses this project demonstrates understanding of:',
        'az104.courses.link1': '🔗 AZ-104 — Manage Azure Identities and Governance',
        'az104.courses.link2': '🔗 AZ-104 — Deploy and Manage Azure Compute Resources',

        // Flyer page
        'flyer.about': 'BTS Cloud Computing student at Lycée Guillaume Kroll. Co-founder of Luxembourg Media Engineering — building production-grade hosting infrastructure on Proxmox, Laravel, and Coolify. Focused on secure server environments, virtualization, and scalable web platforms.',
        'flyer.download': '⬇ Download CV (PDF)',
        'flyer.role': 'Cloud Computing Student — BTS, Lycée Guillaume Kroll',
        'flyer.project.grading': 'Grade management web app — Django, PostgreSQL, Docker, Argon2.',
        'flyer.project.lme': 'Multi-tenant hosting platform — Proxmox VE, Laravel, Coolify, Forgejo.',
        'flyer.project.vircl': 'Proxmox VE & VMware ESXi lab with High Availability specialization.',
        'flyer.project.nas': 'Hands-on TrueNAS CE deployment on a real enterprise rack server — ZFS, RAID, SMB/NFS/iSCSI.',
        'flyer.project.azure': 'Hands-on Azure lab — VM connectivity, DMZ web hosting, auto-shutdown.',
        'flyer.exp.bnl': 'IT and user support — troubleshooting, system maintenance, digital resource access.',
        'flyer.exp.securitec': 'Security system installation and maintenance — alarm systems, surveillance equipment.',
        'flyer.exp.luxconnect': 'Data center visit — enterprise infrastructure, cooling systems, cloud hosting architecture.'
    },
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.projects': 'Projets',
        'nav.certificates': 'Certificats',
        'nav.experiences': 'Expériences',
        'nav.bts': 'Progression BTS',
        'nav.flyer': 'Fiche',

        // Home page
        'home.title': 'Eric Würth',
        'home.subtitle': 'Étudiant en Cloud Computing. Création d\'environnements d\'hébergement sécurisés, gestion de systèmes virtualisés et développement d\'applications web évolutives.',
        'home.about': 'À propos de moi',
        'home.about.title': 'Étudiant en Cloud Computing',
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
        'home.skills.cloud': 'Cloud & Virtualisation',
        'home.skills.os': 'Systèmes d\'exploitation',
        'home.skills.networking': 'Réseau & Stockage',
        'home.skills.webdev': 'Développement Web',
        'home.skills.databases': 'Bases de données',
        'home.skills.tools': 'Outils & Méthodes',
        'home.skills.hardware': 'Matériel informatique',
        'home.education': 'Formation',
        'home.edu.bts': 'BTS - Cloud Computing',
        'home.edu.bts.school': 'Lycée Guillaume Kroll',
        'home.edu.bts.date': '2025 - Présent',
        'home.edu.tech': 'Diplôme de technicien IT',
        'home.edu.tech.school': 'Lycée Guillaume Kroll',
        'home.edu.tech.date': '2021 - 2025',
        'home.edu.tech.mention': 'Mention : Bien',
        'home.edu.general': 'Enseignement secondaire général',
        'home.edu.general.school': 'Lycée Guillaume Kroll',
        'home.edu.general.date': '2018 - 2021',
        'home.stats.projects': 'Projets',
        'home.stats.certs': 'Certifications',
        'home.stats.weeks': 'Semaines de stage',
        'home.contact': 'Contact',
        'home.contact.desc': 'Je suis toujours ouvert à de nouveaux contacts et à de nouvelles opportunités !',
        'home.contact.email': 'Email : eric.wurth@proton.me',
        'home.contact.linkedin': 'LinkedIn',
        'home.contact.github': 'GitHub',
        'home.contact.qr': 'QR Code LinkedIn',
        'filter.all': 'Tous',
        'filter.completed': 'Terminés',
        'filter.progress': 'En cours',
        'home.contact.email.label': 'Email',
        'home.contact.cv': 'Télécharger CV',
        'cv.english': 'CV Anglais',
        'cv.french': 'CV Français',

        // Projects page
        'projects.title': 'Mes Projets',
        'projects.desc': 'Une vitrine de mes projets techniques couvrant le développement web, le cloud computing et l\'administration système. Chaque projet démontre l\'application pratique des technologies modernes et des approches de résolution de problèmes.',
        'projects.grading.tag': '(Projet scolaire)',
        'projects.grading.desc': 'Une application web de gestion des notes développée dans le cadre d\'un projet de groupe BTS Cloud Computing. Construite avec Django 5.0 et Python 3.11, conteneurisée avec Docker et sécurisée avec le hachage de mots de passe Argon2. Le système permet aux enseignants de créer des classes, gérer les notes des élèves et rédiger des observations, tandis que les élèves peuvent suivre leur progression académique sur plusieurs échelles de notation.',
        'projects.grading.cta': 'Voir les détails du projet →',
        'projects.lme.tag': '(Projet scolaire/Privé)',
        'projects.lme.company': 'Entreprise',
        'projects.lme.desc': 'Une plateforme d\'hébergement multi-tenant sécurisée construite sur Proxmox, avec Laravel pour le front web, Coolify pour le déploiement et la conteneurisation, et Forgejo comme serveur Git auto-hébergé.',
        'projects.lme.cta': 'Voir les détails du projet →',
        'projects.azure.tag': '(Projet scolaire)',
        'projects.azure.desc': 'Un laboratoire pratique sur l\'infrastructure cloud Azure couvrant les méthodes de connexion aux VMs (Bastion, SSH, Cloud Shell, intégration VNet, Jump Host), l\'hébergement web en DMZ avec nginx, la configuration de l\'arrêt automatique et la création de VMs gratuites.',
        'projects.azure.cta': 'Voir les détails du projet →',
        'projects.vircl.tag': '(Projet scolaire)',
        'projects.vircl.desc': 'Une comparaison pratique de Proxmox VE et VMware ESXi couvrant le déploiement de VMs, le clonage, les snapshots, les sauvegardes, la migration en direct et le stockage distant. Spécialisation du groupe en haute disponibilité — mise en œuvre du basculement automatique des VMs sur des clusters d\'hyperviseurs.',
        'projects.vircl.cta': 'Voir les détails du projet →',

        // Server Virtualization Systems project page
        'vircl.subtitle': 'Proxmox VE & VMware ESXi — Spécialisation Haute Disponibilité',
        'vircl.overview': 'Aperçu du projet',
        'vircl.about': 'À propos du projet',
        'vircl.about.desc': 'Un projet pratique complet comparant deux hyperviseurs de type 1 de niveau entreprise : Proxmox VE et VMware ESXi. Travaillant sur des serveurs HP physiques dans la salle des serveurs de l\'école, l\'équipe a déployé les deux environnements de virtualisation et mis en œuvre toutes les fonctionnalités majeures, de la création et gestion des VMs à la migration en direct, les sauvegardes, les snapshots et les templates. La spécialisation du groupe est la Haute Disponibilité — couvrant ses fondements théoriques et sa mise en œuvre pratique sur les deux plateformes.',
        'vircl.goal': 'Objectif du projet',
        'vircl.goal.desc': 'Acquérir une expertise approfondie en virtualisation de serveurs d\'entreprise, maîtriser Proxmox VE et VMware ESXi, et démontrer la configuration et les avantages de la haute disponibilité dans un environnement virtualisé.',
        'vircl.team': 'Équipe',
        'vircl.tech': 'Stack technologique',
        'vircl.stack.proxmox': 'Proxmox VE',
        'vircl.stack.proxmox.desc': 'Hyperviseur de type 1 open-source basé sur Debian Linux et KVM. Utilisé pour déployer et gérer toutes les fonctionnalités de virtualisation, notamment le clustering, la migration en direct et la configuration de la haute disponibilité.',
        'vircl.stack.esxi': 'VMware ESXi',
        'vircl.stack.esxi.desc': 'Hyperviseur de type 1 commercial leader du marché de VMware. Géré via le client vSphere et vCenter Server, couvrant le cycle de vie des VMs, le clonage, les snapshots, les sauvegardes et la configuration HA.',
        'vircl.stack.vcenter': 'vCenter Server',
        'vircl.stack.vcenter.desc': 'Plateforme de gestion centralisée de VMware, nécessaire pour les fonctionnalités avancées telles que la migration en direct vMotion, DRS et la haute disponibilité entre les hôtes ESXi.',
        'vircl.stack.nas': 'TrueNAS (Stockage distant)',
        'vircl.stack.nas.desc': 'Les serveurs NAS CLOIF2 sous TrueNAS fournissent un stockage distant partagé via les protocoles NFS et iSCSI, utilisé pour le stockage des fichiers VMs et la migration en direct entre hyperviseurs.',
        'vircl.topics': 'Sujets couverts',
        'vircl.topics.general': 'Fonctionnalités générales',
        'vircl.topics.general.1': '• Déploiement des deux environnements hyperviseurs sur des serveurs HP physiques',
        'vircl.topics.general.2': '• Création et gestion des VMs via GUI et CLI sur les deux plateformes',
        'vircl.topics.general.3': '• Installation de Windows client et Linux server dans des VMs',
        'vircl.topics.general.4': '• Reconfiguration matérielle des VMs en cours d\'exécution (CPU, RAM, stockage, NICs)',
        'vircl.topics.general.5': '• Clonage, export et création de templates de VMs',
        'vircl.topics.general.6': '• Snapshots — création, restauration et gestion',
        'vircl.topics.general.7': '• Sauvegarde de la configuration de l\'hyperviseur et des VMs (intégrée et scriptée)',
        'vircl.topics.general.8': '• Migration en direct des VMs entre cibles de stockage et nœuds hyperviseurs',
        'vircl.topics.general.9': '• Intégration du stockage distant via NFS et iSCSI avec TrueNAS',
        'vircl.topics.general.10': '• Gestion des utilisateurs et des permissions sur les deux hyperviseurs',
        'vircl.topics.ha': 'Spécialisation — Haute Disponibilité',
        'vircl.topics.ha.desc': 'La haute disponibilité (HA) garantit que les machines virtuelles redémarrent automatiquement sur un autre nœud du cluster lors d\'une défaillance d\'un hôte, minimisant les interruptions en production.',
        'vircl.topics.ha.1': '• Concept théorique du HA : quorum, fencing et mécanismes de basculement',
        'vircl.topics.ha.2': '• Implémentation et configuration du HA sur Proxmox VE avec le gestionnaire HA intégré',
        'vircl.topics.ha.3': '• Implémentation du HA sur VMware ESXi avec vSphere HA dans un cluster vCenter',
        'vircl.topics.ha.4': '• Bonnes et mauvaises pratiques : exigences de stockage partagé, redondance réseau et évitement du split-brain',
        'vircl.mypart': 'Ma participation au projet',
        'vircl.mypart.intro': 'Au sein de l\'équipe de trois personnes, j\'étais responsable du côté Proxmox VE du projet.',
        'vircl.mypart.proxmox': '• Installé et configuré Proxmox VE sur le serveur HP10 assigné.',
        'vircl.mypart.vms': '• Créé et géré des machines virtuelles via l\'interface graphique et la CLI Proxmox.',
        'vircl.mypart.migration': '• Configuré le stockage distant NFS et effectué des migrations en direct de VMs entre cibles de stockage et nœuds hyperviseurs.',
        'vircl.mypart.ha': '• Co-développé la spécialisation Haute Disponibilité, couvrant la documentation théorique et la mise en pratique du HA sur Proxmox.',

        'projects.picluster.tag': '(Projet scolaire)',
        'projects.picluster.desc': 'Un cluster Raspberry Pi haute disponibilité construit pour la Porte Ouverte du LGK — 5 nœuds Pi 4 sous K3s et Traefik, hébergeant un site de démonstration en direct avec basculement automatique, équilibrage de charge, auto-scaling et tableau de bord de monitoring en temps réel.',
        'projects.picluster.cta': 'Voir les détails du projet →',
        'projects.nas.tag': '(Projet scolaire)',
        'projects.nas.desc': 'Un projet pratique déployant TrueNAS Community Edition sur un vrai serveur d\'entreprise en rack Intel SR2600URBRPR — couvrant la mise en place matérielle, l\'installation de l\'OS, la configuration RAID, la configuration réseau et le partage de fichiers via SMB/NFS/iSCSI.',
        'projects.nas.cta': 'Voir les détails du projet →',

        // NAS Server Documentation project page
        'nas.subtitle': 'TrueNAS Community Edition — Installation & configuration en conditions réelles',
        'nas.overview': 'Aperçu du projet',
        'nas.about': 'À propos du projet',
        'nas.about.desc': 'Un projet pratique complet couvrant l\'installation et la configuration d\'un serveur NAS sous TrueNAS Community Edition sur un vrai serveur d\'entreprise en rack. Le projet couvre tout, depuis le matériel physique du serveur Intel SR2600URBRPR, jusqu\'à l\'installation de l\'OS, la configuration réseau, la création de pools de stockage, la gestion des utilisateurs et le partage de fichiers — le tout réalisé sur la machine réelle.',
        'nas.team': 'Équipe',
        'nas.topics': 'Sujets abordés',
        'nas.topics.info': 'Fondamentaux NAS',
        'nas.topics.info.desc': 'Explique ce qu\'est un NAS et comment il se compare au DAS (stockage direct) et au SAN (réseau de stockage), couvrant les différences entre stockage au niveau fichier et bloc, et les avantages de séparer le calcul du stockage.',
        'nas.topics.hardware': 'Matériel',
        'nas.topics.hardware.desc': 'Travail pratique sur le serveur rack 2U Intel SR2600URBRPR, couvrant les spécifications matérielles complètes, les ports des panneaux avant et arrière, la disposition des composants internes et le contrôleur RAID matériel avec batterie de secours.',
        'nas.topics.hardware.specs': '• 2× Intel Xeon X5650, 64 Go de RAM, 2× 160 Go SATA, 3× 146 Go SAS (RAID)',
        'nas.topics.os': 'Installation OS — TrueNAS Community Edition',
        'nas.topics.os.desc': 'Couvre TrueNAS Community Edition (anciennement TrueNAS SCALE), un OS NAS open-source basé sur Linux/Debian avec le système de fichiers ZFS. Inclut le contexte d\'iXsystems, l\'historique des versions, le coût (gratuit), les fonctionnalités clés et une comparaison avantages/inconvénients.',
        'nas.topics.network': 'Configuration réseau',
        'nas.topics.network.desc': 'Configuration étape par étape de la console et du panneau web TrueNAS : définir le mot de passe admin, activer le DHCP, accéder à l\'interface web, passer en IP statique et définir le nom d\'hôte.',
        'nas.topics.storage': 'Stockage & partage de fichiers',
        'nas.topics.storage.desc': 'Création de pools de stockage pour le RAID logiciel (miroir) et le RAID matériel (stripe), création d\'utilisateurs et de datasets, définition des permissions ACL, et connexion aux dossiers partagés depuis Windows (SMB) et Linux (Nautilus). Couvre également la différence entre iSCSI (niveau bloc) et NFS/SMB (niveau fichier).',
        'nas.stack': 'Stack technique',
        'nas.stack.os': 'TrueNAS Community Edition',
        'nas.stack.os.desc': 'OS NAS open-source basé sur Debian Linux avec le système de fichiers ZFS. Fournit la gestion du stockage, les protocoles de partage de fichiers, les snapshots, le RAID, le chiffrement et une interface web moderne.',
        'nas.stack.protocols': 'Protocoles de partage de fichiers',
        'nas.stack.protocols.desc': 'SMB pour les clients Windows, NFS pour Linux/Mac et iSCSI pour l\'accès au niveau bloc. Inclut la configuration et les tests pratiques des partages SMB et une comparaison concrète de l\'utilisation d\'iSCSI par rapport à NFS/SMB.',
        'nas.stack.hardware': 'Intel SR2600URBRPR',
        'nas.stack.hardware.desc': 'Un serveur d\'entreprise monté en rack 2U avec deux processeurs Xeon X5650, 64 Go de RAM, un contrôleur RAID matériel avec batterie de secours, et la prise en charge des disques SATA et SAS.',
        'nas.mypart': 'Ma partie du projet',
        'nas.mypart.intro': 'Au sein de l\'équipe de trois personnes, j\'étais responsable de la mise en place et de la démonstration en direct du projet.',
        'nas.mypart.os': '• Installé le système d\'exploitation TrueNAS Community Edition sur le serveur.',
        'nas.mypart.raid': '• Configuré le RAID logiciel et géré les utilisateurs.',
        'nas.mypart.demo': '• Préparé et réalisé la démonstration en direct d\'un dossier partagé entre le serveur TrueNAS et un client Windows.',
        'nas.docs': 'Documentation du projet',
        'nas.docs.desc': 'Documentation complète d\'installation et de configuration du serveur NAS :',
        'nas.docs.link': '📄 Documentation serveur NAS (PDF)',

        // Azure Presentation project page
        'azure.subtitle': 'Laboratoire pratique — Connectivité VM, Hébergement web, Arrêt automatique',
        'azure.overview': 'Aperçu du projet',
        'azure.about': 'À propos du projet',
        'azure.about.desc': 'Un laboratoire pratique sur l\'infrastructure cloud Azure développé en binôme dans le cadre scolaire. Couvre des sujets Azure concrets à travers des exercices étape par étape : connexion aux machines virtuelles par plusieurs méthodes, hébergement d\'un site web derrière un reverse proxy, configuration de l\'arrêt automatique et utilisation des VMs gratuites.',
        'azure.team': 'Équipe',
        'azure.topics': 'Sujets abordés',
        'azure.topics.connectivity': 'Connectivité VM',
        'azure.topics.connectivity.desc': 'Le laboratoire présente cinq méthodes distinctes pour se connecter à une VM Azure, en démontrant quand et pourquoi utiliser chacune :',
        'azure.topics.connectivity.1': '• Azure Bastion — SSH/RDP via navigateur sans exposer la VM à internet.',
        'azure.topics.connectivity.2': '• SSH externe — SSH classique depuis une machine locale via l\'IP publique de la VM.',
        'azure.topics.connectivity.3': '• Azure Cloud Shell (IP publique) — terminal navigateur atteignant la VM via son IP publique.',
        'azure.topics.connectivity.4': '• Cloud Shell avec intégration VNet — Cloud Shell injecté dans un sous-réseau privé via un Azure Relay Namespace et un Network Profile, permettant l\'accès à une VM sans IP publique.',
        'azure.topics.connectivity.5': '• Jump Host — une deuxième VM avec IP publique utilisée comme intermédiaire pour accéder à la VM privée en SSH.',
        'azure.topics.connectivity.6': '• Authentification par clé SSH — configuration de l\'authentification par clé sur des VMs nouvelles et existantes.',
        'azure.topics.webhosting': 'Hébergement web avec une VM',
        'azure.topics.webhosting.desc': 'Démontre une architecture d\'hébergement web à deux VMs de type DMZ :',
        'azure.topics.webhosting.1': '• VM1 joue le rôle de serveur web (nginx), entièrement privée sans IP publique.',
        'azure.topics.webhosting.2': '• VM2 joue le rôle de reverse proxy (nginx), seul point d\'entrée accessible depuis internet, redirigeant le trafic HTTP vers VM1 via le réseau privé.',
        'azure.topics.webhosting.3': '• Cela isole le serveur web de l\'accès direct depuis internet, rendant VM1 inaccessible même si son IP privée est découverte.',
        'azure.topics.autoshutdown': 'Arrêt automatique',
        'azure.topics.autoshutdown.desc': 'Couvre la configuration de la fonctionnalité d\'arrêt automatique Azure pour éteindre une VM à une heure programmée chaque jour — une mesure d\'économie pour éviter des frais liés aux VMs laissées allumées.',
        'azure.topics.free': 'Machines virtuelles du compte gratuit',
        'azure.topics.free.desc': 'Guide étape par étape pour créer des VMs Azure gratuites, incluant les images OS disponibles, les tailles de VM (B1s, B2ats_v2), la limite partagée de 750 heures mensuelles et les restrictions clés du niveau gratuit.',
        'azure.topics.visualizer': 'Azure Resource Visualizer',
        'azure.topics.visualizer.desc': 'Explique l\'outil Azure Resource Visualizer intégré, qui génère un graphe interactif de toutes les ressources d\'un groupe de ressources et leurs connexions — utile pour vérifier l\'architecture d\'un coup d\'œil sans ouvrir chaque ressource individuellement.',
        'azure.stack': 'Stack technique',
        'azure.stack.azure': 'Microsoft Azure',
        'azure.stack.azure.desc': 'Le laboratoire entier s\'exécute sur Azure. Les services principaux utilisés incluent les Machines Virtuelles, les Réseaux Virtuels, les Groupes de Sécurité Réseau, Azure Bastion, Azure Relay, Azure Container Instances et les adresses IP publiques.',
        'azure.stack.nginx': 'nginx',
        'azure.stack.nginx.desc': 'Utilisé dans deux rôles : comme reverse proxy sur VM2 (redirigeant les requêtes externes vers VM1) et comme serveur web sur VM1 (servant le contenu HTML). La configuration se fait en modifiant le fichier sites-available de nginx.',
        'azure.stack.relay': 'Azure Relay & Cloud Shell VNet',
        'azure.stack.relay.desc': 'Un Azure Relay Namespace et un Network Profile sont déployés via des templates ARM pour permettre à Cloud Shell de se connecter à une VM privée. Le Relay crée un tunnel HTTPS/WebSocket sortant dans le VNet — aucune règle de pare-feu entrante n\'est nécessaire.',
        'azure.docs': 'Documentation du projet',
        'azure.docs.desc': 'Documentation complète du laboratoire Azure Cloud Infrastructure :',
        'azure.docs.link': '📄 Laboratoire Azure Cloud Infrastructure (PDF)',
        'azure.mypart': 'Ma partie du projet',
        'azure.mypart.intro': 'Le travail a été réparti équitablement entre les deux membres de l\'équipe.',
        'azure.mypart.1': '• Contribution à la rédaction de la documentation du laboratoire.',
        'azure.mypart.2': '• Réalisation des exercices pratiques documentés dans le guide.',
        'azure.mypart.3': '• Test et vérification de toutes les méthodes de connexion et configurations.',

        // BTS Progress page
        'bts.title': 'Mon parcours BTS',
        'bts.desc': 'Un aperçu de ce que j\'ai accompli et appris tout au long de ma formation BTS Cloud Computing, des projets techniques aux compétences professionnelles.',
        'bts.sem1': 'Semestre 1',
        'bts.sem1.date': 'Sep 2025 – Jan 2026',
        'bts.sem2': 'Semestre 2',
        'bts.sem2.date': 'Fév 2026 – Juin 2026',
        'bts.sem3': 'Semestre 3',
        'bts.sem3.date': 'Sep 2026 – Jan 2027',
        'bts.sem4': 'Semestre 4',
        'bts.sem4.date': 'Fév 2027 – Juin 2027',
        'bts.sem.upcoming': 'À venir',
        'bts.journey.heading': 'Ce que j\'ai appris dans le BTS',
        'bts.learned.azure.title': 'Microsoft Azure',
        'bts.learned.azure.desc': 'J\'ai acquis une base solide dans Microsoft Azure en obtenant la certification AZ-900 (Azure Fundamentals) et en suivant le parcours de préparation AZ-104 (Azure Administrator). En pratique, j\'ai déployé et géré des machines virtuelles, configuré des groupes de sécurité réseau, connecté des VMs via différentes méthodes (Bastion, SSH, Cloud Shell, jump host), mis en place des reverse proxies nginx, et configuré l\'arrêt automatique pour gérer les coûts.',
        'bts.learned.virt.title': 'Virtualisation',
        'bts.learned.virt.desc': 'J\'ai travaillé en conditions réelles avec deux hyperviseurs majeurs : Proxmox VE et VMware ESXi avec vCenter. J\'ai appris à créer et gérer des machines virtuelles, configurer le stockage et le réseau pour les VMs, prendre des snapshots, et comprendre la différence entre les hyperviseurs de type 1 et de type 2 dans des configurations d\'entreprise réelles.',
        'bts.learned.containers.title': 'Conteneurisation',
        'bts.learned.containers.desc': 'J\'ai appris à conteneuriser des applications avec Docker et à gérer des configurations multi-conteneurs avec Docker Compose. Je comprends le fonctionnement des images, conteneurs, volumes et réseaux, et comment la conteneurisation rend les applications portables et cohérentes entre les environnements. J\'ai également travaillé avec K3s (Kubernetes allégé) pour l\'orchestration de conteneurs sur le cluster Raspberry Pi.',
        'bts.learned.nas.title': 'NAS & Stockage',
        'bts.learned.nas.desc': 'J\'ai configuré un serveur NAS de zéro avec TrueNAS Community Edition sur un vrai serveur d\'entreprise. J\'ai créé des pools de stockage avec ZFS et RAID, géré les utilisateurs et les permissions, et configuré le partage de fichiers via SMB pour les clients Windows et NFS pour les clients Linux. J\'ai aussi appris la différence entre le partage au niveau fichier (SMB/NFS) et l\'accès au niveau bloc (iSCSI).',
        'bts.learned.python.title': 'Python',
        'bts.learned.python.desc': 'J\'ai appris Python from scratch et l\'ai utilisé pour construire une vraie application web. J\'ai travaillé avec le framework Django pour la logique côté serveur, PostgreSQL pour la gestion de base de données, et construit un système complet basé sur les rôles avec authentification, formulaires et panneau d\'administration. J\'ai aussi utilisé Python pour des scripts et tâches d\'automatisation en dehors du développement web.',
        'bts.learned.github.title': 'Travailler avec GitHub',
        'bts.learned.github.desc': 'J\'ai utilisé GitHub tout au long du BTS pour le contrôle de version, la collaboration et le déploiement. J\'ai appris à travailler avec des branches, commiter des modifications et gérer des dépôts — et j\'utilise GitHub Pages pour héberger ce portfolio. Travailler avec Git m\'a donné une compréhension bien plus claire de la façon dont le code est suivi, partagé et déployé dans des environnements d\'équipe.',
        'bts.learned.projectmgmt.title': 'Gestion de projets',
        'bts.learned.projectmgmt.desc': 'Chaque projet majeur du BTS a nécessité une vraie gestion de projet. J\'ai appris à définir le périmètre d\'un projet, rédiger des user stories et des personas, découper le travail en phases, et suivre l\'avancement avec les méthodes Scrum et Kanban. J\'ai aussi appris à rédiger une documentation de projet complète — spécifications, documents de recherche et propositions — pour que le travail soit compréhensible par n\'importe qui.',
        'bts.learned.networking.title': 'Réseau',
        'bts.learned.networking.desc': 'J\'ai développé une compréhension des protocoles et standards réseau, de la gestion de domaine Active Directory, des systèmes de fichiers distribués, de la configuration DNS et des règles de pare-feu. J\'ai appris à concevoir et sécuriser des environnements réseau pour des cas d\'usage d\'entreprise réels.',
        'bts.learned.professional.title': 'Compétences professionnelles',
        'bts.learned.professional.desc': 'J\'ai amélioré ma capacité à présenter des sujets techniques devant un public, à rédiger des documents structurés en appliquant les principes de design CRAP, et à travailler efficacement en équipe. J\'ai pratiqué la rédaction d\'un CV et d\'une lettre de motivation professionnels, et me suis entraîné aux entretiens d\'embauche en plusieurs langues. Des visites professionnelles — dont une visite du data center LuxConnect et une conférence de NTT Data — m\'ont donné une exposition directe aux environnements d\'entreprise.',
        'bts.progress.heading': 'Ma progression',
        'bts.progress.intro': 'Au-delà des compétences techniques, le BTS m\'a poussé à progresser dans des domaines où j\'avais peu d\'expérience au début.',
        'bts.progress.presentations.title': 'Communication & prise de parole',
        'bts.progress.presentations.desc': 'Je suis devenu beaucoup plus à l\'aise pour communiquer dans un cadre professionnel — que ce soit pour présenter des sujets techniques devant un public ou pour m\'entraîner à des entretiens d\'embauche en plusieurs langues. Ce qui était un vrai défi au début du programme s\'est transformé en confiance lors des démonstrations techniques en direct, des présentations de groupe structurées et des simulations d\'entretien.',
        'bts.progress.documents.title': 'Rédiger des documents',
        'bts.progress.documents.desc': 'Je me suis nettement amélioré dans la rédaction de documents techniques clairs et structurés. J\'ai également appris à améliorer l\'aspect visuel des documents en appliquant les principes de design CRAP (Contraste, Répétition, Alignement, Proximité) pour produire des mises en page plus propres et lisibles.',
        'bts.progress.teamwork.title': 'Travailler en équipe',
        'bts.progress.teamwork.desc': 'Chaque projet majeur du BTS a été réalisé en équipe. J\'ai appris à répartir les responsabilités, communiquer l\'avancement, gérer les désaccords de façon constructive et livrer le travail ensemble dans les délais.',
        'bts.progress.s2.planning.title': 'Planification & gestion de projets — Encore amélioré',
        'bts.progress.s2.planning.desc': 'Au semestre 2, j\'ai appris à aborder un projet de façon plus structurée, du début à la fin. J\'ai appris à diviser le travail en phases claires, à fixer des délais réalistes et à suivre ce qui reste à faire — plutôt que de me lancer directement sans plan. Cela m\'a permis de mieux respecter les échéances et d\'identifier les problèmes tôt avant qu\'ils ne deviennent plus importants.',
        'bts.progress.s2.documenting.title': 'Documenter les projets — Encore amélioré',
        'bts.progress.s2.documenting.desc': 'J\'ai amélioré ma façon de documenter mon travail — en rédigeant des descriptions plus claires de ce qui a été fait, des raisons des décisions prises et de la façon dont les choses sont configurées pour que quelqu\'un d\'autre puisse reprendre le projet. J\'ai arrêté de traiter la documentation comme une tâche secondaire et j\'ai commencé à la considérer comme une partie intégrante du projet.',
        'bts.progress.s2.language.title': 'Langue',
        'bts.progress.s2.language.desc': 'Au semestre 2, nous avions un cours de français dédié qui m\'a aidé à améliorer mon français.',

        // Certificates page
        'certificates.title': 'Certificats professionnels',
        'certificates.desc': 'Une collection de mes certifications professionnelles démontrant mon expertise dans les applications Microsoft Office et les services cloud Azure. Chaque certification représente des compétences et connaissances validées par des évaluations officielles Microsoft.',
        'certificates.counter': 'Certificats obtenus',
        'cert.word.title': 'Microsoft Office Specialist : Word Associate',
        'cert.word.desc': 'Démontre la compétence dans la création et la gestion de documents Word, y compris le formatage du texte, des paragraphes et des sections, ainsi que la gestion des tableaux, listes et références pour Microsoft 365 Apps.',
        'cert.word.grade': 'Score : 920/1000',
        'cert.word.link': 'Voir la certification sur Credly →',
        'cert.word.expert.title': 'Microsoft Office Specialist : Word Expert',
        'cert.word.expert.desc': 'Certification avancée démontrant des compétences de niveau expert dans la gestion des options de document, la conception de documents avancés, la création de références personnalisées et l\'utilisation des fonctionnalités avancées de Word pour Microsoft 365 Apps.',
        'cert.word.expert.grade': 'Score : 790/1000',
        'cert.word.expert.link': 'Voir la certification sur Credly →',
        'cert.powerpoint.title': 'Microsoft Office Specialist : PowerPoint Associate',
        'cert.powerpoint.desc': 'Compétence certifiée dans la création et la gestion de présentations, y compris l\'insertion et le formatage de texte, formes et images, ainsi que l\'application de transitions et animations pour Microsoft 365 Apps.',
        'cert.powerpoint.grade': 'Score : 935/1000',
        'cert.powerpoint.link': 'Voir la certification sur Credly →',
        'cert.azure.title': 'Microsoft Certified : Azure Fundamentals',
        'cert.azure.desc': 'Connaissances fondamentales des services cloud et de leur fourniture avec Microsoft Azure, y compris les services Azure principaux, la sécurité, la confidentialité, la conformité, la confiance, ainsi que la tarification et le support Azure.',
        'cert.azure.grade': 'Score : 700/1000',
        'cert.azure.link': 'Voir la certification sur Credly →',
        'cert.excel.title': 'Microsoft Office Specialist : Excel Associate',
        'cert.excel.desc': 'Démontre la maîtrise de la création et de la gestion de feuilles de calcul et de classeurs, la création de cellules et de plages, la gestion de tableaux et de données, l\'exécution d\'opérations avec des formules et des fonctions, et la gestion de graphiques pour Microsoft 365 Apps.',
        'cert.excel.grade': 'Score : 720/1000',
        'cert.excel.link': 'Voir la certification sur Credly →',
        'cert.mos.title': 'Microsoft Office Specialist : Associate',
        'cert.mos.desc': 'Obtenu en démontrant des compétences dans plusieurs applications Microsoft Office. Cette certification valide des compétences complètes dans Word, Excel et PowerPoint, prouvant la maîtrise des outils de productivité essentiels pour Microsoft 365 Apps.',
        'cert.mos.link': 'Voir la certification sur Credly →',

        // Experiences page
        'experiences.title': 'Expériences professionnelles',
        'exp.section.internships': 'Stages',
        'exp.section.visits': 'Visites & événements professionnels',
        'exp.section.courses': 'Cours en ligne',
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
        'exp.marong.title': 'Professionnel externe - Guy Marong',
        'exp.marong.date': '2025/2026 | Cours d\'anglais',
        'exp.marong.desc': 'Guy Marong a visité notre cours d\'anglais à plusieurs reprises pour nous guider dans les compétences professionnelles de candidature. Il nous a aidés à rédiger un CV et une lettre de motivation, et nous a préparés à un entretien simulé organisé par NTT Data Luxembourg.',
        'exp.schluter.title': 'Entretien simulé - Yves Schlüter',
        'exp.schluter.date': '2025',
        'exp.schluter.desc': 'Yves Schlüter, professionnel externe, est intervenu dans notre classe pour mener des entretiens d\'embauche simulés avec chaque étudiant en luxembourgeois, offrant un défi linguistique différent par rapport à l\'entretien NTT Data tenu en anglais.',
        'exp.nttdata.title': 'Entretien simulé - NTT Data Luxembourg',
        'exp.nttdata.date': '2026',
        'exp.nttdata.desc': 'Deux professionnels de NTT Data Luxembourg sont intervenus dans notre classe pour mener des entretiens d\'embauche simulés avec chaque étudiant, reproduisant un vrai processus de recrutement et fournissant des retours sur la performance et la présentation.',
        'exp.nix.title': 'Professionnel externe - Xavier Nix',
        'exp.nix.date': '2026 | 1 semaine',
        'exp.nix.desc': 'Xavier Nix, professionnel IT externe, a rejoint notre classe pendant une semaine pour dispenser un cours pratique sur AZ-040 (Automatisation de l\'administration avec PowerShell), couvrant les scripts, les flux d\'automatisation et la gestion de systèmes à distance.',
        'exp.nix2.title': 'Professionnel externe - Xavier Nix',
        'exp.nix2.date': '2025 | 2 jours',
        'exp.nix2.desc': 'Xavier Nix est intervenu pendant deux jours séparés pour introduire les concepts cloud Azure, en se concentrant sur AZ-900 (Microsoft Azure Fundamentals) et en couvrant les fondamentaux cloud qui constituent la base du programme de certification.',
        'exp.charlier.title': 'Professionnel externe - Arnaud Charlier',
        'exp.charlier.date': '2026',
        'exp.charlier.desc': 'Arnaud Charlier, professionnel AWS, est intervenu dans notre classe pour présenter Amazon Web Services, couvrant les concepts cloud fondamentaux, les services AWS clés et des cas d\'usage réels tirés de son expérience professionnelle.',
        'home.skills.ha': 'Haute Disponibilité',
        'exp.pluralsight.title': 'Préparation examen AZ-900 - Pluralsight',
        'exp.pluralsight.date': '2026',
        'exp.pluralsight.desc': 'Suivi du parcours de préparation Microsoft Azure Fundamentals (AZ-900) sur Pluralsight, couvrant les concepts cloud, les services Azure, la sécurité, la confidentialité, la conformité et la tarification et le support Azure.',
        'exp.pluralsight.grade': 'Score : 70/100',
        'exp.pluralsight.link': 'Voir le parcours sur Pluralsight →',
        'exp.az104.title': 'Préparation à l\'examen AZ-104 - Pluralsight',
        'exp.az104.date': '2026 - En cours',
        'exp.az104.desc': 'Actuellement en cours sur le parcours de préparation Microsoft Azure Administrator (AZ-104) sur Pluralsight, couvrant l\'identité et la gouvernance Azure, le stockage, les réseaux virtuels et la supervision.',
        'exp.az104.link': 'Voir le parcours sur Pluralsight →',

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
        'grading.mypart': 'Ma partie du projet',
        'grading.mypart.intro': 'Au sein de l\'équipe de quatre personnes, j\'étais responsable de la partie analytique et documentaire du projet.',
        'grading.mypart.personas': '• Création des personas utilisateurs pour chaque rôle de l\'application.',
        'grading.mypart.userstories': '• Rédaction des user stories couvrant les besoins des trois types d\'utilisateurs.',
        'grading.mypart.docs': '• Production des documents nécessaires au projet, notamment le cahier des charges et le document de recherche.',
        'grading.docs': 'Documentation du projet',
        'grading.docs.desc': 'Documentation complète de recherche technique et de décisions technologiques :',
        'grading.docs.link': '📄 Document de recherche (PDF)',
        'grading.docs.github': 'Dépôt GitHub — GradingDino',

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
        'lme.stack.containerization': 'Déploiement & Conteneurisation',
        'lme.stack.containerization.desc': 'Coolify est le PaaS auto-hébergé utilisé pour déployer et gérer les conteneurs sur les VMs. Il gère l\'intégralité du pipeline de déploiement, la gestion des environnements et fournit un tableau de bord pour surveiller les services actifs.',
        'lme.stack.webserver': 'Framework Web',
        'lme.stack.webserver.desc': 'Laravel alimente les sites clients, offrant un framework PHP moderne avec routage, templating et ORM pour construire des applications web propres et maintenables.',
        'lme.stack.dns': 'DNS & Sécurité',
        'lme.stack.dns.desc': 'Cloudflare gère les enregistrements DNS et fournit une protection DDoS, des capacités WAF et des certificats SSL, ajoutant une couche de sécurité supplémentaire avant que le trafic n\'atteigne le serveur.',
        'lme.stack.monitoring': 'Surveillance',
        'lme.stack.monitoring.desc': 'Un Raspberry Pi externe surveille la disponibilité du serveur de manière indépendante via l\'API Hetzner, permettant des alertes automatisées et des actions de récupération lorsque des problèmes sont détectés.',
        'lme.stack.access': 'Git',
        'lme.stack.access.desc': 'Forgejo est le serveur Git auto-hébergé utilisé pour le contrôle de version de tous les dépôts du projet. Il offre une alternative légère et open-source à GitHub avec une gestion complète des dépôts.',
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
        'lme.company': 'Vision d\'entreprise',
        'lme.company.startup': 'Startup en formation',
        'lme.company.startup.desc': 'LME (Luxembourg Media Engineering) est plus qu\'un projet scolaire - c\'est la base d\'une vraie entreprise en cours de création. L\'infrastructure et les services développés ici serviront de socle technique pour les opérations commerciales.',
        'lme.company.initial': 'Services initiaux',
        'lme.company.initial.desc': 'L\'entreprise se lancera en se concentrant sur le développement web et les services d\'hébergement de sites web, en utilisant l\'infrastructure multi-tenant sécurisée construite pour ce projet afin d\'offrir un hébergement fiable et abordable aux petites entreprises et aux particuliers.',
        'lme.company.future': 'Expansion future',
        'lme.company.future.desc': 'La vision à long terme est de faire de LME une entreprise IT à service complet, s\'étendant au-delà des services web pour offrir des solutions IT générales, du conseil et des services de support aux entreprises au Luxembourg et au-delà.',

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
        'osycl.topics.doc.1': '• Introduction aux services de fichiers et de stockage',
        'osycl.topics.doc.2': '• Définition, composants et avantages de DFS',
        'osycl.topics.doc.3': '• Work Folders pour les scénarios BYOD',
        'osycl.topics.demo': 'Démonstration en direct',
        'osycl.topics.demo.1': '• Configuration d\'un serveur de domaine avec Active Directory',
        'osycl.topics.demo.2': '• Installation des rôles Espaces de noms DFS et Réplication DFS',
        'osycl.topics.demo.3': '• Création et configuration des espaces de noms DFS',
        'osycl.topics.demo.4': '• Ajout de dossiers et de cibles de dossiers',
        'osycl.topics.demo.5': '• Configuration de la réplication DFS entre serveurs',
        'osycl.topics.demo.6': '• Configuration client et mappage de lecteur réseau',
        'osycl.mypart': 'Ma partie du projet',
        'osycl.mypart.intro': 'Au sein de l\'équipe de trois personnes, j\'étais responsable de la documentation et de la démonstration en direct du projet.',
        'osycl.mypart.docs': '• Rédaction des documents nécessaires à la présentation.',
        'osycl.mypart.demo': '• Préparation et réalisation de la démonstration DFS en direct lors de la présentation.',
        'osycl.docs': 'Documentation du projet',
        'osycl.docs.desc': 'Documentation complète et guide de démonstration pour l\'implémentation DFS :',
        'osycl.docs.link': '📄 Document de démonstration DFS (PDF)',

        // PowerApps Budget Planner project page
        'projects.powerapps.tag': '(Projet scolaire)',
        'projects.powerapps.desc': 'Une application de gestion de budget construite avec Microsoft PowerApps comprenant le suivi du budget, les coûts récurrents et les dépenses mensuelles avec intégration Power Automate pour les réinitialisations mensuelles automatiques.',
        'projects.powerapps.cta': 'Voir les détails du projet →',
        'powerapps.subtitle': 'Application de gestion de budget PowerApps',
        'powerapps.overview': 'Aperçu du projet',
        'powerapps.about': 'À propos du projet',
        'powerapps.about.desc': 'Une application de planification budgétaire construite avec Microsoft PowerApps qui permet aux utilisateurs de gérer leurs finances en suivant leur budget, leurs coûts récurrents et leurs dépenses mensuelles. L\'application s\'intègre avec Power Automate pour gérer automatiquement les réinitialisations de coûts mensuels.',
        'powerapps.goal': 'Objectif du projet',
        'powerapps.goal.desc': 'Créer un outil de gestion de budget fonctionnel et convivial en utilisant la Microsoft Power Platform, démontrant la maîtrise du développement PowerApps, de la gestion des données et de l\'intégration Power Automate.',
        'powerapps.tech': 'Stack technologique',
        'powerapps.stack.powerapps': 'Microsoft PowerApps',
        'powerapps.stack.powerapps.desc': 'Plateforme low-code utilisée pour construire l\'interface principale de l\'application, incluant les écrans pour la gestion du budget, le suivi des coûts et la visualisation des données.',
        'powerapps.stack.automate': 'Power Automate',
        'powerapps.stack.automate.desc': 'Utilisé pour créer des flux automatisés qui gèrent les réinitialisations mensuelles des coûts, supprimant les coûts mensuels ponctuels à la fin de chaque mois pour maintenir le budget à jour.',
        'powerapps.stack.datasource': 'Source de données',
        'powerapps.stack.datasource.desc': 'Stockage de données basé sur Excel/SharePoint pour conserver les informations budgétaires, les coûts récurrents et les dépenses mensuelles entre les sessions.',
        'powerapps.features': 'Fonctionnalités',
        'powerapps.features.budget': 'Gestion du budget',
        'powerapps.features.budget.desc': 'Définir et suivre votre budget total avec un aperçu clair des fonds restants après le calcul de tous les coûts.',
        'powerapps.features.recurring': 'Coûts récurrents',
        'powerapps.features.recurring.desc': 'Ajouter des coûts répétitifs qui sont automatiquement déduits de votre budget chaque mois, comme les abonnements, le loyer ou les services publics.',
        'powerapps.features.monthly': 'Coûts mensuels',
        'powerapps.features.monthly.desc': 'Suivre les dépenses mensuelles ponctuelles qui sont automatiquement effacées à la fin de chaque mois via l\'intégration Power Automate.',
        'powerapps.features.search': 'Recherche et tri',
        'powerapps.features.search.desc': 'Rechercher des dépenses spécifiques et trier votre liste de coûts par différents champs pour trouver rapidement ce que vous cherchez.',
        'powerapps.screenshots': 'Captures d\'écran',
        'powerapps.screenshot.1': 'Écran principal — aperçu mensuel affichant le budget, les coûts récurrents, les coûts manuels et le solde disponible.',
        'powerapps.screenshot.2': 'Écran des paramètres — configurer le budget mensuel et gérer les dépenses récurrentes.',
        'powerapps.screenshot.3': 'Écran des transactions — rechercher et trier les entrées de dépenses par date.',
        'powerapps.screenshots.desc': 'Captures d\'écran de l\'application Budget Planner :',
        'powerapps.docs': 'Documentation du projet',
        'powerapps.docs.desc': 'La documentation du projet sera disponible prochainement.',
        'powerapps.docs.link': '📄 Énoncé du projet PowerApps (PDF)',

        // Portfolio project page
        'projects.portfolio.tag': '(Projet scolaire)',
        'projects.portfolio.desc': 'Un site web portfolio personnel présentant mes compétences, projets, certificats et expériences professionnelles. Comprend un support multilingue, un design responsive et un style glass morphism.',
        'projects.portfolio.cta': 'Voir les détails du projet →',
        'portfolio.subtitle': 'Site Web Portfolio Personnel',
        'portfolio.overview': 'Aperçu du projet',
        'portfolio.about': 'À propos du projet',
        'portfolio.about.desc': 'Un site web portfolio personnel construit de zéro pour documenter mon parcours BTS Cloud Computing. Il couvre tous mes projets avec des pages de détail dédiées, des certifications professionnelles, des stages et visites de professionnels externes, un aperçu de la progression BTS, et une section contact — le tout en anglais et en français.',
        'portfolio.goal': 'Objectif du projet',
        'portfolio.goal.desc': 'Créer un portfolio numérique vivant qui évolue avec mes études, donnant à quiconque une image claire et complète de mes compétences techniques, projets et développement professionnel.',
        'portfolio.tech': 'Stack technologique',
        'portfolio.stack.html.desc': 'Structure HTML sémantique fournissant la base de toutes les pages, assurant l\'accessibilité et une organisation correcte des documents.',
        'portfolio.stack.css.desc': 'Stylisation personnalisée avec des fonctionnalités CSS modernes incluant des effets glass morphism, un design responsive, des mises en page flexbox et des animations fluides.',
        'portfolio.stack.js.desc': 'Fonctionnalités côté client incluant un système i18n personnalisé gérant toutes les traductions EN/FR via un objet de traductions unique, avec la préférence de langue persistée dans localStorage.',
        'portfolio.stack.github.desc': 'Hébergement gratuit de site statique via GitHub Pages, permettant un déploiement facile et un contrôle de version pour des mises à jour continues.',
        'portfolio.features': 'Fonctionnalités',
        'portfolio.features.i18n': 'Support multilingue',
        'portfolio.features.i18n.desc': 'Internationalisation EN/FR complète sur toutes les pages et projets, avec un sélecteur de langue dans la barre de navigation et une préférence persistée via localStorage.',
        'portfolio.features.glass': 'Design Glass Morphism',
        'portfolio.features.glass.desc': 'Esthétique UI moderne avec des effets de verre dépoli, des formes animées en arrière-plan et un thème sombre cohérent sur toutes les pages.',
        'portfolio.features.projects': 'Pages de présentation de projets',
        'portfolio.features.projects.desc': 'Des pages de projets dédiées couvrant chacune un aperçu, les sujets abordés, la stack technique, ma contribution personnelle et la documentation téléchargeable si disponible.',
        'portfolio.features.certs': 'Galerie de certificats',
        'portfolio.features.certs.desc': 'Affichage des certifications Microsoft professionnelles avec des liens vers la vérification officielle sur Credly.',
        'portfolio.features.experiences': 'Page Expériences',
        'portfolio.features.experiences.desc': 'Documente les stages, visites éducatives et visites de professionnels externes — incluant des entretiens simulés, des cours dispensés par des intervenants et des visites d\'entreprises dans le cadre du BTS.',
        'portfolio.features.bts': 'Page Progression BTS',
        'portfolio.features.bts.desc': 'Un aperçu de ce que j\'ai appris tout au long du BTS, couvrant le développement des compétences techniques et transversales dans tous les cours et projets.',
        'portfolio.features.cv': 'Téléchargement CV',
        'portfolio.features.cv.desc': 'Boutons de téléchargement direct pour les versions anglaise et française de mon CV, accessibles depuis la page d\'accueil.',
        'portfolio.source': 'Code source',
        'portfolio.source.desc': 'Le code source complet de ce portfolio est disponible publiquement sur GitHub :',
        'portfolio.source.link': 'Dépôt GitHub — wurer762/wurer.github.io',
        'portfolio.future': 'Plans futurs',
        'portfolio.future.desc': 'Ce portfolio continuera d\'évoluer tout au long du BTS et au-delà :',
        'portfolio.future.1': '• Ajouter de nouveaux projets au fur et à mesure de leur réalisation',
        'portfolio.future.2': '• Inclure des certifications et réalisations supplémentaires',
        'portfolio.future.3': '• Maintenir les pages Progression BTS et Expériences à jour',
        'portfolio.future.4': '• Continuer à affiner le design et l\'expérience utilisateur',

        // Portable Computing project page
        'projects.portable.tag': '(Projet scolaire)',
        'projects.portable.desc': 'Une présentation technique sur les appareils informatiques portables, couvrant leur évolution, leurs types, leurs composants matériels et les technologies qui permettent l\'informatique mobile.',
        'projects.portable.cta': 'Voir les détails du projet →',
        'portable.subtitle': 'Présentation technique sur les appareils portables',
        'portable.overview': 'Aperçu du projet',
        'portable.about': 'À propos du projet',
        'portable.about.desc': 'Une présentation technique créée pour le cours CLOIF couvrant le sujet de l\'informatique portable. La présentation explore l\'évolution, les types et les technologies derrière les appareils informatiques portables qui ont transformé notre façon de travailler et de communiquer.',
        'portable.goal': 'Objectif du projet',
        'portable.goal.desc': 'Rechercher et présenter des informations complètes sur les appareils informatiques portables, leur histoire, les technologies actuelles et leur impact sur l\'informatique moderne et la vie quotidienne.',
        'portable.format': 'Format de présentation',
        'portable.format.desc': 'Le projet a été présenté sous forme de présentation PowerPoint à la classe, couvrant les concepts clés, les catégories d\'appareils et les spécifications techniques du matériel informatique portable.',
        'portable.topics': 'Sujets couverts',
        'portable.topics.desc': 'La présentation couvre divers aspects de l\'informatique portable, notamment :',
        'portable.topics.1': '• Histoire et évolution des ordinateurs portables',
        'portable.topics.2': '• Types d\'appareils portables (ordinateurs portables, tablettes, smartphones)',
        'portable.topics.3': '• Composants matériels clés et spécifications',
        'portable.topics.4': '• Technologie des batteries et gestion de l\'énergie',
        'portable.topics.5': '• Connectivité et technologies sans fil',
        'portable.topics.6': '• Tendances actuelles et développements futurs',
        'portable.docs': 'Présentation',
        'portable.docs.desc': 'Téléchargez la présentation complète pour des informations techniques détaillées :',
        'portable.docs.link': '📊 Présentation Informatique Portable (PPTX)',

        // Pi Cluster project page
        'picluster.subtitle': 'Cluster haute disponibilité — Demo Porte Ouverte',
        'picluster.overview': 'Aperçu du projet',
        'picluster.about': 'À propos du projet',
        'picluster.about.desc': 'Un cluster Raspberry Pi haute disponibilité construit pour la Porte Ouverte du LGK, conçu pour rendre immédiatement visibles et compréhensibles des concepts cloud comme la redondance, l\'équilibrage de charge et le scaling automatique. Cinq nœuds Raspberry Pi 4 travaillent ensemble pour héberger un site web. Les visiteurs pouvaient débrancher n\'importe quel Pi et voir le site rester en ligne, ou appuyer sur un bouton de test de charge pour faire monter la charge CPU et observer le cluster changer le nœud qui hébergeait le site — le tout reflété en direct sur un tableau de bord de monitoring intégré. Construit comme démo interactive pour attirer des futurs étudiants vers le BTS Cloud Computing.',
        'picluster.goal': 'Objectif du projet',
        'picluster.goal.desc': 'Démontrer des concepts cloud fondamentaux — haute disponibilité, basculement automatique, équilibrage de charge et auto-scaling — à travers un cluster physique et interactif qu\'un visiteur non technique peut comprendre en moins d\'une minute sans explication verbale.',
        'picluster.team': 'Équipe',
        'picluster.tech': 'Stack technique',
        'picluster.stack.pi': 'Raspberry Pi 4 (×5)',
        'picluster.stack.pi.desc': 'Cinq ordinateurs monocartes ARM faisant office de nœuds du cluster, chacun sous Raspberry Pi OS et démarrant depuis une carte microSD. Connectés via un switch D-Link pour former un réseau de cluster local.',
        'picluster.stack.k3s': 'K3s',
        'picluster.stack.k3s.desc': 'Distribution Kubernetes légère optimisée pour les appareils ARM et les déploiements edge. Gère l\'orchestration des conteneurs, la surveillance de l\'état des nœuds et le scaling automatique sur les cinq Pi.',
        'picluster.stack.traefik': 'Traefik',
        'picluster.stack.traefik.desc': 'Reverse proxy et load balancer intégré à K3s. Distribue le trafic HTTP entrant entre les nœuds sains et retire automatiquement les nœuds défaillants du pool sans intervention manuelle.',
        'picluster.stack.node': 'Node.js + Express',
        'picluster.stack.node.desc': 'Le site de démonstration et l\'API de monitoring intégrée, conteneurisés et déployés sur l\'ensemble du cluster. Collecte et expose les métriques par nœud — CPU, RAM, température et statut de service — en temps réel.',
        'picluster.features': 'Fonctionnalités clés',
        'picluster.features.ha': 'Haute disponibilité & basculement automatique',
        'picluster.features.ha.desc': 'K3s surveille en continu l\'état des nœuds. Lorsqu\'un Pi est débranché ou tombe hors ligne, Traefik détecte la panne et redistribue le trafic vers les nœuds sains en quelques secondes. Le site reste accessible tout au long.',
        'picluster.features.monitoring': 'Page de monitoring en direct',
        'picluster.features.monitoring.desc': 'Un tableau de bord de monitoring est intégré directement dans le site de démonstration, affichant le statut en temps réel de chaque Pi : état en ligne/hors ligne, utilisation CPU, RAM, température et quel nœud traite actuellement la requête du visiteur. Conçu pour être immédiatement lisible par des visiteurs non techniques.',
        'picluster.features.scaling': 'Équilibrage de charge automatique & auto-scaling',
        'picluster.features.scaling.desc': 'Traefik distribue les requêtes entrantes de manière équitable entre tous les nœuds actifs. K3s ajuste automatiquement le nombre de conteneurs en cours d\'exécution selon les variations de trafic et les arrivées ou départs de nœuds — sans aucune intervention manuelle.',
        'picluster.features.selfheal': 'Auto-guérison',
        'picluster.features.selfheal.desc': 'Lorsqu\'un Pi défaillant est remis sous tension et rejoint le cluster, K3s et Traefik le réintègrent automatiquement dans le pool. Aucune étape manuelle n\'est nécessaire pour restaurer la pleine capacité du cluster.',
        'picluster.features.stress': 'Test de charge interactif',
        'picluster.features.stress.desc': 'Un bouton de test de charge intégré dans le site de démonstration augmente artificiellement la charge CPU du nœud qui traite les requêtes en cours. Les visiteurs peuvent voir l\'utilisation CPU monter en temps réel sur la page de monitoring et observer quel Pi héberge le site changer au fur et à mesure que Traefik redistribue le trafic vers un nœud moins chargé — rendant l\'équilibrage de charge visible et interactif sans débrancher de matériel.',
        'picluster.gallery': 'Photos',
        'picluster.gallery.hardware': 'Le cluster Pi assemblé avec ses ventilateurs RGB.',
        'picluster.gallery.event': 'Le cluster en fonctionnement lors de la Porte Ouverte du LGK, avec le tableau de bord de monitoring sur l\'écran.',
        'picluster.gallery.monitor': 'Le tableau de bord de monitoring en direct affichant l\'état des nœuds, CPU, mémoire, température et quel Pi sert actuellement les requêtes.',
        'picluster.mypart': 'Ma partie du projet',
        'picluster.mypart.desc': 'J\'étais responsable de toute la partie infrastructure du projet. J\'ai installé Raspberry Pi OS sur les cinq nœuds, déployé et configuré K3s sur l\'ensemble du cluster, mis en place le réseau du cluster, et implémenté le pipeline de données qui collecte les métriques par nœud et les expose au site de monitoring.',
        'picluster.wip': 'Aller plus loin',
        'picluster.wip.desc': 'La version Porte Ouverte a livré une preuve de concept fonctionnelle sous K3s. Cependant, lors de la démonstration, nous avons constaté que le site de monitoring était lent à refléter les changements d\'état des nœuds — lorsqu\'un Pi était débranché ou qu\'un test de charge provoquait un changement du nœud servant le trafic, les mises à jour n\'étaient pas assez rapides pour rendre le basculement immédiat et convaincant pour les visiteurs. Après en avoir discuté avec un professeur, nous avons décidé d\'aller plus loin et de corriger ces lacunes en migrant la couche d\'orchestration vers Docker Swarm. L\'objectif est de construire une architecture plus réactive et proche de la production, avec une propagation d\'état plus rapide, un monitoring amélioré et un workflow de déploiement plus propre.',
        'picluster.docs': 'Documentation du projet',
        'picluster.docs.desc': 'Proposition de projet et spécification technique :',
        'picluster.docs.link': '📄 Proposition de projet Pi Cluster (DOCX)',

        // Status tags
        'status.completed': 'Terminé',
        'status.inprogress': 'En cours',

        // Breadcrumbs
        'notfound.title': 'Page introuvable',
        'notfound.desc': 'La page que vous cherchez n\'existe pas ou a été déplacée.',
        'notfound.home': '← Retour à l\'accueil',
        'breadcrumb.home': 'Accueil',
        'breadcrumb.projects': 'Projets',

        // Projects list — AZ-104
        'projects.az104.tag': '(Projet scolaire)',
        'projects.az104.desc': 'Un projet Azure pratique en équipe prouvant la compréhension concrète de deux cours Pluralsight AZ-104 — Gérer les identités et la gouvernance Azure, et Déployer et gérer les ressources de calcul Azure. L\'équipe a déployé un tenant Entra ID, une hiérarchie groupe de gestion / abonnement / groupe de ressources, ainsi que des ressources de calcul dont un VM Scale Set public servant de proxy vers un conteneur web et un App Service privés.',
        'projects.az104.cta': 'Voir les détails du projet →',

        // AZ-104 project page
        'az104.subtitle': 'Déploiement pratique en équipe — VM Scale Set, conteneur web & App Service',
        'az104.overview': 'Aperçu du projet',
        'az104.about': 'À propos du projet',
        'az104.about.desc': 'Un projet Azure pratique en équipe conçu pour prouver que nous avons compris et pouvons appliquer concrètement deux cours Pluralsight AZ-104 : Gérer les identités et la gouvernance Azure, et Déployer et gérer les ressources de calcul Azure. Plutôt que de simplement suivre les cours, l\'équipe a conçu et déployé un environnement cloud réduit mais réaliste — un tenant Entra ID avec des utilisateurs, une véritable hiérarchie groupe de gestion / abonnement / groupe de ressources, et un ensemble de ressources de calcul (un VM Scale Set, un conteneur web et un App Service) reliées par un proxy public et des services back-end privés.',
        'az104.goal': 'Objectif',
        'az104.goal.desc': 'Démontrer que nous avons non seulement terminé les deux cours Pluralsight mais que nous savons réellement utiliser les concepts — construire des structures d\'identité et de gouvernance et déployer et gérer des ressources de calcul Azure dans un véritable environnement partagé.',
        'az104.team': 'Équipe',
        'az104.team.members': 'Würth Eric, Simon Max, Jervis Yona — travaillant dans le même abonnement et le même groupe de ressources.',
        'az104.architecture': 'Architecture',
        'az104.architecture.desc': 'Le schéma ci-dessous montre l\'environnement déployé : un tenant Entra ID pour l\'identité, la hiérarchie de gouvernance Groupe de gestion → Abonnement → Groupe de ressources, et les ressources de calcul à l\'intérieur du groupe de ressources. Un client sur internet n\'atteint que le VM Scale Set public, dont le proxy redirige le trafic vers le site web hébergé sur le conteneur web. Le conteneur et l\'App Service ne possèdent que des IP privées et ne sont jamais exposés directement.',
        'az104.topics': 'Sujets abordés',
        'az104.topics.identity': 'Gérer les identités et la gouvernance Azure',
        'az104.topics.identity.desc': 'Application du premier cours Pluralsight en pratique :',
        'az104.topics.identity.1': '• Tenant Entra ID — création de l\'annuaire et gestion des utilisateurs qui sécurisent l\'accès à l\'environnement.',
        'az104.topics.identity.2': '• Hiérarchie de gouvernance — organisation des ressources sous une structure Groupe de gestion → Abonnement → Groupe de ressources, afin que toute l\'équipe travaille dans un unique groupe de ressources bien délimité.',
        'az104.topics.identity.3': '• Abonnement partagé — les trois membres ont opéré dans le même abonnement et le même groupe de ressources, en coordonnant les accès et le nommage.',
        'az104.topics.compute': 'Déployer et gérer les ressources de calcul Azure',
        'az104.topics.compute.desc': 'Application du second cours Pluralsight en pratique :',
        'az104.topics.compute.1': '• VM Scale Set — un scale set public servant de point d\'entrée unique vers l\'environnement depuis internet.',
        'az104.topics.compute.2': '• Conteneur web — un site web conteneurisé fonctionnant derrière le scale set, accessible uniquement via une IP privée.',
        'az104.topics.compute.3': '• App Service — un second site web hébergé en privé servant du contenu supplémentaire.',
        'az104.topics.compute.4': '• Segmentation réseau — seul le scale set possède une IP publique ; le conteneur et l\'App Service sont privés uniquement et ne peuvent donc pas être atteints directement depuis internet.',
        'az104.stack': 'Stack technique',
        'az104.stack.azure': 'Microsoft Azure',
        'az104.stack.azure.desc': 'Tout l\'environnement s\'exécute sur Azure : Entra ID pour l\'identité, une hiérarchie Groupe de gestion / Abonnement / Groupe de ressources pour la gouvernance, ainsi que des Virtual Machine Scale Sets, des Container Instances, App Service, des réseaux virtuels et des adresses IP publiques pour la couche de calcul.',
        'az104.stack.scaleset': 'VM Scale Set & Proxy',
        'az104.stack.scaleset.desc': 'Un Virtual Machine Scale Set est la seule ressource exposée publiquement. Il exécute un proxy qui redirige le trafic HTTP entrant via le réseau privé vers le site web hébergé sur le conteneur web, gardant le back-end isolé d\'internet.',
        'az104.stack.container': 'Conteneur web & App Service',
        'az104.stack.container.desc': 'Un site web conteneurisé fonctionne derrière le scale set, tandis qu\'un App Service séparé héberge un second site web. Les deux ne portent que des IP privées et sont atteints via le réseau plutôt que directement depuis internet.',
        'az104.mypart': 'Ma part dans le projet',
        'az104.mypart.intro': 'Au sein de l\'équipe de trois personnes, j\'étais responsable du point d\'entrée public et du côté conteneur web de la couche de calcul.',
        'az104.mypart.1': '• Déploiement et configuration du conteneur web exécutant le site web.',
        'az104.mypart.2': '• Mise en place du VM Scale Set comme unique ressource publique de l\'environnement.',
        'az104.mypart.3': '• Construction du proxy sur le scale set qui redirige le trafic vers le site web sur le conteneur web.',
        'az104.mypart.4': '• Garantie que seul le scale set est accessible via une IP publique, tandis que le conteneur et l\'App Service restent privés uniquement.',
        'az104.courses': 'Références des cours',
        'az104.courses.desc': 'Les deux cours Pluralsight dont ce projet démontre la compréhension :',
        'az104.courses.link1': '🔗 AZ-104 — Gérer les identités et la gouvernance Azure',
        'az104.courses.link2': '🔗 AZ-104 — Déployer et gérer les ressources de calcul Azure',

        // Flyer page
        'flyer.about': 'Étudiant en BTS Cloud Computing au Lycée Guillaume Kroll. Co-fondateur de Luxembourg Media Engineering — construction d\'une infrastructure d\'hébergement en production sur Proxmox, Laravel et Coolify. Axé sur les environnements serveurs sécurisés, la virtualisation et les plateformes web évolutives.',
        'flyer.download': '⬇ Télécharger le CV (PDF)',
        'flyer.role': 'Étudiant en Cloud Computing — BTS, Lycée Guillaume Kroll',
        'flyer.project.grading': 'Application web de gestion des notes — Django, PostgreSQL, Docker, Argon2.',
        'flyer.project.lme': 'Plateforme d\'hébergement multi-tenant — Proxmox VE, Laravel, Coolify, Forgejo.',
        'flyer.project.vircl': 'Lab Proxmox VE & VMware ESXi avec spécialisation Haute Disponibilité.',
        'flyer.project.nas': 'Déploiement pratique de TrueNAS CE sur un vrai serveur rack d\'entreprise — ZFS, RAID, SMB/NFS/iSCSI.',
        'flyer.project.azure': 'Lab Azure pratique — connectivité VM, hébergement web DMZ, arrêt automatique.',
        'flyer.exp.bnl': 'Support IT et utilisateurs — dépannage, maintenance système, accès aux ressources numériques.',
        'flyer.exp.securitec': 'Installation et maintenance de systèmes de sécurité — alarmes, équipements de surveillance.',
        'flyer.exp.luxconnect': 'Visite de data center — infrastructure entreprise, systèmes de refroidissement, architecture cloud.'
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

// Populate dynamic counters from translation keys
function updateStats() {
    const t = translations.en;
    const projectCount = Object.keys(t).filter(k => /^projects\.\w+\.cta$/.test(k)).length;
    const certCount = Object.keys(t).filter(k => /^cert\..+\.title$/.test(k)).length;

    document.querySelectorAll('[data-stat]').forEach(el => {
        const stat = el.getAttribute('data-stat');
        if (stat === 'projects') el.textContent = projectCount;
        if (stat === 'certs') el.textContent = certCount;
    });
}

// Project filter buttons
function initProjectFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!btns.length) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = '';
                } else if (filter === 'completed') {
                    card.style.display = card.querySelector('.status-completed') ? '' : 'none';
                } else if (filter === 'progress') {
                    card.style.display = card.querySelector('.status-progress') ? '' : 'none';
                }
            });
        });
    });
}

// Scroll-to-top button
function initScrollTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Lightbox for gallery images
function initLightbox() {
    const imgs = document.querySelectorAll('.gallery-img');
    if (!imgs.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">✕</button><img src="" alt=""><p class="lightbox-caption"></p>';
    document.body.appendChild(overlay);

    const lightImg = overlay.querySelector('img');
    const lightCap = overlay.querySelector('.lightbox-caption');

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            lightImg.src = img.src;
            lightImg.alt = img.alt;
            const capEl = img.parentElement.querySelector('p');
            lightCap.textContent = capEl ? capEl.textContent.trim() : img.alt;
            overlay.classList.add('open');
        });
    });

    overlay.addEventListener('click', e => {
        if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
            overlay.classList.remove('open');
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') overlay.classList.remove('open');
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load language preference and apply translations
    loadLanguagePreference();

    // Populate counters from translation keys, then animate
    updateStats();
    initCounterAnimation();

    // Project filter buttons
    initProjectFilter();

    // Scroll-to-top button
    initScrollTop();

    // Lightbox for gallery images
    initLightbox();
});

// Animated Counter for Certificates
function initCounterAnimation() {
    const alreadyRan = sessionStorage.getItem('counterAnimated');
    const targets = document.querySelectorAll('[data-stat], .counter-number');
    if (!targets.length) return;

    targets.forEach(el => {
        const targetNumber = parseInt(el.textContent);
        if (isNaN(targetNumber) || targetNumber <= 0) return;
        if (alreadyRan) { el.textContent = targetNumber; return; }
        animateCounter(el, targetNumber);
    });
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
