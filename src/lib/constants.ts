import { addDays, format } from "date-fns";
import { ro } from "date-fns/locale";

// CTA Link - Registration link
export const CTA_LINK = "https://yuuki.training/skills_pentru_2026_reg";

// Function to get CTA link with UTM parameters and partner code
export const getCTALink = (): string => {
  const baseUrl = CTA_LINK;
  const currentParams = new URLSearchParams(window.location.search);
  
  // UTM parameters and partner code to forward
  const paramsToForward = [
    'utm_source',
    'utm_medium', 
    'utm_campaign',
    'utm_content',
    'utm_term',
    'gcpc'
  ];
  
  const forwardedParams = new URLSearchParams();
  
  paramsToForward.forEach(param => {
    const value = currentParams.get(param);
    if (value) {
      forwardedParams.set(param, value);
    }
  });
  
  const queryString = forwardedParams.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

// Dynamic date functions - always returns tomorrow's date
export const getTomorrowDate = (): string => {
  const tomorrow = addDays(new Date(), 1);
  return format(tomorrow, "d MMMM yyyy", { locale: ro });
};

export const getTomorrowDateShort = (): string => {
  const tomorrow = addDays(new Date(), 1);
  return format(tomorrow, "d MMMM", { locale: ro });
};

export const getDayBeforeTomorrow = (): string => {
  return format(new Date(), "d MMMM", { locale: ro });
};

// Webinar details
export const WEBINAR_DATE = getTomorrowDate();
export const WEBINAR_TIME = "19:00";
export const WEBINAR_DURATION = "2 ore";
