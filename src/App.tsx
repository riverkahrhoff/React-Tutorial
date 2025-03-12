import { useState } from "react";
import { produce } from "immer";

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

  const handleClick = () => {
    setCart((prevCart) =>
      produce(prevCart, (draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity++;
      })
    );
  };

  return (
    <div>
      {cart.items.map((item) => (
        <p key={item.id}>
          {item.title}: {item.quantity}
        </p>
      ))}

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
