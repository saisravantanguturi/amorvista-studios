export interface TeamMember {
  name: string;
  role: string;
  specialties: string[];
  image?: string;
  characterImage?: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role?: string;
}

export interface Album {
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  images?: string[];
}

export interface ImageSlide {
  url: string;
  alt: string;
}