interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'DAO Masons',
    description: `Bespoke Web3 solutions. Inspired by game design.`,
    imgSrc: '/static/images/daomasonrook.png',
    href: 'https://www.daomasons.com/',
  },
  {
    title: 'Grant Ships',
    description: `Grant Ships is a novel approach to decide where funding goes in your Web3 community. Everyone gets to play a part, making choices together to support great projects. It's all about teamwork, clear choices, and making a big impact.`,
    imgSrc: '/static/images/grantships.png',
    href: 'https://grantships.fun',
  },
]

export default projectsData
