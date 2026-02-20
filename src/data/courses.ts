export interface FeeStructure {
    type: 'flat' | 'tiered';
    amount?: number;
    tiers?: {
        name: string;
        amount: number;
    }[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    fees: FeeStructure;
}

export const courses: Course[] = [
    {
        id: "1",
        title: "Tech Odyssey",
        description: "Web (HTML / CSS / JavaScript), Python, Graphics, Digital Literacy",
        duration: "3 months",
        fees: { type: 'flat', amount: 150000 }
    },
    {
        id: "2",
        title: "Web Development",
        description: "HTML, CSS, JavaScript, Project",
        duration: "3 months",
        fees: { type: 'flat', amount: 200000 }
    },
    {
        id: "3",
        title: "Python Programming",
        description: "Fundamentals of Python and application development",
        duration: "3 months",
        fees: { type: 'flat', amount: 150000 }
    },
    {
        id: "4",
        title: "Digital Literacy",
        description: "Basic Computer Operations, Online Security, Digital Productivity Tools, Online Collaborative Tools",
        duration: "1 month",
        fees: {
            type: 'tiered',
            tiers: [
                { name: "Cohort", amount: 50000 },
                { name: "Special", amount: 100000 }
            ]
        }
    },
    {
        id: "5",
        title: "ArcGIS & Spatial Analysis",
        description: "Geographic Information Systems and spatial data analysis",
        duration: "1 month",
        fees: { type: 'flat', amount: 50000 }
    },
    {
        id: "6",
        title: "Data Analysis / Data Analytics",
        description: "Basic Computer Operations, SPSS, Excel, Power BI",
        duration: "5 weeks",
        fees: {
            type: 'tiered',
            tiers: [
                { name: "Cohort", amount: 80000 },
                { name: "Special", amount: 150000 }
            ]
        }
    },
    {
        id: "7",
        title: "Data Processing",
        description: "Computer Operations, Excel, Word, PowerPoint, SPSS",
        duration: "8 weeks",
        fees: { type: 'flat', amount: 100000 }
    },
    {
        id: "8",
        title: "Digital Productivity Tools",
        description: "Basic Computer Operations, Online collaboration, Word, Excel, PowerPoint",
        duration: "1 month",
        fees: {
            type: 'tiered',
            tiers: [
                { name: "Cohort", amount: 80000 },
                { name: "Special", amount: 150000 }
            ]
        }
    },
    {
        id: "9",
        title: "Generative AI",
        description: "Introduction to AI models and generative tools",
        duration: "1 month",
        fees: { type: 'flat', amount: 100000 }
    },
    {
        id: "10",
        title: "Routing & Wireless Networking",
        description: "Using MikroTik OS for network management",
        duration: "2 weeks",
        fees: { type: 'flat', amount: 100000 }
    },
    {
        id: "11",
        title: "Basic Computer Networking",
        description: "Fundamental networking concepts and setups",
        duration: "4 weeks",
        fees: {
            type: 'tiered',
            tiers: [
                { name: "Cohort", amount: 80000 },
                { name: "Special", amount: 150000 }
            ]
        }
    },
    {
        id: "13",
        title: "Data Science",
        description: "Comprehensive data science and machine learning track",
        duration: "4 months",
        fees: { type: 'flat', amount: 300000 }
    },
    {
        id: "14",
        title: "Cybersecurity",
        description: "Network security, ethical hacking, and defense",
        duration: "4 months",
        fees: { type: 'flat', amount: 300000 }
    },
    {
        id: "15",
        title: "Digital Marketing",
        description: "SEO, SEM, Social Media, and Content Marketing",
        duration: "4 months",
        fees: { type: 'flat', amount: 300000 }
    }
];

export const courseMetadata = {
    applicationFee: 2000,
    enrollmentRule: "Enrollment is monthly – Class begins at the beginning of a new month.",
    specialPackageRule: "Special Class Package takes a minimum of three (3) and maximum of five (5) students.",
    facilities: [
        "State-of-the-art computers",
        "Conducive environment",
        "Seasoned instructors"
    ]
};
