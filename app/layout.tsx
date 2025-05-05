import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Noto_Naskh_Arabic, Inter } from 'next/font/google';
import Head from 'next/head';

const noto = Noto_Naskh_Arabic({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-noto' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-inter' });

export const metadata = {
  title: 'Virtual Masjid Sayohati',
  description: 'Dunyodagi muqaddas masjidlarni 3D tarzda ziyorat qiling',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pageTitle = 'Virtual Masjid Sayohati - Dunyodagi Muqaddas Masjidlarni 3D Ziyorat Qiling';
  const pageDescription =
    'Dunyodagi mashhur masjidlarni 3D formatda ziyorat qiling. Islomiy me’morchilik durdonalari, tarix va ziyorat duolari haqida ma’lumot oling.';
  const pageImage = '/logo.jpg'; 
  const pageUrl = 'http://masjidlar.vercel.app/'; 

  return (
    <html lang="uz" className={`${noto.variable} ${inter.variable}`}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="virtual masjid sayohati, 3D masjid ziyorati, dunyo masjidlari, islomiy me'morchilik, masjidlar tarixi, ziyorat duolari, muqaddas joylar"
        />
        <meta name="author" content="Virtual Masjid Sayohati" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        <link rel="canonical" href={pageUrl} />

        <link rel="icon" href="/favicon.ico" sizes="any" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'Virtual Masjid Sayohati',
            'url': pageUrl,
            'description': pageDescription,
            'potentialAction': {
              '@type': 'SearchAction',
              'target': `${pageUrl}/mosques/{search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
      </Head>
      <body className="min-h-screen flex flex-col font-[var(--font-noto)] overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}