"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon: LucideIcon;
	}[];
}) {
	const pathname = usePathname();

	return (
		<SidebarGroup>
			<SidebarGroupLabel className="px-3 font-semibold text-muted-foreground/60 text-xs uppercase tracking-wider">
				Navigation
			</SidebarGroupLabel>
			<SidebarMenu className="space-y-1">
				{items.map((item) => (
					<Collapsible
						key={item.title}
						asChild
						defaultOpen={pathname === item.url}
					>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								tooltip={item.title}
								className={`group relative overflow-hidden rounded-lg transition-all duration-200 hover:bg-accent/50 ${
									pathname === item.url ? "" : "hover:text-foreground/90"
								}`}
							>
								<a
									href={item.url}
									className="flex items-center gap-3 px-3 py-2.5"
								>
									<div
										className={`relative flex aspect-square size-8 items-center justify-center rounded-lg transition-all duration-200 ${
											pathname === item.url
												? "bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-sm"
												: "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
										}`}
									>
										<item.icon className="size-4" />
										{pathname === item.url && (
											<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-transparent" />
										)}
									</div>
									<span
										className={`font-medium transition-colors duration-200 ${
											pathname === item.url
												? "text-primary"
												: "text-foreground/80"
										}`}
									>
										{item.title}
									</span>
									{pathname === item.url && (
										<div className="-translate-y-1/2 absolute top-1/2 left-0 h-6 w-1 rounded-r-full bg-gradient-to-b from-primary to-primary/60" />
									)}
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
