export const portfolioData = {
  personal: {
    name: "Ali Haitham Ali Alashkar",
    shortName: "Ali Haitham",
    initials: "AH",
    titles: [
      "Backend Developer",
      "Software Tester",
      "Software Engineer",
      "CS Student @ ASU",
    ],
    email: "alialashkar654@gmail.com",
    phone: "+201127718939",
    location: "Cairo, Egypt",
    github: "https://github.com/ali-alashkar",
    linkedin: "https://www.linkedin.com/in/ali-alashkar",
    whatsapp: "https://wa.me/201127718939",
    resumeUrl: "/ali-alashkar-resume.pdf",
    heroImage: "/ali-hero.png",
    aboutImage: "/ali-about.jpg",
  },

  stats: [
    { value: "4+", label: "Major Projects" },
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Technologies" },
    { value: "2027", label: "Graduation" },
  ],

  about: {
    paragraphs: [
      "I'm a Computer Science student at Ain Shams University, specializing in Information Systems — passionate about backend engineering, software testing, and building things that actually matter.",
      "Backend development excites me because of the architecture behind it: designing clean APIs, optimizing database queries, and building systems that scale. I treat every project as a craft, not just code.",
      "Software testing sharpened my eye for detail and reinforced my belief that quality is non-negotiable. I continuously invest in learning — whether it's a new framework, a design pattern, or a better way to solve an old problem.",
    ],
    highlights: [
      { icon: "🎓", label: "Ain Shams University" },
      { icon: "💻", label: "Backend Developer" },
      { icon: "🧪", label: "Software Tester" },
      { icon: "📊", label: "Data Analyst" },
    ],
  },

  education: {
    university: "Ain Shams University",
    degree: "Bachelor of Computer Science",
    major: "Information Systems",
    graduation: "Expected 2027",
    gpa: "2.9 / 4.0",
    location: "Cairo, Egypt",
    coursework: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence",
      "Web Development",
      "Machine Learning",
      "Computer Architecture",
      "Linear Algebra",
    ],
  },

  experience: [
    {
      company: "Tabacria Company",
      role: "Data Entry & Data Analyst",
      period: "2023 – 2026",
      type: "Full-time",
      description:
        "Managed and analyzed large business datasets, developed insightful dashboards, and automated reporting workflows that directly improved business decision-making.",
      responsibilities: [
        "Managed large business datasets ensuring accuracy and integrity",
        "Built interactive dashboards that improved reporting efficiency",
        "Developed Random Forest and Time Series forecasting models",
        "Automated workflows reducing manual effort significantly",
        "Generated SQL reports for executive team business planning",
        "Collaborated cross-functionally with multiple teams",
      ],
      achievements: [
        "🏆 Employee of the Year Award",
        "Dashboards that transformed how leadership views data",
        "ML models used for strategic business forecasting",
      ],
      tech: ["Python", "SQL", "Excel", "Machine Learning", "Random Forest", "Time Series"],
    },
    {
      company: "Freelance",
      role: "Full-Stack Developer",
      period: "2024",
      type: "Freelance",
      description:
        "Designed and delivered a custom Team Management System for a university instructor — from requirements gathering all the way to deployment.",
      responsibilities: [
        "Gathered and documented detailed client requirements",
        "Designed the system architecture and database schema",
        "Developed backend APIs and frontend interface",
        "Iterated based on client feedback",
        "Deployed and handed over the system successfully",
      ],
      achievements: [
        "✅ Successfully delivered on time",
        "Received excellent client feedback",
        "Built end-to-end independently",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
  ],

  skills: {
    languages: [
      { name: "Java", level: 90, badge: "Advanced" },
      { name: "Python", level: 88, badge: "Advanced" },
      { name: "C++", level: 65, badge: "Intermediate" },
      { name: "SQL", level: 70, badge: "Intermediate" },
      { name: "JavaScript", level: 50, badge: "Beginner" },
      { name: "TypeScript", level: 35, badge: "Learning" },
    ],
    backend: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT Auth", "CRUD", "API Integration", "JSON"],
    frontend: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    databases: ["MySQL", "MongoDB", "SQL"],
    testing: ["Manual Testing", "Bug Reporting", "Test Cases", "JIRA", "Postman", "Selenium", "API Testing", "Automation Testing"],
    other: ["Git", "GitHub", "Linux", "OOP", "Data Structures", "Algorithms", "Machine Learning", "Problem Solving"],
  },

  services: [
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Scalable REST APIs, Spring Boot & Node.js apps with clean architecture and solid database design.",
      tags: ["Spring Boot", "Node.js", "Express", "Java"],
    },
    {
      icon: "🌐",
      title: "Full-Stack (MERN)",
      description: "End-to-end web applications using MongoDB, Express, React, and Node.js.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      icon: "🧪",
      title: "Software Testing",
      description: "Manual testing, API testing, test case design, and bug reporting with professional QA standards.",
      tags: ["Selenium", "Postman", "JIRA", "Manual QA"],
    },
    {
      icon: "🗄️",
      title: "Database Design",
      description: "Relational and NoSQL database design, query optimization, and schema architecture.",
      tags: ["MySQL", "MongoDB", "SQL"],
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Business-focused ML solutions including forecasting models and data-driven dashboards.",
      tags: ["Python", "Random Forest", "Time Series"],
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description: "Transforming raw business data into actionable insights through dashboards and analytical reports.",
      tags: ["Python", "SQL", "Excel", "Visualization"],
    },
  ],

  projects: [
    {
      title: "MERN Booking System",
      description:
        "A full-stack booking platform allowing users to browse services, make reservations, and manage bookings through a responsive interface with secure authentication.",
      longDescription:
        "A complete end-to-end booking platform built on the MERN stack. Users can register/login securely via JWT, browse available services, and manage their reservations in real time. The backend exposes a clean REST API built with Express and Node.js, backed by a MongoDB database for flexible, scalable data storage.",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST API", "JavaScript", "JWT", "Mongoose"],
      features: ["JWT Authentication", "CRUD Operations", "Booking Management", "Responsive UI", "REST Architecture"],
      highlights: [
        "JWT-based authentication with refresh tokens",
        "RESTful API with full CRUD for bookings",
        "MongoDB with Mongoose ODM for data modeling",
        "Responsive React UI with real-time updates",
        "Protected routes with role-based access",
      ],
      challenges:
        "Designing a conflict-free booking slot algorithm and handling concurrent reservation requests without race conditions — solved using MongoDB transactions.",
      status: "Completed",
      image: "/project-mern-booking.png",
      github: "https://github.com/ali-alashkar/mern-booking-system",
      live: null,
      color: "from-blue-600 to-blue-400",
      icon: "📅",
    },
    {
      title: "Gym Management System",
      description:
        "A full-featured desktop application built with Qt and C++ featuring membership management, workout tracking, and attendance systems.",
      longDescription:
        "A robust cross-platform desktop application developed using Qt6 and C++ with modern OOP principles. The system handles complete gym operations — from member registration and subscription billing to workout plan assignments and daily attendance tracking. Built with Qt Widgets featuring a professional dark theme.",
      tech: ["C++", "Qt6", "OOP", "SQLite", "GUI", "Desktop"],
      features: ["Membership Management", "Attendance Tracking", "Workout Plans", "Modern GUI", "OOP Design"],
      highlights: [
        "Fully object-oriented architecture with design patterns",
        "SQLite local database for offline-first operation",
        "Custom Qt Widgets for a professional desktop UI",
        "Membership billing and subscription tracking",
        "Attendance reports with date filtering",
      ],
      challenges:
        "Building a responsive desktop UI with Qt that looks modern while maintaining performance for large member datasets required extensive custom widget styling and efficient SQL query design.",
      status: "Completed",
      image: "/project-gym.png",
      github: "https://github.com/ali-alashkar/Gym-Management-System",
      live: null,
      color: "from-emerald-600 to-emerald-400",
      icon: "💪",
    },
    {
      title: "Student Attendance System",
      description:
        "A web-based student management and attendance system with real-time tracking, authentication, and comprehensive CRUD operations.",
      longDescription:
        "A full-stack web application designed for academic institutions to digitize attendance tracking. Instructors can log in, manage their courses, mark attendance for each session, and generate detailed reports. Students have individual profiles with attendance statistics displayed visually.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "REST API", "Chart.js"],
      features: ["Attendance Management", "Student Profiles", "Authentication", "CRUD", "Reports"],
      highlights: [
        "Role-based access for instructors and admin",
        "Visual attendance charts per student (Chart.js)",
        "Session-by-session attendance logging",
        "Export attendance reports to PDF/CSV",
        "Responsive dashboard interface",
      ],
      challenges:
        "Implementing real-time attendance updates without WebSockets — solved using efficient polling with React Query and optimistic UI updates.",
      status: "Completed",
      image: "/project-student.png",
      github: "https://github.com/ali-alashkar/Student-Management-Attendance-System",
      live: null,
      color: "from-purple-600 to-purple-400",
      icon: "🎓",
    },
    {
      title: "Cinema Management System",
      description:
        "Enterprise-grade cinema management platform with Spring Boot backend, React frontend, and MySQL database for movie bookings and customer management.",
      longDescription:
        "A full-stack cinema operations platform with a Spring Boot REST API and a React frontend. Features include a complete movie catalog, show scheduling, interactive seat selection, online ticket booking, and customer management. Built following clean layered architecture (Controller → Service → Repository) with Spring Security for auth.",
      tech: ["Java", "Spring Boot", "React", "MySQL", "REST API", "Spring Security", "Hibernate", "JPA"],
      features: ["Movie Booking", "Customer Management", "Show Scheduling", "CRUD", "REST Backend"],
      highlights: [
        "Spring Boot layered architecture (MVC pattern)",
        "Interactive seat selection with live availability",
        "Spring Security with JWT authentication",
        "Hibernate/JPA for database ORM",
        "Fully documented REST API",
      ],
      challenges:
        "Designing the seat reservation system to handle concurrent bookings without double-booking — implemented using DB-level locking with Spring's @Transactional annotation.",
      status: "Completed",
      image: "/project-cinema.png",
      github: "https://github.com/ali-alashkar/cinema-management-system",
      live: null,
      color: "from-orange-600 to-orange-400",
      icon: "🎬",
    },
  ],

  certifications: [
    {
      title: "Software Testing",
      issuer: "Digital Egypt Pioneers Initiative (DEPI)",
      year: "2025",
      icon: "🧪",
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Backend Development",
      issuer: "iClub — Ain Shams University",
      year: "2025",
      icon: "⚙️",
      color: "from-violet-600 to-purple-500",
    },
    {
      title: "Team Leader Certificate",
      issuer: "Digital Egypt Pioneers Initiative (DEPI)",
      year: "2025",
      icon: "👑",
      color: "from-amber-500 to-yellow-400",
    },
  ],

  achievements: [
    {
      icon: "🏆",
      title: "Employee of the Year",
      description: "Recognized at Tabacria Company for outstanding performance and impactful contributions.",
    },
    {
      icon: "🏅",
      title: "ECPC Participant",
      description: "Participated in ECPC University Qualifications competitive programming contest.",
    },
    {
      icon: "🎓",
      title: "DEPI Graduate",
      description: "Completed the rigorous Digital Egypt Pioneers Initiative Software Testing program.",
    },
    {
      icon: "👥",
      title: "Team Leader",
      description: "Led a development team at DEPI, earning a Team Leader Certificate.",
    },
    {
      icon: "📊",
      title: "ML Dashboards",
      description: "Built Machine Learning dashboards that directly shaped executive business strategy.",
    },
    {
      icon: "💻",
      title: "Backend Certified",
      description: "Earned Backend Development certificate from Ain Shams University's iClub.",
    },
  ],

  careerGoal: {
    headline: "Building the Future, One System at a Time",
    description:
      "My ambition is to become a highly skilled Backend Developer and Software Engineer — one who builds systems that scale, mentors the next generation, and consistently ships software that makes a difference.",
    milestones: [
      {
        year: "2025",
        title: "Foundation",
        description: "Earning industry certifications in Software Testing and Backend Development while working on real-world projects.",
        status: "completed",
      },
      {
        year: "2026",
        title: "Growth",
        description: "Mastering cloud technologies (AWS/GCP), microservices architecture, and contributing to open-source.",
        status: "current",
      },
      {
        year: "2027",
        title: "Launch",
        description: "Graduating from Ain Shams University and joining a top-tier tech company or launching my own product.",
        status: "upcoming",
      },
      {
        year: "2028+",
        title: "Impact",
        description: "Building scalable products, mentoring developers, and contributing to transformative software at scale.",
        status: "upcoming",
      },
    ],
  },

  languages: [
    { name: "Arabic", level: "Native", flag: "🇪🇬", percentage: 100 },
    { name: "English", level: "Fluent (C1)", flag: "🇬🇧", percentage: 90 },
  ],
};
