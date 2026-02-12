import { TeamMember, Service, Testimonial, Album, ImageSlide } from './types';

export const HERO_IMAGES: ImageSlide[] = [
  { url: "https://picsum.photos/1920/1080?random=1", alt: "Wedding Couple" },
  { url: "https://picsum.photos/1920/1080?random=2", alt: "Cultural Event" },
  { url: "https://picsum.photos/1920/1080?random=3", alt: "Portrait" },
  { url: "https://picsum.photos/1920/1080?random=4", alt: "Concert" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: "Sai Sravan", 
    role: "Founder", 
    specialties: ["Photography", "Videography", "Editing"],
    // Updated images for Sai Sravan
    image: "/sravan_back.jpeg",
    characterImage: "/sravan_front.png"
  },
{ 
    name: "Abraz", 
    role: "Co-Founder", 
    specialties: ["Photography", "Editing"],
    image: "/ab_back.jpeg",
    characterImage: "/ab_front.png"
  },
  { 
    name: "Koushik", 
    role: "Co-Founder", 
    specialties: ["Management", "Photography"],
    image: "/kou_back.png",
    characterImage: "/kou_front.png"
  },
  { 
    name: "Abhinay", 
    role: "Co-Founder", 
    specialties: ["Photography", "Videography", "Editing"],
    image: "/abi_back.jpeg",
    characterImage: "/abi_front.png"

  },
  
  { 
    name: "Raviteja", 
    role: "Lead Photographer", 
    specialties: [],
    image: "/ravi_back.jpeg", 
    // The front character pop-out image (Note the .png extension)
    characterImage: "/ravi_front.png" 
  },
  { 
    name: "Navneeth", 
    role: "Lead Videographer", 
    specialties: [],
    image: "/nav_back.jpeg",
    characterImage: "/nav_front.png"
  },
  { 
    name: "Jayanth", 
    role: "Lead Editor", 
    specialties: ["Strategy", "Design", "Development"],
    image: "/jay_back.jpeg",
    characterImage: "/jay_front.png" 
  },
  { 
    name: "Jahnavi", 
    role: "Lead Designer", 
    specialties: [],
    image: "/jan_back.jpeg",
    characterImage: "/jan_front.png"
  },
];

export const SERVICES: Service[] = [
  { title: "Wedding Photography", description: "Capturing the eternal bond with cinematic elegance." },
  { title: "Wedding Cinematography", description: "Moving pictures that tell your unique love story." },
  { title: "Cultural Fest Coverage", description: "Documenting the vibrancy and energy of large-scale events." },
  { title: "Model Portfolio Shoots", description: "High-fashion aesthetic for aspiring and professional models." },
  { title: "Birthday Events", description: "Preserving the joy of milestones and celebrations." },
  { title: "Corporate Events", description: "Professional coverage for brand launches and conferences." },
  { title: "Editing & Color Grading", description: "Industry-standard post-production services." },
];

export const ALBUMS: Album[] = [
  { 
    title: "Birthdays", 
    slug: "birthdays", 
    category: "Celebration", 
    coverImage: "/w_bday1.jpg", // Assuming w_bday1 is the cover
    images: [
      "/w_bday2.jpg", "/w_bday3.jpg", "/w_bday4.jpg", "/w_bday5.jpg", 
      "/w_bday6.jpg", "/w_bday7.jpg", "/w_bday8.jpg", "/w_bday9.jpg", 
      "/w_bday10.jpg", "/w_bday11.jpg", "/w_bday12.jpg", "/w_bday13.jpg", 
      "/w_bday14.jpg", "/w_bday15.jpg", "/w_bday16.jpg", "/w_bday17.jpg", 
      "/w_bday18.jpg", "/w_bday19.jpg", "/w_bday20.jpg", "/w_bday21.jpg", 
      "/w_bday22.jpg", "/w_bday23.jpg", "/w_bday24.jpg", "/w_bday25.jpg", 
      "/w_bday26.jpg", "/w_bday27.jpg", "/w_bday28.jpg", "/w_bday29.jpg", 
      "/w_bday30.jpg", "/w_bday31.jpg", "/w_bday32.jpg", "/w_bday33.jpg", 
      "/w_bday34.jpg", "/w_bday35.jpg", "/w_bday36.jpg", "/w_bday37.jpg", 
      "/w_bday38.jpg", "/w_bday39.jpg", "/w_bday40.jpg", "/w_bday41.jpg", 
      "/w_bday42.jpg", "/w_bday43.jpg", "/w_bday44.jpg", "/w_bday45.jpg"
    ]
  },
  { title: "Cultural Fests", slug: "cultural-fests", category: "Events", coverImage: "https://picsum.photos/800/600?random=11" },
  { title: "Model Shoots", slug: "model-shoots", category: "Fashion", coverImage: "https://picsum.photos/800/600?random=13" },
  { title: "Corporate Events", slug: "events", category: "Corporate", coverImage: "https://picsum.photos/800/600?random=12" },
  { title: "Weddings", slug: "weddings", category: "Wedding", coverImage: "https://picsum.photos/800/600?random=10" },
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    name: "Arjun & Sneha", 
    text: "Sravan and his team covered our wedding in Vizag so beautifully. They didn’t just take photos, they captured emotions.", 
    role: "Couple" 
  },
  { 
    name: "Lakshmi Narayana", 
    text: "We chose AmorVista for my daughter’s half-saree function, and they truly understood the traditional feel we wanted. Every moment was captured perfectly.", 
    role: "Parent" 
  },
  { 
    name: "Karthik Reddy", 
    text: "The candid shots from our reception came out so natural. The team was calm, professional, and easy to work with.", 
    role: "Groom" 
  },
  { 
    name: "Priya Darshini", 
    text: "Our pre-wedding shoot in Araku was such a great experience. The cinematic video still gives us goosebumps whenever we watch it.", 
    role: "Bride" 
  },
  { 
    name: "Swathi & Manoj", 
    text: "We were nervous about posing, but they made us feel completely comfortable. The final photos are something we’ll always cherish.", 
    role: "Couple" 
  },
  { 
    name: "Deepa Krishna", 
    text: "The editing team did an incredible job on my portfolio. The final result looks straight out of a fashion magazine.", 
    role: "Model" 
  },
  { 
    name: "Vamsi Chowdhary", 
    text: "Very punctual and super creative. They handled the chaos of our event without missing a single important moment.", 
    role: "Event Planner" 
  },
  { 
    name: "Anusha Verma", 
    text: "The album quality genuinely surprised us. The prints, the finishing, everything felt premium.", 
    role: "Client" 
  },
  { 
    name: "Chaitanya", 
    text: "The teaser video for our college fest turned out amazing. It got a lot of attention online too.", 
    role: "Student Convener" 
  },
  { 
    name: "Ananya Rao", 
    text: "AmorVista turned our wedding into something we’ll never forget. Sai and the team were so smooth in their work, we barely noticed them around.", 
    role: "Bride" 
  },
  { 
    name: "Karthik Reddy", 
    text: "The energy they captured at VITOPIA was next level. Every frame felt alive.", 
    role: "Event Organizer" 
  },
  { 
    name: "Meera Kapoor", 
    text: "Very professional and easy to coordinate with. My portfolio now looks clean, sharp, and international level.", 
    role: "Model" 
  },
];
