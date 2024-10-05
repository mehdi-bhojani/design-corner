import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { Raleway } from '@next/font/google';
import ThemeProvider from '@/components/layout/ThemeToggle/theme-provider';

const raleway = Raleway({
  subsets: ['latin'], // Specify the subset if needed
  weight: ['400', '700'], // Add the desired font weights
  variable: '--font-raleway' // Optional: CSS variable to use the font globally
});

export const metadata: Metadata = {
  title: 'Design Corner',
  description: 'Upgrade your place interior with design corner'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
