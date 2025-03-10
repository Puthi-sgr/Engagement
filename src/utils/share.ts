export const shareInvitation = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Sarah & James's Wedding",
        text: "Join us in celebrating our special day!",
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  }
};