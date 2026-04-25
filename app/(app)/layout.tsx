import { RootLayout } from '@/components/root-layout';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  return <RootLayout className="dark bg-[#0A0A0B]">{children}</RootLayout>;
}
