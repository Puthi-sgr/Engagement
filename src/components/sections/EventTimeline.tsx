import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Gift, Camera, Utensils, Music, Heart } from 'lucide-react';

export function EventTimeline() {
  const timelineEvents = [
    {
      time: "3:00 PM",
      title: "Guest Arrival",
      description: "Welcome drinks and seating",
      icon: <Clock className="w-6 h-6" />
    },
    {
      time: "4:00 PM",
      title: "Ceremony",
      description: "Exchange of vows and rings",
      icon: <Heart className="w-6 h-6" />
    },
    {
      time: "5:00 PM",
      title: "Cocktail Hour",
      description: "Hors d'oeuvres and refreshments",
      icon: <Gift className="w-6 h-6" />
    },
    {
      time: "6:00 PM",
      title: "Photo Session",
      description: "Family and group photos",
      icon: <Camera className="w-6 h-6" />
    },
    {
      time: "7:00 PM",
      title: "Dinner Reception",
      description: "Formal dinner and toasts",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      time: "9:00 PM",
      title: "Dancing & Celebration",
      description: "Music and entertainment",
      icon: <Music className="w-6 h-6" />
    }
  ];

  return (
    <motion.section 
      className="py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
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
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">Event Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our special day has been carefully planned to create unforgettable moments.
              Here's what you can expect.
            </p>
          </motion.div>

          {/* Timeline Ruler */}
          <div className="relative">
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-600 to-gold-300"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Timeline Events */}
            <div className="relative">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className={`relative mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-serif text-gold-600 mb-2">{event.time}</h3>
                      <h4 className="text-xl font-medium text-gray-800 mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center text-white z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {event.icon}
                    </motion.div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Bottom Element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <div className="h-0.5 w-32 bg-gold-400 mx-auto" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}