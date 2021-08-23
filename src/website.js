import createMain from "./main-page.js";

export { createHeader, createMainPage, createFooter };

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("page-head");

  const container = document.createElement("div");
  container.classList.add("container", "container--flex");

  container.appendChild(createLogo());
  container.appendChild(createNav());

  header.appendChild(container);

  return header;
}

function createLogo() {
  const anchor = document.createElement("a");
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
      id: "our-fafes",
    },
    {
      name: "The bakery",
      id: "bakery",
    },
    {
      name: "Events",
      id: "events",
    },
    {
      name: "Careers",
      id: "careers",
    },
    {
      name: "Contact us",
      id: "contact-us",
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
    aEl.setAttribute("id", page.id);

    aEl.addEventListener("click", e => {
      console.log(e.target.id);
    });

    aEl.innerText = page.name;

    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);
  }

  navEl.appendChild(ulEl);

  return navEl;
}

function createMainPage() {
  const mainEl = document.createElement("main");
  mainEl.classList.add("page-content");

  mainEl.appendChild(createMain());

  return mainEl;
}

function createFooter() {
  const footerEl = document.createElement("footer");
  const containerDiv = document.createElement("div");

  footerEl.classList.add("footer");
  containerDiv.classList.add("container", "container--flex-column");

  /* Brand Name Element */
  const pEl = document.createElement("p");
  pEl.classList.add("brand-name");
  pEl.innerText = "TROVE";
  containerDiv.appendChild(pEl);

  /* Social Media Container */

  const socialMediaDiv = document.createElement("div");
  socialMediaDiv.classList.add("social-media");

  ["Instagram", "Twitter"].forEach(name => {
    const aEl = document.createElement("a");
    aEl.classList.add("social-media__link");
    aEl.setAttribute("target", "_blank");
    aEl.innerText = name;
    socialMediaDiv.appendChild(aEl);
  });

  containerDiv.appendChild(socialMediaDiv);

  /* Signup Form Container */

  const signUpDiv = document.createElement("div");
  signUpDiv.classList.add("signup");

  const formEl = document.createElement("form");
  formEl.classList.add("signup-form");

  const inputText = document.createElement("input");
  inputText.classList.add("signup-form__text");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("placeholder", "Email address");
  formEl.appendChild(inputText);

  const signUpBtn = document.createElement("button");
  signUpBtn.classList.add("btn", "btn--signup-form");
  signUpBtn.innerText = "SIGNUP";
  formEl.appendChild(signUpBtn);

  signUpDiv.appendChild(formEl);

  const signUpCopyEl = document.createElement("p");
  signUpCopyEl.classList.add("signup__copy");
  signUpCopyEl.innerText =
    "Sign up to our newsletter to receive all the news, events and updates";

  signUpDiv.appendChild(signUpCopyEl);
  containerDiv.appendChild(signUpDiv);

  footerEl.appendChild(containerDiv);

  return footerEl;
}
