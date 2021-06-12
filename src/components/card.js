import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  //create elements
  const card = document.createElement("div");

  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorSpan = document.createElement("span");

  //assign element hierarchy
  card.appendChild(headlineDiv);
  card.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorDiv.appendChild(authorSpan);

  //add classes, content, attributes to elements
  card.classList.add("card");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = article.headline;
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");
  img.src = article.authorPhoto;
  authorSpan.textContent = `By ${article.authorName}`;

  //add click event listener to card
  card.addEventListener("click", () => {
    console.log(article.headline);
  });

  return card;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.

  //make an entryPoint to append to
  const entryPoint = document.querySelector(selector);

  //fetch data, iterate over it, feed iterations into Card component function and append to entryPoint
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      // console.log("CARD RES", res);
      const articlesArray = [
        res.data.articles.javascript,
        res.data.articles.bootstrap,
        res.data.articles.technology,
        res.data.articles.jquery,
        res.data.articles.node,
      ];

      articlesArray.forEach((index) => {
        index.forEach((articleObj) => {
          const newArticle = Card(articleObj);
          entryPoint.appendChild(newArticle);
        });
      });

      //Not DRY, TRY AGAIN

      // res.data.articles.javascript.forEach((articleObj) => {
      //   const newArticle = Card(articleObj);
      //   entryPoint.appendChild(newArticle);
      // });
      // res.data.articles.bootstrap.forEach((articleObj) => {
      //   const newArticle = Card(articleObj);
      //   entryPoint.appendChild(newArticle);
      // });
      // res.data.articles.technology.forEach((articleObj) => {
      //   const newArticle = Card(articleObj);
      //   entryPoint.appendChild(newArticle);
      // });
      // res.data.articles.jquery.forEach((articleObj) => {
      //   const newArticle = Card(articleObj);
      //   entryPoint.appendChild(newArticle);
      // });
      // res.data.articles.node.forEach((articleObj) => {
      //   const newArticle = Card(articleObj);
      //   entryPoint.appendChild(newArticle);
      // });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
