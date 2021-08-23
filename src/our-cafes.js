export default createOurCafes;

function createOurCafes() {
  const containerDivEl = document.createElement("div");
  containerDivEl.classList.add("container", "content-section--md");
  containerDivEl.appendChild(contentSection1());
  containerDivEl.appendChild(contentSection2());
  containerDivEl.appendChild(contentSection3());

  return containerDivEl;
}

function contentSection1() {
  const sectionEl = document.createElement("section");
  sectionEl.classList.add("content-section");

  sectionEl.appendChild(createTitle("Trove Levenshulme"));
  sectionEl.appendChild(
    createSubtitle("1032-1034 Stockport Rd, Levenshulme, Manchester, M19 3WX")
  );

  const btnSection = document.createElement("div");
  btnSection.classList.add("section__buttons");
  btnSection.appendChild(createButton("brunch menu"));
  btnSection.appendChild(createButton("book a table"));
  sectionEl.appendChild(btnSection);

  const imgSection = document.createElement("div");
  imgSection.classList.add("section__images");
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582026438220-7QGZU06NOJI27OGWFMAI/Levy+Cafe.jpg"
    )
  );
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582026476109-9EH0NQ7FTSBNDM4DUF1J/JM-TROVE-PRESS-18.JPG"
    )
  );
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1584357109518-JTMTJLU9L8MI1A0GPW18/IMG_7359.jpg"
    )
  );

  sectionEl.appendChild(imgSection);

  return sectionEl;
}

function contentSection2() {
  const sectionEl = document.createElement("section");
  sectionEl.classList.add("content-section");

  sectionEl.appendChild(createTitle("Trove Ancoats"));
  sectionEl.appendChild(
    createSubtitle("5 Murray Street, Ancoats, Manchester, M4 6HS")
  );

  const btnSection = document.createElement("div");
  btnSection.classList.add("section__buttons");
  btnSection.appendChild(createButton("brunch menu"));
  btnSection.appendChild(createButton("book a table"));
  sectionEl.appendChild(btnSection);

  const imgSection = document.createElement("div");
  imgSection.classList.add("section__images");
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582026305259-1PXFAS29OV916WBSR7RI/Trove+Ancoats_Image+1.JPG"
    )
  );
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582026328354-E0TE9QKPGIUPG8OMNFMG/1c8d0221-931e-47e0-aefa-36f1eccf0833+2.jpg"
    )
  );
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1584357018940-Q906YBKE1BNJKR1RZMT4/IMG_8325.jpg"
    )
  );

  sectionEl.appendChild(imgSection);

  return sectionEl;
}

function contentSection3() {
  const sectionEl = document.createElement("section");
  sectionEl.classList.add("content-section");

  sectionEl.appendChild(createTitle("Trove Marble Street"));
  sectionEl.appendChild(
    createSubtitle("5 Murray Street, Ancoats, Manchester, M4 6HS")
  );

  const imgSection = document.createElement("div");
  imgSection.classList.add("section__images");
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1622201816321-0U6ZWMD87KFHXIOMEHS9/IMG_7995.jpg"
    )
  );
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1622201814819-GZRT07S5NNPDC6AR54NW/IMG_7990.jpg"
    )
  );
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1622201818600-NWTNMGA0NHNRNLD4BATM/IMG_7999.jpg"
    )
  );

  sectionEl.appendChild(imgSection);

  return sectionEl;
}

function createTitle(bodyText) {
  const h2El = document.createElement("h2");
  h2El.classList.add("section__title");
  h2El.innerText = bodyText;

  return h2El;
}

function createSubtitle(bodyText) {
  const pEl = document.createElement("p");
  pEl.classList.add("section__subtitle");
  pEl.innerText = bodyText;

  return pEl;
}

function createImg(url) {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", url);
  imgEl.classList.add("section__image");

  return imgEl;
}

function createButton(btnText) {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn", "btn--section");
  btnEl.textContent = btnText;

  return btnEl;
}
