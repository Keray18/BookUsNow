import { Providers } from './providers'

export const metadata = {
  title: "BookUsNow",
  description: "A Show booking website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <providers>{children}</providers></body>
    </html>
  );
}
