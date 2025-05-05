"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-emerald-950/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-emerald-950 font-bold text-xl font-['Noto_Naskh_Arabic']">م</span>
              </div>
              <span className="text-2xl font-bold text-white font-['Noto_Naskh_Arabic']">Virtual Masjid</span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-white hover:text-amber-400 hover:bg-emerald-900/50 font-['Noto_Naskh_Arabic']"
                >
                  Bosh Sahifa
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="text-white hover:text-amber-400 hover:bg-emerald-900/50 font-['Noto_Naskh_Arabic']"
                >
                  Haqida
                </Button>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-emerald-950 md:hidden"
          >
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-amber-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-2xl font-bold text-white hover:text-amber-400 font-['Noto_Naskh_Arabic']">
                  Bosh Sahifa
                </span>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-2xl font-bold text-white hover:text-amber-400 font-['Noto_Naskh_Arabic']">
                  Haqida
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
