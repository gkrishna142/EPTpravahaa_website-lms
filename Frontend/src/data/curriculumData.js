/**
 * Course curriculum data for Edupravahaa
 */

export const fullStackWebDev = {
  title: "Full Stack Web Development",
  color: "#22c55e",
  sections: [
    {
      title: "1️⃣ HTML5",
      topics: ["Elements & Attributes", "Forms & Validation", "Semantic HTML", "Tables & Lists", "SEO Basics", "Accessibility (a11y)"],
    },
    {
      title: "2️⃣ CSS3",
      topics: ["Selectors & Specificity", "Box Model", "Flexbox", "Grid", "Responsive Design", "Media Queries", "Animations & Transitions", "CSS Variables", "Tailwind CSS"],
    },
    {
      title: "3️⃣ JavaScript (Core + Advanced)",
      topics: ["Variables (let, const)", "Data Types", "Functions & Arrow Functions", "DOM Manipulation", "Events", "ES6+ Features", "Destructuring", "Spread Operator", "Promises", "Async/Await", "Closures", "Array Methods", "OOP in JS", "Modules"],
    },
    {
      title: "🔵 Frontend – React JS",
      subsections: [
        { title: "React Fundamentals", items: ["SPA Architecture", "JSX", "Components", "Props", "State", "Conditional Rendering", "Lists & Keys"] },
        { title: "React Hooks", items: ["useState", "useEffect", "useRef", "useContext", "useMemo", "useCallback", "Custom Hooks"] },
        { title: "Routing", items: ["React Router", "Dynamic Routing", "Protected Routes", "Layout Routes"] },
        { title: "State Management", items: ["Context API", "Redux Toolkit", "Zustand"] },
        { title: "API Integration", items: ["Fetch API", "Axios", "REST API integration", "Error handling", "Token authentication"] },
        { title: "Forms", items: ["Controlled Inputs", "Form Validation", "React Hook Form", "Formik + Yup"] },
        { title: "Performance Optimization", items: ["Lazy Loading", "Suspense", "Code Splitting", "Memoization"] },
        { title: "UI Libraries", items: ["Material UI", "Ant Design", "ShadCN", "Tailwind + Headless UI"] },
        { title: "Testing", items: ["Jest", "React Testing Library"] },
        { title: "Deployment", items: ["Build Process", "Environment Variables", "Deploy to Vercel / Netlify"] },
      ],
    },
    {
      title: "🟣 Backend – Django REST Framework",
      subsections: [
        { title: "Python Fundamentals", items: ["Variables", "Data Structures", "Functions", "OOP", "File Handling", "Virtual Environment"] },
        { title: "Django Basics", items: ["Project Setup", "Apps", "Models", "Views", "Templates", "Admin Panel", "Static & Media Files"] },
        { title: "Database", items: ["PostgreSQL", "MySQL", "SQLite", "ORM", "Migrations", "Relationships"] },
        { title: "Django REST Framework (DRF)", items: ["Serializers", "API Views", "ViewSets", "Routers", "Authentication (JWT)", "Permissions", "Pagination", "Filtering"] },
        { title: "Advanced Backend", items: ["WebSockets (Django Channels)", "Background Tasks (Celery)", "Redis", "Caching", "Signals"] },
        { title: "Security", items: ["CSRF", "CORS", "JWT Authentication", "Role-based Access"] },
        { title: "Deployment", items: ["Gunicorn", "Nginx", "Docker", "AWS / DigitalOcean"] },
      ],
    },
    {
      title: "🔴 Professional Tools",
      topics: ["Git & GitHub", "Environment Variables", "API Documentation (Swagger)", "Postman"],
    },
    {
      title: "🟢 Real-Time Features",
      topics: ["WebSockets Chat", "Live Notifications", "Live Location Tracking", "Payment Integration (Stripe / Razorpay)", "SMS Integration"],
    },
    {
      title: "🏆 Capstone Projects",
      topics: ["3 Industry-Ready Projects"],
    },
    {
      title: "AWS DevOps Learning Path",
      topics: ["Linux & Networking Foundations", "Linux Fundamentals"],
    },
  ],
};

