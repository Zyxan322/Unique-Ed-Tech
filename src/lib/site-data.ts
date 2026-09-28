import campus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/hero-tech-classroom.jpg";
import robotics from "@/assets/hero-robotics.jpg";
import mentoring from "@/assets/hero-mentoring.jpg";
import library from "@/assets/hero-library.jpg";
import coding from "@/assets/hero-coding.jpg";
import sports from "@/assets/hero-sports.jpg";
import creative from "@/assets/hero-creative.jpg";
import hero from "@/assets/Hero.jpeg";
import buildingAsset from "@/assets/unique-campus-building.jpg.asset.json";

const building = buildingAsset.url;

export const images = { building, campus, classroom, robotics, mentoring, library, coding, sports, creative };

export const heroSlides = [
  { image: hero, eyebrow: "Unique School System & Science Academy", title: "Welcome to Unique EdTech.", text: "DM Chapter G, Magnolia — a campus where academic excellence, technology and character grow together." },
  { image: campus, eyebrow: "A place to discover", title: "Where Learning Becomes Limitless.", text: "Building confident learners through academic excellence, technology, creativity and future-ready skills." },
  { image: classroom, eyebrow: "Technology with purpose", title: "Curiosity, amplified.", text: "Thoughtful technology strengthens understanding, collaboration and independent thinking." },
  { image: robotics, eyebrow: "Build. Test. Improve.", title: "Ideas become real here.", text: "STEM experiences invite every learner to solve, create and grow through meaningful projects." },
  { image: mentoring, eyebrow: "Every learner known", title: "Guidance that opens doors.", text: "Attentive teaching builds confidence, agency and a lasting love of learning." },
  { image: library, eyebrow: "Learning together", title: "A culture of inquiry.", text: "Spaces designed for deep reading, discussion and purposeful collaboration." },
  { image: coding, eyebrow: "Digital fluency", title: "Ready for what comes next.", text: "Computing, coding and creative problem-solving are woven into the academic journey." },
  { image: sports, eyebrow: "Beyond the classroom", title: "Energy builds character.", text: "Sport, teamwork and leadership help learners thrive in every dimension." },
  { image: creative, eyebrow: "Creative confidence", title: "Imagination has a studio.", text: "Design and the arts give students the confidence to communicate original ideas." },
];

export const grades = ["play-group", "nursery", "prep", ...Array.from({ length: 9 }, (_, i) => `grade-${i + 1}`)];
export const programs = ["information-technology", "computer-science", "coding", "robotics", "artificial-intelligence", "stem", "digital-literacy", "creative-design"];

export const pageDetails: Record<string, { title: string; kicker: string; description: string; image: string }> = {
  about: { title: "Purpose shapes every day.", kicker: "About Unique EdTech", description: "An educational environment designed around strong foundations, thoughtful technology and the full development of each learner.", image: mentoring },
  academics: { title: "A clear journey through learning.", kicker: "Academics", description: "From early discovery to secondary readiness, each stage balances knowledge, inquiry, skills and growing independence.", image: library },
  programs: { title: "Technology becomes a creative tool.", kicker: "Programs", description: "Purposeful digital learning helps students understand systems, create solutions and participate responsibly in a changing world.", image: robotics },
  "campus-life": { title: "A campus made for possibility.", kicker: "Campus Life", description: "Light-filled learning spaces support focused study, experimentation, movement, collaboration and belonging.", image: campus },
  admissions: { title: "Begin your child’s journey.", kicker: "Admissions", description: "Explore the learning experience, arrange a visit and take the next step with clear support at every stage.", image: campus },
  activities: { title: "Confidence grows beyond lessons.", kicker: "Student Activities", description: "Sport, debate, creative arts, competitions and community experiences help students discover new strengths.", image: sports },
  faculty: { title: "Teaching with attention and purpose.", kicker: "Faculty", description: "Meet the educators who guide inquiry, strengthen understanding and create meaningful learning relationships.", image: mentoring },
  gallery: { title: "Life at Unique EdTech.", kicker: "Gallery", description: "Explore moments of learning, collaboration, creativity and campus life at DM Chapter G, Magnolia.", image: creative },
  events: { title: "What’s happening on campus.", kicker: "Events", description: "Discover upcoming workshops, competitions, celebrations and school activities.", image: sports },
  news: { title: "Stories from our community.", kicker: "News", description: "School announcements, student work, campus updates and moments worth sharing.", image: library },
  blog: { title: "Ideas for learning and growth.", kicker: "Journal", description: "Practical perspectives on education, technology, parenting, STEM and student development.", image: classroom },
  resources: { title: "Useful information, organised clearly.", kicker: "Resources", description: "Find school policies, forms, calendars and helpful resources for families and students.", image: library },
  contact: { title: "Let’s start a conversation.", kicker: "Contact", description: "Connect with Unique EdTech DM Chapter G, Magnolia for admissions guidance or general enquiries.", image: campus },
};