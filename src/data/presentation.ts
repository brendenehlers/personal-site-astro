export type Social = {
  label: string
  link: string
}

type Presentation = Record<string, any>

const presentation: Presentation = {
  mail: "me@brendenehlers.com",
  name: "Brenden",
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
}

export default presentation
