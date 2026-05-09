import type { AttendanceRecord, InstructorCohort } from "./admin-types";

// ─── Instructor Cohorts ───
export const instructorCohorts: InstructorCohort[] = [
    {
        id: "coh-1",
        courseTitle: "Physical Security Workshop 2026",
        sessionDate: "Feb 28, 2026",
        sessionTime: "10:00 AM - 2:00 PM",
        venue: "Training Lab 1, Oba Olagbegi Street, New Bodija",
        totalStudents: 18,
        presentCount: 15,
        absentCount: 3,
        students: [
            { id: "a-1", studentId: "u-1", studentName: "Adewale Johnson", studentEmail: "adewale.j@davidson.edu", courseTitle: "Physical Security Workshop", sessionDate: "Feb 28, 2026", status: "present", checkInTime: "9:55 AM", method: "qr" },
            { id: "a-2", studentId: "u-3", studentName: "Chinedu Okafor", studentEmail: "chinedu.o@davidson.edu", courseTitle: "Physical Security Workshop", sessionDate: "Feb 28, 2026", status: "present", checkInTime: "10:02 AM", method: "qr" },
            { id: "a-3", studentId: "u-4", studentName: "Halima Bello", studentEmail: "halima.b@davidson.edu", courseTitle: "Physical Security Workshop", sessionDate: "Feb 28, 2026", status: "absent", method: "manual" },
            { id: "a-4", studentId: "u-8", studentName: "Ibrahim Musa", studentEmail: "ibrahim.m@davidson.edu", courseTitle: "Physical Security Workshop", sessionDate: "Feb 28, 2026", status: "present", checkInTime: "10:05 AM", method: "manual" },
            { id: "a-5", studentId: "u-9", studentName: "Ngozi Obi", studentEmail: "ngozi.o@davidson.edu", courseTitle: "Physical Security Workshop", sessionDate: "Feb 28, 2026", status: "present", checkInTime: "9:50 AM", method: "qr" },
            { id: "a-6", studentId: "u-10", studentName: "Yusuf Abdullahi", studentEmail: "yusuf.a@davidson.edu", courseTitle: "Physical Security Workshop", sessionDate: "Feb 28, 2026", status: "excused", method: "manual" },
        ],
    },
    {
        id: "coh-2",
        courseTitle: "Python Programming — Lab Session",
        sessionDate: "Feb 27, 2026",
        sessionTime: "2:00 PM - 5:00 PM",
        venue: "Tech Lab 3, Oba Olagbegi Street, New Bodija",
        totalStudents: 15,
        presentCount: 13,
        absentCount: 2,
        students: [
            { id: "a-7", studentId: "u-1", studentName: "Adewale Johnson", studentEmail: "adewale.j@davidson.edu", courseTitle: "Python Programming", sessionDate: "Feb 27, 2026", status: "present", checkInTime: "1:55 PM", method: "qr" },
            { id: "a-8", studentId: "u-3", studentName: "Chinedu Okafor", studentEmail: "chinedu.o@davidson.edu", courseTitle: "Python Programming", sessionDate: "Feb 27, 2026", status: "absent", method: "manual" },
            { id: "a-9", studentId: "u-8", studentName: "Ibrahim Musa", studentEmail: "ibrahim.m@davidson.edu", courseTitle: "Python Programming", sessionDate: "Feb 27, 2026", status: "present", checkInTime: "2:00 PM", method: "qr" },
            { id: "a-10", studentId: "u-9", studentName: "Ngozi Obi", studentEmail: "ngozi.o@davidson.edu", courseTitle: "Python Programming", sessionDate: "Feb 27, 2026", status: "present", checkInTime: "1:58 PM", method: "qr" },
        ],
    },
    {
        id: "coh-3",
        courseTitle: "Digital Literacy Induction",
        sessionDate: "Feb 26, 2026",
        sessionTime: "9:00 AM - 12:00 PM",
        venue: "Main Hall, Oba Olagbegi Street, New Bodija",
        totalStudents: 30,
        presentCount: 28,
        absentCount: 2,
        students: [
            { id: "a-11", studentId: "u-1", studentName: "Adewale Johnson", studentEmail: "adewale.j@davidson.edu", courseTitle: "Digital Literacy", sessionDate: "Feb 26, 2026", status: "present", checkInTime: "8:50 AM", method: "qr" },
            { id: "a-12", studentId: "u-10", studentName: "Yusuf Abdullahi", studentEmail: "yusuf.a@davidson.edu", courseTitle: "Digital Literacy", sessionDate: "Feb 26, 2026", status: "present", checkInTime: "8:55 AM", method: "manual" },
        ],
    },
];
