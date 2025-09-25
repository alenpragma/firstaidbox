import { create } from "zustand";

const useAppStore = create((set) => ({
  appData: {
    app_name: "",
    logo: "",
    favicon: "",
    social_links: {
      facebook: null,
      twitter: null,
      instagram: null,
      youtube: null,
      linkedin: null,
      tiktok: null,
      messenger: null,
      whatsapp: null,
    },
    contact_numbers: {
      primary: null,
      secondary: null,
    },
    advance_pay_description: "",
    google_tag_manager: null,
    domain_verification: null,
    header_scripts: null,
    footer_scripts: null,
    footer_content: null,
  },

  // ✅ set full data
  setAppData: (data) => set({ appData: data }),

  // ✅ update partial data
  updateAppData: (partialData) =>
    set((state) => ({
      appData: { ...state.appData, ...partialData },
    })),
}));

export default useAppStore;
