export const dashboardMount = () => {
  const resourceData = [
    {
      title: "Resource link",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi,
                            inventore eveniet asperiores dignissimos officiis pariatur et! Aspernatur atque
                            ullam aliquam quo voluptas. Mollitia ratione ullam rerum facere ad minima!`,
      timestamp: Date.parse("9/11/1999"),
      actions: "View, Mark as done",
    },
    {
      title: "Resource link",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi,
                            inventore eveniet asperiores dignissimos officiis pariatur et! Aspernatur atque
                            ullam aliquam quo voluptas. Mollitia ratione ullam rerum facere ad minima!`,
      timestamp: Date.parse("9/11/1999"),
      actions: "View, Mark as done",
    },
    {
      title: "Resource link",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi,
                            inventore eveniet asperiores dignissimos officiis pariatur et! Aspernatur atque
                            ullam aliquam quo voluptas. Mollitia ratione ullam rerum facere ad minima!`,
      timestamp: Date.parse("9/11/1999"),
      actions: "View, Mark as done",
    },
    {
      title: "Resource link",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi,
                            inventore eveniet asperiores dignissimos officiis pariatur et! Aspernatur atque
                            ullam aliquam quo voluptas. Mollitia ratione ullam rerum facere ad minima!`,
      timestamp: Date.parse("9/11/1999"),
      actions: "View, Mark as done",
    },
    {
      title: "Resource link",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi,
                            inventore eveniet asperiores dignissimos officiis pariatur et! Aspernatur atque
                            ullam aliquam quo voluptas. Mollitia ratione ullam rerum facere ad minima!`,
      timestamp: Date.parse("9/11/1999"),
      actions: "View, Mark as done",
    },
    {
      title: "Resource link",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi,
                            inventore eveniet asperiores dignissimos officiis pariatur et! Aspernatur atque
                            ullam aliquam quo voluptas. Mollitia ratione ullam rerum facere ad minima!`,
      timestamp: Date.parse("9/11/1999"),
      actions: "View, Mark as done",
    },
  ];

  /**
   * Use store to cache requests
   *
   * if (store.dashboard.news === null) {
   *    fetch(data)
   *    .then(() => {
   *        useData()
   *        store.dashboard.news = data
   *    })
   * } else {
   *    useData()
   * }
   */

  const newsData = [
    {
      title: "News Heading",
      abstract: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi,
                    inventore eveniet asperiores dignissimos officiis pariatur et! Aspernatur atque
                    ullam aliquam quo voluptas. Mollitia ratione ullam rerum facere ad minima!`,
      timestamp: Date.parse("9/11/1999"),
    },
    {
      title: "News Heading",
      abstract: `Short abstract of the news article...`,
      timestamp: Date.parse("9/11/1999"),
    },
    {
      title: "News Heading",
      abstract: `Short abstract of the news article...`,
      timestamp: Date.parse("9/11/1999"),
    },
    {
      title: "News Heading",
      abstract: `Short abstract of the news article...`,
      timestamp: Date.parse("9/11/1999"),
    },
    {
      title: "News Heading",
      abstract: `Short abstract of the news article...`,
      timestamp: Date.parse("9/11/1999"),
    },
    {
      title: "News Heading",
      abstract: `Short abstract of the news article...`,
      timestamp: Date.parse("9/11/1999"),
    },
    {
      title: "News Heading",
      abstract: `Short abstract of the news article...`,
      timestamp: Date.parse("9/11/1999"),
    },
  ];

  const createNewsLinks = () => {
    const news = document.getElementById("news-list");
    const newsTemplate = document.getElementById("news-template");

    newsData.forEach((el) => {
      const clone = newsTemplate.content.cloneNode(true);
      clone.querySelector(".title").innerText = el.title;
      clone.querySelector(".abstract").innerText = el.abstract;
      news.appendChild(clone);
    });
  };

  const createResourceLinks = () => {
    const links = document.getElementById("links");
    const cardTemplate = document.getElementById("card-template");

    resourceData.forEach((el) => {
      const clone = cardTemplate.content.cloneNode(true);
      clone.querySelector(".title").innerText = el.title;
      clone.querySelector(".content").innerText = el.content;
      links.appendChild(clone);
    });
  };

  requestAnimationFrame((t) => {
    createResourceLinks();
    createNewsLinks();
    console.log("Content populated @:", t);
  });
};
