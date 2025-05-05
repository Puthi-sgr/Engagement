import React from "react";
import { motion } from "framer-motion";
import { Instagram, Share2 } from "lucide-react";

interface FooterProps {
  onShare: () => void;
}

export function Footer({ onShare }: FooterProps) {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-1">Developed by Puthi</p>
        <div className="flex justify-center gap-4 mb-4">
          <motion.a
            href="https://www.instagram.com/soft_bunss?igsh=MTh0NWM3OHptMm56NA%3D%3D&utm_source=qr"
            className="text-gold-400 hover:text-gold-300 flex"
            whileHover={{ scale: 1.2 }}
            target="_blank"
          >
            <Instagram className="w-6 h-6 mr-1" />
            <p>@Softbunss</p>
          </motion.a>
        </div>
        <p className="text-sm  text-gray-400">Divinely protected</p>
      </div>
    </footer>
  );
}
