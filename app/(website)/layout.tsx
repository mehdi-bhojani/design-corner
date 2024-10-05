import type { Metadata } from 'next';
// import '../globals.css';
// import Header from '@/components/client/layout/header';
import Footer from '@/components/client/layout/footer';
import Header from '@/components/client/layout/header';

export const metadata: Metadata = {
  title: 'Design Corner',
  description: 'Upgrade your place interior with design corner'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
