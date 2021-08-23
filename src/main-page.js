export default createMain;

function createMain() {
  const divContainer = document.createElement("div");
  divContainer.classList.add("container");

  const heroSection = createSectionEl("hero");
  const heroImage = createImgEl(
    "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1615548013753-CVPINXNQH4D0H22I4CG2/Trove_web_banner2021new.jpg"
  );
  heroSection.appendChild(heroImage);
  divContainer.appendChild(heroSection);

  const boxesSection = createSectionEl("boxes");

  const box1 = createBox(
    "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582204257078-3MOGUC57UHXNNW80EEIU/Trove+Bakery+.jpg",
    "Est. 2011. Sourdough bakery + patisserie with a central focus on organic flour, wild yeast and quality, seasonal flavours",
    "the bakery"
  );

  const box2 = createBox(
    "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582204279239-Z7UZCX9ZJ9E3G1VNRPCP/Trove.Bakery.jpg",
    "Shop our selection of handmade delectables for collection from our Levenshulem or Ancaots Cafes.",
    "online shop"
  );

  const box3 = createBox(
    "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582207752538-2UPWY56QS6HDT01LELTU/Levy+Cafe+2.jpg",
    "A destination for innovative, seasonal brunch dishes alongside our freshly baked sourdough, pastries, cakes, jams + chutneys, all made in house by our team",
    "our cafes"
  );

  boxesSection.append(box1, box2, box3);
  divContainer.appendChild(boxesSection);

  return divContainer;
}

function createBox(imageUrl, bodyText, buttonName) {
  const divEl = document.createElement("div");
  divEl.classList.add("box__item");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imageUrl);
  imgEl.classList.add("box__image");
  divEl.appendChild(imgEl);

  const blockEl = document.createElement("div");
  blockEl.classList.add("box__body-block");

  const pEl = document.createElement("p");
  pEl.classList.add("box__body-text");
  pEl.innerText = bodyText;
  blockEl.appendChild(pEl);

  const btnEl = document.createElement("button");
  btnEl.classList.add("btn", "btn--body");
  btnEl.innerText = buttonName;
  blockEl.appendChild(btnEl);

  divEl.appendChild(blockEl);

  return divEl;
}

function createSectionEl(className) {
  const sectionEl = document.createElement("section");
  sectionEl.classList.add(className);

  return sectionEl;
}

function createImgEl(url) {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", url);

  return imgEl;
}
