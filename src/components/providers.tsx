"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "./ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Toaster richColors closeButton theme="system" />
			<NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
				{children}
			</NextThemesProvider>
		</>
	);
}
