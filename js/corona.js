const nationalData = document.querySelector(".national-data");
const seoulList = document.querySelector(".seoul-list");
const gyeonggiList = document.querySelector(".gyeonggi-list");
const incheonList =document.querySelector(".incheon-list")
const API_KEY_2 = "JAryuhHiKUj2wX7WOSLmFbg3dqnMPxZB8";

function incheon(json){
  const incheonData = json["incheon"];
  const spanTitle = document.createElement("span");
  spanTitle.innerText = "πΈμΈμ²";
  incheonList.appendChild(spanTitle);
  // νμ§μ
  const li1 = document.createElement("li");
  const spanMain1 = document.createElement("span");
  const spanSub1 = document.createElement("span");
  const totalCase = incheonData["totalCase"];
  const newCase = incheonData["newCase"];
  spanMain1.innerText = `νμ§μ : ${totalCase}λͺ`;
  spanSub1.innerText = (newCase>=0? `+${newCase}`: `-${newCase}`);

  li1.appendChild(spanMain1);
  li1.appendChild(spanSub1);
  incheonList.appendChild(li1);

  // μμΉμ
  const li2 = document.createElement("li");
  const spanMain2 = document.createElement("span");
  const recovered = incheonData["recovered"];
  spanMain2.innerText = `μμΉμ : ${recovered}λͺ`;

  li2.appendChild(spanMain2);
  incheonList.appendChild(li2);

  // μ¬λ§μ
  const li3 = document.createElement("li");
  const spanMain3 = document.createElement("span");
  const death = incheonData["death"];
  spanMain3.innerText = `μ¬λ§μ : ${death}λͺ`;

  li3.appendChild(spanMain3);
  incheonList.appendChild(li3);

  // μΉλ£ μ€
  const li4 = document.createElement("li");
  const spanMain4 = document.createElement("span");
  const num = totalCase.replace(",", "") - recovered.replace(",", "")-death.replace(",", "");
  spanMain4.innerText = `μΉλ£ μ€ : ${num.toLocaleString()}λͺ`;

  li4.appendChild(spanMain4);
  incheonList.appendChild(li4);  
}

function gyeonggi(json){
  const gyeonggiData = json["gyeonggi"];
  const spanTitle = document.createElement("span");
  spanTitle.innerText = "πΈκ²½κΈ°";
  gyeonggiList.appendChild(spanTitle);
  // νμ§μ
  const li1 = document.createElement("li");
  const spanMain1 = document.createElement("span");
  const spanSub1 = document.createElement("span");
  const totalCase = gyeonggiData["totalCase"];
  const newCase = gyeonggiData["newCase"];
  spanMain1.innerText = `νμ§μ : ${totalCase}λͺ`;
  spanSub1.innerText = (newCase>=0? `+${newCase}`: `-${newCase}`);

  li1.appendChild(spanMain1);
  li1.appendChild(spanSub1);
  gyeonggiList.appendChild(li1);

  // μμΉμ
  const li2 = document.createElement("li");
  const spanMain2 = document.createElement("span");
  const recovered = gyeonggiData["recovered"];
  spanMain2.innerText = `μμΉμ : ${recovered}λͺ`;

  li2.appendChild(spanMain2);
  gyeonggiList.appendChild(li2);

  // μ¬λ§μ
  const li3 = document.createElement("li");
  const spanMain3 = document.createElement("span");
  const death = gyeonggiData["death"];
  spanMain3.innerText = `μ¬λ§μ : ${death}λͺ`;

  li3.appendChild(spanMain3);
  gyeonggiList.appendChild(li3);

  // μΉλ£ μ€
  const li4 = document.createElement("li");
  const spanMain4 = document.createElement("span");
  const num = totalCase.replace(",", "") - recovered.replace(",", "")-death.replace(",", "");
  spanMain4.innerText = `μΉλ£ μ€ : ${num.toLocaleString()}λͺ`;

  li4.appendChild(spanMain4);
  gyeonggiList.appendChild(li4);  
}

function seoul(json){
  const seoulData = json["seoul"];
  const spanTitle = document.createElement("span");
  spanTitle.innerText = "πΈμμΈ";
  seoulList.appendChild(spanTitle);

  // νμ§μ
  const li1 = document.createElement("li");
  const spanMain1 = document.createElement("span");
  const spanSub1 = document.createElement("span");
  const totalCase = seoulData["totalCase"];
  const newCase = seoulData["newCase"];
  spanMain1.innerText = `νμ§μ : ${totalCase}λͺ`;
  spanSub1.innerText = (newCase>=0? `+${newCase}`: `-${newCase}`);

  li1.appendChild(spanMain1);
  li1.appendChild(spanSub1);
  seoulList.appendChild(li1);

  // μμΉμ
  const li2 = document.createElement("li");
  const spanMain2 = document.createElement("span");
  const recovered = seoulData["recovered"];
  spanMain2.innerText = `μμΉμ : ${recovered}λͺ`;

  li2.appendChild(spanMain2);
  seoulList.appendChild(li2);

  // μ¬λ§μ
  const li3 = document.createElement("li");
  const spanMain3 = document.createElement("span");
  const death = seoulData["death"];
  spanMain3.innerText = `μ¬λ§μ : ${death}λͺ`;

  li3.appendChild(spanMain3);
  seoulList.appendChild(li3);

  // μΉλ£ μ€
  const li4 = document.createElement("li");
  const spanMain4 = document.createElement("span");
  const num = totalCase.replace(",", "") - recovered.replace(",", "")-death.replace(",", "");
  spanMain4.innerText = `μΉλ£ μ€ : ${num.toLocaleString()}λͺ`;

  li4.appendChild(spanMain4);
  seoulList.appendChild(li4);  
}

function national(json){
  const nation = json["korea"];
  // νμ§μ
  const li1 = document.createElement("li");
  const spanMain1 = document.createElement("span");
  const spanSub1 = document.createElement("span");
  const totalCase = nation["totalCase"];
  const newCase = nation["newCase"];
  spanMain1.innerText = `νμ§μ : ${totalCase}λͺ`;
  spanSub1.innerText = (newCase>=0? `+${newCase}`: `-${newCase}`);
  
  li1.appendChild(spanMain1);
  li1.appendChild(spanSub1);
  nationalData.appendChild(li1);

    // μμΉμ
  const li2 = document.createElement("li");
  const spanMain2 = document.createElement("span");
  const recovered = nation["recovered"];
  spanMain2.innerText = `μμΉμ : ${recovered}λͺ`;
  
  li2.appendChild(spanMain2);
  nationalData.appendChild(li2);

    // μ¬λ§μ
  const li3 = document.createElement("li");
  const spanMain3 = document.createElement("span");
  const death = nation["death"];
  spanMain3.innerText = `μ¬λ§μ : ${death}λͺ`;
  
  li3.appendChild(spanMain3);
  nationalData.appendChild(li3);

    // μΉλ£ μ€
  const li4 = document.createElement("li");
  const spanMain4 = document.createElement("span");
  const num = totalCase.replace(",", "") - recovered.replace(",", "")-death.replace(",", "");
  spanMain4.innerText = `μΉλ£ μ€ : ${num.toLocaleString()}λͺ`;
  
  li4.appendChild(spanMain4);
  nationalData.appendChild(li4);
}

function init(){
  fetch(`https://api.corona-19.kr/korea/country/new/?serviceKey=${API_KEY_2}`)
  .then(function(reponse){
    return reponse.json();
  }).then(function(json){
    national(json);
    seoul(json);
    gyeonggi(json);
    incheon(json);
  });
}

init();