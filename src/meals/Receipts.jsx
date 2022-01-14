import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Ingredients from "./Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState();

  const arrOfFood = [
    {
      name: "Chicken",
      oil: "Extra virgin olive oil",
      priprava: "Salt and peppers",
      prepare: "Baking a Chicken Whole",
      img: "https://fb.ru/misc/i/gallery/44825/2557509.jpg",
    },
    {
      name: "Beef",
      oil: "Olive or butter",
      priprava: "Salt, peppers, spices",
      prepare: "Fry on low heat",
      img: "https://zanmsk.ru/wp-content/uploads/2020/09/miaso-steik-rozmarin-pomidory.jpg",
    },
    {
      name: "Egg",
      oil: "Water",
      priprava: "Salt",
      prepare: "Cook for 10 - 15 minutes",
      img: "https://e-w-e.ru/wp-content/uploads/2019/10/depositphotos_149167158_s-2019__1_.xdhqv_.jpg",
    },
  ];

  useEffect(() => {
    console.log(meal);
  }, [meal]);

  return (
    <div>
      <p>Choose your of the dish:</p>
      <form
        onChange={(e) => {
          setMeal(e.target.value);
        }}
      >
        <input type="radio" id="choice1" name="contact" value="Chicken" />
        <label htmlFor="choice1">Chicken</label>
        <input type="radio" id="choice2" name="contact" value="Beef" />
        <label htmlFor="choice2">Beef</label>
        <input type="radio" id="choice3" name="contact" value="Egg" />
        <label htmlFor="choice3">Egg</label>
      </form>
      {meal && (
        <Ingredients data={arrOfFood.find((item) => item.name === meal)} />
      )}
    </div>
  );
};

export default Receipts;
