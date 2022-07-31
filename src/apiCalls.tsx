const baseURL = "https://www.thecocktaildb.com/api/jso/v1/1/";

const fetchAllCocktails = () => {
  return fetch(`${baseURL}filter.php?g=Cocktail_glass`).then((response) => {
    if(response.ok) {
      return response.json()
    }
    throw Error(response.statusText)
  });
};

const fetchSpecialtyCocktails = (specialtyDrink: string | undefined) => {
  return fetch(`${baseURL}${specialtyDrink}`).then((response) => {
    if (response.ok) {
     return response.json()
    }
    throw Error(response.statusText)
  });
};

export { fetchAllCocktails, fetchSpecialtyCocktails };
