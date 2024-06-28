export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "With over 3 years of experience in building robust and scalable solutions, I bring a wealth of expertise in backend development. As a Software Development Engineer (SDE), I am driven by the ambition to drive impactful change and create positive transformations through technology.\n" +
        "\n" +
        "My deep expertise in cloud technologies enables me to architect high-quality solutions that meet modern demands. My professional journey includes working as an SDE at Amazon, freelancing, and contributing to startups, equipping me with the adaptability to thrive in fast-paced and dynamic environments.\n" +
        "\n" +
        "I am actively seeking new opportunities to apply my skills and knowledge, aiming to make a meaningful impact in the tech industry. Let's connect and explore how I can contribute to your team's success.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm experienced working with global teams",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-52",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I am always learning new skills",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Extensive backend and full stack experience",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b2.svg",
  },

  {
    id: 5,
    title: "Currently building a Soccer Live Score Tracker",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b3.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Serverless document chat application",
    des: "This application allows you to ask natural language questions of any PDF document you upload",
    img: "/projects/serverless-chat-app-ai.png",
    iconList: [
      "/icons/re.svg",
      "/icons/tail.svg",
      "/icons/nodejs.svg",
      "/icons/ts.svg",
      "/icons/javascript.svg",
      "/icons/Lambda.svg",
      "/icons/pinecone-db.svg",
      "/icons/dynamodb.svg",
      "/icons/amazon-web-services.svg"
    ],
    link: "",
    github: "https://github.com/pushpsood/PDFGenAIChatBot",
  },
  {
    id: 2,
    title: "Infoherd: News and Entertainment website",
    des: "Infoherd provides you with refreshing articles to entertain, refresh everyone",
    img: "/projects/infoherd.jpg",
    iconList: [
      "/icons/wordpress.svg",
      "/icons/google-cloud.svg",
      "/icons/cloud_sql.svg",
      "/icons/file-type-php.svg",
      "/icons/cloudflare.svg"
    ],
    link: "",
    github: "",
  }
];

export const experience = [
  {
    id: 1,
    title: "Software Development Engineer",
    company: "Industrility",
    duration: "January 2024 - March 2024",
    desc: "After-sales platform for manufacturers, distributors, builders, integrators. Worked on" +
        "comprehensive serverless stack and build efficient tools for monitoring and backup.",
    thumbnail: "/experience/industrility.jpeg",
  },
  {
    id: 2,
    title: "Software Development Engineer",
    company: "Amazon",
    duration: "August 2021 - December 2023",
    desc: "Worked with Alexa where I owned the \"speechlet\" – a rule engine designed to guide the flow of disambiguation and entity resolution from intricate selections. " +
        "Post that worked on service catering to HR employees, enabling them to submit pay adjustments for staff across the world. My responsibilities extended to managing" +
        " the sensitive financial and personal data of employees.",
    thumbnail: "/experience/amazon.svg",
  },
  {
    id: 3,
    title: "Software Development Intern",
    company: "Amazon",
    duration: "Jan 2021 - July 2021",
    desc: "I got exposure to wide variety of tools and help from one of the most knowledgable developer community. " +
        "This internship made made me incredibly efficient while working and helped me tackle ambiguous & and complex problems with structure.",
    thumbnail: "/experience/amazon.svg",
  },
  {
    id: 4,
    title: "Cloud Architect and Developer",
    duration: "March 2020 - April 2020",
    company: "Upwork",
    desc: "Tested my limits and verified I can work on projects at scale. Upwork gave me the platform to take this challenge, " +
        "experience the pressure of deadlines, and test my skills in realistic circumstances.",
    thumbnail: "/experience/upwork.svg",
  },
  {
    id: 5,
    title: "Founder",
    duration: "Jan 2019 - Jan 2021",
    company: "Infoherd",
    desc: "Brain behind InfoHerd, scaled the platform to easily serve an audience of 1 Million using autoscaling. " +
        "Started from shared host to then finally settling with GCP infra.",
    thumbnail: "/experience/infoherd.png",
  }
];

export const socialMedia = [
  {
    id: 1,
    url: "https://github.com/pushpsood",
    img: "/git.svg",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/pushpsood/",
    img: "/link.svg",
  },
];


