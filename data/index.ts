export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I value client collaboration, fostering clear and open communication to achieve exceptional results.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I adapt seamlessly to different time zones, ensuring effective and timely communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Technology Arsenal",
    description: "Committed to continuous growth.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A tech enthusiast driven by a passion for innovation and development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently crafting a sophisticated UI library.",
    description: "Behind the Scenes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Shall we collaborate on an exciting project?",
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
    title: "Dropbox Clone using firestore bucket",
    des: "The Dropbox Clone is a file storage and sharing platform that mimics the core functionality of Dropbox, allowing users to upload, organize, and share their files seamlessly.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fire.svg", ],
    link: "/news-app-flutter",
  },
  {
    id: 2,
    title: "QR-Based Child Safety App: Case Study",
    des: "The QR-Based App is a mobile and web application designed to simplify the process of sharing contact information and location details securely via QR codes. ",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/postgres.svg", "/drizzle.jpg"],
    link: "#",
  },
  {
    id: 3,
    title: "News App Android/Ios",
    des: "Developed RSS news reading apps provide users with a centralized platform to consume news from multiple sources. ",
    img: "/p3.svg",
    iconLists: [ "/flutter.svg","/playstore.svg","/applestore1.svg" ],
    link: `news-app-flutter`,
    caseStudy: true,
  },
  {
    id: 4,
    title: "E-Commerce Website",
    des: "Car Squad India website using Next.js for server-side rendering and performance, Tailwind CSS for responsive and modern styling, and AWS S3 for static asset storage and delivery. ",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "light.svg", ],
    link: "#",
  },
  {
    id: 5,
    title: "Enterprise Ready Analytics Portal",
    des: "The Xamahar Project, supported by the World Bank, required a data-driven dashboard to manage extensive data collection and reporting. The solution included more than 20 dynamic forms for data entry, 7 interactive dashboards, and API design for data import/export in CSV format. ",
    img: "/p4.svg",
    iconLists: ["/nodejs.svg", "/js.svg", "/mongodb.svg", ],
    link: "#",
  },
  {
    id: 6,
    title: "Static Website for Avant Experential",
    des: "evelopment of a static website for an agency specializing in event organizing, mall decor, art installations, brand activations, and wedding planning. The website was built using pure HTML, CSS, and JavaScript, focusing on simplicity, performance, and aesthetic appeal. ",
    img: "/p4.svg",
    iconLists: ["/js.svg", "/html.svg", "/css.svg", ],
    link: "#",
  },
  {
    id: 7,
    title: "SP-Arts Dashboard Front-End Design",
    des: "SP-Arts required an intuitive and responsive dashboard to manage and visualize data effectively. The goal was to design and implement a modern, user-friendly front-end interface that enhances user experience while ensuring performance and scalability ",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", ],
    link: "#",
  },
  {
    id: 8,
    title: "HomeLab",
    des: "The homelab project aimed to create a self-hosted, private cloud environment for running various services and applications. Utilizing tools like Proxmox, Portainer, ZeroTier/Cloudflare Tunnels, Home Assistant, TrueNAS, and Docker containers, the setup ensures efficient resource management, high availability, and seamless remote access. ",
    img: "/p4.svg",
    iconLists: ["/prox.svg", "/docker.svg",  "/ha.svg", ],
    link: "#",
  },
  {
    id: 9,
    title: " Dainik Sambad News App",
    des: "Wordpress Backend as Headless CMS for fetching the data. Provided featured like login, bookmark, live TV, Read Aloud, Weather, language change etc. A complete flutter frontend app. ",
    img: "/p4.svg",
    iconLists: ["/word.svg", "/flutter.svg", "/light.svg",  ],
    link: "#",
  },
  {
    id: 10,
    title: "News Website",
    des: "The News App is a modern, responsive media website designed to deliver real-time news updates across various categories. Built with the WordNews API, this platform allows users to access the latest news articles from different sources, offering a seamless and dynamic user experience.  ",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/ts.svg", "/js.svg", "/tail.svg", ],
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "`Collaborating with Naveed and the WebWorx team was an exceptional experience. Naveed's professionalism, technical expertise, and unwavering commitment to delivering top-tier results shone through at every stage of our project. His passion for web development and keen eye for detail set him apart. If you're looking to transform your website and elevate your brand's online presence, Navid and WebWorx are the perfect partners to bring your vision to life.`",
    name: "Rohit",
    title: "Webworx Manager",
  },
  {
    quote:
      "Working with Naveed was an absolute pleasure. His professionalism, timeliness, and unwavering dedication to achieving exceptional results were evident throughout our collaboration. Naveed's passion for every aspect of development truly sets him apart. If you're looking to elevate your website and enhance your brand, Naveed is the perfect partner to help you achieve your goals.",
    name: "Zubeen",
    title: "LLIT",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer-Webworx",
    desc: "Development of full life-cycle of web-based and mobile-based platform using Next.js, Node.js & Flutter.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer/Social Media Executive",
    desc: "Designed and maintained Car Squad India website and oversee thier social handles",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App/web Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web Dev Intern",
    desc: "Developed and maintained user-facing features using modern frontend technologies and wordpress.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/DOCTOR29"
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/naveed-islam-546bba127/"
  },
];

export const leftLists = ['Flutter', 'Next.js','Node.js']
export const rightLists = ['AWS', 'Postgres','MongoDb']