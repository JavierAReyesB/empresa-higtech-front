// Configuration for profile switching
export const PROFILE_CONFIG = {
  // Set to "OMAR" or "JAVIER" to switch profiles
  get CURRENT_PROFILE() {
    // Check for client-side storage if available
    if (typeof window !== "undefined") {
      const storedProfile = window.localStorage.getItem("profile-config");
      if (storedProfile === "OMAR" || storedProfile === "JAVIER") {
        return storedProfile;
      }
    }

    // Default profile
    return "JAVIER";
  },
};
