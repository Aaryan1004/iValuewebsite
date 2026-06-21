export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Sarah Jenkins",
    clientRole: "CTO",
    company: "FinTech Innovators",
    content: "iValueLabs transformed our legacy infrastructure into a highly scalable cloud-native architecture. Their team's expertise and dedication are simply unmatched.",
    rating: 5,
  },
  {
    id: "t2",
    clientName: "David Chen",
    clientRole: "VP of Engineering",
    company: "HealthCore Solutions",
    content: "The staff augmentation services from iValueLabs allowed us to double our development speed without compromising quality. They integrated seamlessly.",
    rating: 5,
  },
  {
    id: "t3",
    clientName: "Elena Rodriguez",
    clientRole: "Director of IT",
    company: "Global Logistics Corp",
    content: "Their data engineering team built a real-time analytics pipeline that completely overhauled our operational visibility. Outstanding technical partners.",
    rating: 5,
  }
];
