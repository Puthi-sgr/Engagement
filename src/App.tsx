import React, { useEffect, useState } from "react";
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
import { AdditionalDetails } from "./components/sections/AdditionalDetails";
import { GiftRegistry } from "./components/sections/GiftRegistry";
import { addToCalendar } from "./utils/calendar";
import { shareInvitation } from "./utils/share";
import { EntryScreen } from "./components/EntryScreen";
import { AudioControls } from "./components/AudioControls";
import { DecorativeBorder } from "./components/DecorativeBorder";
import { VideoIntro } from "./components/VideoIntro";
import useAudio from "./hooks/useAudio";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [entryScreenVisible, setEntryScreenVisible] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const { isPlaying, isMuted, toggleMute, startAudio } = useAudio();

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const leftColumnY = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);
  const rightColumnY = useTransform(scrollYProgress, [0.3, 0.6], [-50, 50]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = () => {
    setEntryScreenVisible(false);
    setShowVideo(true);
    startAudio();
  };

  const handleVideoComplete = () => {
    setShowVideo(false);
  };

  if (entryScreenVisible) {
    return (
      <>
        <DecorativeBorder />
        <EntryScreen onEnter={handleEnter} />
      </>
    );
  }

  if (showVideo) {
    return <VideoIntro onComplete={handleVideoComplete} />;
  }

  if (isLoading) {
    return (
      <>
        <DecorativeBorder />
        <Loading />
      </>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <DecorativeBorder />
        <AudioControls isMuted={isMuted} toggleMute={toggleMute} />
        <Header
          scrollY={scrollY}
          heroScale={heroScale}
          heroOpacity={heroOpacity}
        />
        <FormalRequest />
        <CouplePortrait />
        <InvitationDetails
          leftColumnY={leftColumnY}
          rightColumnY={rightColumnY}
        />
        <DateAndVenue
          onAddToCalendar={addToCalendar}
          onShare={shareInvitation}
        />
        <EventTimeline />
        <VenueInformation />
        <PhotoGallery />
        <OurStory scrollY={scrollY} />
        <RSVP />
        <GiftRegistry />
        <AdditionalDetails />
        <Footer onShare={shareInvitation} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
