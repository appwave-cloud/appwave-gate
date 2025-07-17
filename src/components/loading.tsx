import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingProps {
	size?: "sm" | "md" | "lg";
	text?: string;
	className?: string;
}

export function Loading({
	size = "md",
	text = "Loading...",
	className,
}: LoadingProps) {
	const sizeClasses = {
		sm: "h-4 w-4",
		md: "h-6 w-6",
		lg: "h-8 w-8",
	};

	return (
		<div className={cn("flex items-center justify-center", className)}>
			<div className="flex flex-col items-center space-y-2">
				<Loader2
					className={cn("animate-spin text-blue-600", sizeClasses[size])}
				/>
				{text && <p className="text-gray-600 text-sm">{text}</p>}
			</div>
		</div>
	);
}

export function LoadingPage({ text = "Loading..." }: { text?: string }) {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50">
			<Loading size="lg" text={text} />
		</div>
	);
}

export function LoadingCard({ text = "Loading..." }: { text?: string }) {
	return (
		<div className="rounded-lg bg-white p-6 shadow">
			<Loading text={text} />
		</div>
	);
}
