import React from "react";
import { Photo } from "./sections/PhotoGallery";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { useScrollLock } from "../hooks/useScrollLock";

interface ModalView {
  setSelectedPhoto: (photo: Photo | null) => void;
  selectedPhoto: Photo;
  photos: Photo[];
}

export const PhotoZoomModalView = ({
  selectedPhoto,
  setSelectedPhoto,
  photos,
}: ModalView) => {
  const getNextPhotoIndex = (currentId: string) => {
    const currentIndex = photos.findIndex((photo) => photo.id === currentId);
    return (currentIndex + 1) % photos.length; //wraps around the photos, avoid overflow of index.
  };

  const getPrevPhotoIndex = (currentId: string) => {
    const currentIndex = photos.findIndex((photo) => photo.id === currentId);
    return (currentIndex - 1 + photos.length) % photos.length;
  };

  const handleNextPhoto = () => {
    if (selectedPhoto) {
      const nextIndex = getNextPhotoIndex(selectedPhoto.id);
      return setSelectedPhoto(photos[nextIndex]);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhoto) {
      const prevIndex = getPrevPhotoIndex(selectedPhoto.id);
      return setSelectedPhoto(photos[prevIndex]);
    }
  };

  useScrollLock(true);
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedPhoto(null)}
    >
      <motion.button
        className="absolute  z-10 left-4 top-1/2 -translate-y-1/2 text-white bg-gold-600/20 backdrop-blur-sm p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          handlePrevPhoto();
        }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        className="absolute  z-10 right-4 top-1/2 -translate-y-1/2 text-white bg-gold-600/20 backdrop-blur-sm p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          // Add next photo logic here
        }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>
      <motion.button
        className="absolute top-6 right-6 z-10 text-white bg-gold-600/20 backdrop-blur-sm p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSelectedPhoto(null)}
      >
        <X className="w-6 h-6" />
      </motion.button>

      <motion.div
        className="relative max-w-xl max-h-[100%] overflow-hidden rounded-lg"
        initial={{ scale: 0.9 }}
        animate={{
          scale: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
        }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = Math.abs(offset.x) * velocity.x;

          if (swipe < -1000) {
            handleNextPhoto();
          } else if (swipe > 1000) {
            handlePrevPhoto();
          }
        }}
      >
        <motion.div
          className="relative max-w-3xl max-h-[80vh] overflow-hidden rounded-lg"
          initial={{ scale: 0.9 }}
          animate={{
            scale: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
            },
          }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            src={selectedPhoto.url}
            alt={selectedPhoto.alt}
            initial={{ scale: 0.9 }}
            animate={{
              scale: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            exit={{ scale: 0.9 }}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-lg">{selectedPhoto.alt}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
