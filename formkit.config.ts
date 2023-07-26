import { defineFormKitConfig } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import twTheme from "./tailwind-theme";

export default defineFormKitConfig({
  icons: { ...genesisIcons },
  config: {
    classes: generateClasses(twTheme),
  },
});
