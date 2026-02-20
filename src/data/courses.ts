export interface FeeStructure {
    type: 'flat' | 'tiered';
    amount?: number;
    tiers?: {
        name: string;
        amount: number;
    }[];
}

export interface ModuleItem {
    title: string;
    type: 'video' | 'pdf' | 'document' | 'quiz';
}

export interface CourseModule {
    title: string;
    items: ModuleItem[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    location: string;
    seats: {
        enrolled: number;
        total: number;
    };
    fees: FeeStructure;
    category: string;
    modules: CourseModule[];
}

export const courses: Course[] = [
    {
        id: "1",
        title: "Tech Odyssey",
        description: "Master web development, python, and graphics in this comprehensive digital journey designed for modern creators.",
        duration: "3 months",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 18, total: 25 },
        category: "Software Development",
        fees: { type: 'flat', amount: 150000 },
        modules: [
            {
                title: "Introduction to Web",
                items: [
                    { title: "Internet Overview Video", type: 'video' },
                    { title: "Browser Fundamentals PDF", type: 'pdf' }
                ]
            },
            {
                title: "HTML/CSS Foundations",
                items: [
                    { title: "Semantic HTML Guide", type: 'document' },
                    { title: "CSS Box Model Video", type: 'video' }
                ]
            },
            {
                title: "JavaScript Essentials",
                items: [
                    { title: "Variables & Data Types Quiz", type: 'quiz' },
                    { title: "Function Basics Video", type: 'video' }
                ]
            }
        ]
    },
    {
        id: "2",
        title: "Web Development",
        description: "Build modern, responsive websites from scratch using HTML, CSS, and interactive JavaScript projects.",
        duration: "3 months",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 12, total: 20 },
        category: "Software Development",
        fees: { type: 'flat', amount: 200000 },
        modules: [
            {
                title: "Advanced HTML5",
                items: [
                    { title: "HTML5 API Overview Video", type: 'video' },
                    { title: "Storage & Audio PDF", type: 'pdf' }
                ]
            },
            {
                title: "Modern CSS & Flexbox",
                items: [
                    { title: "Flexbox Masterclass Video", type: 'video' },
                    { title: "Grid System Document", type: 'document' }
                ]
            }
        ]
    },
    {
        id: "3",
        title: "Python Programming",
        description: "Go from basics to building real-world applications with the world's most versatile and popular programming language.",
        duration: "3 months",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 15, total: 20 },
        category: "Software Development",
        fees: { type: 'flat', amount: 150000 },
        modules: [
            {
                title: "Python Syntax",
                items: [
                    { title: "Syntax Cheatsheet PDF", type: 'pdf' },
                    { title: "Intro to Python Video", type: 'video' }
                ]
            },
            {
                title: "Data Structures",
                items: [
                    { title: "Lists & Tuples Video", type: 'video' },
                    { title: "Dictionary Exercises PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "4",
        title: "Digital Literacy",
        description: "Unlock essential digital skills, from online security to advanced collaborative productivity tools for the modern workplace.",
        duration: "1 month",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 22, total: 30 },
        category: "Digital Literacy",
        fees: {
            type: 'tiered',
            tiers: [
                { name: "Cohort", amount: 50000 },
                { name: "Special", amount: 100000 }
            ]
        },
        modules: [
            {
                title: "Basic Computing",
                items: [
                    { title: "Hardware Basics Video", type: 'video' },
                    { title: "OS Navigation Guide", type: 'document' }
                ]
            },
            {
                title: "Internet Safety",
                items: [
                    { title: "Cyber Security PDF", type: 'pdf' },
                    { title: "Phishing Awareness Video", type: 'video' }
                ]
            }
        ]
    },
    {
        id: "5",
        title: "ArcGIS & Spatial Analysis",
        description: "Learn to visualize and analyze geographic data using industry-leading GIS software for spatial decision making.",
        duration: "1 month",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 8, total: 15 },
        category: "Data Science",
        fees: { type: 'flat', amount: 50000 },
        modules: [
            {
                title: "GIS Introduction",
                items: [
                    { title: "Intro to Spatial Data Video", type: 'video' },
                    { title: "GIS Software Guide PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "6",
        title: "Data Analysis / Analytics",
        description: "Transform complex raw data into actionable business insights using professional tools like Excel, Power BI, and SPSS.",
        duration: "5 weeks",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 14, total: 20 },
        category: "Data Science",
        fees: {
            type: 'tiered',
            tiers: [
                { name: "Cohort", amount: 80000 },
                { name: "Special", amount: 150000 }
            ]
        },
        modules: [
            {
                title: "Data Cleaning",
                items: [
                    { title: "Excel Cleaning Hacks Video", type: 'video' },
                    { title: "PowerQuery Principles PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "7",
        title: "Data Processing",
        description: "Step into the world of database management and information organization for high-efficiency professional environments.",
        duration: "8 weeks",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 10, total: 25 },
        category: "Data Science",
        fees: { type: 'flat', amount: 100000 },
        modules: [
            {
                title: "Database Management Systems",
                items: [
                    { title: "SQL Basics Video", type: 'video' },
                    { title: "DB Schema Design PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "8",
        title: "Digital Productivity Tools",
        description: "Boost your professional output by mastering modern online collaboration and essential business office applications.",
        duration: "1 month",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 16, total: 20 },
        category: "Digital Literacy",
        fees: {
            type: 'tiered',
            tiers: [
                { name: "Cohort", amount: 80000 },
                { name: "Special", amount: 150000 }
            ]
        },
        modules: [
            {
                title: "Efficient Document Crafting",
                items: [
                    { title: "MS Word Advanced Video", type: 'video' },
                    { title: "Templates Library PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "9",
        title: "Generative AI",
        description: "Explore the cutting edge of technology and master the latest AI-driven tools to enhance your creative and technical workflows.",
        duration: "1 month",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 19, total: 25 },
        category: "AI & ML",
        fees: { type: 'flat', amount: 100000 },
        modules: [
            {
                title: "Prompt Engineering",
                items: [
                    { title: "Mastering Prompts Video", type: 'video' },
                    { title: "AI Prompt Bible PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "10",
        title: "Routing & Wireless Networking",
        description: "Design and secure professional-grade networks using MikroTik OS environments and advanced hardware configurations.",
        duration: "2 weeks",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 5, total: 12 },
        category: "Networking",
        fees: { type: 'flat', amount: 100000 },
        modules: [
            {
                title: "Network Fundamentals",
                items: [
                    { title: "IP Networking Video", type: 'video' },
                    { title: "Network Layout PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "11",
        title: "Basic Computer Networking",
        description: "Establish the foundation of modern connectivity by learning how computers communicate in local and global networks.",
        duration: "4 weeks",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 11, total: 20 },
        category: "Networking",
        fees: {
            type: 'tiered',
            tiers: [
                { name: "Cohort", amount: 80000 },
                { name: "Special", amount: 150000 }
            ]
        },
        modules: [
            {
                title: "OSI Model",
                items: [
                    { title: "OSI Layers Video", type: 'video' },
                    { title: "Protocol Suite PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "13",
        title: "Data Science",
        description: "Dive deep into statistical modeling, machine learning, and predictive analysis to solve complex real-world problems.",
        duration: "4 months",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 14, total: 20 },
        category: "Data Science",
        fees: { type: 'flat', amount: 300000 },
        modules: [
            {
                title: "Statistical Inference",
                items: [
                    { title: "Stats Basics Video", type: 'video' },
                    { title: "R Programming Guide PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "14",
        title: "Cybersecurity",
        description: "Master the art of digital defense by learning network security, ethical hacking, and modern infrastructure protection.",
        duration: "4 months",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 12, total: 20 },
        category: "Cybersecurity",
        fees: { type: 'flat', amount: 300000 },
        modules: [
            {
                title: "Information Security Oversight",
                items: [
                    { title: "Ethics in Hacking Video", type: 'video' },
                    { title: "Security Protocols PDF", type: 'pdf' }
                ]
            }
        ]
    },
    {
        id: "15",
        title: "Digital Marketing",
        description: "Learn to grow brands at scale online using expert-level SEO, SEM, and modern social media growth strategies.",
        duration: "4 months",
        location: "Training Lab 1, ITeMS Building, UI",
        seats: { enrolled: 10, total: 20 },
        category: "Digital Marketing",
        fees: { type: 'flat', amount: 300000 },
        modules: [
            {
                title: "SEO Strategy",
                items: [
                    { title: "SEO Foundation Video", type: 'video' },
                    { title: "Keyword Research PDF", type: 'pdf' }
                ]
            }
        ]
    }
];

export interface CourseMetadata {
    applicationFee: number;
    enrollmentRule: string;
    specialPackageRule: string;
    facilities: string[];
    contacts: string[];
}

export const courseMetadata: CourseMetadata = {
    applicationFee: 20000,
    enrollmentRule: "Enrollment is monthly – Class begins at the beginning of a new month.",
    specialPackageRule: "Special Class Package takes a minimum of three (3) and maximum of five (5) students.",
    facilities: [
        "State-of-the-art computers",
        "Conducive environment",
        "Seasoned instructors"
    ],
    contacts: [
        "0803-302-7479",
        "0802-924-8172",
        "0806-273-3470"
    ]
};
