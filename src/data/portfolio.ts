// data/consultancyProjects.ts

export interface Project {
  id: string; // Unique identifier for the project (e.g., "digital-transformation-xyz")
  title: string; // Main title of the project (e.g., "Digital Transformation for Local Bank")
  tagline: string; // Short, catchy phrase (e.g., "Streamlining operations for enhanced customer experience")
  heroImage?: string; // Optional: Path to a hero image for the project (e.g., "/images/projects/bank-digital-hero.jpg")
  overview: string; // Detailed description of the project and its scope
  challenge: string; // The problem or challenge the client faced
  solution: string; // Techinika's approach and implemented solutions
  results: string; // Tangible outcomes and benefits achieved for the client
  client?: string; // Optional: Client name (e.g., "ABC Bank")
  industry: string; // Industry sector (e.g., "Financial Services")
  technologiesUsed?: string[]; // Optional: List of technologies (e.g., ["React", "Node.js", "AWS", "Figma"])
  date?: string; // Optional: Completion date or duration (e.g., "Q4 2024" or "6 Months")
}

export const consultancyProjects: Project[] = [
  {
    id: "sherrie-silver-foundation-mms",
    title: "Members Management System for Sherrie Silver Foundation",
    tagline:
      "Automating operations and enhancing data management for a global foundation.",
    heroImage:
      "https://images.unsplash.com/photo-1649406458887-2b6561c36a4d?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview:
      "Developed a comprehensive members management system for Sherrie Silver Foundation to streamline their operations, including insurance tracking, talent management, school fee administration, volunteer coordination, and show attendance reporting. This system replaced manual Excel processes, significantly improving efficiency.",
    challenge:
      "The foundation relied heavily on manual Excel sheets for managing a wide array of member data, leading to inefficiencies, data inconsistencies, and a time-consuming reporting process. This hindered their ability to scale and effectively support their members.",
    solution:
      "We designed and implemented a robust web-based members management system. The solution provided centralized dashboards for managing member insurance, tracking individual talents, automating school fee payments, organizing volunteer activities, and logging show attendance. Automated reporting features were integrated to provide real-time insights.",
    results:
      "The system automated key administrative processes, drastically reducing manual data entry and human error. It provided a single source of truth for all member information, enabling faster decision-making and more efficient resource allocation. The foundation gained the ability to generate accurate reports instantly, saving significant time and effort.",
    client: "Sherrie Silver Foundation",
    industry: "Non-profit / Arts & Culture",
    technologiesUsed: ["Node.js", "Next.js", "Tailwind CSS"],
    date: "Completed", // Adjust date if known
  },
  {
    id: "yali-rwanda-alumni-system",
    title: "Alumni Management System for YALI Rwanda Chapter",
    tagline:
      "Connecting and empowering alumni through a dynamic communication platform.",
    heroImage:
      "https://images.unsplash.com/photo-1649406458887-2b6561c36a4d?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview:
      "Built an interactive alumni management system for the YALI Rwanda Chapter to facilitate communication, information updates, and opportunity distribution among its members. The platform fosters a vibrant community and keeps the organization updated with alumni activities.",
    challenge:
      "YALI Rwanda needed a better way to engage with its growing alumni network, ensure members kept their information current, and efficiently share opportunities. Manual outreach and fragmented communication channels led to outdated data and missed connections.",
    solution:
      "We developed a dedicated alumni platform allowing members to update their profiles, engage in conversations, and receive important reminders. The system includes features for organizations to easily distribute opportunities and gain insights into their member base. Nodemailer was integrated for efficient email communications.",
    results:
      "The system significantly improved alumni engagement and data accuracy. Members are now more connected and informed about opportunities. The organization benefits from real-time updates on alumni activities, streamlining their outreach and impact measurement efforts.",
    client: "YALI Rwanda Chapter",
    industry: "Non-profit / Education & Leadership",
    technologiesUsed: ["Next.js", "Node.js", "MUI CSS", "Nodemailer"],
    date: "Completed", // Adjust date if known
  },
  {
    id: "ncsa-data-privacy-week-strategy",
    title: "Data Privacy Week Strategy & Promotion for NCSA",
    tagline:
      "Collaborating with the community to enhance national cybersecurity awareness.",
    heroImage:
      "https://images.unsplash.com/photo-1649406458887-2b6561c36a4d?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview:
      "In collaboration with our community, we assisted the National Cyber Security Authority (NCSA) in preparing their 2025 Data Privacy Week strategy. Our involvement included suggesting activities, planning, and promoting materials through our extensive community network.",
    challenge:
      "NCSA sought to maximize the impact of Data Privacy Week 2025 by developing a comprehensive strategy and ensuring widespread public engagement. They needed fresh ideas and effective outreach channels to reach a broader audience.",
    solution:
      "We facilitated multiple in-person and online meetings (via Webex) with the NCSA team and members of our tech community. We provided actionable suggestions for event activities, contributed to the overall planning, and leveraged our community's reach for promotional efforts, amplifying NCSA's message.",
    results:
      "Our collaboration contributed to a robust strategy for Data Privacy Week 2025, with innovative activity suggestions. The active participation of our community helped in effectively disseminating promotional materials, enhancing public awareness and engagement around data privacy.",
    client: "National Cyber Security Authority (NCSA) - Rwanda",
    industry: "Cybersecurity / Government",
    technologiesUsed: ["Webex", "Google Docs"],
    date: "2025",
  },
  {
    id: "rujo-rooms-guest-management",
    title: "Guest Management System for Rujo Rooms (Airbnb)",
    tagline:
      "Streamlining Airbnb operations with intuitive guest, room, and payment tracking.",
    heroImage:
      "https://images.unsplash.com/photo-1649406458887-2b6561c36a4d?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview:
      "Developed a user-friendly guest management system for Rujo Rooms, an Airbnb location, to efficiently handle guest check-ins, generate receipts, manage room statuses, track payments, oversee staff, and maintain operational notes with a visual calendar.",
    challenge:
      "Rujo Rooms faced challenges managing their Airbnb operations manually, leading to difficulties in tracking guest stays, issuing receipts, monitoring room availability, and keeping up-to-date payment records. This resulted in operational bottlenecks and potential revenue loss.",
    solution:
      "We built a custom guest management system using standard web technologies. The system features a clear calendar view for room occupancy, tools for generating digital receipts, real-time updates on room status, payment tracking functionalities, and modules for staff management and operational notes. Materialize CSS was used for the user interface.",
    results:
      "The system provided Rujo Rooms with a centralized and automated solution for their guest management needs. It significantly improved operational efficiency, reduced administrative overhead, and provided clear insights into occupancy and payments, leading to better decision-making and enhanced guest experience.",
    client: "Rujo Rooms",
    industry: "Hospitality / Airbnb",
    technologiesUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Materialize CSS",
    ],
    date: "2022", // Adjust date if known
  },
  {
    id: "volkswagen-ai-recommendations",
    title: "AI-Powered Operational Streamlining for Volkswagen Rwanda",
    tagline:
      "Strategic recommendations for optimizing mobility solutions with Artificial Intelligence.",
    heroImage:
      "https://images.unsplash.com/photo-1649406458887-2b6561c36a4d?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview:
      "As part of the Carnegie Mellon Industry Innovation Lab, our team collaborated with teams from Angola, Rwanda, and Uganda to analyze Volkswagen Rwanda Mobility Solutions' operations. We provided strategic recommendations for streamlining their processes using AI, based on in-depth interviews and documentation.",
    challenge:
      "Volkswagen Rwanda sought to identify opportunities for operational improvements and efficiency gains within their mobility solutions, specifically exploring how Artificial Intelligence could be leveraged to address existing bottlenecks.",
    solution:
      "Through extensive interviews conducted on Zoom with the Volkswagen Rwanda team and meticulous documentation using Google Docs, we performed a thorough analysis of their current operations. Based on our findings, we developed a comprehensive set of AI-driven recommendations aimed at optimizing various aspects of their mobility services.",
    results:
      "Provided Volkswagen Rwanda with actionable strategic recommendations for integrating AI into their operations, potentially leading to streamlined processes, improved efficiency, and enhanced service delivery. While implementation was not part of our scope, the detailed analysis and recommendations offered a clear roadmap for future innovation.",
    client:
      "Volkswagen Rwanda Mobility Solutions (via Carnegie Mellon Industry Innovation Lab)",
    industry: "Automotive / Mobility Solutions",
    technologiesUsed: ["Zoom", "Google Docs"],
    date: "2025 at CMU Industry Innovation Lab", // Adjust date if known
  },
  {
    id: "ishema-apartments-management-app",
    title: "Apartment & Tenant Management App for Ishema Apartments",
    tagline:
      "Modernizing property management with intuitive unit and payment tracking.",
    heroImage:
      "https://images.unsplash.com/photo-1649406458887-2b6561c36a4d?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview:
      "Developed a mobile application for Ishema Apartments to help them efficiently manage their various apartment buildings and individual units, including comprehensive tracking of payments and tenants.",
    challenge:
      "Ishema Apartments needed a centralized and efficient system to manage their diverse portfolio of apartments and units. Manual tracking of tenants, leases, and payments was cumbersome, prone to errors, and lacked real-time insights into their property portfolio.",
    solution:
      "We built a dedicated application that allows Ishema Apartments to manage different apartment buildings, track individual units within each building, monitor payment statuses, and maintain tenant records. The solution leverages low-code/no-code capabilities for rapid development and flexibility.",
    results:
      "The application provided Ishema Apartments with a streamlined and automated property management solution. It significantly improved the accuracy of payment tracking and tenant information, reducing administrative burden and enhancing overall operational control.",
    client: "Ishema Apartments",
    industry: "Real Estate / Property Management",
    technologiesUsed: ["Lovable AI Builder", "Supabase"],
    date: "Ongoing", // Adjust date if known
  },
  {
    id: "icp-rwanda-blockchain-art-tracking",
    title: "Blockchain Art Tracking System for Artists (ICP Hackathon)",
    tagline:
      "Empowering artists with immutable ownership and continuous earnings from their creations.",
    heroImage:
      "https://images.unsplash.com/photo-1649406458887-2b6561c36a4d?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://placehold.co/1200x600/16327b/c48820?text=Blockchain+Art+Tracking",
    overview:
      "During the ICP Rwanda hackathon, our team developed a blockchain-based system designed to help artists track their art pieces and ensure they earn royalties from every subsequent sale or use after the initial purchase. This addresses the challenge of artists losing ownership and financial benefit post-first sale.",
    challenge:
      "Artists often lose visibility and financial benefit from their artworks once sold to a first buyer, making it difficult to track subsequent sales or usage and earn royalties. This lack of transparency disempowers creators.",
    solution:
      "We built a decentralized art tracking system leveraging blockchain technology. The system allows artists to register their artworks on the blockchain, establishing immutable proof of ownership. Smart contracts ensure that artists automatically receive a percentage of future sales or usage fees, providing continuous income.",
    results:
      "The prototype demonstrated a viable solution for artists to maintain ownership and earn from their art pieces throughout their lifecycle. It showcased how blockchain can bring transparency and fairness to the art market, empowering artists to benefit from their creations long-term.",
    client: "ICP Rwanda Hackathon (Internal Project)",
    industry: "Arts & Culture / Blockchain",
    technologiesUsed: ["Motoko", "ICP Canisters", "React.js"],
    date: "ICP Rwanda Hackathon Project - 2024", // Adjust date if known
  },
];
