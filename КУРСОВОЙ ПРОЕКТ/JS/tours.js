let xml = new XMLHttpRequest();
xml.open("GET", "../XML/db.xml", false);
xml.send();
let xmlDoc = xml.responseXML;
let tours = xmlDoc.querySelectorAll("country");
let wrapper = document.querySelector(".all-tours");
wrapper.innerHTML = "";
tours.forEach(tour => {
    wrapper.innerHTML += `
    <section class="tour">
    <div class="tour-name-and-img">
        <span class="tour-name">` + tour.querySelector("name").textContent + `</span>
        <img src="` + tour.querySelector("img").textContent + `" class="tour-img" alt="">
    </div>
    <div class="tour-info">
        <span>Длительность тура: <span class="duration">` + tour.querySelector("duration").textContent + `</span> дней</span>
        <span>Город отправления: Минск и другие города Беларуси</span>
        <span>Трансфер: Групповой</span>
        <span>Транспорт: Авиa</span>
        <span>Питание: UAI (Ультра Всё включено)</span>
        <span>Цена:<span class="cost">` + tour.querySelector("price").textContent + `</span> бел. руб. (710$)</span>
        <span>+375445414141</span>
        <span class="desc">` + tour.querySelector("description").textContent + `</span>
        <button class="more"><a href="`+ tour.querySelector("href").textContent +`"> Узнать больше о курорте...</a></button>
    </div>
    </section>
    `;
});