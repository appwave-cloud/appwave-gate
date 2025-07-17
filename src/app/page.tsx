"use client";

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
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Plus, Server } from "lucide-react";

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
								<BreadcrumbPage>Dashboard</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
				<Card className="bg-muted">
					<CardHeader>
						<CardTitle>Welcome to AppWave Gate</CardTitle>
						<CardDescription>
							Gate is a platform for managing your OpnSense Firewalls.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button>
							<Plus className="h-4 w-4" />
							Add Firewall
						</Button>
					</CardContent>
				</Card>
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<Card>
						<CardHeader>
							<CardTitle>Firewalls</CardTitle>
							<CardAction>
								<Button size="icon">
									<Server className="h-4 w-4" />
								</Button>
							</CardAction>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-2">
								<p className="font-bold text-2xl">0</p>
								<p className="text-muted-foreground text-sm">Total Firewalls</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Certificates</CardTitle>
							<CardAction>
								<Button size="icon">
									<Server className="h-4 w-4" />
								</Button>
							</CardAction>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-2">
								<p className="font-bold text-2xl">1</p>
								<p className="text-muted-foreground text-sm">
									Active certificates
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>OpenVPN Profiles</CardTitle>
							<CardAction>
								<Button size="icon">
									<Server className="h-4 w-4" />
								</Button>
							</CardAction>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-2">
								<p className="font-bold text-2xl">0</p>
								<p className="text-muted-foreground text-sm">
									Generated OpenVPN profiles
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Getting Started</CardTitle>
						<CardDescription>
							Follow these steps to set up your first firewall.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<Badge variant="outline">1</Badge>
							<div>
								<h1 className="font-bold">Add a new firewall</h1>
								<p className="text-muted-foreground text-sm">
									Add a new firewall to your account. This will allow you to
									manage your firewall.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Badge variant="outline">2</Badge>
							<div>
								<h1 className="font-bold">Add a new firewall</h1>
								<p className="text-muted-foreground text-sm">
									Add a new firewall to your account. This will allow you to
									manage your firewall.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</SidebarInset>
	);
}