export const fullStackAppDev = {
  title: "Full Stack App Development",
  subtitle: "Cross-Platform Mobile & Web Apps",
  color: "#eab308",
  sections: [
    {
      title: "1️⃣ JavaScript Fundamentals",
      topics: ["Variables (let, const)", "Data Types", "Functions & Arrow Functions", "ES6+ Features", "Promises", "Async/Await", "Modules"],
    },
    {
      title: "2️⃣ React Basics (Prerequisite)",
      topics: ["Components", "Props", "State", "Hooks (useState, useEffect)", "JSX"],
    },
    {
      title: "🟡 React Native – Core",
      subsections: [
        { title: "React Native Basics", items: ["Project Setup (Expo / CLI)", "Components", "Styling", "Flexbox", "Platform-specific Code"] },
        { title: "Navigation", items: ["React Navigation", "Stack Navigator", "Bottom Tabs", "Drawer Navigator", "Deep Linking"] },
        { title: "State Management", items: ["Context API", "Redux Toolkit", "Zustand"] },
        { title: "API Integration", items: ["Axios", "Token Storage (AsyncStorage)", "Secure Storage", "Secure Login Flow"] },
        { title: "Native Features", items: ["Camera", "Location (Google Maps)", "Push Notifications", "Permissions", "Biometrics"] },
        { title: "Performance Optimization", items: ["FlatList Optimization", "Memoization", "Image Optimization", "Hermes Engine"] },
      ],
    },
    {
      title: "🟣 Backend – Django REST Framework",
      subsections: [
        { title: "Python Fundamentals", items: ["Variables", "Data Structures", "Functions", "OOP", "File Handling", "Virtual Environment"] },
        { title: "Django Basics", items: ["Project Setup", "Apps", "Models", "Views", "Templates", "Admin Panel", "Static & Media Files"] },
        { title: "Database", items: ["PostgreSQL", "MySQL", "SQLite", "ORM", "Migrations", "Relationships"] },
        { title: "Django REST Framework (DRF)", items: ["Serializers", "API Views", "ViewSets", "Routers", "Authentication (JWT)", "Permissions", "Pagination", "Filtering"] },
        { title: "Advanced Backend", items: ["WebSockets (Django Channels)", "Background Tasks (Celery)", "Redis", "Caching", "Signals"] },
        { title: "Security", items: ["CSRF", "CORS", "JWT Authentication", "Role-based Access"] },
        { title: "Deployment", items: ["Gunicorn", "Nginx", "Docker", "AWS / DigitalOcean"] },
      ],
    },
    {
      title: "3️⃣ Build & Publish",
      topics: ["Android APK / AAB", "Play Store Deployment", "App Store Submission", "Code Signing", "Environment Configs"],
    },
    {
      title: "🔴 Professional Tools",
      topics: ["Git & GitHub", "Environment Variables", "API Documentation (Swagger)", "Postman"],
    },
    {
      title: "🟢 Real-Time Features",
      topics: ["WebSockets Chat", "Live Notifications", "Live Location Tracking", "Payment Integration (Stripe / Razorpay)", "SMS Integration"],
    },
    {
      title: "🏆 Capstone Projects",
      topics: ["3 Industry-Ready Projects"],
    },
    {
      title: "AWS DevOps Learning Path",
      topics: ["Linux & Networking Foundations", "Linux Fundamentals"],
    },
  ],
};

