import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import MyLearning from "./pages/dashboard/MyLearning";
import EntryPasses from "./pages/dashboard/EntryPasses";
import Certificates from "./pages/dashboard/Certificates";
import CourseDetails from "@/pages/dashboard/CourseDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="learning" element={<MyLearning />} />
            <Route path="learning/:id" element={<CourseDetails />} />
            <Route path="passes" element={<EntryPasses />} />
            <Route path="certificates" element={<Certificates />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
