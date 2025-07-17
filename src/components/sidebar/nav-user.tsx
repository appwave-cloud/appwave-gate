"use client";

import {
	BadgeCheck,
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	Sparkles,
	User,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";

export function NavUser({
	user,
}: {
	user: {
		name: string;
		email: string;
		avatar: string;
	};
}) {
	const { isMobile } = useSidebar();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-muted/30 via-muted/20 to-transparent p-3 transition-all duration-300 hover:from-accent/30 hover:via-accent/20 hover:shadow-accent/20 hover:shadow-lg data-[state=open]:from-accent/40 data-[state=open]:via-accent/30 data-[state=open]:shadow-accent/20 data-[state=open]:shadow-lg"
						>
							<div className="relative flex aspect-square size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
								<Avatar className="h-7 w-7 rounded-lg ring-2 ring-background/50">
									<AvatarImage src={user.avatar} alt={user.name} />
									<AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 font-semibold text-primary">
										{user.name.charAt(0).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold text-foreground/90">
									{user.name}
								</span>
								<span className="truncate text-muted-foreground/70 text-xs">
									{user.email}
								</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4 text-muted-foreground/60 transition-colors duration-200 group-hover:text-foreground/80" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-64 rounded-xl border-border/20 bg-background/95 shadow-black/10 shadow-xl backdrop-blur-xl"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-muted/30 via-muted/20 to-transparent p-3">
								<div className="relative flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent shadow-sm">
									<Avatar className="h-8 w-8 rounded-lg ring-2 ring-background/50">
										<AvatarImage src={user.avatar} alt={user.name} />
										<AvatarFallback className="rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 font-semibold text-primary">
											{user.name.charAt(0).toUpperCase()}
										</AvatarFallback>
									</Avatar>
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold text-foreground/90">
										{user.name}
									</span>
									<span className="truncate text-muted-foreground/70 text-xs">
										{user.email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator className="bg-border/30" />
						<DropdownMenuGroup>
							<DropdownMenuItem className="rounded-lg transition-colors duration-200 hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-transparent">
								<Sparkles className="mr-2 size-4 text-primary" />
								<span className="font-medium">Upgrade to Pro</span>
								<div className="ml-auto rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-2 py-0.5 font-semibold text-primary text-xs">
									NEW
								</div>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator className="bg-border/30" />
						<DropdownMenuGroup>
							<DropdownMenuItem className="rounded-lg transition-colors duration-200 hover:bg-gradient-to-r hover:from-accent/10 hover:via-accent/5 hover:to-transparent">
								<User className="mr-2 size-4 text-muted-foreground" />
								Account
							</DropdownMenuItem>
							<DropdownMenuItem className="rounded-lg transition-colors duration-200 hover:bg-gradient-to-r hover:from-accent/10 hover:via-accent/5 hover:to-transparent">
								<CreditCard className="mr-2 size-4 text-muted-foreground" />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem className="rounded-lg transition-colors duration-200 hover:bg-gradient-to-r hover:from-accent/10 hover:via-accent/5 hover:to-transparent">
								<Bell className="mr-2 size-4 text-muted-foreground" />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator className="bg-border/30" />
						<DropdownMenuItem className="rounded-lg text-destructive transition-colors duration-200 hover:bg-gradient-to-r hover:from-destructive/10 hover:via-destructive/5 hover:to-transparent hover:text-destructive">
							<LogOut className="mr-2 size-4" />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
