import React, { useEffect, useState, useCallback } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Loading } from "./components/Loading";
import { FormalRequest } from "./components/sections/FormalRequest";
import { CouplePortrait } from "./components/sections/CouplePortrait";
import { InvitationDetails } from "./components/sections/InvitationDetails";
import { DateAndVenue } from "./components/sections/DateAndVenue";
import { EventTimeline } from "./components/sections/EventTimeline";
import { VenueInformation } from "./components/sections/VenueInformation";
import { PhotoGallery } from "./components/sections/PhotoGallery";
import { OurStory } from "./components/sections/OurStory";
import { RSVP } from "./components/sections/RSVP";
import { GiftRegistry } from "./components/sections/GiftRegistry";
import { addToCalendar } from "./utils/calendar";
import { shareInvitation } from "./utils/share";
import { EntryScreen } from "./components/EntryScreen";
import { AudioControls } from "./components/AudioControls";
import { DecorativeBorder } from "./components/decorativeComponents/DecorativeBorder";
import { VideoIntro } from "./components/VideoIntro";
import useAudio from "./hooks/useAudio";
import BodyFrame from "./assets/images/Bodyframe.jpg";
import { DecorativeVideoBorder } from "./components/decorativeComponents/DecorativeVideoBorder";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [entryScreenVisible, setEntryScreenVisible] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const { isPlaying, isMuted, toggleMute, startAudio } = useAudio();

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1.01, 2], {
    clamp: true,
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.3 /*scroll range*/],
    [1, 0], // Direct pixel values
    { clamp: true }
  );

  const leftColumnY = useTransform(scrollYProgress, [0, 1], [50, 0], {
    clamp: true,
  });

  const rightColumnY = useTransform(scrollYProgress, [0, 1], [-50, 0], {
    clamp: true,
  });

  //Memoize handleScroll
  const handleScroll = useCallback(() => setScrollY(window.scrollY), []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleEnter = useCallback(() => {
    setEntryScreenVisible(false);
    setShowVideo(true);
    //startAudio();
  }, [startAudio]);

  const handleVideoComplete = () => {
    setShowVideo(false);
  };

  // if (entryScreenVisible) {
  //   return (
  //     <>
  //       <DecorativeBorder />
  //       <EntryScreen onEnter={handleEnter} />
  //     </>
  //   );
  // }

  // if (showVideo) {
  //   return <VideoIntro onComplete={handleVideoComplete} />;
  // }

  // if (isLoading) {
  //   return (
  //     <>
  //       <DecorativeBorder />
  //       <Loading />
  //     </>
  //   );
  // }

  return (
    <AnimatePresence>
      <motion.div
        className="relative bg-cover bg-center bg-fixed bg-repeat-y"
        style={{ backgroundImage: `url(${BodyFrame})` }}
        initial={{ opacity: 0, scale: 0.8 }}
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
