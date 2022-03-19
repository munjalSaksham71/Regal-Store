import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Chelsea",
    image: './Assets/black_chelsea.jpeg',
    description:
      "Chelsea boots are close-fitting, ankle-high boots with an elastic side panel. They often have a loop or tab of fabric on the back of the boot, enabling the boot to be pulled on. The boot dates back to the Victorian era, when it was worn by both men and women.",
  },
  {
    _id: uuid(),
    categoryName: "Casuals",
    image: './Assets/tan_casual.jpeg',
    description:
      "Casual shoes are often made in different colors especially in white, brown & black from materials like leather, suede, rubber, and other such materials that not only make them breathable but also lightweight.",
  },
  {
    _id: uuid(),
    categoryName: "Sports",   
    image: './Assets/puxton_darktan_sports.jpeg',
    description:
      "An athletic shoe is a generic name for a shoe designed for sporting activities. They were originally sporting apparel, but are today worn much more widely as casual footwear.",
  },
  {
    _id: uuid(),
    categoryName: "Loafers",
    image: './Assets/clarks_loafer.jpeg',
    description:
      "A loafer has no laces; in other words, it's a slip-on shoe. A loafer is a “low shoe,” meaning that the ankle is exposed, and the shoe does not wrap snugly around it. The sole of a loafer is separate from its upper..",
  },
];
