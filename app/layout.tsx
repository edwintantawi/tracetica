import { fontMono, fontSans } from '~/lib/fonts';
import { cn } from '~/lib/utils';

import '~/app/style.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn(fontSans.variable, fontMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
