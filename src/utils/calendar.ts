import { atcb_action } from 'add-to-calendar-button';

export const addToCalendar = () => {
  atcb_action({
    name: "Sarah & James's Wedding",
    startDate: "2024-09-14",
    startTime: "16:00",
    endDate: "2024-09-14",
    endTime: "23:00",
    location: "The Grand Plaza Hotel, 123 Elegant Avenue, New York, NY",
    description: "Join us in celebrating our wedding day!",
    options: ['Apple', 'Google', 'iCal', 'Outlook.com', 'Yahoo'],
    timeZone: "America/New_York",
    hideBackground: true,
    styleLight: `
      --btn-background: #D4AF37;
      --btn-text: #FFFFFF;
      --font: 'Cormorant Garamond', serif;
      --btn-border: none;
      --btn-shadow: none;
      --btn-border-radius: 9999px;
      --btn-padding: 1rem 2rem;
    `
  });
};