let riceBalls = 4528913;
let weight = 272.0;
let perPerson = 0.60;

// 時計

function updateClock(){

    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("ja-JP");

}

updateClock();

setInterval(updateClock,1000);


// 食品ロス更新

function updateFoodLoss(){

    const add = Math.floor(Math.random()*8)+2;

    riceBalls += add;

    weight += add * 0.00006;

    perPerson = weight * 1000000 / 7450000 / 100;

    document.getElementById("loss").textContent =
        riceBalls.toLocaleString();

    document.getElementById("weight").textContent =
        "約 " + weight.toFixed(2) + " トン";

    document.getElementById("perPerson").textContent =
        perPerson.toFixed(2);

}

setInterval(updateFoodLoss,1000);


// 比較

function updateCompare(){

    const value=(Math.random()*8-4).toFixed(1);

    const compare=document.getElementById("compare");

    if(value>=0){

        compare.textContent="▲ "+value+"%";

        compare.style.color="#d32f2f";

    }else{

        compare.textContent="▼ "+Math.abs(value)+"%";

        compare.style.color="#2e7d32";

    }

}

updateCompare();

setInterval(updateCompare,8000);


// LIVE表示

const live=document.querySelector(".live");

setInterval(()=>{

    live.style.visibility=
        live.style.visibility==="hidden"
        ?"visible"
        :"hidden";

},600);
