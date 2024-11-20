type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColor = Exclude<BasicColors, "RED" |"BLUE"|"GREEN"|"YELLOW">





const showColors = (realColors :RealColor) => {
    console.log(realColors)
}


showColors("BLACK")