import {
    BookOpen01Icon,
    Certificate01Icon,
    Home01Icon,
    QrCode01Icon,
    Logout01Icon,
} from "hugeicons-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home01Icon,
    },
    {
        title: "Courses",
        url: "/dashboard/learning",
        icon: BookOpen01Icon,
    },
    {
        title: "Passes",
        url: "/dashboard/passes",
        icon: QrCode01Icon,
    },
    {
        title: "Certificates",
        url: "/dashboard/certificates",
        icon: Certificate01Icon,
    },
];

export function AppSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [logoutOpen, setLogoutOpen] = useState(false);

    const handleLogout = () => {
        setLogoutOpen(false);
        navigate("/login");
    };

    return (
        <>
            <Sidebar collapsible="none" className="hidden md:flex w-20 bg-slate-100 p-0 overflow-visible">
                <SidebarHeader className="flex items-center justify-center pt-10 pb-6">
                    <img src="/logo.png" alt="LMS Logo" className="h-10 w-10 object-contain" />
                </SidebarHeader>
                <SidebarContent className="px-2 overflow-visible">
                <SidebarMenu className="gap-2">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                isActive={location.pathname === item.url}
                                onClick={() => navigate(item.url)}
                                className="flex flex-col items-center justify-center gap-2 h-auto py-3 px-0 transition-all duration-300 bg-transparent hover:bg-transparent data-[active=true]:bg-transparent group"
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <div className="h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-slate-200 group-data-[active=true]:bg-primary">
                                        <item.icon
                                            size={24}
                                            className="transition-transform duration-300 group-data-[active=true]:text-white text-slate-500"
                                        />
                                    </div>
                                    <span className="text-[10px] font-normal leading-none group-data-[active=true]:text-primary text-slate-500">
                                        {item.title}
                                    </span>
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="pb-10 flex items-center justify-center">
                <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
                    <AlertDialogTrigger asChild>
                        <button className="flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-destructive transition-all duration-300">
                            <Logout01Icon size={24} />
                            <span className="text-[10px] font-normal leading-none">
                                Logout
                            </span>
                        </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="rounded-2xl border-slate-100 shadow-xl max-w-sm">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-lg font-medium text-slate-900">
                                Sign out?
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-slate-500 font-normal text-sm">
                                You'll need to sign in again to access your learning dashboard.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="gap-2 sm:gap-2">
                            <AlertDialogCancel className="rounded-full h-10 border-slate-200 text-slate-500 font-normal">
                                Stay signed in
                            </AlertDialogCancel>
                            <AlertDialogAction
                                onClick={handleLogout}
                                className="rounded-full h-10 bg-destructive hover:bg-destructive/90 text-white font-normal"
                            >
                                Sign out
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </SidebarFooter>
        </Sidebar>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-white shadow-2xl shadow-slate-200/50 border border-slate-100 rounded-full px-2 py-2 flex items-center justify-between z-50 overflow-hidden">
            {items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                    <button
                        key={item.title}
                        onClick={() => navigate(item.url)}
                        className={cn(
                            "relative flex items-center justify-center h-12 transition-all duration-300 z-10",
                            isActive ? "px-5" : "flex-1"
                        )}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="mobileNavIndicator"
                                className="absolute inset-0 bg-primary rounded-[2rem] z-0 shadow-md shadow-primary/20"
                                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                            />
                        )}
                        <div className="relative z-10 flex items-center gap-2">
                            <item.icon
                                size={22}
                                className={cn(
                                    "transition-colors duration-300",
                                    isActive ? "text-white" : "text-primary"
                                )}
                            />
                            {isActive && (
                                <span className="text-white text-xs font-semibold">
                                    {item.title}
                                </span>
                            )}
                        </div>
                    </button>
                )
            })}
        </nav>
        </>
    );
}