export const manualTesting = {
  title: "Complete Software Manual Testing",
  subtitle: "Web + Mobile App + API – Manual Testing",
  color: "#0ea5e9",
  sections: [
    {
      title: "PART 1: Software Testing Fundamentals",
      topics: ["Introduction to Software Testing", "What is Software?", "What is Software Testing?", "Why Testing is Required?", "Verification vs Validation", "QA vs QC", "SDLC (Software Development Life Cycle)", "STLC (Software Testing Life Cycle)", "Shift Left Testing"],
    },
    {
      title: "SDLC Models",
      topics: ["Waterfall Model", "V-Model", "Agile Model (Scrum)", "Spiral Model", "Hybrid Model"],
    },
    {
      title: "STLC Phases",
      topics: ["Requirement Analysis", "Test Planning", "Test Case Design", "Test Environment Setup", "Test Execution", "Test Closure"],
    },
    {
      title: "PART 2: Manual Testing – Web Application",
      subsections: [
        { title: "Testing Types (Technique)", items: ["Black Box Testing", "White Box Testing", "Grey Box Testing"] },
        { title: "Testing Types (Level)", items: ["Unit Testing", "Integration Testing", "System Testing", "UAT (User Acceptance Testing)"] },
        { title: "Functional Testing", items: ["Smoke Testing", "Sanity Testing", "Regression Testing", "Re-testing", "Exploratory Testing", "Adhoc Testing", "End-to-End Testing"] },
        { title: "Non-Functional Testing", items: ["Performance Testing", "Load Testing", "Stress Testing", "Security Testing", "Usability Testing", "Compatibility Testing", "Cross-Browser Testing"] },
        { title: "Web Application Testing", items: ["UI Testing", "Form Validation", "Field Validation", "Session & Cookie Testing", "Navigation Testing", "Broken Links Testing", "Database Validation", "File Upload Testing", "Payment Gateway Testing", "Error Message Validation"] },
        { title: "Test Case Concepts", items: ["Test Scenario", "Test Case", "Test Steps", "Preconditions", "Expected Result", "Test Data", "Traceability"] },
        { title: "Test Design Techniques", items: ["Equivalence Partitioning", "Boundary Value Analysis", "Decision Table Testing", "State Transition Testing", "Use Case Testing"] },
        { title: "Defect Management", items: ["What is Bug?", "Defect Life Cycle", "Severity vs Priority", "Bug Report Format", "Root Cause Analysis"] },
        { title: "Agile Testing", items: ["Scrum Framework", "Sprint", "User Stories", "Acceptance Criteria", "Sprint Planning", "Daily Standup", "Sprint Review", "Retrospective"] },
      ],
    },
    {
      title: "PART 3: Mobile App Testing (Manual)",
      subsections: [
        { title: "Mobile Testing Basics", items: ["Types: Native, Hybrid, Web Apps", "Mobile OS: Android, iOS"] },
        { title: "Mobile Testing Types", items: ["Installation Testing", "Uninstallation Testing", "Upgrade Testing", "Interrupt Testing (Call, SMS)", "Network Testing (2G, 3G, 4G, WiFi)", "Battery Consumption Testing", "App Background Testing", "Push Notification Testing"] },
        { title: "Mobile UI Testing", items: ["Screen Orientation", "Device Compatibility", "Screen Resolution", "Gesture Testing", "Touch Testing", "Keyboard Validation"] },
        { title: "Mobile Real-Time Scenarios", items: ["Login Flow", "OTP Testing", "Payment Flow", "Location Permission", "Camera Access"] },
      ],
    },
    {
      title: "PART 4: API Testing (Manual)",
      subsections: [
        { title: "API Basics", items: ["What is API?", "Client-Server Architecture", "REST vs SOAP", "JSON & XML"] },
        { title: "HTTP Methods", items: ["GET", "POST", "PUT", "PATCH", "DELETE"] },
        { title: "Status Codes", items: ["200 – Success", "201 – Created", "400 – Bad Request", "401 – Unauthorized", "403 – Forbidden", "404 – Not Found", "500 – Server Error"] },
        { title: "API Testing Concepts", items: ["Request & Response", "Headers", "Authorization (Basic Auth, Bearer Token)", "Query Parameters", "Path Parameters", "Response Validation", "Schema Validation"] },
        { title: "API Test Scenarios", items: ["Validate Response Body", "Validate Status Code", "Validate Response Time", "Negative Testing", "Invalid Token Testing", "Missing Parameter Testing"] },
      ],
    },
    {
      title: "PART 5: Test Documentation",
      topics: ["BRD (Business Requirement Document)", "SRS (Software Requirement Specification)", "RTM (Requirement Traceability Matrix)", "Test Plan", "Test Strategy", "Test Summary Report"],
    },
    {
      title: "PART 6: Tools Used",
      topics: ["Excel (Test Case Writing)", "Jira (Bug Tracking)", "Postman (API Testing)", "SQL Developer / MySQL"],
    },
    {
      title: "PART 7: Real-Time Project Flow",
      topics: ["Requirement Analysis", "Test Plan Creation", "Test Case Writing", "Review Process", "Execution", "Bug Reporting", "Regression Cycle", "UAT Support", "Production Validation"],
    },
    {
      title: "Interview Important Differences",
      topics: ["Smoke vs Sanity", "Regression vs Re-testing", "Severity vs Priority", "SDLC vs STLC", "Verification vs Validation", "Web Testing vs Mobile Testing", "REST vs SOAP"],
    },
  ],
};

