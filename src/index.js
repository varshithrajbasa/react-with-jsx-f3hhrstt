import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" }
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash and place in the oven for 30 mins.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Remove from oven. Add the lettuce and serve."
    ]
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" }
    ],
    steps: [
      "Cook the fish on the grill until cooked through.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese."
    ]
  }
];

// ✅ Recipe Component
const Recipe = ({ name, ingredients, steps }) => (
  <section
    id={name.toLowerCase().replace(/ /g, "-")}
    className="mb-4 p-3 border rounded shadow-sm bg-light"
  >
    <h2 className="mb-3">{name}</h2>

    <h4>Ingredients</h4>
    <ul className="list-group mb-3">
      {ingredients.map(({ name, amount, measurement }, i) => (
        <li key={i} className="list-group-item">
          {amount} {measurement} {name}
        </li>
      ))}
    </ul>

    <div className="instructions">
      <h4>Cooking Instructions</h4>
      {steps.map((step, i) => (
        <p key={i} className="mb-2">
          {i + 1}. {step}
        </p>
      ))}
    </div>
  </section>
);

// ✅ Menu Component
const Menu = ({ title, recipes }) => (
  <article className="container my-4">
    <header className="mb-4 text-center">
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  </article>
);

// ✅ React 18 render
const root = createRoot(document.getElementById("root"));
root.render(<Menu recipes={data} title="Delicious Recipes" />);
