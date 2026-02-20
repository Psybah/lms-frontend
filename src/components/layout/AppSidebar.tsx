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
import { useNavigate, useLocation } from "react-router-dom";

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
        title: "Awards",
        url: "/dashboard/certificates",
        icon: Certificate01Icon,
    },
];

export function AppSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Sidebar collapsible="none" className="w-20 bg-slate-100 p-0 overflow-visible">
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
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-slate-200 group-data-[active=true]:bg-primary group-data-[active=true]:shadow-md">
                                        <item.icon
                                            size={24}
                                            className="transition-transform duration-300 group-data-[active=true]:text-white text-slate-500"
                                        />
                                    </div>
                                    <span className="text-[9px] font-medium uppercase tracking-widest leading-none group-data-[active=true]:text-primary text-slate-500">
                                        {item.title}
                                    </span>
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="pb-10 flex items-center justify-center">
                <button className="flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-destructive transition-all duration-300">
                    <Logout01Icon size={24} />
                    <span className="text-[9px] font-medium uppercase tracking-widest leading-none">
                        Logout
                    </span>
                </button>
            </SidebarFooter>
        </Sidebar>
    );
}
