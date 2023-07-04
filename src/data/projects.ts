export type Project = {
  title: string
  techs: string[]
  link: string
  description: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    title: "Project Whitefish",
    techs: ["ReactJS", "Supabase"],
    link: "https://github.com/MaeWolff/dictionary-app",
    description: "A time slot management app designed to help groups organize their events.",
    isComingSoon: true,
  },
];

export default projects;
