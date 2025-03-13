import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Hotel, Plane } from "lucide-react";

export function VenueInformation() {
  const [activeTab, setActiveTab] = useState("directions");

  return (
    <motion.section
      className="py-24 bg-gold-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Venue Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Grand Plaza Hotel offers a stunning backdrop for our
              celebration. Here's everything you need to know about the venue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl h-96"
            >
              <div className="absolute inset-0 border-2 border-gold-200 rounded-lg m-2 z-10 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4365.987760575533!2d104.91868657899667!3d11.56403901566437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513fc957f573%3A0x4145d4f177984a03!2sOrussey%20Market!5e0!3m2!1sen!2skh!4v1741594903145!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Map - Orussey Market"
                className="absolute inset-0"
              ></iframe>

              <motion.div
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md z-20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold-600 w-5 h-5" />
                  <p className="text-sm font-medium">The Grand Plaza Hotel</p>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  123 Elegant Avenue, New York, NY
                </p>
              </motion.div>
            </motion.div>

            {/* Information Tabs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-8 relative"
            >
              <div className="absolute inset-0 border-2 border-gold-200 rounded-lg m-2"></div>

              <div className="relative z-10">
                {/* Tab Navigation */}
                <div className="flex mb-8 border-b border-gray-200">
                  <button
                    className={`pb-4 px-4 text-sm font-medium ${
                      activeTab === "directions"
                        ? "text-gold-600 border-b-2 border-gold-600"
                        : "text-gray-500 hover:text-gold-500"
                    }`}
                    onClick={() => setActiveTab("directions")}
                  >
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4" />
                      <span>Directions</span>
                    </div>
                  </button>
                  <button
                    className={`pb-4 px-4 text-sm font-medium ${
                      activeTab === "parking"
                        ? "text-gold-600 border-b-2 border-gold-600"
                        : "text-gray-500 hover:text-gold-500"
                    }`}
                    onClick={() => setActiveTab("parking")}
                  >
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4" />
                      <span>Parking</span>
                    </div>
                  </button>
                  <button
                    className={`pb-4 px-4 text-sm font-medium ${
                      activeTab === "accommodation"
                        ? "text-gold-600 border-b-2 border-gold-600"
                        : "text-gray-500 hover:text-gold-500"
                    }`}
                    onClick={() => setActiveTab("accommodation")}
                  >
                    <div className="flex items-center gap-2">
                      <Hotel className="w-4 h-4" />
                      <span>Accommodation</span>
                    </div>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[250px]">
                  {activeTab === "directions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-gold-100 p-2 rounded-full">
                          <Car className="w-5 h-5 text-gold-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">
                            By Car
                          </h4>
                          <p className="text-gray-600 text-sm">
                            From I-95, take exit 47 toward downtown. Follow Main
                            Street for 2 miles, then turn right onto Elegant
                            Avenue.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gold-100 p-2 rounded-full">
                          <Plane className="w-5 h-5 text-gold-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">
                            From the Airport
                          </h4>
                          <p className="text-gray-600 text-sm">
                            JFK Airport is 18 miles away. Taxi service is
                            available, or take the AirTrain to Jamaica Station,
                            then the E train to 5th Avenue.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gold-100 p-2 rounded-full">
                          <Navigation className="w-5 h-5 text-gold-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">
                            Public Transit
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Take the N, Q, R, or W train to 57th Street. The
                            hotel is a 5-minute walk east.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "parking" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <p className="text-gray-700">
                        Valet parking is available at the hotel for $45 per day.
                        Self-parking options include:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="bg-gold-100 p-1 rounded-full mt-0.5">
                            <div className="w-2 h-2 bg-gold-600 rounded-full"></div>
                          </div>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">
                              Plaza Parking Garage
                            </span>{" "}
                            - $35 for 12 hours, located at 122 Elegant Avenue
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="bg-gold-100 p-1 rounded-full mt-0.5">
                            <div className="w-2 h-2 bg-gold-600 rounded-full"></div>
                          </div>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">
                              City Center Parking
                            </span>{" "}
                            - $25 for 12 hours, located at 85 Main Street
                            (10-minute walk)
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="bg-gold-100 p-1 rounded-full mt-0.5">
                            <div className="w-2 h-2 bg-gold-600 rounded-full"></div>
                          </div>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">Street Parking</span>{" "}
                            - Limited availability, free after 7 PM on weekends
                          </p>
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === "accommodation" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <p className="text-gray-700">
                        We've arranged a special rate for our wedding guests at
                        The Grand Plaza Hotel:
                      </p>
                      <div className="bg-gold-50 p-4 rounded-lg border border-gold-200">
                        <p className="font-medium text-gray-800">
                          Special Rate: $225/night
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Use code:{" "}
                          <span className="font-medium">SARAHJAMES2024</span>
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Book by: August 1st, 2024
                        </p>
                        <button className="mt-3 text-sm text-gold-600 font-medium hover:text-gold-700">
                          Book Now →
                        </button>
                      </div>
                      <p className="text-gray-700 mt-4">
                        Alternative accommodations nearby:
                      </p>
                      <ul className="space-y-2">
                        <li className="text-sm text-gray-600">
                          <span className="font-medium">Luxury Suites</span> -
                          0.3 miles away, from $275/night
                        </li>
                        <li className="text-sm text-gray-600">
                          <span className="font-medium">Comfort Inn</span> - 0.8
                          miles away, from $180/night
                        </li>
                        <li className="text-sm text-gray-600">
                          <span className="font-medium">City View Hotel</span> -
                          1.2 miles away, from $150/night
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
