const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>

  //create header elements
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const h1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  //add classes and content to new elements
  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  dateSpan.textContent = date;
  h1.textContent = title;
  tempSpan.classList.add("temp");
  tempSpan.textContent = temp;

  //append new elements to headerDiv to create markup
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
};

const headerAppender = (selector) => {
  console.log("the script tag worked");

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  //create newHeader with Header component fuction
  const newHeader = Header(
    "The Lambda Herald",
    "Saturday June 12, 2021",
    "68 degrees"
  );
  //instantiate DOM element with selector parameter
  const entryPoint = document.querySelector(selector);

  //append newHeader component to the entryPoint
  entryPoint.appendChild(newHeader);
};

export { Header, headerAppender };
