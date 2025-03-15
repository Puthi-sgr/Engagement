import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Move, ZoomIn } from "lucide-react";

interface Photo {
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

  // Sample photo data
  const photos: Photo[] = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Couple holding hands",
      width: 2,
      height: 2,
      cluster: "engagement",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Couple portrait",
      width: 1,
      height: 1,
      cluster: "engagement",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Couple laughing",
      width: 1,
      height: 1,
      cluster: "engagement",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Wedding ceremony",
      width: 2,
      height: 1,
      cluster: "ceremony",
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Wedding venue",
      width: 1,
      height: 1,
      cluster: "ceremony",
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1519741347686-c1e331fcb4d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Family photo",
      width: 1,
      height: 1,
      cluster: "family",
    },
    {
      id: "7",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Bride and groom",
      width: 1,
      height: 2,
      cluster: "ceremony",
    },
    {
      id: "8",
      url: "https://images.unsplash.com/photo-1470816692786-37612e4f7ef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Friends celebrating",
      width: 1,
      height: 1,
      cluster: "friends",
    },
    {
      id: "9",
      url: "https://images.unsplash.com/photo-1482575832494-771f74bf6857?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Wedding details",
      width: 1,
      height: 1,
      cluster: "ceremony",
    },
    {
      id: "10",
      url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      alt: "Family gathering",
      width: 2,
      height: 1,
      cluster: "family",
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
      className="py-24 bg-white relative overflow-hidden"
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

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Our Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our favorite memories and special moments.
            <span className="hidden md:inline">
              {" "}
              Drag to explore and click to enlarge.
            </span>
          </p>
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
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div ref={constraintsRef} className="overflow-hidden relative">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 min-h-[500px] w-[calc(100%+200px)]"
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
                  className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer
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
                    className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <p className="text-sm font-light">{photo.alt}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Instruction */}
        <div className="md:hidden text-center mt-6 text-sm text-gray-500">
          <p>Swipe left or right to explore more photos</p>
        </div>

        {/* Photo Zoom Modal */}
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white bg-gold-600/20 backdrop-blur-sm p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-lg">{selectedPhoto.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
