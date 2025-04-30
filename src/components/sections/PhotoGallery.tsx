import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { PhotoZoomModalView } from "../PhotoZoomModalView";
import { Move, ZoomIn } from "lucide-react";
import "../../index.css";
import pic1 from "../../assets/gallery/1.webp";
import pic2 from "../../assets/gallery/2.webp";
import pic3 from "../../assets/gallery/3.webp";
import pic4 from "../../assets/gallery/4.webp";
import pic5 from "../../assets/gallery/5.webp";
import pic6 from "../../assets/gallery/6.webp";
import pic7 from "../../assets/gallery/7.webp";
import pic8 from "../../assets/gallery/8.webp";
import pic9 from "../../assets/gallery/9.webp";
import pic10 from "../../assets/gallery/10.webp";
import pic11 from "../../assets/gallery/11.webp";
import pic12 from "../../assets/gallery/12.webp";
import pic13 from "../../assets/gallery/13.webp";
import pic14 from "../../assets/gallery/14.webp";
import pic15 from "../../assets/gallery/15.webp";
import pic16 from "../../assets/gallery/16.webp";
import pic17 from "../../assets/gallery/17.webp";
import pic18 from "../../assets/gallery/18.webp";
import pic19 from "../../assets/gallery/19.webp";
import pic20 from "../../assets/gallery/20.webp";
import pic21 from "../../assets/gallery/21.webp";
import pic22 from "../../assets/gallery/22.webp";
import pic23 from "../../assets/gallery/23.webp";
import { select } from "framer-motion/client";
/*turns array of key value pair into object of key value pairs*/
export interface Photo {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  cluster: "ceremony" | "engagement" | "family" | "friends";
}

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const photos: Photo[] = [
    {
      id: "1",
      url: pic6,
      alt: "",
      width: 2,
      height: 2,
      cluster: "engagement",
    },
    {
      id: "2",
      url: pic2,
      alt: "",
      width: 2,
      height: 1,
      cluster: "engagement",
    },
    {
      id: "3",
      url: pic3,
      alt: "",
      width: 2,
      height: 2,
      cluster: "engagement",
    },
    {
      id: "5",
      url: pic5,
      alt: "",
      width: 2,
      height: 1,
      cluster: "ceremony",
    },
    {
      id: "6",
      url: pic1,
      alt: "",
      width: 2,
      height: 1,
      cluster: "family",
    },
    {
      id: "7",
      url: pic7,
      alt: "",
      width: 1,
      height: 1,
      cluster: "ceremony",
    },
    {
      id: "8",
      url: pic8,
      alt: "",
      width: 2,
      height: 1,
      cluster: "friends",
    },
    {
      id: "9",
      url: pic9,
      alt: "",
      width: 2,
      height: 1,
      cluster: "ceremony",
    },
    {
      id: "11",
      url: pic11,
      alt: "",
      width: 1,
      height: 1,
      cluster: "family",
    },
    {
      id: "12",
      url: pic12,
      alt: "",
      width: 2,
      height: 2,
      cluster: "family",
    },
    {
      id: "14",
      url: pic14,
      alt: "",
      width: 2,
      height: 2,
      cluster: "family",
    },
    {
      id: "15",
      url: pic15,
      alt: "",
      width: 2,
      height: 1,
      cluster: "family",
    },
    {
      id: "16",
      url: pic23,
      alt: "",
      width: 1,
      height: 1,
      cluster: "ceremony",
    },
    {
      id: "17",
      url: pic17,
      alt: "",
      width: 1,
      height: 1,
      cluster: "friends",
    },
    {
      id: "18",
      url: pic18,
      alt: "",
      width: 1,
      height: 1,
      cluster: "ceremony",
    },
    {
      id: "19",
      url: pic19,
      alt: "",
      width: 1,
      height: 1,
      cluster: "friends",
    },
    {
      id: "20",
      url: pic20,
      alt: "",
      width: 2,
      height: 2,
      cluster: "ceremony",
    },
    {
      id: "21",
      url: pic21,
      alt: "",
      width: 2,
      height: 1,
      cluster: "ceremony",
    },
  ];

  return (
    <motion.section
      className="py bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Custom Cursor */}

      <div className="container mx-auto px-4 pt-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Camera className="w-12 h-12 text-gold-600" />
          </div>
          <h2 className="text-3xl md:text-2xl font-serif mb-6 text-gold-800">
            កម្រងរូបភាពអនុស្សាវរីយ៍
          </h2>
        </motion.div>
        {/* Draggable Photo Grid */}
        <div className="relative">
          <div className="absolute inset-0 rounded-xl border-4 border-gold-200" />
          <div className="overflow-hidden border-4 border-gold-100 p-4 bg-transparent shadow-lg relative">
            <div ref={constraintsRef} className="overflow-hidden relative">
              <motion.div
                className="grid grid-cols-6 md:grid-cols-6 gap-2 min-h-[400px] w-[calc(100%+200px)]"
                drag="x"
                dragConstraints={constraintsRef}
                dragElastic={0}
                initial={false} // Disable initial animation
                onDragStart={() => setIsInteracting(true)}
                onDragEnd={() => setTimeout(() => setIsInteracting(false), 100)}
                style={{ touchAction: "pan-x" }} // Optimize for touch
              >
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className={`relative overflow-hidden rounded-lg shadow-sm cursor-pointer transform transition-transform duration-300 hover:scale-[1.03]
                      ${photo.width === 2 ? "col-span-2" : "col-span-1"}
                      ${photo.height === 2 ? "row-span-2" : "row-span-1"}
                    `}
                    onClick={() => {
                      if (!isInteracting) setSelectedPhoto(photo);
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover aspect-square"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        {/* Photo Zoom Modal */}
        {selectedPhoto && (
          <PhotoZoomModalView
            setSelectedPhoto={setSelectedPhoto}
            selectedPhoto={selectedPhoto}
            photos={photos}
          />
        )}
      </div>
    </motion.section>
  );
}
