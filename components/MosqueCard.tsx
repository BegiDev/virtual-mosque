'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import type { Mosque } from '@/types/mosque';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface Props {
  mosque: Mosque;
}

export default function MosqueCard({ mosque }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-xl shadow-lg overflow-hidden"
    >
      <Image
        src={mosque.image}
        alt={mosque.name}
        className="object-cover w-[100%]"
        height={480}
        width={100}
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-amber-400 mr-2" />
          <span className="text-amber-400 text-sm">{mosque.location}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 font-['Noto_Naskh_Arabic']">
          {mosque.name}
        </h3>
        <p className="text-emerald-100 text-sm mb-4 line-clamp-2">
          {mosque.history}
        </p>
        <Link href={`/mosques/${mosque.id}`}>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-['Noto_Naskh_Arabic']">
            Ziyorat Qilish
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}