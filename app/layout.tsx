import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        Esto es parte del layout
        {children}
        <footer className="py-10 text-center text-sm text-gray-500">
          <p>
            Hecho con ❤️ por <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">Mauricio Gualteros</a>
          </p>
        </footer>
        </body>
    </html>
  ); 
}
