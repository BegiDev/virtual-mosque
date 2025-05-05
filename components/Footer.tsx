"use client"

import { motion } from "framer-motion"
import { GithubIcon, TwitterIcon, InstagramIcon, FacebookIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-emerald-950 border-t border-emerald-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-emerald-950 font-bold text-xl font-['Noto_Naskh_Arabic']">م</span>
              </div>
              <span className="text-xl font-bold text-white font-['Noto_Naskh_Arabic']">Virtual Masjid</span>
            </Link>
            <p className="text-emerald-200 text-sm">
              Dunyodagi muqaddas masjidlarni 3D tarzda ziyorat qiling va islomiy me`morchilik durdonalari bilan
              tanishing.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-amber-400 font-medium">Sahifalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-emerald-200 hover:text-white transition-colors">
                  Bosh Sahifa
                </Link>
              </li>
              <li>
                <Link href="/" className="text-emerald-200 hover:text-white transition-colors">
                  Haqida
                </Link>
              </li>
              <li>
                <Link href="/mosques" className="text-emerald-200 hover:text-white transition-colors">
                  Barcha Masjidlar
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-amber-400 font-medium">Manbalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-emerald-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-emerald-200 hover:text-white transition-colors">
                  Ko`p So`raladigan Savollar
                </Link>
              </li>
              <li>
                <Link href="/" className="text-emerald-200 hover:text-white transition-colors">
                  Maxfiylik Siyosati
                </Link>
              </li>
              <li>
                <Link href="/" className="text-emerald-200 hover:text-white transition-colors">
                  Foydalanish Shartlari
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-amber-400 font-medium">Yangiliklar</h4>
            <p className="text-emerald-200 text-sm">
              Yangi masjidlar va yangiliklar haqida xabardor bo`lish uchun obuna bo`ling.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-emerald-200 text-sm font-['Noto_Naskh_Arabic']">
            © {currentYear} Virtual Masjid Sayohati. Barcha huquqlar himoyalangan.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
