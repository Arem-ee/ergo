export interface Testimonial {
  id: string
  name: string
  title: string
  avatar: string
  rating: number
  text: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "James Cartwright",
    title: "ERGO S Owner",
    avatar: "/users/user-1.jpg",
    rating: 5,
    text: "From the moment I sat in the ERGO S, I knew this was something extraordinary. The acceleration is seamless, the cabin is a sanctuary of quiet, and knowing I can go 400 miles on a single charge gives me complete freedom.",
  },
  {
    id: "2",
    name: "Priya Kapoor",
    title: "ERGO X Owner",
    avatar: "/users/user-2.jpg",
    rating: 5,
    text: "We needed a vehicle that could handle our mountain roads and still look elegant at valet parking. The ERGO X does both without compromise. My kids refuse to ride in anything else now.",
  },
  {
    id: "3",
    name: "Marcus Chen",
    title: "ERGO R Owner",
    avatar: "/users/user-3.jpg",
    rating: 5,
    text: "The track performance is mind-altering. Below 40 mph the chassis whispers comfort; above 100 it transforms into a race machine. ERGO R is a dual personality done right.",
  },
]
