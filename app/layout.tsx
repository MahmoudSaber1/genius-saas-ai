import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Genius",
    description: "AI Platform",
};

import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "@/providers/toaster-provider";
import { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <ToasterProvider />
                    <ModalProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
