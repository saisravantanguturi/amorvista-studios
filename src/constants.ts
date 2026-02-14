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
    coverImage: "/cf_006.JPG", 
    images: [
      "/cf_001.jpg", "/cf_002.jpg", "/cf_003.jpg", "/cf_004.jpg", "/cf_005.jpg", 
      "/cf_006.jpg", "/cf_007.jpg", "/cf_008.jpg", "/cf_009.jpg", "/cf_010.jpg",
      "/cf_011.jpg", "/cf_012.jpg", "/cf_013.jpg", "/cf_014.jpg", "/cf_015.jpg",
      "/cf_016.jpg", "/cf_017.jpg", "/cf_018.jpg", "/cf_019.jpg", "/cf_020.jpg",
      "/cf_021.jpg", "/cf_022.jpg", "/cf_023.jpg", "/cf_024.jpg", "/cf_025.jpg",
      "/cf_026.jpg", "/cf_027.jpg", "/cf_028.jpg", "/cf_029.jpg", "/cf_030.jpg",
      "/cf_031.jpg", "/cf_032.jpg", "/cf_033.jpg", "/cf_034.jpg", "/cf_035.jpg",
      "/cf_036.jpg", "/cf_037.jpg", "/cf_038.jpg", "/cf_039.jpg", "/cf_040.jpg",
      "/cf_041.jpg", "/cf_042.jpg", "/cf_043.jpg", "/cf_044.jpg", "/cf_045.jpg",
      "/cf_046.jpg", "/cf_047.jpg", "/cf_048.jpg", "/cf_049.jpg", "/cf_050.jpg",
      "/cf_051.jpg", "/cf_052.jpg", "/cf_053.jpg", "/cf_054.jpg", "/cf_055.jpg",
      "/cf_056.jpg", "/cf_057.jpg", "/cf_058.jpg", "/cf_059.jpg", "/cf_060.jpg",
      "/cf_061.jpg", "/cf_062.jpg", "/cf_063.jpg", "/cf_064.jpg", "/cf_065.jpg",
      "/cf_066.jpg", "/cf_067.jpg", "/cf_068.jpg", "/cf_069.jpg", "/cf_070.jpg",
      "/cf_071.jpg", "/cf_072.jpg", "/cf_073.jpg", "/cf_074.jpg", "/cf_075.jpg",
      "/cf_076.jpg", "/cf_077.jpg", "/cf_078.jpg"
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
