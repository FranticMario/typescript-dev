enum Weekday {
    Montag,
    Dienstag,
    Mittwoch,
    Donnerstag,
    Freitag,
    Samstag,
    Sonntag,
}
console.log(Weekday[1])

for(let key in Weekday) {
    console.log(key)
}

// ============================================================================
// Enum-TS-Level-1_2
console.clear()

enum PizzaSize {
    Small,
    Medium,
    Large,
    Familie
}

enum PizzaIntgrients {
    Cheese, 
    Onion,
    Salami,
    Pomidoro
}

type Pizza = {
    size: PizzaSize,
    ingrients: PizzaIntgrients[]
}

const pizzaSmall : Pizza = {
    size: PizzaSize.Small,
    ingrients: [PizzaIntgrients.Cheese, PizzaIntgrients.Onion]
}

console.log(pizzaSmall.ingrients[0])


// ============================================================================
// Enum-TS-Level-2_1
console.clear()

enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500,
}

const showHtmlError = () => {
    const randomZahl = Math.round((Math.random() * 5))
    console.log(randomZahl)
    if(randomZahl === 1 || randomZahl === 0 || randomZahl === 2) {
        console.log(HtmlError.OK)
    } else if(randomZahl === 3) {
        console.log(HtmlError.Redirect)
    } else if (randomZahl === 4) {
        console.log(HtmlError.BadRequest)
    } else if (randomZahl === 5) {
        console.log(HtmlError.InternalServerError)
    }
}

showHtmlError()

// ============================================================================
// Enum-TS-Level-2_2
console.clear()



enum ClothingColor {
    Gelb = "#FFFF00",
    Orange = "#FFA500",
    Pink = "#FFC0CB",
    Blau = "#0000FF",
    Lila = "#800080",
    Grau = "#808080"
}

const allColors: ClothingColor[] = [    
    ClothingColor.Gelb,
    ClothingColor.Orange,
    ClothingColor.Pink,
    ClothingColor.Blau,
    ClothingColor.Lila,
    ClothingColor.Grau
]

allColors.forEach(item => {
    const btn = document.createElement("button")
    btn.style.backgroundColor = item;
    btn.style.height = "30px"
    document.body.append(btn)
})