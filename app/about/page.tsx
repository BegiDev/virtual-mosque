"use client"

import { motion } from "framer-motion"
import { BookOpenIcon, HeartIcon, GlobeIcon, UsersIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-amber-400 mr-4"></div>
              <span className="text-amber-400 uppercase tracking-wider text-sm font-medium">Biz Haqimizda</span>
              <div className="h-0.5 w-12 bg-amber-400 ml-4"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-['Noto_Naskh_Arabic']">Loyiha Haqida</h1>

            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
              Virtual Masjid Sayohati loyihasi musulmonlarga dunyodagi muqaddas masjidlarni 3D tarzda ziyorat qilish
              imkonini beradi. Bizning maqsadimiz islomiy merosni targ`ib qilish va foydalanuvchilarga ma`naviy
              tajriba taqdim etish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-[url('/images/about-1.jpg')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-['Noto_Naskh_Arabic']">Bizning Maqsadimiz</h3>
                  <p className="text-emerald-100">
                    Islomiy me`morchilik va madaniyat durdonalarini keng ommaga taqdim etish, musulmonlarga dunyoning
                    turli burchaklaridagi muqaddas joylarni virtual tarzda ziyorat qilish imkoniyatini yaratish.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-[url('/images/about-2.jpg')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-['Noto_Naskh_Arabic']">Bizning Jamoamiz</h3>
                  <p className="text-emerald-100">
                    Bizning jamoa islomiy me`morchilik, tarix va zamonaviy texnologiyalar sohasidagi mutaxassislardan
                    tashkil topgan. Biz eng yuqori sifatli virtual sayohat tajribasini taqdim etishga intilamiz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <GlobeIcon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Noto_Naskh_Arabic']">50+</h3>
              <p className="text-emerald-100">Masjidlar</p>
            </div>

            <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <UsersIcon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Noto_Naskh_Arabic']">10,000+</h3>
              <p className="text-emerald-100">Foydalanuvchilar</p>
            </div>

            <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <BookOpenIcon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Noto_Naskh_Arabic']">200+</h3>
              <p className="text-emerald-100">Maqolalar</p>
            </div>

            <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <HeartIcon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Noto_Naskh_Arabic']">15+</h3>
              <p className="text-emerald-100">Mamlakatlar</p>
            </div>
          </div>

          <Card className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Noto_Naskh_Arabic']">
                Bizning Texnologiyalarimiz
              </h3>
              <p className="text-emerald-100 mb-6">
                Biz eng zamonaviy 3D modellashtirish va web texnologiyalaridan foydalanamiz:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-emerald-800/50 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-white font-medium">Three.js</span>
                </div>
                <div className="bg-emerald-800/50 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-white font-medium">Next.js</span>
                </div>
                <div className="bg-emerald-800/50 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-white font-medium">React</span>
                </div>
                <div className="bg-emerald-800/50 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-white font-medium">Tailwind CSS</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
