import {
    UserMultiple02Icon,
    BookOpen01Icon,
    ChartLineData01Icon,
    Clock01Icon,
} from "hugeicons-react";
import type {
    AdminStats,
    AdminUser,
    WaitlistEntry,
    QuestionBank,
    ScoringRule,
    SyncLog,
    AuditLog,
    EnrollmentTrend,
    VenueUsage,
} from "./admin-types";

// ─── Dashboard Stats ───
export const adminStats: AdminStats[] = [
    { title: "Total Students", value: "1,247", change: "+12%", trend: "up", icon: UserMultiple02Icon },
    { title: "Ongoing Courses", value: "14", change: "+2", trend: "up", icon: BookOpen01Icon },
    { title: "Average Pass Rate", value: "78%", change: "+3%", trend: "up", icon: ChartLineData01Icon },
    { title: "Waitlist Depth", value: "32", change: "-5", trend: "down", icon: Clock01Icon },
];

// ─── Enrollment Trends ───
export const enrollmentTrends: EnrollmentTrend[] = [
    { month: "Sep", enrollments: 85, completions: 42 },
    { month: "Oct", enrollments: 120, completions: 55 },
    { month: "Nov", enrollments: 95, completions: 68 },
    { month: "Dec", enrollments: 140, completions: 72 },
    { month: "Jan", enrollments: 180, completions: 90 },
    { month: "Feb", enrollments: 210, completions: 110 },
];

// ─── Venue Usage ───
export const venueUsage: VenueUsage[] = [
    { venue: "Training Lab 1", capacity: 25, usage: 22, status: "optimal" },
    { venue: "Training Lab 2", capacity: 30, usage: 30, status: "overbooked" },
    { venue: "Conference Hall", capacity: 100, usage: 45, status: "underutilized" },
    { venue: "Virtual Room 1", capacity: 50, usage: 48, status: "optimal" },
    { venue: "Tech Lab 3", capacity: 20, usage: 20, status: "overbooked" },
    { venue: "Main Auditorium", capacity: 200, usage: 85, status: "underutilized" },
];

