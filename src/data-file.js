import projectImage from "../src/img/ecommerce-store.png";
import numberGuessGame from "./img/number-guess-game.png";
const functionToGenerateId = () => {
  return Math.random();
};

const data = [
  {
    image: projectImage,
    header: "E-Commerce Store",
    summary: "Built Using React and Redux",
    link: "https://amar-ecommercesite.netlify.app/",
    id: functionToGenerateId(),
  },

  {
    image: numberGuessGame,
    header: "Guess My Number",
    summary: "Built Using Vanila Javascript",
    link: "https://am-guess-number.netlify.app",
    id: functionToGenerateId(),
  },
];

export default data;
