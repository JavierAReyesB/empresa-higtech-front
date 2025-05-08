import { PROFILE_CONFIG } from "@/lib/config";
import omarProfile from "./profiles/omar";
import javierProfile from "./profiles/javier";

export type ProfileType = "OMAR" | "JAVIER";

// Helper function to get text content for a specific locale
export function getTextWithLocale(profile: any, section: string, isSpanish: boolean) {
  if (isSpanish && profile[section] && profile[section].es) {
    return profile[section].es;
  }
  return profile[section];
}

// Function to get text content based on current profile
export function getTextContent() {
  return PROFILE_CONFIG.CURRENT_PROFILE === "OMAR" ? omarProfile : javierProfile;
}

// Export resources for use in components
export const resources = {
  get: getTextContent,
  withLocale: getTextWithLocale
};