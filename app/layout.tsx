import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-background dark:bg-background-dark`}>
				<ThemeProvider
					themes={["light", "dark"]}
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<>
						<Navigation />
						<div className="md:px-[10%] p-4">{children}</div>
					</>
				</ThemeProvider>
			</body>
		</html>
	);
}
