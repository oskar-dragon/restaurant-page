const bodyEl = document.getElementByTagName("body");

function createHeader(createLogo, createNav) {
  const header = document.createElement("header");
  header.classList.add("page-head");

  const container = document.createElement("div");
  container.classList.add("container container--flex");

  container.appendChild(createLogo());
  container.appendChild(createNav());

  return header;
}

function createLogo() {
  const anchor = documnet.createElement("a");
  const imageElement = document.createElement("img");

  anchor.setAttribute("href", "./index.html");

  imageElement.classList.add("logo");
  imageElement.setAttribute(
    "src",
    "https://images.squarespace-cdn.com/content/v1/5874bb36f5e231cac816465e/1486653555218-DVCX3DVTL6KP31OPTWW0/trove_logo-FINAL.png"
  );

  anchor.appendChild(imageElement);

  return anchor;
}

function createNav() {
  let pages = [
    {
      name: "Our cafes",
      link: "./our-cafes.html",
    },
    {
      name: "The bakery",
      link: "./bakery.html",
    },
    {
      name: "Events",
      link: "#",
    },
    {
      name: "Careers",
      link: "#",
    },
    {
      name: "Contact us",
      link: "#",
    },
  ];

  const navEl = document.createElement("nav");
  const ulEl = document.createElement("ul");

  navEl.classList.add("nav");
  ulEl.classList.add("nav__list");

  for (let page of pages) {
    const liEl = document.createElement("li");
    const aEl = document.createElement("a");

    liEl.classList.add("nav__item");
    aEl.classList.add("nav__link");

    /* Change the logic here once you figure out
    how to make buttons clickable to change pages */

    aEl.setAttribute("href", page.link);
    aEl.innerText = page.name;

    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);
  }

  navEl.appendChild(ulEl);

  return navEl;
}
