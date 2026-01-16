// CTA Link - Registration link
export const CTA_LINK = "https://yuuki.training/lectorium_reg_zap0801";

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

// Webinar details
export const WEBINAR_DATE = "20 Ianuarie 2026";
export const WEBINAR_TIME = "19:00";
export const WEBINAR_DURATION = "2 ore";
