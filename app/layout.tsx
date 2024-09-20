import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
	title: "Focal Point",
	description: "Gerencia suas tarefas Diárias",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
