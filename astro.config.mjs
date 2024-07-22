import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        carbon: [
          "location",
          "link",
          "identification",
          "construction",
          "education",
          "tools",
          "certificate",
          "pen",
          "volume-file-storage",
          "document-pdf",
          "location-person",
          "moon",
          "light",
          "email",
          "logo-github",
          "logo-linkedin",
        ],
        mdi: ["telegram"],
      },
    }),
    compress(),
  ],
});