// ─── Users ───
export const adminUsers: AdminUser[] = [
    { id: "u-1", name: "Adewale Johnson", email: "adewale.j@trd.edu", role: "student", status: "active", enrolledCourses: 3, joinDate: "Jan 05, 2026", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=adewale" },
    { id: "u-2", name: "Dr. Funke Akindele", email: "funke.a@trd.edu", role: "instructor", status: "active", enrolledCourses: 0, joinDate: "Sep 12, 2025", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=funke" },
    { id: "u-3", name: "Chinedu Okafor", email: "chinedu.o@trd.edu", role: "student", status: "active", enrolledCourses: 2, joinDate: "Feb 01, 2026", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=chinedu" },
    { id: "u-4", name: "Halima Bello", email: "halima.b@trd.edu", role: "student", status: "suspended", enrolledCourses: 1, joinDate: "Nov 20, 2025", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=halima" },
    { id: "u-5", name: "Prof. Eze Nwosu", email: "eze.n@trd.edu", role: "admin", status: "active", enrolledCourses: 0, joinDate: "Jun 01, 2025", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=eze" },
    { id: "u-6", name: "Oluwaseun Fadare", email: "seun.f@trd.edu", role: "instructor", status: "active", enrolledCourses: 0, joinDate: "Aug 15, 2025", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=seun" },
    { id: "u-7", name: "Amaka Eze", email: "amaka.e@trd.edu", role: "student", status: "pending", enrolledCourses: 0, joinDate: "Feb 20, 2026", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=amaka" },
    { id: "u-8", name: "Ibrahim Musa", email: "ibrahim.m@trd.edu", role: "student", status: "active", enrolledCourses: 4, joinDate: "Oct 10, 2025", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ibrahim" },
    { id: "u-9", name: "Ngozi Obi", email: "ngozi.o@trd.edu", role: "student", status: "active", enrolledCourses: 2, joinDate: "Dec 03, 2025", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ngozi" },
    { id: "u-10", name: "Yusuf Abdullahi", email: "yusuf.a@trd.edu", role: "student", status: "active", enrolledCourses: 1, joinDate: "Jan 18, 2026", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=yusuf" },
];

// ─── Waitlist ───
export const waitlistEntries: WaitlistEntry[] = [
    { id: "w-1", studentName: "Amaka Eze", courseTitle: "Web Development", requestDate: "Feb 10, 2026", position: 1 },
    { id: "w-2", studentName: "Ibrahim Musa", courseTitle: "Training Lab 2 - Python", requestDate: "Feb 12, 2026", position: 2 },
    { id: "w-3", studentName: "Ngozi Obi", courseTitle: "Cybersecurity", requestDate: "Feb 14, 2026", position: 3 },
    { id: "w-4", studentName: "Yusuf Abdullahi", courseTitle: "Data Science", requestDate: "Feb 15, 2026", position: 4 },
];

// ─── Question Bank ───
export const questionBank: QuestionBank[] = [
    { id: "q-1", question: "Which protocol operates at the transport layer of the OSI model?", options: ["HTTP", "TCP", "IP", "ARP"], correctIndex: 1, tags: ["Networking", "OSI Model"], difficulty: "medium" },
    { id: "q-2", question: "What is the primary purpose of a firewall?", options: ["Speed up network", "Filter traffic", "Store data", "Compress files"], correctIndex: 1, tags: ["Security", "Networking"], difficulty: "easy" },
    { id: "q-3", question: "Which Python data structure is immutable?", options: ["List", "Dictionary", "Set", "Tuple"], correctIndex: 3, tags: ["Python", "Data Structures"], difficulty: "easy" },
    { id: "q-4", question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Standard Query Loop"], correctIndex: 0, tags: ["Database", "SQL"], difficulty: "easy" },
    { id: "q-5", question: "In CSS, which property controls the stacking order of elements?", options: ["position", "display", "z-index", "float"], correctIndex: 2, tags: ["Web Development", "CSS"], difficulty: "medium" },
    { id: "q-6", question: "What is a race condition in concurrent programming?", options: ["A type of loop", "When two processes compete for resources unpredictably", "A sorting algorithm", "A debugging technique"], correctIndex: 1, tags: ["Security", "Programming"], difficulty: "hard" },
    { id: "q-7", question: "Which encryption standard is considered most secure?", options: ["DES", "3DES", "AES-256", "RC4"], correctIndex: 2, tags: ["Security", "Encryption"], difficulty: "hard" },
    { id: "q-8", question: "What is the default port for HTTPS?", options: ["80", "443", "8080", "22"], correctIndex: 1, tags: ["Networking", "Security"], difficulty: "easy" },
];

// ─── Scoring Rules ───
export const scoringRules: ScoringRule[] = [
    { id: "sr-1", courseId: "1", courseTitle: "Tech Odyssey", passingScore: 70, totalQuestions: 20, timeLimit: 30 },
    { id: "sr-2", courseId: "2", courseTitle: "Web Development", passingScore: 75, totalQuestions: 25, timeLimit: 40 },
    { id: "sr-3", courseId: "3", courseTitle: "Python Programming", passingScore: 70, totalQuestions: 20, timeLimit: 30 },
    { id: "sr-4", courseId: "14", courseTitle: "Cybersecurity", passingScore: 80, totalQuestions: 30, timeLimit: 45 },
    { id: "sr-5", courseId: "13", courseTitle: "Data Science", passingScore: 75, totalQuestions: 25, timeLimit: 35 },
];

// ─── Sync Logs ───
export const syncLogs: SyncLog[] = [
    { id: "sl-1", instructorName: "Dr. Funke Akindele", deviceId: "IPAD-001", timestamp: "Feb 28, 2026, 2:45 PM", status: "synced", recordCount: 24 },
    { id: "sl-2", instructorName: "Oluwaseun Fadare", deviceId: "TAB-003", timestamp: "Feb 28, 2026, 1:30 PM", status: "pending", recordCount: 12 },
    { id: "sl-3", instructorName: "Dr. Funke Akindele", deviceId: "IPAD-001", timestamp: "Feb 27, 2026, 4:15 PM", status: "synced", recordCount: 18 },
    { id: "sl-4", instructorName: "Oluwaseun Fadare", deviceId: "TAB-003", timestamp: "Feb 27, 2026, 11:00 AM", status: "failed", recordCount: 8 },
    { id: "sl-5", instructorName: "Dr. Funke Akindele", deviceId: "IPAD-001", timestamp: "Feb 26, 2026, 3:20 PM", status: "synced", recordCount: 30 },
];

// ─── Audit Logs ───
export const auditLogs: AuditLog[] = [
    { id: "al-1", action: "Course Created", performedBy: "Prof. Eze Nwosu", role: "admin", target: "Generative AI", timestamp: "Feb 28, 2026, 10:00 AM", details: "New course added to catalog with 1-month duration." },
    { id: "al-2", action: "User Role Changed", performedBy: "Prof. Eze Nwosu", role: "admin", target: "Oluwaseun Fadare", timestamp: "Feb 27, 2026, 3:30 PM", details: "Role changed from Student to Instructor." },
    { id: "al-3", action: "Waitlist Promoted", performedBy: "Prof. Eze Nwosu", role: "admin", target: "Amaka Eze → Web Development", timestamp: "Feb 27, 2026, 1:15 PM", details: "Student promoted from waitlist position #1." },
    { id: "al-4", action: "Attendance Override", performedBy: "Dr. Funke Akindele", role: "instructor", target: "Ibrahim Musa", timestamp: "Feb 26, 2026, 5:00 PM", details: "Manual attendance marked as present for missed session." },
    { id: "al-5", action: "Test Score Override", performedBy: "Prof. Eze Nwosu", role: "admin", target: "Halima Bello → Python Programming", timestamp: "Feb 26, 2026, 2:00 PM", details: "Test score manually overridden from 65% to Pass." },
    { id: "al-6", action: "Course Updated", performedBy: "Prof. Eze Nwosu", role: "admin", target: "Cybersecurity", timestamp: "Feb 25, 2026, 11:30 AM", details: "Capacity increased from 15 to 20 seats." },
    { id: "al-7", action: "User Suspended", performedBy: "Prof. Eze Nwosu", role: "admin", target: "Halima Bello", timestamp: "Feb 24, 2026, 9:00 AM", details: "Account suspended for policy violation review." },
];
