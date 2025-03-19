import { JSDOM } from 'jsdom';


const response = await fetch("https://kykyemek.com/Menu/GetDailyMenu/%C4%B0stanbul?city=%C4%B0stanbul&mealType=true")
const htmlString = await response.text()
const dom = new JSDOM(htmlString);
const document = dom.window.document;

const days = document.querySelectorAll(".col:not(.adCol.align-self-stretch)")

const result = [];
days.forEach((day) => {
    const items = day.querySelectorAll('p');

    let yemekler = [];
    items.forEach((item) => {
        yemekler.push(item.innerHTML);
    });

    result.push(yemekler)

    console.log("-------------")
})
console.log(result);