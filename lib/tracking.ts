export function trackEvent(name: "lead" | "callBooked" | "whatsappClick", source: string) {
  if (typeof window === "undefined") {
    return;
  }

  const tracker = (window as Window & {
    zaoTrack?: {
      lead?: (source?: string) => void;
      callBooked?: (source?: string) => void;
      whatsappClick?: () => void;
    };
  }).zaoTrack;

  if (!tracker) {
    return;
  }

  if (name === "lead") {
    tracker.lead?.(source);
    return;
  }

  if (name === "callBooked") {
    tracker.callBooked?.(source);
    return;
  }

  tracker.whatsappClick?.();
}
