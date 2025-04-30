import React, { useEffect, useState, useCallback, Suspense, lazy } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FormalRequest } from "./components/sections/FormalRequest";
import { InvitationDetails } from "./components/sections/InvitationDetails";
import { EventTimeline } from "./components/sections/EventTimeline";
import { VenueInformation } from "./components/sections/VenueInformation";
import { PhotoGallery } from "./components/sections/PhotoGallery";
import { OurStory } from "./components/sections/OurStory";
import { GiftRegistry } from "./components/sections/GiftRegistry";
import { addToCalendar } from "./utils/calendar";
import { shareInvitation } from "./utils/share";
import { EntryScreen } from "./components/EntryScreen";
import { AudioControls } from "./components/AudioControls";
import { VideoIntro } from "./components/VideoIntro";
import useAudio from "./hooks/useAudio";

import VideoBackground from "./assets/video/VideoStaticBackground.mp4";

function App() {
  const [entryScreenVisible, setEntryScreenVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const { isPlaying, isMuted, toggleMute, startAudio } = useAudio();

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1.01, 1.5], {
    clamp: true,
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.3 /*scroll range*/],
    [1, 0], // Direct pixel values
    { clamp: true }
  );

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

        <Header
          scrollY={scrollY}
          heroScale={heroScale}
          heroOpacity={heroOpacity}
        />
        <FormalRequest
          onAddToCalendar={addToCalendar}
          onShare={shareInvitation}
        />
        {/* <CouplePortrait /> */}
        <InvitationDetails
        // leftColumnY={leftColumnY}
        // rightColumnY={rightColumnY}
        />
        <EventTimeline />
        <VenueInformation />
        <PhotoGallery />
        <OurStory scrollY={scrollY} />
        {/* <RSVP /> */}
        <GiftRegistry />
        <Footer onShare={shareInvitation} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
