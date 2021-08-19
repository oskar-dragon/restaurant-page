export default createPage;

function createPage() {
  const divContainer = document.createElement("div");
  divContainer.classList.add("container");

  const heroSection = createSectionEl("hero");
  const heroImage = createImgEl(
    "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1615548013753-CVPINXNQH4D0H22I4CG2/Trove_web_banner2021new.jpg"
  );
  heroSection.appendChild(heroImage);

  divContainer.appendChild(heroSection);

  return divContainer;
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
