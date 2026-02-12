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
    // Base image for the card background
    image: "/sravan_back.jpeg",
    // Transparent cutout for the 3D pop-out effect
    characterImage: "/sravan_front."
  },
  { 
    name: "Abhinay", 
    role: "Co-Founder", 
    specialties: ["Photography", "Videography", "Editing"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=900&auto=format&fit=crop&q=80"
  },
  { 
    name: "Abraz", 
    role: "Co-Founder", 
    specialties: ["Photography", "Editing"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=900&auto=format&fit=crop&q=80"
  },
  { 
    name: "Koushik", 
    role: "Co-Founder", 
    specialties: ["Management", "Photography"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=900&auto=format&fit=crop&q=80"
  },
  { 
    name: "Raviteja", 
    role: "Lead Photographer", 
    specialties: [],
    image: "/jayanth_back.png", 
    characterImage: "/jayanth_front.png" 
  },
  { 
    name: "Navneeth", 
    role: "Lead Videographer", 
    specialties: [],
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=600&h=900&auto=format&fit=crop&q=80"
  },
  { 
    name: "Jayanth", 
    role: "Lead Editor", 
    specialties: [],
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=900&auto=format&fit=crop&q=80"
  },
  { 
    name: "Jahnavi", 
    role: "Lead Designer", 
    specialties: [],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=900&auto=format&fit=crop&q=80"
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
  { title: "Weddings", slug: "weddings", category: "Wedding", coverImage: "https://picsum.photos/800/600?random=10" },
  { title: "Cultural Fests", slug: "cultural-fests", category: "Events", coverImage: "https://picsum.photos/800/600?random=11" },
  { title: "Corporate Events", slug: "events", category: "Corporate", coverImage: "https://picsum.photos/800/600?random=12" },
  { title: "Model Shoots", slug: "model-shoots", category: "Fashion", coverImage: "https://picsum.photos/800/600?random=13" },
  { title: "Birthdays", slug: "birthdays", category: "Celebration", coverImage: "https://picsum.photos/800/600?random=14" },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Ananya Rao", text: "AmorVista transformed our wedding into a cinematic masterpiece. Sai and his team were invisible yet everywhere.", role: "Bride" },
  { name: "Karthik Reddy", text: "The energy they captured at VITOPIA was unmatched. Every photo tells a story.", role: "Event Organizer" },
  { name: "Meera Kapoor", text: "Professional, punctual, and incredibly talented. My portfolio looks international standard.", role: "Model" },
];