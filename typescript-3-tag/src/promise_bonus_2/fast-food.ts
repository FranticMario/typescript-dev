
const ordersDiv = document.getElementById('orders')!;
document.getElementById('startSimulation')?.addEventListener('click', () => {

    ordersDiv.innerHTML = '';

    createCustomerOrder(1, 'Cola');
    createCustomerOrder(2, 'Sprite');
    createCustomerOrder(3, 'Wasser');
  });

  //  hier die einzelnen Functions einfügen, die jeweils ein Promise zurückgeben
 const createCustomerOrder = (id:number, orders:string) => {
    const div = document.createElement("div");

    const bestellungPerson = document.createElement("div")
            bestellungPerson.textContent = `${id}. Person in der Reihe`
    div.append(bestellungPerson);
    processOrder(id, orders, div)
    ordersDiv.append(div)
 }


  function processOrder(customerNumber: number, drink: string, customerDiv: HTMLDivElement) {
    Promise.all([
      order(customerNumber, customerDiv),
      pay(customerDiv),
      makeBurger(customerDiv),
      makeFries(customerDiv),
      makeDrink(drink, customerDiv)
    ]).then((response) => {
        console.log(response[0])
      console.log('Bestellung abgeschlossen.');
      customerDiv.innerHTML += '✅ Bestellung abgeschlossen.<br>';
    });
  }

  function getRandomDurationInMilliseconds(): number {
    const min = 5000;
    const max = 16000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  const order = (customerNumber:number, element:HTMLDivElement) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            element.innerHTML += "📝Bestellung aufnehmen <br>"

            resolve("Bestellung aufgenohmen")
          }, 1000);
    })
  }


  const pay = (element:HTMLDivElement) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            element.innerHTML += "💳Bezahlung durchführen <br>"

            resolve("Bezahlung durchführen")
          }, 2000);
    })
  }

  const makeBurger = (element:HTMLDivElement) => {
    return new Promise<string>((resolve, reject) => {

           setTimeout(() => {
            element.innerHTML += "🍔 Burger wird zubereitet... <br>";
        }, 3000);


        setTimeout(() => {
            element.innerHTML += "🍔 Burger ist fertig! <br>";
            resolve("Burger fertig");
        }, getRandomDurationInMilliseconds());
    })
  }

  const makeFries = (element:HTMLDivElement) => {
    return new Promise<string>((resolve, reject) => {

        setTimeout(() => {
            element.innerHTML += "🍟Bereite eine Pommes... <br>";
        }, 4000);


        setTimeout(() => {
            element.innerHTML += "🍟 Pommes ist fertig! <br>";
            resolve("Burger fertig");
        }, getRandomDurationInMilliseconds());



    })
  }


  const makeDrink = (drink:string, element:HTMLDivElement) => {
    return new Promise<string>((resolve, reject) => {

        setTimeout(() => {
            element.innerHTML += `🥤Fülle ${drink} ein <br>`;
        }, 5000);


        setTimeout(() => {
            element.innerHTML += `🥤${drink} fertig<br>`;
            resolve("Burger fertig");
        }, getRandomDurationInMilliseconds());

    })
  }