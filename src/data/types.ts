export interface FeeStructure {
    type: 'flat' | 'tiered';
    amount?: number;
    tiers?: {
        name: string;
        amount: number;
    }[];
}

export interface ModuleItem {
    id: string;
    title: string;
    type: 'video' | 'pdf' | 'document' | 'quiz';
    url?: string;
}

export interface CourseModule {
    id: string;
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
    isUnlocked?: boolean;
    progress?: number;
}

export interface CourseMetadata {
    applicationFee: number;
    enrollmentRule: string;
    specialPackageRule: string;
    facilities: string[];
    contacts: string[];
}
