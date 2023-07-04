type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "me@brendenehlers.com",
  title: "Hey, I’m Brenden",
  description:
    "Welcome to my portfolio!  I'm a full-stack software developer based in Denver, Colorado.  I do most of my work in TypeScript and Java.  Currently learning Next.js and Java Spring.  Reach out if there's something I can help you with",
  socials: [
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/brendenehlers",
    },
    {
      label: "Github",
      link: "https://github.com/brendenehlers",
    },
  ],
};

export default presentation;
