import { TeamMember, Service, Testimonial, Album, ImageSlide } from './types';

export const HERO_IMAGES: ImageSlide[] = [
  { url: "/hero_1.jpg", alt: "Wedding Shoot" },  // <-- Change these to your actual file names!
  { url: "/hero_2.jpg", alt: "Cultural Event" },
  { url: "/hero_3.jpg", alt: "Model Shoot" },
  { url: "/hero_4.jpg", alt: "Corporate Event" },
  { url: "/hero_5.jpg", alt: "Model Shoot" },
  { url: "/hero_6.jpg", alt: "Corporate Event" },
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
  { title: "Personalized Reels", description: "Creative short-form videos tailored to your story and style." },
  { title: "Personalized Photo Shoots", description: "Customized photography sessions designed around your vision." },
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
    title: "BIRTHDAYS", 
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
{ 
    title: "VITOPIA", 
    slug: "cultural-fests", 
    category: "Cultural Events", 
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
    title: "Apparel Shoots", 
    slug: "apparel-shoots", 
    category: "Merchandise", 
    coverImage: "/1.1.jpg", // Using the first t-shirt as the cover image
    images: [
      "/1.1.jpg", "/1.2.jpg", "/1.3.jpg", "/1.4.jpg", 
      "/2.1.jpg", "/2.2.jpg", "/2.3.jpg", "/2.4.jpg", "/2.5.jpg",
      "/3.1.jpg", "/3.2.jpg", "/3.3.jpg", "/3.4.jpg",
      "/4.1.jpg", "/4.2 enhanced.jpg", "/4.3.jpg",
      "/5.1.jpg", "/5.2.jpg", "/5.3.jpg", "/5.4.jpg",
      "/6.1.jpg", "/6.2.jpg", "/6.3.jpg",
      "/7.1.jpg", "/7.2.jpg", "/7.3.jpg", "/7.4.jpg",
      "/bons.jpg", "/DSC07210 (1).jpg"
    ]
  },
  
  { 
    title: "VGLAM", 
    slug: "model-shoots", 
    category: "Fashion", 
    coverImage: "/md_0299.JPG", // Using the first photo as the cover image
    images: [
      "/md_001.JPG", "/md_002.JPG", "/md_003.JPG", "/md_004.JPG", "/md_005.JPG", 
      "/md_006.JPG", "/md_007.JPG", "/md_008.JPG", "/md_009.JPG", "/md_010.JPG",
      "/md_011.JPG", "/md_012.JPG", "/md_013.JPG", "/md_014.JPG", "/md_015.JPG",
      "/md_016.JPG", "/md_017.JPG", "/md_018.JPG", "/md_019.JPG", "/md_020.JPG",
      "/md_021.JPG", "/md_022.JPG", "/md_023.JPG", "/md_024.JPG", "/md_025.JPG",
      "/md_026.JPG", "/md_027.JPG", "/md_028.JPG", "/md_029.JPG", "/md_030.JPG",
      "/md_031.JPG", "/md_032.JPG", "/md_033.JPG", "/md_034.JPG", "/md_035.JPG",
      "/md_036.JPG", "/md_037.JPG", "/md_038.JPG", "/md_039.JPG", "/md_040.JPG",
      "/md_041.JPG", "/md_042.JPG", "/md_043.JPG", "/md_044.JPG", "/md_045.JPG",
      "/md_046.JPG", "/md_047.JPG", "/md_048.JPG", "/md_049.JPG", "/md_050.JPG",
      "/md_051.JPG", "/md_052.JPG", "/md_053.JPG", "/md_054.JPG", "/md_055.JPG",
      "/md_056.JPG", "/md_057.JPG", "/md_058.JPG", "/md_059.JPG", "/md_060.JPG",
      "/md_061.JPG", "/md_062.JPG", "/md_063.JPG", "/md_064.JPG", "/md_065.JPG",
      "/md_066.JPG", "/md_067.JPG", "/md_068.JPG", "/md_069.JPG", "/md_070.JPG",
      "/md_071.JPG", "/md_072.JPG", "/md_073.JPG", "/md_074.JPG", "/md_075.JPG",
      "/md_076.JPG", "/md_077.JPG", "/md_078.JPG", "/md_079.JPG", "/md_080.JPG",
      "/md_081.JPG"
    ]
  },
  { 
    title: "TEDx VIT-AP", 
    slug: "events", 
    category: "Corporate", 
    coverImage: "/cor_070.jpg", // Set to your specific request!
    images: [
      "/cor_001.jpg", "/cor_002.jpg", "/cor_003.jpg", "/cor_004.jpg", "/cor_005.jpg", 
      "/cor_006.jpg", "/cor_007.jpg", "/cor_008.jpg", "/cor_009.jpg", "/cor_010.jpg",
      "/cor_011.jpg", "/cor_012.jpg", "/cor_013.jpg", "/cor_014.jpg", "/cor_015.jpg",
      "/cor_016.jpg", "/cor_017.jpg", "/cor_018.jpg", "/cor_019.jpg", "/cor_020.jpg",
      "/cor_021.jpg", "/cor_022.jpg", "/cor_023.jpg", "/cor_024.jpg", "/cor_025.jpg",
      "/cor_026.jpg", "/cor_027.jpg", "/cor_028.jpg", "/cor_029.jpg", "/cor_030.jpg",
      "/cor_031.jpg", "/cor_032.jpg", "/cor_033.jpg", "/cor_034.jpg", "/cor_035.jpg",
      "/cor_036.jpg", "/cor_037.jpg", "/cor_038.jpg", "/cor_039.jpg", "/cor_040.jpg",
      "/cor_041.jpg", "/cor_042.jpg", "/cor_043.jpg", "/cor_044.jpg", "/cor_045.jpg",
      "/cor_046.jpg", "/cor_047.jpg", "/cor_048.jpg", "/cor_049.jpg", "/cor_050.jpg",
      "/cor_051.jpg", "/cor_052.jpg", "/cor_053.jpg", "/cor_054.jpg", "/cor_055.jpg",
      "/cor_056.jpg", "/cor_057.jpg", "/cor_058.jpg", "/cor_059.jpg", "/cor_060.jpg",
      "/cor_061.jpg", "/cor_062.jpg", "/cor_063.jpg", "/cor_064.jpg", "/cor_065.jpg",
      "/cor_066.jpg", "/cor_067.jpg", "/cor_068.jpg", "/cor_069.jpg", "/cor_070.jpg",
      "/cor_071.jpg", "/cor_072.jpg", "/cor_073.jpg", "/cor_074.jpg", "/cor_075.jpg",
      "/cor_076.jpg", "/cor_077.jpg", "/cor_078.jpg", "/cor_079.jpg", "/cor_080.jpg",
      "/cor_081.jpg", "/cor_082.jpg", "/cor_083.jpg", "/cor_084.jpg", "/cor_085.jpg",
      "/cor_086.jpg", "/cor_087.jpg", "/cor_088.jpg", "/cor_089.jpg", "/cor_090.jpg",
      "/cor_091.jpg", "/cor_092.jpg"
    ]
  },
{ 
    title: "NAADH", 
    slug: "musical-event", 
    category: "Musical event", 
    coverImage: "/naa_019.jpg", // Using the first photo as the cover image
    images: [
      "/naa_001.jpg", "/naa_002.jpg", "/naa_003.jpg", "/naa_004.jpg", "/naa_005.jpg", 
      "/naa_006.jpg", "/naa_007.jpg", "/naa_008.jpg", "/naa_009.jpg", "/naa_010.jpg",
      "/naa_011.jpg", "/naa_012.jpg", "/naa_013.jpg", "/naa_014.jpg", "/naa_015.jpg",
      "/naa_016.jpg", "/naa_017.jpg", "/naa_018.jpg", "/naa_019.jpg", "/naa_020.jpg",
      "/naa_021.jpg", "/naa_022.jpg", "/naa_023.jpg", "/naa_024.jpg", "/naa_025.jpg",
      "/naa_026.jpg", "/naa_027.jpg", "/naa_028.jpg", "/naa_029.jpg", "/naa_030.jpg",
      "/naa_031.jpg", "/naa_032.jpg", "/naa_033.jpg", "/naa_034.jpg", "/naa_035.jpg",
      "/naa_036.jpg", "/naa_037.jpg", "/naa_038.jpg"
    ]
  },

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
