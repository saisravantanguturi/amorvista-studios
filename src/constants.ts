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
    title: "Cultural Fests", 
    slug: "cultural-fests", 
    category: "Events", 
    // FIXED: Trying a brighter photo and uppercase .JPG to match your computer
    coverImage: "/cf_048.JPG", 
    images: [
      "/cf_001.JPG", "/cf_002.JPG", "/cf_003.JPG", "/cf_004.JPG", "/cf_005.JPG", 
      "/cf_006.JPG", "/cf_007.JPG", "/cf_008.JPG", "/cf_009.JPG", "/cf_010.JPG",
      "/cf_011.JPG", "/cf_012.JPG", "/cf_013.JPG", "/cf_014.JPG", "/cf_015.JPG",
      "/cf_016.JPG", "/cf_017.JPG", "/cf_018.JPG", "/cf_019.JPG", "/cf_020.JPG",
      "/cf_021.JPG", "/cf_022.JPG", "/cf_023.JPG", "/cf_024.JPG", "/cf_025.JPG",
      "/cf_026.JPG", "/cf_027.JPG", "/cf_028.JPG", "/cf_029.JPG", "/cf_030.JPG",
      "/cf_031.JPG", "/cf_032.JPG", "/cf_033.JPG", "/cf_034.JPG", "/cf_035.JPG",
      "/cf_036.JPG", "/cf_037.JPG", "/cf_038.JPG", "/cf_039.JPG", "/cf_040.JPG",
      "/cf_041.JPG", "/cf_042.JPG", "/cf_043.JPG", "/cf_044.JPG", "/cf_045.JPG",
      "/cf_046.JPG", "/cf_047.JPG", "/cf_048.JPG", "/cf_049.JPG", "/cf_050.JPG",
      "/cf_051.JPG", "/cf_052.JPG", "/cf_053.JPG", "/cf_054.JPG", "/cf_055.JPG",
      "/cf_056.JPG", "/cf_057.JPG", "/cf_058.JPG", "/cf_059.JPG", "/cf_060.JPG",
      "/cf_061.JPG", "/cf_062.JPG", "/cf_063.JPG", "/cf_064.JPG", "/cf_065.JPG",
      "/cf_066.JPG", "/cf_067.JPG", "/cf_068.JPG", "/cf_069.JPG", "/cf_070.JPG",
      "/cf_071.JPG", "/cf_072.JPG", "/cf_073.JPG", "/cf_074.JPG", "/cf_075.JPG",
      "/cf_076.JPG", "/cf_077.JPG", "/cf_078.JPG"
    ]
  },
  { 
    title: "Birthdays", 
    // FIXED: Slugs cannot have spaces or capital letters, or the link will break!
    slug: "baby-shoots", 
    category: "Celebration", 
    coverImage: "/w_bday1.jpeg", 
    images: [
      "/w_bday2.jpeg", "/w_bday3.jpeg", "/w_bday4.jpeg", "/w_bday5.jpeg", 
      "/w_bday6.jpeg", "/w_bday7.jpeg", "/w_bday8.jpeg", "/w_bday9.jpeg", 
      "/w_bday10.jpeg", "/w_bday11.jpeg", "/w_bday12.jpeg", "/w_bday13.jpeg", 
      "/w_bday14.jpeg", "/w_bday15.jpeg", "/w_bday16.jpeg", "/w_bday17.jpeg", 
      "/w_bday18.jpeg", "/w_bday19.jpeg", "/w_bday20.jpeg", "/w_bday21.jpeg", 
      "/w_bday22.jpeg", "/w_bday23.jpeg", "/w_bday24.jpeg", "/w_bday25.jpeg", 
      "/w_bday26.jpeg", "/w_bday27.jpeg", "/w_bday28.jpeg", "/w_bday29.jpeg", 
      "/w_bday30.jpeg", "/w_bday31.jpeg", "/w_bday32.jpeg", "/w_bday33.jpeg", 
      "/w_bday34.jpeg", "/w_bday35.jpeg", "/w_bday36.jpeg", "/w_bday37.jpeg", 
      "/w_bday38.jpeg", "/w_bday39.jpeg", "/w_bday40.jpeg", "/w_bday41.jpeg", 
      "/w_bday42.jpeg", "/w_bday43.jpeg", "/w_bday44.jpeg", "/w_bday45.jpeg"
    ]
  },
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
