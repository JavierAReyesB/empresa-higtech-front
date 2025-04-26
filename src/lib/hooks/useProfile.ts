import { resources } from "@/dictionaries";
import { ProfileType } from "@/dictionaries";
import { PROFILE_CONFIG } from "@/lib/config";

// Hook to get profile data for components
export function useProfile() {
  // Get current profile resources
  const profileData = resources.get();
  
  // Return profile data and helper functions
  return {
    // Current profile type
    profileType: PROFILE_CONFIG.CURRENT_PROFILE as ProfileType,
    
    // Profile data
    data: profileData,
    
    // Helper function to check current profile
    is: (profile: ProfileType) => PROFILE_CONFIG.CURRENT_PROFILE === profile
  };
}