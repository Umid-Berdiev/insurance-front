import { createI18n } from "vue-i18n";
import uz from "./uz.json";
import ru from "./ru.json";

// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
  uz,
  ru,
};

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: "uz", // set locale
  fallbackLocale: "uz", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

export default i18n;
