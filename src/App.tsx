import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { AdminLayout } from "./components/layout/AdminLayout";
import { InstructorLayout } from "./components/layout/InstructorLayout";
import { AuthLayout } from "./components/layout/AuthLayout";
import Overview from "./pages/dashboard/Overview";
import MyLearning from "./pages/dashboard/MyLearning";
import EntryPasses from "./pages/dashboard/EntryPasses";
import Certificates from "./pages/dashboard/Certificates";
import CourseDetails from "@/pages/dashboard/CourseDetails";
import CoursePlayer from "@/pages/dashboard/CoursePlayer";
import Analytics from "@/pages/admin/Analytics";
import CourseManager from "@/pages/admin/CourseManager";
import Assessments from "@/pages/admin/Assessments";
import UserManagement from "@/pages/admin/UserManagement";
import SystemHealth from "@/pages/admin/SystemHealth";
import QRScanner from "@/pages/instructor/QRScanner";
import CohortAttendance from "@/pages/instructor/CohortAttendance";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root → Login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Auth Routes */}
          <Route element={<AuthLayout>{null}</AuthLayout>}>
            {/* Render auth pages inside AuthLayout via index routes */}
          </Route>
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout>} />
          <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />

          {/* Dashboard Routes (Student) */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="learning" element={<MyLearning />} />
            <Route path="learning/:id" element={<CourseDetails />} />
            <Route path="player/:courseId/:moduleId/:itemId" element={<CoursePlayer />} />
            <Route path="passes" element={<EntryPasses />} />
            <Route path="certificates" element={<Certificates />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Analytics />} />
            <Route path="courses" element={<CourseManager />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="system" element={<SystemHealth />} />
          </Route>

          {/* Instructor Routes */}
          <Route path="/instructor" element={<InstructorLayout />}>
            <Route index element={<QRScanner />} />
            <Route path="attendance" element={<CohortAttendance />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
