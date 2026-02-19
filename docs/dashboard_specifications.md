# LMS Dashboard Specifications

Based on the [Product Requirements Document (PRD)](file:///c:/Users/murewa/lms-frontend/docs/Product%20Requirements%20Document%20(PRD).md.pdf), this document outlines the content and layout for the core dashboard interfaces.

---

## 1. Student / Learner Dashboard
**Role**: Personal learning path management and gatekeeping fulfillment.

### 🏠 Overview Tab (Main)
- **Quick Stats**:
  - "Active Enrollments" (Count)
  - "Certificates Earned" (Count)
  - "Upcoming Physical Sessions" (Calendar/List)
- **Primary Action**: "Browse Course Catalog" button.

### 📚 My Learning
- **Course Cards**: List of enrolled courses with progress indicators.
- **Prerequisite Status**: Clear "Passed/Not Passed" status for digital prerequisite tests.
- **Smart Remediation**: Direct links to specific remedial sections in "Module 0" if a test was failed.

### 🎫 Entry Passes (QR)
- **Digital Gatekeeping**: A gallery of QR codes generated **only** after passing prerequisite tests.
- **Session Details**: Venue name, room number, date, and time for the physical seat.

### 🎓 Certification Center
- **Downloadable Assets**: PDF certificates with unique IDs.
- **Public Link**: Copyable URL for social/employer verification.

---

## 2. Admin Dashboard
**Role**: Global system integrity, analytics, and exception handling.

### 📊 Global Analytics (Landing)
- **Key Metrics (Cards)**: Total Students, Ongoing Courses, Average Pass Rate, Current Waitlist Depth.
- **Trend Charts**: Enrollment growth over time.
- **Resource Heatmap**: Venue capacity usage (overbooked vs. underutilized).

### 🛠️ Course & Content Manager
- **Course CRUD**: Interface to define Metadata, Venue Details, and Capacity Constraints.
- **Waitlist Control**: Manual tools to promote waitlisted students or adjust caps.
- **Content Hosting**: Drag-and-drop uploader for PDFs, Video links, and Presentation slides.

### 📝 Assessment Engine
- **Question Bank**: Manage MCQ repository with tagging (Safety, Regulations, etc.).
- **Difficulty Settings**: Assign/adjust difficulty ratings for automated tests.
- **Scoring Rules**: Configure automated grading thresholds.

### 👥 User & Role Management
- **User List**: Searchable database of all students and instructors.
- **Role Control**: Promote/demote users (Admin/Instructor/Student).
- **Manual Overrides**: Ability to manually mark attendance or override test failures for exception cases.

### 🏥 System Health & Sync
- **Sync Logs**: Monitor sync status from offline-first instructor devices.
- **Audit Logs**: Traceable history of all administrative actions.

---

## 3. Instructor Portal (Quick Access)
**Role**: Tactical onsite management of physical training.

### 📲 QR Scanning Interface
- **Scanner**: Camera-based scanner to validate student Entry Passes.
- **Instant Validation**: Check against prerequisite testing status and venue capacity.
- **Offline Sync Status**: Visual indicator for pending data uploads (Syncing/Synced).

### 📋 Cohort Attendance
- **Manual Checklist**: Fallback for students with broken phones or lost passes.
- **Subjective Grading**: Interface to grade non-automated assessments.

---

## 🎨 UI/UX Design System
To maintain consistency with the [React Starter foundation](file:///c:/Users/murewa/lms-frontend/README.md):
- **Theme**: Support for Dark/Light mode using `next-themes`.
- **Components**: Utilize `shadcn/ui` (Cards for metrics, Tables for management, Dialogs for CRUD).
- **Accessibility**: Standard ARIA labels and keyboard navigation support via Radix UI.
- **Responsive**: Desktop-optimized for Admin; Mobile-first for Student/Instructor.
