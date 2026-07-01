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
      tech: ["React", "Node.js", "Express", "MongoDB", "REST API", "JavaScript"],
      features: ["JWT Authentication", "CRUD Operations", "Booking Management", "Responsive UI", "REST Architecture"],
      github: "https://github.com/ali-alashkar/mern-booking-system",
      live: null,
      color: "from-blue-600 to-blue-400",
      icon: "📅",
    },
    {
      title: "Gym Management System",
      description:
        "A full-featured desktop application built with Qt and C++ featuring membership management, workout tracking, and attendance systems.",
      tech: ["C++", "Qt", "OOP", "GUI", "Desktop"],
      features: ["Membership Management", "Attendance Tracking", "Workout Plans", "Modern GUI", "OOP Design"],
      github: "https://github.com/ali-alashkar/Gym-Management-System",
      live: null,
      color: "from-emerald-600 to-emerald-400",
      icon: "💪",
    },
    {
      title: "Student Attendance System",
      description:
        "A web-based student management and attendance system with real-time tracking, authentication, and comprehensive CRUD operations.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      features: ["Attendance Management", "Student Profiles", "Authentication", "CRUD", "Reports"],
      github: "https://github.com/ali-alashkar/Student-Management-Attendance-System",
      live: null,
      color: "from-purple-600 to-purple-400",
      icon: "🎓",
    },
    {
      title: "Cinema Management System",
      description:
        "Enterprise-grade cinema management platform with Spring Boot backend, React frontend, and MySQL database for movie bookings and customer management.",
      tech: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
      features: ["Movie Booking", "Customer Management", "Show Scheduling", "CRUD", "REST Backend"],
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
    { name: "English", level: "Professional (B1)", flag: "🇬🇧", percentage: 70 },
  ],
};
