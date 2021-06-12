const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //create parent div with class = topics
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");

  //iterate over topics array and create div class = tab and text content corresponding to each array index
  topics.forEach((topic) => {
    //create new topic div
    const newTopic = document.createElement("div");
    //add class to new topic div
    newTopic.classList.add("tab");
    //add text content correspoding to each topic array index
    newTopic.textContent = topic;
    //append new topic to parent topicsDiv
    topicsDiv.appendChild(newTopic);
  });

  return topicsDiv;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.

  //create entry point to append to
  const entryPoint = document.querySelector(selector);
};

export { Tabs, tabsAppender };
