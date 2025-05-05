import React, { useEffect, useState, useCallback, Suspense, lazy } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Footer } from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { FormalRequest } from "./components/sections/FormalRequest";
import { EventTimeline } from "./components/sections/EventTimeline";
import { VenueInformation } from "./components/sections/VenueInformation";
import { OurStory } from "./components/sections/OurStory";
import { GiftRegistry } from "./components/sections/GiftRegistry";
import { shareInvitation } from "./utils/share";
import { EntryScreen } from "./components/EntryScreen";
import { AudioControls } from "./components/AudioControls";
import useAudio from "./hooks/useAudio";
import VideoBackground from "./assets/video/VideoStaticBackground.mp4";

const PhotoGallery = lazy(
  () => import("./components/sections/PhotoGallery/PhotoGallery")
);
const InvitationDetails = lazy(
  () => import("./components/sections/InvitationDetails")
);
function App() {
  const [entryScreenVisible, setEntryScreenVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of component is visible
    triggerOnce: true, // Only trigger once
  });
  const { isPlaying, isMuted, toggleMute, startAudio } = useAudio();

  //Memoize handleScroll
  const handleScroll = useCallback(() => setScrollY(window.scrollY), []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleEnter = useCallback(() => {
    setEntryScreenVisible(false);
    startAudio();
  }, [startAudio]);

  if (entryScreenVisible) {
    return (
      <>
        <EntryScreen onEnter={handleEnter} />
      </>
    );
  }

  return (
    <AnimatePresence>
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-10 video-overlay "
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={VideoBackground} type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <motion.div
        className="relative bg-cover bg-center bg-fixed bg-repeat-y overflow-hidden" // style={{ backgroundImage: `url(${BodyFrame})` }}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <AudioControls isMuted={isMuted} toggleMute={toggleMute} />

        <Header />

        <FormalRequest onShare={shareInvitation} />
        <VenueInformation />
        <Suspense>
          <InvitationDetails />
        </Suspense>
        <div ref={ref}>
          <EventTimeline />
        </div>

        {inView && (
          <Suspense>
            <PhotoGallery />
          </Suspense>
        )}
        <OurStory scrollY={scrollY} />
        {/* <RSVP /> */}
        <GiftRegistry />
        <Footer onShare={shareInvitation} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
