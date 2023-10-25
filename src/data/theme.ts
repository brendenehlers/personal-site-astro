import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    primaryHover: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "orange",
    primaryHover: "lightorange",
    blur: {
      top: "orange",
      bottom: "violet",
    },
  },
};

export default theme;
