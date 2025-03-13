import { useState } from "react";
import { produce } from "immer";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  // const [open, setOpen] = useState(false);
  // const [maxWidth, setMaxWidth] = useState("50px");

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleCLick = () => {
    setGame({ ...game, player: { ...game.player, name: "River" } });
  };

  const handleCLicK = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Olives"] });
  };

  const hAndleClick = () => {
    setCart((prevCart) =>
      produce(prevCart, (draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity++;
      })
    );
  };

  // const handleClick = () => {
  //   setOpen(!open);
  //   setMaxWidth(open ? "" : "50px");
  // };

  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut Slabore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ExpandableText>
      {/* <span
        className="d-inline-block text-truncate"
        style={{
          maxWidth: `${maxWidth}`,
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
        title="text"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut Slabore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </span>
      <button onClick={handleClick}>Click Me</button> */}
    </div>
  );
}

export default App;
