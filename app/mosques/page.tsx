"use client";

import { motion } from "framer-motion";
import mosques from "@/data/mosques.json";
import { Mosque } from "@/types/mosque";
import MosqueCard from "@/components/MosqueCard";

export default function MosquesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800">
      <div className="container mx-auto px-4 py-28 md:py-16]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-0.5 w-12 bg-amber-400 mr-4"></div>
            <span className="text-amber-400 uppercase tracking-wider text-sm font-medium">Muqaddas Joylar</span>
            <div className="h-0.5 w-12 bg-amber-400 ml-4"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-['Noto_Naskh_Arabic']">
            Masjidlar
          </h1>

          <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
            Dunyodagi muqaddas masjidlarni kashf eting va ularni virtual tarzda ziyorat qiling.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mosques.map((mosque: Mosque) => (
            <motion.div key={mosque.id} variants={item}>
              <MosqueCard mosque={mosque} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}