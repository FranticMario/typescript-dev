const btn = document.querySelector(".button") as HTMLInputElement;
const inputBundesland = document.querySelector("#bundeslandInfo") as HTMLInputElement;
const divContainer = document.querySelector("#bundeslandInfoErgebnis") as HTMLInputElement;

const check = () => {
    const bundesland: string = inputBundesland.value;
    switch(bundesland) {
        case "Baden-Württemberg":
            divContainer.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
            break;
        case "Bayern":
            divContainer.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
            break;
        case "Berlin":
            divContainer.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
            break;
        case "Brandenburg":
            divContainer.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
            break;
        case "Bremen":
            divContainer.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
            break;
        case "Hamburg":
            divContainer.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
            break;
        case "Hessen":
            divContainer.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
            break;
        case "Mecklenburg-Vorpommern":
            divContainer.innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
            break;
        case "Niedersachsen":
            divContainer.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
            break;
        case "Nordrhein-Westfalen":
            divContainer.innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
            break;
        case "Rheinland-Pfalz":
            divContainer.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
            break;
        case "Saarland":
            divContainer.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
            break;
        case "Sachsen":
            divContainer.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
            break;
        case "Sachsen-Anhalt":
            divContainer.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
            break;
        case "Schleswig-Holstein":
            divContainer.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
            break;
        case "Thüringen":
            divContainer.innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
            break;
        default:
            divContainer.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht."
    }

}


btn.addEventListener("click", check)

