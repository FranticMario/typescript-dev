import TeaArt from "./enums/TeaEnum";
import Tea from "./tea";




const blackTea = new Tea(TeaArt.Black)

console.log(window.innerWidth)

window.addEventListener('resize', () => {
    console.log("Aktuelle Fensterbreite: ", window.innerWidth);
  });