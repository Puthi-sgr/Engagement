import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { PhotoZoomModalView } from "../PhotoZoomModalView";
import { Move, ZoomIn } from "lucide-react";
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
  const [activeCluster, setActiveCluster] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [cursorVariant, setCursorVariant] = useState<
    "default" | "drag" | "zoom"
  >("default");
  const cursorRef = useRef<HTMLDivElement>(null);
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
  // Filter photos based on active cluster
  const filteredPhotos =
    activeCluster === "all"
      ? photos
      : photos.filter((photo) => photo.cluster === activeCluster);

  // Custom cursor movement
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Cursor variants
  const cursorVariants = {
    default: {
      opacity: 0,
      scale: 0.7,
    },
    drag: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    zoom: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="py bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-16 h-16 pointer-events-none z-50 flex items-center justify-center"
        variants={cursorVariants}
        animate={cursorVariant}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        {cursorVariant === "drag" && (
          <div className="bg-gold-600/30 backdrop-blur-sm rounded-full w-full h-full flex items-center justify-center">
            <Move className="text-white w-6 h-6" />
          </div>
        )}
        {cursorVariant === "zoom" && (
          <div className="bg-gold-600/30 backdrop-blur-sm rounded-full w-full h-full flex items-center justify-center">
            <ZoomIn className="text-white w-6 h-6" />
          </div>
        )}
      </motion.div>
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
        {/* Cluster Navigation */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {["all", "engagement", "ceremony", "family", "friends"].map(
            (cluster) => (
              <motion.button
                key={cluster}
                onClick={() => setActiveCluster(cluster)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCluster === cluster
                    ? "bg-gold-600 text-white"
                    : "bg-gold-50 text-gray-700 hover:bg-gold-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cluster.charAt(0).toUpperCase() + cluster.slice(1)}
              </motion.button>
            )
          )}
        </motion.div> */}
        {/* Draggable Photo Grid */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-xl border-4 border-gold-200 transform"
            style={{
              backgroundImage: "url('frame.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <motion.div
            className="overflow-hidden  border-4 border-gold-100 p-4 bg-transparent shadow-lg relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div ref={constraintsRef} className="overflow-hidden relative">
              <motion.div
                className="grid grid-cols-6 md:grid-cols-6 gap-2 min-h-[400px] w-[calc(100%+200px)]"
                drag="x"
                dragConstraints={constraintsRef}
                onMouseEnter={() => setCursorVariant("drag")}
                onMouseLeave={() => setCursorVariant("default")}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                initial={{ x: 0 }}
              >
                {filteredPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    className={`relative overflow-hidden rounded-lg shadow-sm cursor-pointer
                      ${photo.width === 2 ? "col-span-2" : "col-span-1"}
                      ${photo.height === 2 ? "row-span-2" : "row-span-1"}
                    `}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => setSelectedPhoto(photo)}
                    onMouseEnter={() => setCursorVariant("zoom")}
                    onMouseLeave={() => setCursorVariant("drag")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover aspect-square"
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-2 text-white z-20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <p className="text-xs font-light">{photo.alt}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>{" "}
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
