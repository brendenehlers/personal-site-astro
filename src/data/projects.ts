export type Project = {
  title: string
  techs: string[]
  link: string
  description: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    title: "Joyner",
    techs: ["ReactJS", "Supabase"],
    link: "",
    description: "A time slot management app designed to help groups organize their events.",
    isComingSoon: true,
  },
]

export default projects
