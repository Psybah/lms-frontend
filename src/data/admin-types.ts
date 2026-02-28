import { Course } from "./types";

// ─── Admin Types ───
export interface AdminStats {
    title: string;
    value: string;
    change?: string;
    trend?: "up" | "down" | "neutral";
    icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: "admin" | "instructor" | "student";
    status: "active" | "suspended" | "pending";
    enrolledCourses: number;
    joinDate: string;
    avatarUrl?: string;
}

export interface WaitlistEntry {
    id: string;
    studentName: string;
    courseTitle: string;
    requestDate: string;
    position: number;
}

export interface QuestionBank {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    tags: string[];
    difficulty: "easy" | "medium" | "hard";
    courseId?: string;
}

export interface ScoringRule {
    id: string;
    courseId: string;
    courseTitle: string;
    passingScore: number;
    totalQuestions: number;
    timeLimit: number; // minutes
}

export interface SyncLog {
    id: string;
    instructorName: string;
    deviceId: string;
    timestamp: string;
    status: "synced" | "pending" | "failed";
    recordCount: number;
}

export interface AuditLog {
    id: string;
    action: string;
    performedBy: string;
    role: "admin" | "instructor";
    target: string;
    timestamp: string;
    details: string;
}

export interface EnrollmentTrend {
    month: string;
    enrollments: number;
    completions: number;
}

export interface VenueUsage {
    venue: string;
    capacity: number;
    usage: number;
    status: "optimal" | "underutilized" | "overbooked";
}

// ─── Instructor Types ───
export interface AttendanceRecord {
    id: string;
    studentId: string;
    studentName: string;
    studentEmail: string;
    courseTitle: string;
    sessionDate: string;
    status: "present" | "absent" | "excused";
    checkInTime?: string;
    method: "qr" | "manual";
}

export interface InstructorCohort {
    id: string;
    courseTitle: string;
    sessionDate: string;
    sessionTime: string;
    venue: string;
    totalStudents: number;
    presentCount: number;
    absentCount: number;
    students: AttendanceRecord[];
}

export interface ScanResult {
    valid: boolean;
    studentName: string;
    passCode: string;
    courseName: string;
    message: string;
}
