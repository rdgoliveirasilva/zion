import type { Metadata } from "next";
import { ThemeProvider } from "./providers";
import { Toaster } from "sonner";
import "./globals.css"; // 👈 O IMPORT ESTÁ AQUI E É O ÚNICO QUE DEVE ESTAR

export const metadata: Metadata = {
  title: "Zion | Assistente Financeiro",
  description: "Controle suas finanças de forma simples e inteligente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}