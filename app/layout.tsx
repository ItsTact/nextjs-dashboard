import '@/app/ui/global.css';
import { noto_sans } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
