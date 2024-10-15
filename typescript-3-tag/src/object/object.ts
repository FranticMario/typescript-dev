type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  let unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
  ];

const vogel: Pet = {
    tiertyp: "Vogel",
    namen: ["Loki", "Nami"]
}

  console.log(unsereHaustiere[0].namen[2])
  console.log(unsereHaustiere[0])
  unsereHaustiere.push(vogel)
  console.log(unsereHaustiere)

// ============================================================================================================

type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schreibtisch.schublade)
console.log(unserLager.schrank["Obere Schublade"].Ordner2)
console.log(unserLager.schrank["Untere Schublade"])

// ============================================================================================================
// Objekte-TS-Level-1_7
console.clear()
type Music = {
    artist: string;
    title: string;
    release_year: number;
    medium: string[];
    gold: boolean;
  };
  
  let myTopFour: Music[] = [
    {
      artist: 'The Beatles',
      title: 'Abbey Road',
      release_year: 1969,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      artist: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_year: 1978,
      medium: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_year: 1971,
      medium: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_year: 1983,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];

myTopFour.forEach(item => {
    console.log(item.artist)
    console.log(item.title)
    console.log(item.medium)
  })

  
// ============================================================================================================
// Objekte-TS-Level-2_1
console.clear()
type EdelmetallPreis = {
    name: string;
    preiseGramEuro: number;
    veraenderung: string;
};

let edelMetallPreise: EdelmetallPreis[] = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

const preiseArr = edelMetallPreise.filter(item => {
   return item.preiseGramEuro > 50
})

console.log(preiseArr)

// ============================================================================================================
// Objekte-TS-Level-2_2
console.clear()
type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];



console.log(singers.sort((a:Singer ,b:Singer) => a.name.localeCompare(b.name) ))
console.log(singers.sort((a:Singer ,b:Singer) => a.period_active.start - b.period_active.start ))


// ============================================================================================================
// Objekte-TS-Level-2_3
console.clear()

const tableContainer = document.querySelector("#table-container") as HTMLElement;

const tableName = document.querySelector(".table__name") as HTMLElement;
const tableCountry = document.querySelector(".table__country") as HTMLElement;
const tablePeriod = document.querySelector(".table__period") as HTMLElement;
const tableGenre = document.querySelector(".table__genre") as HTMLElement;

const boxName = document.querySelector(".box__name") as HTMLElement;
const boxContry = document.querySelector(".box__country") as HTMLElement;
const boxPeriod = document.querySelector(".box__period") as HTMLElement;
const boxGenre = document.querySelector(".box__genre") as HTMLElement;

const btnName = document.querySelector(".btn__name") as HTMLElement;

const renderCardToHtml = (element:Node, text:string) => {
    const pTag = document.createElement("p");
    pTag.textContent = `${text}`
    element.appendChild(pTag)
}

const renderArr = (arr:Singer[]) => {
    boxName.innerHTML =""
    boxContry.innerHTML = ""
    boxPeriod.innerHTML = ""
    boxGenre.innerHTML = ""
    arr.forEach((item:Singer) => {
        renderCardToHtml(boxName, item.name)
        renderCardToHtml(boxContry, item.country)
        renderCardToHtml(boxPeriod,`${item.period_active.start} - ${item.period_active.end}`)
        renderCardToHtml(boxGenre, item.genre)
    })
    
}

const sortTable = (arr: Singer[], condition:string, element: Node) => {
    let sortArr:Singer[] = [...arr]
    if(condition === "sort-up") {
        sortArr.sort((a:Singer ,b:Singer) => a.name.localeCompare(b.name))
    } else if (condition === "sort-down") {
        sortArr.sort((a:Singer ,b:Singer) => b.name.localeCompare(a.name))
    }
    renderArr(sortArr)
}


btnName?.addEventListener("click", (e) => {
   const target = e.target as HTMLElement
   const targetClassValue = target.classList
    if(!target.classList.contains("sort-up") && !target.classList.contains("sort-down") ) {
        target.classList.toggle("sort-up")
    } else if (target.classList.contains("sort-up")) {
        target.classList.remove("sort-up")
        target.classList.add("sort-down")
    } else {
        target.classList.add("sort-up")
        target.classList.remove("sort-down")
    }


    sortTable(singers, targetClassValue[1], tableName)
})


renderArr(singers)