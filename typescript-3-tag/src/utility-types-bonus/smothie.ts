enum Size {
    Small = "small",
    Medium = "medium",
    Large = "large",
}


interface ISmoothie {
    name: string,
    ingredients: string[],
    size: Size,
    price: number
}

// Beispielhafte Nutzung der Funktion
const basicSmoothie: ISmoothie = {
    name: "Berry Blast",
    ingredients: ["blueberry", "strawberry", "banana"],
    size: Size.Medium,
    price: 4.99,
  };
  
  const customizedSmoothie: Partial<ISmoothie> = {
    size: Size.Large,
    price: 5.99,
  };
  

const customizeSmoothie = (basicSmoothie: ISmoothie, customizedSmoothie: Partial<ISmoothie>):ISmoothie => {
  return {
    ...basicSmoothie,
    ...customizedSmoothie,
  } 
}

const finalSmoothie = customizeSmoothie(basicSmoothie, customizedSmoothie);

console.log(finalSmoothie);