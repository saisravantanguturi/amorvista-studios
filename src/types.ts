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
  coverImage: string;
  category: string;
}

export interface ImageSlide {
  url: string;
  alt: string;
}