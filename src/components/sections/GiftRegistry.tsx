import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Copy, Check, CreditCard, Wallet, DollarSign, Heart } from 'lucide-react';

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
      id: 'chase',
      name: 'Chase Bank',
      accountName: 'Sarah & James Wedding Fund',
      accountNumber: '1234567890',
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      id: 'wells',
      name: 'Wells Fargo',
      accountName: 'Sarah & James Wedding Fund',
      accountNumber: '0987654321',
      icon: <Wallet className="w-5 h-5" />
    },
    {
      id: 'venmo',
      name: 'Venmo',
      accountName: '@SarahJames2024',
      accountNumber: '@SarahJames2024',
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleThankYou = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <motion.section 
      className="py-24 bg-gold-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 0h6v6h-6zM0 54h6v6H0z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 0h6v6h-6zM0 54h6v6H0z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">Digital Gift Registry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your presence is our greatest gift. However, if you wish to honor us with a contribution 
            to our new beginning, we've provided some options below.
          </p>
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
              <div className="absolute inset-0 m-6 bg-white rounded-md flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0.8, scale: 0.9 }}
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    scale: [0.9, 1, 0.9]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/sarahjames2024" 
                    alt="Gift Registry QR Code"
                    className="w-48 h-48"
                  />
                </motion.div>
              </div>
              
              {/* Animated Corners */}
              <motion.div 
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold-600"
                animate={{ 
                  x: [0, 5, 0],
                  y: [0, 5, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
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
                  ease: "easeInOut"
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
                  ease: "easeInOut"
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
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <p className="text-center text-gray-700 mb-4">Scan to access our digital gift registry</p>
            
            <motion.button
              className="px-6 py-3 bg-gold-600 text-white rounded-full flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleThankYou}
            >
              <Heart className="w-5 h-5" />
              <span>Send Gift</span>
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
                    <h3 className="text-3xl font-serif mb-4 text-gray-800">Thank You!</h3>
                    <p className="text-gray-600">
                      Your generosity means the world to us. We're grateful for your contribution to our new beginning.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bank Transfer Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 relative"
          >
            <div className="absolute inset-0 border-2 border-gold-200 rounded-lg m-2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif mb-6 text-center text-gray-800">Bank Transfer Options</h3>
              
              <div className="space-y-4">
                {bankOptions.map((bank) => (
                  <motion.div
                    key={bank.id}
                    className={`p-4 rounded-lg border-2 transition-colors duration-300 cursor-pointer ${
                      activeBank === bank.id 
                        ? 'border-gold-600 bg-gold-50' 
                        : 'border-gray-200 hover:border-gold-300'
                    }`}
                    whileHover={{ y: -5 }}
                    onClick={() => setActiveBank(bank.id === activeBank ? null : bank.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                          {bank.icon}
                        </div>
                        <h4 className="font-medium text-gray-800">{bank.name}</h4>
                      </div>
                      <motion.div
                        animate={{ rotate: activeBank === bank.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {activeBank === bank.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 border-t border-gray-200 mt-2 space-y-3">
                            <div>
                              <p className="text-sm text-gray-500">Account Name</p>
                              <p className="font-medium text-gray-800">{bank.accountName}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Account Number / ID</p>
                              <div className="flex items-center justify-between">
                                <p className="font-medium text-gray-800">{bank.accountNumber}</p>
                                <motion.button
                                  className="text-gold-600 p-1 rounded-full hover:bg-gold-50"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard(bank.accountNumber, bank.id);
                                  }}
                                >
                                  {copied === bank.id ? (
                                    <Check className="w-5 h-5" />
                                  ) : (
                                    <Copy className="w-5 h-5" />
                                  )}
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center text-gray-600 text-sm">
                <p>All contributions will help us build our new life together.</p>
                <p className="mt-2">Thank you for your generosity and support!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}