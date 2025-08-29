import IMG1 from "../assets/l1.jpg";
import IMG2 from "../assets/l2.jpg";
import IMG3 from "../assets/l3.jpg";

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

export { navInfo, listedInfo, filterOptions };
