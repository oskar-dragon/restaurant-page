export default createBakery;

function createBakery() {
  const containerDivEl = document.createElement("div");
  containerDivEl.classList.add("container", "content-section--md");
  containerDivEl.appendChild(createContentSection());
  containerDivEl.appendChild(createSection());

  return containerDivEl;
}

function createContentSection() {
  const sectionEl = document.createElement("section");
  sectionEl.classList.add("content-section");

  sectionEl.appendChild(createTitle("The bakery"));
  sectionEl.appendChild(createSubtitle("Culturing wild yeast since 2011!"));
  sectionEl.appendChild(
    createBody(
      " Led by the traditional principles of simple, additive-free, wild yeast sourdough baking, we have an ongoing commitment to working with quality, organic flours and seasonal flavours."
    )
  );

  const imgSection = document.createElement("div");
  imgSection.classList.add("section__images");
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582019677476-0BOWDV3AN91MVABBW8PX/Trove+Bakery+.png"
    )
  );
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582019675493-DC6CVJ17AL8QDIUXJAVE/IMG_7343.JPG"
    )
  );

  sectionEl.appendChild(imgSection);

  sectionEl.appendChild(
    createBody(
      "You can buy our loaves direct from our cafes, or join our bread subscription service and collect your favourite bakes from our chosen pick up partners across Manchester, Salford, Cheshire and Stockport."
    )
  );

  return sectionEl;
}

function createSection() {
  const sectionEl = document.createElement("section");
  sectionEl.classList.add("content-section");

  sectionEl.appendChild(createTitle("Our Pastries + Cakesy"));
  sectionEl.appendChild(
    createBody(
      "Our pastry team make a range of seasonal tray bakes, tarts and sweet and savoury pastries available on the counter daily at our cafes."
    )
  );

  sectionEl.appendChild(
    createBody(
      "Our pastries take 42 hours to complete; the dough is made with organic white and wholemeal flour, French butter, organic eggs, sea salt, sugar and levain; keeping our use of commercial yeast to a minimum. After mixing, cold proving, laminating, hand-cutting and shaping, the dough is proved before being baked fresh every morning at 6am!"
    )
  );

  const imgSection = document.createElement("div");
  imgSection.classList.add("section__images");
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582020367485-EQP57ZB58SQI1OBW2V7Y/IMG_7321.PNG"
    )
  );
  imgSection.appendChild(
    createImg(
      "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1582020227532-TIBTAG6YN57ATN7BAI06/Elderflower+bundt.png"
    )
  );

  sectionEl.appendChild(imgSection);

  sectionEl.appendChild(
    createBody(
      "You can buy our loaves direct from our cafes, or join our bread subscription service and collect your favourite bakes from our chosen pick up partners across Manchester, Salford, Cheshire and Stockport."
    )
  );

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

function createBody(bodyText) {
  const pEl = document.createElement("p");
  pEl.classList.add("section__body");
  pEl.innerText = bodyText;

  return pEl;
}

function createImg(url) {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", url);
  imgEl.classList.add("section__image");

  return imgEl;
}
