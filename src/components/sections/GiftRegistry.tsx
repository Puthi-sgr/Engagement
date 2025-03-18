import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  Copy,
  Check,
  CreditCard,
  Wallet,
  DollarSign,
  Heart,
} from "lucide-react";
import QR from "../../assets/QR.png";
interface BankOption {
  id: string;
  name: string;
  accountName: string;
  accountNumber: string;
  icon: React.ReactNode;
}

export function GiftRegistry() {
  const [activeBank, setActiveBank] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const bankOptions: BankOption[] = [
    {
      id: "chase",
      name: "Chase Bank",
      accountName: "Sarah & James Wedding Fund",
      accountNumber: "1234567890",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "wells",
      name: "Wells Fargo",
      accountName: "Sarah & James Wedding Fund",
      accountNumber: "0987654321",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      id: "venmo",
      name: "Venmo",
      accountName: "@SarahJames2024",
      accountNumber: "@SarahJames2024",
      icon: <DollarSign className="w-5 h-5" />,
    },
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.section
      className="py-24 bg-gold-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Gift className="w-12 h-12 text-gold-600" />
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            ចំណងដៃ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* QR Code Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              className="relative w-64 h-64 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-gold-300 rounded-lg m-2"></div>

              {/* QR Code */}
              <a
                href="https://pay.ababank.com/3VS2mn6WyPpT9RQH6"
                target="_blank"
              >
                <div className="absolute inset-0 m-6  rounded-md flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0.8, scale: 0.9 }}
                    animate={{
                      opacity: [0.9, 1, 0.9],
                      scale: [0.98, 1, 0.98],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={QR}
                      alt="Gift Registry QR Code"
                      className="w-52 h-52"
                    />
                  </motion.div>
                </div>
              </a>

              {/* Animated Corners */}
              <motion.div
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2  border-gold-600"
                animate={{
                  x: [0, 5, 0],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold-600"
                animate={{
                  x: [0, -5, 0],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold-600"
                animate={{
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold-600"
                animate={{
                  x: [0, -5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.button
              className="px-6 py-3 bg-gold-500 text-white rounded-full flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <a
                href="https://pay.ababank.com/3VS2mn6WyPpT9RQH6"
                target="_blank"
              >
                ផ្តល់កាដូ
              </a>
            </motion.button>

            {/* Thank You Animation */}
            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white rounded-lg p-12 text-center max-w-md"
                    initial={{ scale: 0.8, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 20 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="mb-6"
                    >
                      <Heart className="w-16 h-16 text-gold-600 mx-auto" />
                    </motion.div>
                    <h3 className="text-3xl font-serif mb-4 text-gray-800">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your generosity means the world to us. We're grateful for
                      your contribution to our new beginning.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bank Transfer Options */}
        </div>
      </div>
    </motion.section>
  );
}
