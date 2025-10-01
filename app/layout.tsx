import '@/app/ui/global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        Esto es parte del layout
        {children}</body>
    </html>
  );
}
