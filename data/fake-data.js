import { createCategory } from "../models/category";
import { createMeal } from "../models/meal";
import Spaghetti from "../assets/meals/spaghetti.jpg";
import Pizza from "../assets/meals/pizza.jpg";
import Hamburger from "../assets/meals/hamburger.jpg";
export const CATEGORIES = [
  createCategory("c1", "Italian", "pink"),
  createCategory("c2", "Spaghetti", "red"),
  createCategory("c3", "Hamburgers", "orange"),
  createCategory("c4", "Spain", "yellow"),
  createCategory("c5", "Dinner", "navy"),
  createCategory("c6", "Lunch", "green"),
  createCategory("c7", "Breakfast", "turquoise"),
  createCategory("c8", "Asian", "fuchsia"),
  createCategory("c9", "French", "maroon"),
  createCategory("c10", "Snack", "blue"),
];

export const MEALS = [
  createMeal(
    "m1",
    ["c1", "c2"],
    "Spaghetti with Tomato Sauce",
    "affordable",
    "simple",
    Spaghetti,
    20,
    [
      "200g Spaghetti",
      "2 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "2 Cloves of Garlic",
      "1/2 Teaspoon of Dried Oregano",
      "1/4 Cup of Grated Parmesan Cheese",
      "Salt and Pepper to taste",
    ],

    [
      "Boil a pot of water with some salt.",
      "Add the spaghetti to the boiling water and cook according to the package instructions, usually about 8-10 minutes.",
      "While the pasta is cooking, heat olive oil in a pan over medium heat.",
      "Finely chop the garlic and tomatoes. Add the garlic to the pan and cook for 1 minute.",
      "Add the chopped tomatoes and oregano to the pan. Season with salt and pepper and let the sauce simmer for 5-7 minutes.",
      "Once the pasta is cooked, drain it and add it to the pan with the tomato sauce. Mix well.",
      "Serve with a sprinkle of grated Parmesan cheese on top.",
      "Enjoy your delicious spaghetti with tomato sauce!",
    ],
    false,
    true,
    true,
    true
  ),
  createMeal(
    "m2",
    ["c2"],
    "Pizza",
    "affordable",
    "simple",
    Pizza,
    10,
    [
      "1 Pizza Dough",
      "1/2 Cup Tomato Sauce",
      "1 Cup Mozzarella Cheese",
      "1/4 Cup Sliced Pepperoni",
      "1/4 Cup Sliced Bell Pepper",
      "1/4 Cup Sliced Olives",
      "1 Tablespoon Olive Oil",
      "1/2 Teaspoon Oregano",
      "Salt and Pepper to taste",
    ],

    [
      "Preheat the oven to 220°C (425°F).",
      "Roll out the pizza dough on a floured surface to your desired size.",
      "Spread the tomato sauce evenly over the dough, leaving a small border around the edges.",
      "Layer the mozzarella cheese on top of the sauce.",
      "Add the sliced pepperoni, bell pepper, and olives on top of the cheese.",
      "Drizzle the olive oil over the pizza and sprinkle with oregano, salt, and pepper.",
      "Bake the pizza in the oven for 12-15 minutes, or until the crust is golden and the cheese is melted and bubbly.",
      "Remove from the oven, slice, and serve hot.",
      "Enjoy your homemade pizza!",
    ],
    false,
    false,
    false,
    false
  ),
  createMeal(
    "m3",
    ["c3"],
    "Classic Hamburger",
    "pricey",
    "simple",
    Hamburger,
    45,
    [
      "2 Burger Buns",
      "250g Ground Beef",
      "1 Tomato",
      "1 Onion",
      "2 Slices of Cheese",
      "Ketchup",
      "Mustard",
      "Salt and Pepper to taste",
    ],

    [
      "Form the ground beef into two patties, seasoning with salt and pepper.",
      "Heat a grill or pan over medium-high heat. Cook the patties for about 4-5 minutes on each side, or until they reach your desired doneness.",
      "While the patties are cooking, slice the tomato and onion.",
      "Toast the burger buns lightly on the grill or in a toaster.",
      "Once the patties are done, place a slice of cheese on each patty and let it melt for the last minute of cooking.",
      "Assemble the burger by spreading ketchup and mustard on the bottom bun.",
      "Place the cooked patty with cheese on top, then add the sliced tomato and onion.",
      "Top with the second burger bun.",
      "Serve with your favorite side, and enjoy your homemade hamburger!",
    ],
    false,
    false,
    false,
    true
  ),
];
