import perth from "../images/building07.jpg";
import sydney from "../images/building06.jpg";
import melbourne from "../images/building05.jpg";

export const rents = [
  {
    image: sydney,
    city: "Sydney",
    area: "CBD",
    price: "$750/week",
    newPrice: "$600/week",
    bedrooms: "2 bedrooms",
    description:
      "Modern 2-bedroom apartment located in Sydney CBD. Walking distance to public transport, shopping centres, restaurants, and offices.",
  },
  {
    image: melbourne,
    city: "Southbank",
    area: "Southbank",
    price: "$650/week",
    newPrice: "$580/week",
    bedrooms: "1 bedroom",
    description:
      "Stylish apartment in Southbank with river views. Close to cafes, parks, and tram stops.",
  },
  {
    image: perth,
    city: "Perth",
    area: "Scarborough",
    price: "$500/week",
    newPrice: "$450/week",
    bedrooms: "2 bedrooms",
    description:
      "Cozy beachside apartment in Scarborough. Just minutes from the ocean and cafes.",
  },
];
