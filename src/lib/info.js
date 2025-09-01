import IMG1 from "../assets/l1.jpg";
import IMG2 from "../assets/l2.jpg";
import IMG3 from "../assets/l3.jpg";
import T1 from "../assets/t1.jpg";
import T2 from "../assets/t2.jpg";
import T3 from "../assets/t3.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navInfo = [
  { title: "Properties", path: "#properties" },
  { title: "About ASTY", path: "#about" },
  { title: "Contacts", path: "#contact" },
];

const filterOptions = ["All", "Apartments", "Houses", "Airbnb", "Others"];

const listedInfo = [
  {
    img: IMG1,
    info: "Luxury 5-Bedroom Fully Detached Mansion",
    location: "Chevron / Lekki",
    price: "₦350M",
    filter: "Apartments",
  },
  {
    img: IMG2,
    info: "5-Bedroom Detached Duplex ",
    location: "Osapa / Ikate",
    price: "₦200M",
    filter: "Houses",
  },
  {
    img: IMG3,
    info: "Luxury 2 Bedroom Service Apartment ",
    location: "Ilorin KWAra State",
    price: "60k /night & 1m /month",
    filter: "AirBnB",
  },
  {
    img: IMG1,
    info: "Luxury 5-Bedroom Fully Detached Mansion",
    location: "Chevron / Lekki",
    price: "₦350M",
    filter: "Apartments",
  },
  {
    img: IMG2,
    info: "5-Bedroom Detached Duplex ",
    location: "Osapa / Ikate",
    price: "₦200M",
    filter: "Houses",
  },
  {
    img: IMG3,
    info: "Luxury 2 Bedroom Service Apartment ",
    location: "Ilorin KWAra State",
    price: "60k /night & 1m /month",
    filter: "AirBnB",
  },
];

const testimonialInfo = [
  {
    img: T1,
    name: "Peace A.",
    star: 4,
    text: "I was nervous about buying my first home, but ASTY Real Estate made the entire process so smooth. They took the time to understand what I really wanted and guided me from start to finish. Every property they showed me was safe, well-checked, and exactly as described. I never once felt rushed or pressured. I’m now in my dream home, and I couldn’t have done it without their honesty and dedication.",
    home: "First-Time Home Buyer",
    date: " May 10, 2025",
  },
  {
    img: T2,
    name: "Michael O.",
    star: 5,
    text: "As an investor, I’m very particular about where my money goes. ASTY Real Estate impressed me with how thorough they were in verifying property documents and market value. They don’t just sell — they make sure you’re making the right decision. I’ve closed two deals with them already, and both have been profitable. Trustworthy, professional, and reliable!",
    home: "Property Investor",
    date: " Jun 11, 2025",
  },
  {
    img: T3,
    name: "Chidinma E.",
    star: 3.5,
    text: "I needed a safe and affordable apartment quickly, and ASTY Real Estate came through for me in record time. They handled all negotiations, made sure I understood every detail, and even followed up after I moved in to check if everything was okay. That level of care is rare in the real estate business. I highly recommend them",
    home: "Rental Client",
    date: " Jul 21, 2025",
  },
];

const contactUs = [
  {
    icon: FaWhatsapp,
    text: "Get In Touch",
    link: "https://wa.me/07042588748?text=Hi%20there%2C%20I'm%20interested%20in%20a%20property",
  },
  {
    icon: FaWhatsapp,
    text: "Join Group",
    link: "https://chat.whatsapp.com/JrvuFOsKZ8bE9JhZmXYA59?mode=ems_copy_t",
  },
  {
    icon: MdEmail,
    text: "Email",
    link: "mailto:astyproperties72@gmail.com?subject=Property%20Inquiry&body=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20listings.",
  },
];

const footerInfo = [
  {
    text: "Copyright",
    href: "#",
  },
  {
    text: "Conditions & Privacy Policy",
    href: "#",
  },
  {
    text: "Developed by Phantom",
    href: "https://wa.me/08026163193?text=Hi%20there%2C%20I'm%20interested%20in%20a%20Website",
  },
  {
    text: "Designed by @MGHTGUY",
    href: "https://wa.me/08101506618?text=Hi%20there%2C%20I'm%20interested%20in%20a%20Website",
  },
];

export {
  navInfo,
  listedInfo,
  filterOptions,
  testimonialInfo,
  contactUs,
  footerInfo,
};
