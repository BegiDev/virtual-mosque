"use client"

import { motion } from "framer-motion"
import mosques from "@/data/mosques.json"
import { GlobeIcon, BookOpenIcon, MapIcon } from "lucide-react"
import MosqueCard from "@/components/MosqueCard"
import { Mosque } from "@/types/mosque"
import Head from "next/head"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const pageTitle = "Virtual Masjid Sayohati - Dunyodagi Muqaddas Masjidlarni 3D Ziyorat Qiling";
  const pageDescription = "Dunyodagi mashhur masjidlarni 3D formatda ziyorat qiling. Islomiy me'morchilik durdonalari, tarix va ziyorat duolari haqida ma'lumot oling.";
  const pageImage = "../../public/logo.jpg" 
  const pageUrl = "https://masjidlar.vercel.app/";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="virtual masjid sayohati, 3D masjid ziyorati, dunyo masjidlari, islomiy me'morchilik, masjidlar tarixi, ziyorat duolari, muqaddas joylar"
        />
        <meta name="author" content="BegiDev" />
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
        <link rel="icon" href="/logo.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Virtual Masjid Sayohati",
            "url": pageUrl,
            "description": pageDescription,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${pageUrl}/mosques/{search_term_string}`,
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": mosques.map((mosque: Mosque, index: number) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Mosque",
                  "name": mosque.name,
                  "description": `Ziyorat qiling va ${mosque.name} masjidining tarixi va me'morchiligi haqida ma'lumot oling.`,
                  "url": `${pageUrl}/mosques/${mosque.id}`,
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": mosque.location,
                    "addressCountry": "UZ"
                  }
                }
              }))
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="relative mb-16 sm:mb-24">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-5"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-0.5 w-12 bg-amber-400 mr-4"></div>
                <span className="text-amber-400 uppercase tracking-wider text-sm font-medium">Muqaddas Joylar</span>
                <div className="h-0.5 w-12 bg-amber-400 ml-4"></div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-['Noto_Naskh_Arabic']">
                Virtual Masjid Sayohati
              </h1>

              <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
                Dunyodagi muqaddas masjidlarni 3D tarzda ziyorat qiling va islomiy memorchilik durdonalari bilan
                tanishing.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <GlobeIcon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Noto_Naskh_Arabic']">3D Sayohat</h3>
              <p className="text-emerald-100">
                Masjidlarni virtual tarzda ziyorat qiling va ularning ichki qismlarini o&apos;rganing.
              </p>
            </div>

            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <BookOpenIcon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Noto_Naskh_Arabic']">Tarix va Me&apos;morchilik</h3>
              <p className="text-emerald-100">
                Har bir masjidning tarixi va me&apos;morchiligi haqida batafsil ma&apos;lumot oling.
              </p>
            </div>

            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <MapIcon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Noto_Naskh_Arabic']">Dunyo Bo&apos;ylab</h3>
              <p className="text-emerald-100">Dunyoning turli burchaklaridagi mashhur masjidlarni kashf eting.</p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mosques.map((mosque: Mosque) => (
              <motion.div key={mosque.id} variants={item}>
                <MosqueCard mosque={mosque} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}