export const toscaAutomation = {
  title: "TOSCA Automation",
  subtitle: "Complete Course for Web & API",
  color: "#8b5cf6",
  sections: [
    {
      title: "Introduction to Tosca",
      topics: ["What is Automation Testing?", "Why Tosca?", "Scriptless Automation", "Model-Based Testing (MBT)", "Overview of Tricentis Tosca", "Tosca Architecture Overview"],
    },
    {
      title: "Tosca Installation & Setup",
      topics: ["System Requirements", "Tosca Installation", "License Configuration", "Workspace Creation (Single/Multi User)", "Repository Setup", "Check-in / Check-out Concept"],
    },
    {
      title: "Tosca Commander Overview",
      topics: ["Modules", "TestCases", "TestCaseDesign", "Execution", "Requirements"],
    },
    {
      title: "Module Creation (Scanning)",
      subsections: [
        { title: "XScan Basics", items: ["Scan Application", "Create Standard Module", "Save Module"] },
        { title: "Identification Concepts", items: ["Identify By Properties (id, name, innerText, class, tag, type, value)", "Best Practices: Stable properties, Remove dynamic values, Avoid index", "Advanced: Dynamic ID handling", "Regular Expressions", "Anchor concept", "Index property", "Multiple matching controls error handling"] },
      ],
    },
    {
      title: "Test Case Creation",
      topics: ["TestSteps", "TestStepValues", "Action Modes: Input, Verify, Buffer, WaitOn", "Reusable TestStepBlocks", "Call TestCase", "Copy vs Link"],
    },
    {
      title: "Test Data Management (TDM)",
      topics: ["Classes", "Attributes", "Instances", "Templates", "TestCase Design", "Test Case Instantiation", "Combinations & Subsets"],
    },
    {
      title: "Execution Section",
      topics: ["Execution Lists", "Add TestCases", "Run TestCases", "Logs Analysis", "Execution Status: Passed, Failed, Error, NoRun"],
    },
    {
      title: "Web Automation in Tosca",
      topics: ["Textboxes", "Dropdowns", "Radio Buttons", "Checkboxes", "Tables", "Frames / iFrames", "Alerts", "File Upload", "Dynamic Web Elements"],
    },
    {
      title: "Mobile Automation",
      topics: ["Android Automation", "iOS Automation", "Appium Engine", "AVD Setup", "Real Device Testing", "Mobile Scanning"],
    },
    {
      title: "API Automation",
      topics: ["API Scan", "REST Testing", "JSON & XML Validation", "Status Code Validation", "Authorization (Bearer / Basic)", "Response Verification"],
    },
    {
      title: "Advanced Tosca Concepts",
      topics: ["Buffers", "Date Functions: {DATE}, {DATE[+2d]}, {DATE[yyyy-MM-dd]}", "String Operations", "Regular Expressions", "Steering Parameters", "If Conditions", "Loops (Do While)", "Recovery Scenarios", "Cleanup Scenarios"],
    },
    {
      title: "Risk-Based Testing (RBT)",
      topics: ["Risk Assessment", "Business Risk", "Technical Risk", "Risk Matrix", "Execution Based on Risk"],
    },
    {
      title: "Requirements & Traceability",
      topics: ["Link TestCases to Requirements", "Coverage Report", "Traceability Matrix"],
    },
    {
      title: "Distributed Execution (DEX)",
      topics: ["Agent Setup", "Parallel Execution", "Distributed Execution Lists"],
    },
    {
      title: "Real-Time Project Flow",
      topics: ["Requirement Analysis", "Module Creation", "Test Case Design", "Add Test Data", "Execution", "Log Analysis", "Defect Reporting"],
    },
  ],
};

export const awsDevOps = {
  title: "AWS & DevOps",
  color: "#f59e0b",
  sections: [
    {
      title: "Linux & Networking Foundations",
      topics: ["Linux Fundamentals", "File System & Permissions", "Shell Scripting", "Networking Basics", "TCP/IP", "DNS", "Firewall"],
    },
    {
      title: "AWS Core Services",
      topics: ["EC2", "S3", "RDS", "Lambda", "VPC", "IAM", "CloudWatch", "Elastic Beanstalk"],
    },
    {
      title: "DevOps & CI/CD",
      topics: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible", "Infrastructure as Code"],
    },
  ],
};
