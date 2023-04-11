(()=>{"use strict";const a=[["Action A","Action B","Animal A","Animal B","Clothes","Emotions","Food","Transport"],[{word:"Cry",translation:"Плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"Dance",translation:"Танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"Dive",translation:"Нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"Draw",translation:"Рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"Fish",translation:"Ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"Fly",translation:"Летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"Hug",translation:"Обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"Jump",translation:"Прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"Open",translation:"Открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"Play",translation:"Играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"Point",translation:"Указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"Ride",translation:"Ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"Run",translation:"Бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"Sing",translation:"Петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"Skip",translation:"Пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"Swim",translation:"Плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"Cat",translation:"Кот",image:"img/cat.jpeg",audioSrc:"audio/cat.mp3"},{word:"Chick",translation:"Цыплёнок",image:"img/chick.jpeg",audioSrc:"audio/chick.mp3"},{word:"Chicken",translation:"Курица",image:"img/chicken.jpeg",audioSrc:"audio/chicken.mp3"},{word:"Dog",translation:"Собака",image:"img/dog.jpeg",audioSrc:"audio/dog.mp3"},{word:"Horse",translation:"Лошадь",image:"img/horse.jpeg",audioSrc:"audio/horse.mp3"},{word:"Pig",translation:"Свинья",image:"img/pig.jpeg",audioSrc:"audio/pig.mp3"},{word:"Rabbit",translation:"Кролик",image:"img/rabbit.jpeg",audioSrc:"audio/rabbit.mp3"},{word:"Cow",translation:"Корова",image:"img/cow.jpeg",audioSrc:"audio/cow.mp3"}],[{word:"Bird",translation:"Птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"Fish",translation:"Рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"Frog",translation:"Жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"Giraffe",translation:"Жираф",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"Lion",translation:"Лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"Mouse",translation:"Мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"Turtle",translation:"Черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"Dolphin",translation:"Дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"Skirt",translation:"Юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"Pants",translation:"Брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"Blouse",translation:"Блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"Dress",translation:"Платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"Boot",translation:"Ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"Shirt",translation:"Рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"Coat",translation:"Пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"Shoe",translation:"Туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"Sad",translation:"Грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"Angry",translation:"Сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"Happy",translation:"Счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"Tired",translation:"Уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"Surprised",translation:"Удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"Scared",translation:"Испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"Smile",translation:"Улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"Laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"Ice cream",translation:"Мороженное",image:"img/ice-cream.jpeg",audioSrc:"audio/ice-cream.mp3"},{word:"Banana",translation:"Банан",image:"img/banana.jpeg",audioSrc:"audio/banana.mp3"},{word:"Burger",translation:"Бургер",image:"img/burger.jpeg",audioSrc:"audio/burger.mp3"},{word:"Pizza",translation:"Пицца",image:"img/pizza.jpeg",audioSrc:"audio/pizza.mp3"},{word:"Apple",translation:"Яблоко",image:"img/apple.jpeg",audioSrc:"audio/apple.mp3"},{word:"Salad",translation:"Салат",image:"img/salad.jpeg",audioSrc:"audio/salad.mp3"},{word:"Cake",translation:"Торт",image:"img/cake.jpeg",audioSrc:"audio/cake.mp3"},{word:"Cheese",translation:"Сыр",image:"img/cheese.jpeg",audioSrc:"audio/cheese.mp3"}],[{word:"Car",translation:"Машина",image:"img/car.jpeg",audioSrc:"audio/car.mp3"},{word:"Bus",translation:"Автобус",image:"img/bus.jpeg",audioSrc:"audio/bus.mp3"},{word:"Train",translation:"Поезд",image:"img/train.jpeg",audioSrc:"audio/train.mp3"},{word:"Bicycle",translation:"Велосипед",image:"img/bicycle.jpeg",audioSrc:"audio/bicycle.mp3"},{word:"Boat",translation:"Лодка",image:"img/boat.jpeg",audioSrc:"audio/boat.mp3"},{word:"Airplane",translation:"Самолет",image:"img/airplane.jpeg",audioSrc:"audio/airplane.mp3"},{word:"Helicopter",translation:"Вертолет",image:"img/helicopter.jpeg",audioSrc:"audio/helicopter.mp3"},{word:"Motorcycle",translation:"Мотоцикл",image:"img/motorcycle.jpeg",audioSrc:"audio/motorcycle.mp3"}]],i=new Audio("../data/audio/error.mp3"),e=new Audio("../data/audio/correct.mp3"),o=new Audio("../data/audio/success.mp3"),t=new Audio("../data/audio/failure.mp3"),r="../data/img/";let n=0,d=0,c=0;const s=[],m=[],g=8;function u(){!function(){n=0,d=0,c=0,s.length=0,m.length=0,v.innerHTML="";Array.from(E.querySelectorAll(".card")).sort((()=>Math.random()-.5)).forEach((a=>{const i=a.querySelector("audio").src,e=a.querySelector(".front h4").textContent;s.push(i),m.push(e),a.addEventListener("click",p)})),l()}();let a=!0;a?(f.innerText="Repeat",f.removeEventListener("click",u),f.addEventListener("click",w),a=!1):w()}function l(){new Audio(s[n]).play()}function p(a){const g=a.currentTarget;g.querySelector(".front h4").textContent===m[n]?(e.play(),g.classList.add("inactive"),g.removeEventListener("click",p),n++,d++,document.createElement("span").classList.add("star-win"),S("star-win"),n<s.length?l():(0===c?(o.play(),E.innerHTML=`\n        <div class="success">\n            <img src="${r}success.jpg">\n            <p>Awesome job! You guessed all the words!</p>\n        </div>`):(t.play(),E.innerHTML=`\n        <div class="failure">\n            <img src="${r}failure.jpg">\n            <p> You made ${c} mistakes.</p>\n        </div>`),setTimeout((()=>{T()}),3e3))):(i.play(),c++,document.createElement("span").classList.add("star"),S("star"))}function S(a){const i=document.createElement("span");i.classList.add(a),v.children.length>=g&&v.removeChild(v.children[0]),v.append(i)}function w(){l()}let h=!1;const j=document.querySelector(".mode"),y=document.querySelector(".switch-input"),f=document.createElement("button");f.className="start-game";const v=document.createElement("div");v.className="stars";const b=document.createElement("div");b.className="game-container",b.append(v,f);const E=document.querySelector(".page-content"),k=a[0],L=document.querySelector(".page-title"),A="../data/";class ${constructor(i,e){this.id=e+1,this.categoryName=i,this.image=`${A}${a[this.id][0].image}`}}class C{constructor(a,i,e,o){this.word=a,this.translation=i,this.image=`${A}${e}`,this.audioSrc=`${A}${o}`}}function T(){E.innerHTML="",E.id=0,L.textContent="Main",k.forEach(((i,e)=>{i=new $(k[e],e);const o=document.createElement("div");o.className="category-card",o.id=i.id,o.insertAdjacentHTML("afterbegin",`\n        <div class='category-image'>\n            <img src='${i.image}' alt='${i.categoryName}'>\n         </div>\n         <div class='category-description'>\n            <h4>${i.categoryName}</h4>\n            <h5>${a[i.id].length} cards</h5>\n         </div>\n        `),E.append(o)}))}function q(i){E.innerHTML="",E.id=i,L.textContent=k[i-1],a[i].forEach(((a,i)=>{a=new C(a.word,a.translation,a.image,a.audioSrc);const e=document.createElement("div");e.className="card",e.id=i+1,e.insertAdjacentHTML("afterbegin",`\n        <div class="front">\n            <div class="card-image">\n                <img src='${a.image}' alt='${a.word}'>\n            </div>\n            <div class="card-description">\n                <h4>${a.word}</h4>\n                <img class='rotate' src='../data/img/rotate.svg' alt='rotate' width='20px'>\n            </div>\n        </div>\n        <div class="back">\n            <div class="card-image">\n                <img src='${a.image}' alt='${a.word}'>\n            </div>\n            <div class="card-description">\n                <h4>${a.translation}</h4>\n            </div>\n        </div>\n        <audio class='card-audio audio${e.id}' src='${a.audioSrc}'></audio>\n    `),E.append(e)})),h&&function(){v.innerHTML="",E.prepend(b);const a=E.querySelectorAll(".card-image"),i=E.querySelectorAll(".card-description"),e=E.querySelectorAll(".rotate");a.forEach((a=>a.style.height="100%")),i.forEach((a=>a.style.display="none")),e.forEach((a=>a.style.display="none")),f.textContent="Start game",f.removeEventListener("click",w),f.addEventListener("click",u)}()}function x(){const a=event.target.closest(".card"),i=event.target.closest(".front"),e=i.nextElementSibling;i.style.transform="rotateY(-180deg)",e.style.transform="perspective(800px) rotateY(0deg)",a.addEventListener("mouseleave",(function(){i.style.transform="rotateY(0deg)",e.style.transform="perspective(800px) rotateY(-180deg)"}),{once:!0})}document.addEventListener("click",(function(a){a.target.closest(".category-card")&&q(a.target.closest(".category-card").id),a.target.closest(".front")&&!h&&function(a){const i=a.target.closest(".card"),e=document.querySelector(`.audio${i.id}`).src;new Audio(e).play()}(a),a.target.closest(".rotate")&&x(),a.target.closest(".header-title")&&T(),a.target.closest(".switch-input")&&(h=y.checked,j.textContent=h?"Play":"Train",E.id>0&&q(E.id))}));const M=document.querySelector(".menu");function H(){M.classList.toggle("menu-active")}T(),function(){const a=document.querySelector(".menu-list"),i=document.querySelector(".burger-icon");i.src="../data/img/burger-icon.png";const e=document.createElement("li");e.textContent="Main page",e.classList.add("menu_item_main","menu-item"),a.append(e),k.forEach((i=>{const e=document.createElement("li");e.className="menu-item",e.textContent=i,a.append(e)})),M.addEventListener("click",(a=>{const i=a.target.closest("li").textContent;"Main page"===i?(T(),H()):(q(k.indexOf(i)+1),H())})),i.addEventListener("click",H)}()})();