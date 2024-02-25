import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Devoloper",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Versatile Programmer ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor of Engineering",
      company_name: "Chaitanya Bharathi Institute Of Technology",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2021 - Jul 2024",
      points: [
        "First year: Gained proficiency in Python and initiated exploration of web development fundamentals.",
        "Second year: Mastered Java and SQL, essential for backend development and database management.",
        "Third year: Advanced skills in React.js and full-stack development tools for dynamic web applications.",
        "Fourth year: Specialized in React.js, completing multiple projects to demonstrate practical expertise in software engineering.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Consensus Acadamey",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams with Team Leaders,other Students to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other Students.",
      ],
    },
    {
      title: "CyberSecurity",
      company_name: "Final Year Project",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - July 2024",
      points: [
        "Implemented a secure communication system utilizing MATLAB, renowned for its effectiveness in image processing and cryptography research and development",
        "Conducted experiments to assess system security, focusing on encryption strength and computational efficiency.",
        "Demonstrated effectiveness of combining Post-Quantum Cryptography with image steganography for heightened security.",
        "Contributed to ongoing research, emphasizing need for robust encryption amidst quantum computing advancements.",
      ],
    }
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Social Post",
      description:
       'Designed and developed a real-time social media application called ‘Social Post ‘ , featuring user-friendly functionalities such as posting , liking , downloading , and deleting content. Also incorporated secure Google authentication for user sign-in',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanityio",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/younus123shaik/social_post",
    },
    {
      name: "Weather Report",
      description:
      "Online Weather Report System. This Project, Implemented with Both Frontend and Backend Technologies, Allows Users to Access Real-Time Weather Information for Any City Worldwide, Showcasing My Proficiency in Full-Stack Web Development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/younus123shaik/Weather-Report-",
    },
    {
      name: "Word Document",
      description:
        "A React.js frontend paired with Express.js and Socket.io backend for real-time.ensuring seamless document retrieval. Designed for optimal user interaction and robust data management, showcasing expertise in full-stack development.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/younus123shaik/word_document",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };