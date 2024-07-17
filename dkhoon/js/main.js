let overlay = document.querySelector(".overlay");
let overlay__inner = document.querySelector(".overlay__inner");
let default___ = document.querySelector(".default");
let enter__you_____name = document.querySelector(".enter__you_____name");
let countries = document.querySelector(".countries");
let overlay__win = document.querySelector(".overlay__win");
let n______m = document.getElementById("n______m");
let input____name = document.querySelector("#name");
let chooseCountries = document.getElementById("chooseCountries");
let country__city = document.querySelector(".country__city");
let you___country = document.getElementById("you___country");
let s_country__ = document.querySelector("#s_country__");
let country__city_form = document.querySelector("#country__city");
let challange = document.querySelector(".challange");
let chooseChallange = document.querySelector("#chooseChallange");
let last___page = document.querySelector(".last___page");
let main = document.querySelector("main");

let win_________________ = [
  {
    name: `احمد`,
    gift: `Iphone 14`,
    img: `./images/iphone.png`,
    width: `95px`,
  },
  {
    name: `واليد`,
    gift: `Iphone 12 pro`,
    img: `./images/iphone.png`,
    width: `95px`,
  },
  {
    name: `سعاد`,
    gift: `Iphone 14`,
    img: `./images/iphone.png`,
    width: `95px`,
  },
  {
    name: `فيصل`,
    gift: `Iphone 12 pro`,
    img: `./images/iphone.png`,
    width: `95px`,
  },
  {
    name: `سهيل`,
    gift: `100$`,
    img: `./images/money.png`,
    width: `100%`,
  },
  {
    name: `سعد`,
    gift: `Iphone 13`,
    img: `./images/iphone.png`,
    width: `95px`,
  },
  {
    name: `فهد`,
    gift: `300$`,
    img: `./images/money.png`,
    width: `100%`,
  },
  {
    name: `عثمان`,
    gift: `150$`,
    img: `./images/money.png`,
    width: `100%`,
  },
  {
    name: `ياسين`,
    gift: `Iphone 6`,
    img: `./images/iphone.png`,
    width: `95px`,
  },
  {
    name: `عادل`,
    gift: `Iphone 10`,
    img: `./images/iphone.png`,
    width: `95px`,
  },
  {
    name: `مصعب`,
    gift: `Mercedes`,
    img: `./images/car.png`,
    width: `100%`,
  },
  {
    name: `لقمان`,
    gift: `Lexus`,
    img: `./images/car1.png`,
    width: `95px`,
  },
  {
    name: `عبد الهادي`,
    gift: `350$`,
    img: `./images/money.png`,
    width: `100%`,
  },
];
let random = Math.floor(Math.random() * win_________________.length);
(function get____wins() {

  let start = random;

  overlay__win.innerHTML = `
    <div id="overlay__win___" class="my-3 d-flex justify-content-center text-center slideInRight">
          <div id="gift" class="gift row d-flex justify-content-center align-items-center w-100"> 
              <div class="col-3 pe-1 gift__img">
                  <img src="${win_________________[start].img}" width="${win_________________[start].width}" alt="gift">
              </div> 

              <div class="text__ col-8 text-end">
                  <h2>مبروك</h2>
                  <small class="m-0">
                  مبروك ل${win_________________[start].name} لقد فاز معنا ب ${win_________________[start].gift}
                  </small>
              </div>
          </div>
      </div>
    `;
    start = 0;
    let interval = setInterval(() => {
    start++;
    if (start < win_________________.length) {
      overlay__win.innerHTML = `
        <div id="overlay__win___" class="my-3 d-flex justify-content-center text-center slideInRight">
              <div id="gift" class="gift row d-flex justify-content-center align-items-center w-100"> 
                  <div class="col-3 pe-1 gift__img">
                      <img src="${win_________________[start].img}" width="${win_________________[start].width}" alt="gift">
                  </div> 

                  <div class="text__ col-8 text-end">
                      <h2>مبروك</h2>
                      <small class="m-0">
                      مبروك ل${win_________________[start].name} لقد فاز معنا ب ${win_________________[start].gift}
                      </small>
                  </div>
              </div>
          </div>
        `;
      start++;
    } else if (start === win_________________.length) {
      start = 0;
      overlay__win.innerHTML = `
            <div id="overlay__win___" class="my-3 d-flex justify-content-center text-center slideInRight">
                <div id="gift" class="gift row d-flex justify-content-center align-items-center w-100"> 

                    <div class="col-3 pe-1 gift__img">
                        <img src="./imgs/iphone.png" width="95px" alt="gift">
                    </div> 
                    
                    <div class="text__ col-8 text-end">
                        <h2>مبروك</h2>
                        <small class="m-0">
                            مبروك لياسر لقد فاز معنا ب Iphone 14 Max
                        </small>
                    </div>
                </div>
            </div>
    `;
    } else clearInterval(interval);
  }, 15000);
})();

default___.addEventListener("click", () => {
  default___.style.display = "none";
  enter__you_____name.style.display = "block";
  overlay.classList.add("active1");
  overlay__inner.classList.add("active1");
  overlay__inner.classList.add("fadeInUp");
  overlay__win.classList.add("active1");
  n______m.addEventListener("submit", (e) => {
    e.preventDefault();
    enter__you_____name.style.display = "none";
    countries.style.display = "block";
    overlay.classList.remove("active1");
    overlay__win.classList.replace("active1", "active2");
    overlay__win.classList.add("____re");
    document.querySelector(".canvas__").classList.add("____re");

    chooseCountries.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector(".canvas__").classList.remove("____re");
        overlay__win.classList.remove("____re");

        
        let formData = new FormData(e.target);
        let result_country = Object.fromEntries(formData).country;

        if (result_country === 'أخرى') {
            main.style.zIndex = 'auto';
            document.querySelector('.error__div').click();
        }else {
            overlay.classList.add("active2");
            countries.style.display = 'none';
            country__city.style.display = 'block';
            overlay__win.classList.replace("active2", "active3");
            country__city_form.addEventListener('submit', (e) => {
              e.preventDefault();
              country__city.style.display = 'none';                
              challange.style.display = 'block';
              overlay__inner.setAttribute("class", "d-flex justify-content-center align-items-center");
              overlay__win.classList.replace("active3", "__active_");
              overlay__win.classList.replace("mt-4", "mt-5");
              
              chooseChallange.addEventListener('submit', (e) => {
                e.preventDefault();
                challange.style.display = 'none';
                last___page.style.display = 'block';
                main.classList.add('__active');
                overlay.classList.replace("active2", "active3");
                overlay__win.classList.replace("mt-5", "mt-4");
                document.querySelector("canvas").classList.add('__active');
                 overlay__win.classList.replace("__active_", "active4");
              });

            });
        };

        s_country__.addEventListener("focus", () => {
            document.querySelector("canvas").classList.add("active2");
        });
    
        s_country__.addEventListener("blur", () => {
            document.querySelector("canvas").classList.remove("active2");
        });

    });
});

    input____name.addEventListener("focus", () => {
        document.querySelector(".canvas__").classList.add("active1");
    });

    input____name.addEventListener("blur", () => {
        document.querySelector(".canvas__").classList.remove("active1");
    });

});
