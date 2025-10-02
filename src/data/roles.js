export const roles = [
  {
    id: 1,
    company: "Forkist",
    title: "Backend Engineer",
    dates: [new Date(2020, 7), new Date(2021, 11)],
    location: "Hoboken, NJ",
    bullets: [
      "Spearheaded the development of a mobile food-finding application and social network, leveraging Node.js and MongoDB to create a robust REST API with the Express framework.",
      "Designed and developed the push notification service architecture for the app, utilizing Google Cloud Run, Cloud Pub/Sub message queues, and the Node Expo Server SDK - boosting user engagement by 160%.",
      "Implemented pagination and improved efficiency across the platform, reducing feed and profile loading times from 30+ seconds down to < 1 second.",
      "Managed the backend development process by identifying and prioritizing tasks and conducting thorough code reviews to ensure quality and consistency throughout the API.",
    ],
    tags: ["Backend Dev", "Node.js", "REST API Dev", "GCP", "MongoDB", "Expo SDK"],
    image: "/experience/forkist/logo.png"
  },
  {
    id: 2,
    company: "Social Edge Consulting",
    title: "Developer",
    dates: [new Date(2021, 6), new Date(2023, 4)],
    location: "Remote",
    bullets: [
      "Collaborated with clients to understand their technology requirements and delivered effective solutions that met their needs.",
      "Led a complex migration project that involved moving hundreds of thousands of content items from one web platform to another, utilizing Groovy to develop customized migration tooling that is used in all new migrations.",
      "Developed internal data migration tooling to automate hours of manual work to be done in seconds.",
      "Developed custom widgets, automations, themes, and web apps to enhance the functionality and user experience of websites and web applications.",
      "Created Jira workflows and automations to streamline project management processes and increase efficiency.",
    ],
    tags: ["Java", "Groovy", "Web Dev", "JavaScript"],
    image: "experience/social-edge-consulting/logo.png"
  },
  {
    id: 3,
    company: "LetsBe Solutions",
    title: "Software Engineer",
    dates: [new Date(2024, 3), new Date(2024, 11)],
    location: "Remote",
    bullets: [
      "Developed an AI-powered assistant using OpenAI's GPT models, enabling users to perform business tasks like scheduling and workflow automation through API integrations.",
      "Integrated APIs for open-source tools to streamline business operations and centralize access to critical functionalities.",
      "Enhanced platform scalability by implementing customizable automation workflows tailored to diverse client needs.",
      "Built user-focused features for CRM, analytics, and task management, improving platform usability and engagement.",
    ],
    tags: ["Python", "LLM App Dev", "GPT / OpenAI API", "JavaScript"],
    image: "experience/letsbe-solutions/logo.png"
  },
];
