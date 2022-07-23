import { useEffect, useState } from "react"

export default function Drink() {

  let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  const [drink, setDrink] = useState({})
  const allIngredients = []
  const ingredientsDisplay = []

  const findIngredients = (drink) => {
    
    for (let i = 1; i <= 15; i++) {
      let drinkIng = `strIngredient${i}`;
      let drinkAm = `strMeasure${i}`;
      if (drink[drinkIng] !== null) {
        const ingredients = []
        ingredients.push(drink[drinkIng])
        ingredients.push(drink[drinkAm])
        allIngredients.push(ingredients)
      }
    }
    // console.log(allIngredients)
    return allIngredients
  }

  const makeIngredientDisplay = (ingredients) => {
    
    for (let i = 0; i < ingredients.length; i++) {
      ingredientsDisplay.push(<p>{ingredients[i][0]} - <em>{ingredients[i][1]}</em></p>);
    }
    return ingredientsDisplay;
  }

  useEffect(() => {
    // const ingredientsDisplay = []
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDrink(data.drinks[0]))
      // .then(console.log(drink))
      // .then(console.log("here", drink, makeIngredientDisplay(findIngredients(drink))))
  }, [])

  useEffect(() => {
    console.log("here")
    const ingredients = findIngredients(drink)
    console.log(ingredients)
    const display = makeIngredientDisplay(ingredients)
    console.log(display)
    // return display
  }, [drink])






  // const [image, setImage] = useState('')

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then(data => setImage(data.hdurl))
  // }, [])

  return(
    <article>
      <h2>Drink</h2>
      {ingredientsDisplay}
    </article>
  )
}