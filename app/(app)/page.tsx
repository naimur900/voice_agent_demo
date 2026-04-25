import { ApplyThemeScript } from '@/components/theme-toggle';
import WelcomeDynamic from '@/components/welcome-dynamic';

export default function Page() {
  return (
    <>
      <ApplyThemeScript />
      <WelcomeDynamic />
    </>
  );
}
