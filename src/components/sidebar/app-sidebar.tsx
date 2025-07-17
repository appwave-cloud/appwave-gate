"use client";

import {
	Key,
	Server,
	Settings2,
	Shield,
	SquareTerminal,
	Zap,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "/",
			icon: SquareTerminal,
		},
		{
			title: "Firewalls",
			url: "/firewalls",
			icon: Server,
		},
		{
			title: "Certificates",
			url: "#",
			icon: Shield,
		},
		{
			title: "OpenVPN Profiles",
			url: "#",
			icon: Key,
		},
		{
			title: "Settings",
			url: "#",
			icon: Settings2,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader className="border-border/20 border-b pb-4">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							asChild
							className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-3 transition-all duration-300 hover:from-primary/20 hover:via-primary/10 hover:shadow-lg hover:shadow-primary/20"
						>
							{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a href="#" className="flex items-center gap-3">
								<div className="relative flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/30 group-hover:shadow-xl">
									<Zap className="size-5" />
									<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold text-foreground/90">
										AppWave
									</span>
									<span className="truncate text-muted-foreground/70 text-xs">
										Gate Platform
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className="px-2 py-4">
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter className="border-border/20 border-t pt-4">
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
