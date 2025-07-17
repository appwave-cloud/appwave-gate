"use client";

import { Loading } from "@/components/loading";
import { Badge } from "@/components/ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
	Edit,
	Key,
	MoreHorizontal,
	Plus,
	Server,
	Shield,
	Trash,
} from "lucide-react";

export default function Page() {
	return (
		<SidebarInset className="border border-sidebar-border">
			<header className="flex h-16 shrink-0 items-center gap-2">
				<div className="flex items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator
						orientation="vertical"
						className="mr-2 data-[orientation=vertical]:h-4"
					/>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="/">Gate</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Firewalls</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="font-bold text-2xl">Firewalls</h1>
						<p className="text-muted-foreground text-sm">
							Manage your OpnSense Firewall connections here
						</p>
					</div>

					<Button>
						<Plus className="h-4 w-4" />
						Add Firewall
					</Button>
				</div>
				<Input placeholder="Search..." />
				<Loading />
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<Card>
						<CardHeader>
							<div className="flex items-center space-x-3">
								<div className="rounded-lg bg-blue-100 p-2">
									<Server className="h-5 w-5 text-blue-600" />
								</div>
								<div>
									<CardTitle className="text-lg">123</CardTitle>
									<CardDescription>192.168.178.1</CardDescription>
								</div>
							</div>
							<CardAction>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<MoreHorizontal className="h-4 w-4" />
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem>
											<Edit className="h-4 w-4" />
											Edit
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Shield className="h-4 w-4" />
											View Certificate
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Key className="h-4 w-4" />
											View OpenVPN Profile
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem className="text-destructive">
											<Trash className="h-4 w-4" />
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</CardAction>
						</CardHeader>
						<CardContent className="space-y-4">
							{/* Connection Status */}
							<div className="flex items-center justify-between">
								<span className="font-medium text-sm">Connection Status</span>
								<Badge variant="outline">Connected</Badge>
							</div>

							{/* Quick Stats */}
							<div className="grid grid-cols-2 gap-4 border-t pt-2">
								<div className="text-center">
									<div className="font-bold text-2xl">0</div>
									<div className="text-gray-500 text-xs">Certificates</div>
								</div>
								<div className="text-center">
									<div className="font-bold text-2xl">0</div>
									<div className="text-gray-500 text-xs">VPN Profiles</div>
								</div>
							</div>

							{/* Metadata */}
							<div className="space-y-1 border-t pt-2 text-gray-500 text-xs">
								<div>Created: 123</div>
								<div>Updated: 123</div>
							</div>

							{/* Quick Actions */}
							<div className="flex space-x-2 pt-2">
								<Button size="sm" variant="outline" className="flex-1">
									<Shield className="mr-1 h-3 w-3" />
									Certificates
								</Button>
								<Button size="sm" variant="outline" className="flex-1">
									<Key className="mr-1 h-3 w-3" />
									Profiles
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</SidebarInset>
	);
}
