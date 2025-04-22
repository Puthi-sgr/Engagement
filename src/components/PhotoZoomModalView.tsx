import React, { useState, useEffect } from "react";
import { Photo } from "./sections/PhotoGallery";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);
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
      setDirection(1);
      const nextIndex = getNextPhotoIndex(selectedPhoto.id);
      return setSelectedPhoto(photos[nextIndex]);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhoto) {
      setDirection(-1);
      const prevIndex = getPrevPhotoIndex(selectedPhoto.id);
      return setSelectedPhoto(photos[prevIndex]);
    }
  };
  useEffect(() => {
    const preventTouchMove = (e: TouchEvent) => {
      if (!isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isDragging]);

  useScrollLock(true);
  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedPhoto(null)}
    >
      <motion.button
        className="absolute  z-10 left-4 top-1/2 -translate-y-1/2 text-white bg-gold-600/20 backdrop-blur-sm p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          handlePrevPhoto();
        }}
      >
        <ChevronLeft className="w-8 h-8" />
      </motion.button>
      <motion.button
        className="absolute z-50 right-4 top-1/2 -translate-y-1/2 text-white bg-gold-600/20 backdrop-blur-sm p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          handleNextPhoto();
        }}
      >
        <ChevronRight className="w-8 h-8 " />
      </motion.button>
      <motion.button
        className="absolute top-6 right-6 z-10 text-white bg-gold-600/20 backdrop-blur-sm p-2 rounded-full"
        onClick={() => setSelectedPhoto(null)}
      >
        <X className="w-9 h-9" />
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
        dragElastic={0}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(e, { offset, velocity }) => {
          setIsDragging(false);

          // Updated swipe detection logic
          if (offset.x < -100 && Math.abs(velocity.x) > 0.5) {
            handleNextPhoto();
          } else if (offset.x > 100 && Math.abs(velocity.x) > 0.5) {
            handlePrevPhoto();
          }

          setDragPosition(0);
        }}
        onDrag={(e, { offset }) => {
          setDragPosition(offset.x);
        }}
      >
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={selectedPhoto.id}
            className="relative max-w-3xl max-h-[80vh] overflow-hidden rounded-lg"
            custom={direction}
            initial={{
              opacity: 0,
              x: direction * 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              },
            }}
            exit={{
              opacity: 0,
              x: direction * -20,
              transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              },
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-lg">{selectedPhoto.alt}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
