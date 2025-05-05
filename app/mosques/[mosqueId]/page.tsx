"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { MapPinIcon, CalendarIcon, ArchiveIcon, BookOpenIcon, MoveLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import mosques from "@/data/mosques.json"
import type { Mosque } from "@/types/mosque"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ThreeDViewer from "@/components/ThreeDViewer"
import InfoSection from "@/components/InfoSection"

export default function MosquePage() {
  const params = useParams()
  const mosqueId = params?.mosqueId as string
  const [mosque, setMosque] = useState<Mosque | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("3d")

  useEffect(() => {
    if (mosqueId) {
      const foundMosque = mosques.find((m: Mosque) => m.id === mosqueId)
      setMosque(foundMosque || null)
      setLoading(false)
    }
  }, [mosqueId])

  if (loading) {
    return (
      <div className="min-h-screen bg-emerald-950 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!mosque) {
    return (
      <div className="min-h-screen bg-emerald-950 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-white mb-4 font-['Noto_Naskh_Arabic']">Masjid Topilmadi</h1>
        <p className="text-emerald-100 mb-8">Kechirasiz, siz qidirayotgan masjid mavjud emas.</p>
        <Link href="/">
          <Button className="bg-amber-500 hover:bg-amber-600 text-emerald-950">Bosh Sahifaga Qaytish</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center text-emerald-100 hover:underline mb-4 mt-6">
              <span><MoveLeft /></span> Bosh Sahifaga Qaytish
            </Button>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center mb-2">
              <MapPinIcon className="h-5 w-5 text-amber-400 mr-2" />
              <span className="text-amber-400">{mosque.location}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-['Noto_Naskh_Arabic']">{mosque.name}</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-xl p-6 flex items-center">
              <CalendarIcon className="h-8 w-8 text-amber-400 mr-4" />
              <div>
                <h3 className="text-white font-medium">Qurilgan Yili</h3>
                <p className="text-emerald-100">{mosque.builtYear}</p>
              </div>
            </div>
            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-xl p-6 flex items-center">
              <ArchiveIcon className="h-8 w-8 text-amber-400 mr-4" />
              <div>
                <h3 className="text-white font-medium">Me`morchilik Uslubi</h3>
                <p className="text-emerald-100">{mosque.architecturalStyle}</p>
              </div>
            </div>
            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-xl p-6 flex items-center">
              <BookOpenIcon className="h-8 w-8 text-amber-400 mr-4" />
              <div>
                <h3 className="text-white font-medium">Ahamiyati</h3>
                <p className="text-emerald-100">{mosque.significance}</p>
              </div>
            </div>
          </div>
        </div>

        {activeTab === "3d" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <ThreeDViewer modelUrl={mosque.modelUrl} />
          </motion.div>
        )}

        <Tabs defaultValue="3d" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full grid grid-cols-3 mb-8 bg-emerald-900/50 border border-emerald-800/50 p-1 rounded-lg">
            <TabsTrigger
              value="3d"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-emerald-950 text-emerald-100"
            >
              3D Sayohat
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-emerald-950 text-emerald-100"
            >
              Tarix
            </TabsTrigger>
            <TabsTrigger
              value="architecture"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-emerald-950 text-emerald-100"
            >
              Me`morchilik
            </TabsTrigger>
          </TabsList>

          <TabsContent value="3d" className="mt-0">
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <InfoSection title="Tarix" content={mosque.history} />
          </TabsContent>

          <TabsContent value="architecture" className="mt-0">
            <InfoSection title="Me'morchilik" content={mosque.architecture} />
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <InfoSection title="Ziyorat Duosi" content={mosque.prayer} />
        </div>
      </div>
    </div>
  )
}