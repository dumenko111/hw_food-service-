!function(){var e="light-theme",t="dark-theme",s={changeThemes:document.querySelector(".theme-switch__toggle"),bodyRef:document.querySelector("body")};function i(){s.bodyRef.classList.add(t),s.bodyRef.classList.remove(e),localStorage.setItem("themeSettings",t)}function n(){s.bodyRef.classList.add(e),s.bodyRef.classList.remove(t),localStorage.setItem("themeSettings",e)}s.changeThemes.addEventListener("change",(function(e){e.target.checked?i():n()})),localStorage.getItem("themeSettings")===t?(i(),s.changeThemes.setAttribute("checked","true")):n();var c=[{id:"XWaQXcbk0",name:"Картопля, запечена в мундирі",description:"Ароматна, ситна, шипляча домашня картопля, фарширована сметанно-беконною начинкою, - це дуже простий і дуже ефектний спосіб нагодувати велику кількість людей, практично не витративши на готування ні сил, ні часу. Звичайну картоплю за бажання тут можна замінити на солодкий батат, а начинку додати, наприклад, кукурудзу або солодкий червоний перець.",image:"https://images.pexels.com/photos/162763/delicious-garnish-potatoes-fried-162763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:100,ingredients:["Картопля","Часник","Сметана","Бекон","Твердий сир","Зелена цибуля"]},{id:"pkXzyRp1P",name:"Томатний магрібський суп",description:"Томатний магрібський суп особливо поширений у Марокко та Тунісі. Він дуже простий у приготуванні і сам по собі легкий – в основі томати та курячий бульйон. Крім них у супі лише необхідні спеції, мед та лимон, які всі разом і передають той самий східний колорит. Смак супу повністю залежить від якості томатів. Доповнять страву свіжа кінза та окремі часточки лимона.",image:"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg",price:150,ingredients:["Помидори","Курячий бульйон","Мед","Петрушка","Кінза","Паприка"]},{id:"QMom9q4Ku",name:"Крем-суп із гарбуза",description:"Портрет цієї помаранчевої юшки прикрашає обкладинку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, який вигадав так звану нову кухню, вважав гарбуз однією з основ цього світопорядку, а гарбузовий суп — такою собі навколоплідною водою гастрономії..",image:"https://images.pexels.com/photos/5639452/pexels-photo-5639452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:100,ingredients:["Гарбуз","Петрушка","Вершки","Бренді","Курячий бульйон"]},{id:"k2k0UrjZG",name:"Салат з червоної квасолі з сиром",description:"Тосканський салат, витриманий у колористиці італійського прапора. Буквально кількох ложок вистачає, щоб у шлунку утворився приємний тягар. Дуже корисна штука з точки зору ранку, коли важко запхати в себе великі дози біомаси, а хочеться при цьому хочеться.",image:"https://images.pexels.com/photos/7771992/pexels-photo-7771992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:150,ingredients:["Квасоля","Сіль","Часник","Оливкова олія","Творог","Червноа цибуля"]},{id:"j2k8U1jZd",name:"Класичний грецький салат",description:"Це рецепт із старої, привезеної із Греції, кулінарної книги. Секрет салату - свіжі овочі та гарна фета. Для салату використовують тільки оливкову олію, а такі спеції, як орегано та базилік, є візитною карткою грецької кухні..",image:"https://images.pexels.com/photos/14457212/pexels-photo-14457212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:350,ingredients:["Оливкова олія","Лимонний сік","Часник","Помідори","Червноа цибуля","Сир фета","Оливки"]},{id:"X2aQ7cvkd",name:"Маффіни з лохиною та мускатним горіхом",description:"Культова ягода, яку навчилися виробляти цілий рік, у поєднанні з пухким тестом – це абсолютно безпрограшний варіант. Маффіни з лохиною стали популярним десертом в Англії та Америці, хоча походження їхнє французьке. Та й взагалі, ці маленькі солодкі кекси, якими ми їх знаємо зараз, замислювалися як звичайний хліб і на смак були нейтральними..",image:"https://images.pexels.com/photos/6343176/pexels-photo-6343176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:170,ingredients:["Вершкове масло","Пшеничне борошно","Лохина","Ванильныий екстракт","Мускатний горіх"]},{id:"nk3zy1pf8",name:"Азу по‑татарськи",description:"Одна з небагатьох страв, що удостоєні в радянській продуктовій традиції продажу з іменною нарізкою. І досі в кулінаріях та супермаркетах можна знайти яловичину, яку ріжуть соломкою та продають як азу. Щодо самої страви досі точаться суперечки, як і з чим готувати: використовувати яловичину або баранину, топлене або звичайне масло, гасити в казані або сотейнику з товстим дном. Редакцій цієї страви може бути багато, але її основа завжди незмінна — це нарізане соломкою м'ясо, картопля і томатний соус..",image:"https://images.pexels.com/photos/6232535/pexels-photo-6232535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:270,ingredients:["Яловичина","Солені огірки","Картопля","М'ясний бульйон","Часник"]},{id:"b7k2U13fd",name:"Смажений рис з яйцем по-китайськи",description:"Смажений рис - досить поширений інгредієнт страв східноазіатської кухні - готувати, по суті, можна із залишків вчорашньої вечері. Тільки добре остиглий, заздалегідь зварений рис, що в ідеалі простояв усю ніч у холодильнику, при попаданні в розпечений вок не розповзеться до стану каші і не перетворить вміст сковорідки на неповоротку безформну грудку.",image:"https://images.pexels.com/photos/7758253/pexels-photo-7758253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:240,ingredients:["Круглий рис","Мині цукіні","Тертий імбир","Гриби шіітаке","Соевий соус","Кунжутна олія"]}];function o(e){return e.map((function(e){return'<li class="menu__item">\n                 <article class="card">\n                 <img src="'.concat(e.image,'" alt="').concat(e.name,'" class="card__image"/>\n             <div class="card__content">\n                 <h2 class="card__name">').concat(e.name,'</h2>\n                 <p class="card__price"> <i class="material-icons"> monetization_on </i> ').concat(e.price,'</p>\n                 <p class="card__descr">\n                 ').concat(e.description,'\n                 </p>\n\n             <ul class="tag-list">\n                 <li class="tag-list__item">Картопля</li>\n                 <li class="tag-list__item">Часник</li>\n                 <li class="tag-list__item">Сметана</li>\n                 <li class="tag-list__item">Бекон</li>\n                 <li class="tag-list__item">Твердий сир</li>\n                 <li class="tag-list__item">Зелена цибуля</li>\n             </ul>\n             </div>\n\n             <button class="card__button button">\n                 <i class="material-icons button__icon"> shopping_cart </i>\n             В корзину\n             </button>\n             </article>\n             </li>')})).join("")}document.querySelector(".js-menu").insertAdjacentHTML("beforeend",o(c)),o(c)}();
//# sourceMappingURL=index.5462fcac.js.map
