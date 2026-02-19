import {
    BookOpen01Icon,
    Certificate01Icon,
    Home01Icon,
    QrCode01Icon,
    Settings02Icon,
    UserCircleIcon,
} from "hugeicons-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
} from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "react-router-dom";

const items = [
    {
        title: "Overview",
        url: "/dashboard",
        icon: Home01Icon,
    },
    {
        title: "My Learning",
        url: "/dashboard/learning",
        icon: BookOpen01Icon,
    },
    {
        title: "Entry Passes",
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

    return (
        <Sidebar collapsible="icon" className="border-r border-border">
            <SidebarHeader className="p-4">
                <div className="flex items-center gap-3 px-2 py-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <BookOpen01Icon size={20} />
                    </div>
                    <span className="text-lg font-bold tracking-tight group-data-[collapsible=icon]:hidden">
                        LMS Portal
                    </span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-data-[collapsible=icon]:hidden">
                        Main Menu
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        isActive={location.pathname === item.url}
                                        onClick={() => navigate(item.url)}
                                        tooltip={item.title}
                                        className="flex items-center gap-3 px-4 py-6 transition-all duration-200 hover:bg-accent/50 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                                    >
                                        <item.icon size={22} />
                                        <span className="font-medium">{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4 border-t border-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="flex items-center gap-3 px-4 py-6">
                            <UserCircleIcon size={22} />
                            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                                <span className="text-sm font-semibold">Alex Johnson</span>
                                <span className="text-xs text-muted-foreground">Student</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
