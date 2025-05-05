'use client';

import { motion } from 'framer-motion';

interface Props {
  title: string;
  content: string;
}

export default function InfoSection({ title, content }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800/50 rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold text-white font-['Noto_Naskh_Arabic']">{title}</h2>
      <p className="mt-2 text-emerald-100">{content}</p>
    </motion.div>
  );
}