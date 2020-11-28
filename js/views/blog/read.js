export const blogMount = () => {
  let blogData = [
    {
      title: "Article #1",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Experience",
      timestamp: Date.parse("9/11/1999"),
      popularity: 0.0,
    },
    {
      title: "Article #2",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Experience",
      timestamp: Date.parse("8/11/1999"),
      popularity: 0.1,
    },
    {
      title: "Article #3",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Interview",
      timestamp: Date.parse("12/11/1999"),
      popularity: 0.25,
    },
    {
      title: "Article #4",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Experience",
      timestamp: Date.parse("1/11/1999"),
      popularity: 1.0,
    },
    {
      title: "Article #5",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Experience",
      timestamp: Date.parse("2/11/1999"),
      popularity: 0.55,
    },
    {
      title: "Article #6",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Interview",
      timestamp: Date.parse("3/11/1999"),
      popularity: 0.75,
    },
  ];

  const editorialData = [
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      timestamp: Date.parse("19/11/1999"),
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      timestamp: Date.parse("19/11/1999"),
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      timestamp: Date.parse("19/11/1999"),
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      timestamp: Date.parse("19/11/1999"),
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      timestamp: Date.parse("19/11/1999"),
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      timestamp: Date.parse("19/11/1999"),
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      timestamp: Date.parse("19/11/1999"),
    },
  ];

  //   select dom elements
  const readTemplate = document.getElementById("read-template");
  const blog = document.getElementById("blog");
  const editorial = document.getElementById("editorial");
  const categoryHeading = document.getElementById("category-heading");

  //   init controls and settings
  const filterControls = {
    category: document.querySelector("select"),
    order: document.querySelectorAll("input[type=radio]"),
  };
  const filterSettings = {
    category: filterControls.category.value,
    order: "timestamp",
  };

  //   render blog with current settings
  const renderBlog = () => {
    let prop = "timestamp";
    let mod = 1;
    if (filterSettings.order === "oldest") {
      prop = "timestamp";
      mod = -1;
    } else if (filterSettings.order === "latest") {
      prop = "timestamp";
      mod = 1;
    } else if (filterSettings.order === "popularity") {
      prop = "popularity";
      mod = -1;
    }
    const newBlogData = [...blogData].sort((a, b) => {
      if (a[prop] <= b[prop]) {
        return -1 * mod;
      } else if (b[prop] < a[prop]) {
        return 1 * mod;
      }
      return 0;
    });
    blog.innerHTML = null;
    newBlogData.forEach((el, i) => {
      if (el.category == filterSettings.category) {
        const clone = readTemplate.content.cloneNode(true);
        clone.querySelector(".title").innerText = `${el.title}
                                                    Timestamp: ${el.timestamp} 
                                                    Popularity: ${el.popularity}
                                                    Category: ${el.category}`;
        clone.querySelector(".content").innerText = el.content;
        blog.appendChild(clone);
      }
    });
  };
  renderBlog();

  /*
   * Add reactivity
   */

  //   Handle category change
  filterControls.category.addEventListener("change", (e) => {
    filterSettings.category = e.target.value;
    if (e.target.value === "Interview") {
      categoryHeading.innerText = `Interview
							        QAs`;
    } else {
      categoryHeading.innerText = `Student
							    Experiences`;
    }
    renderBlog();
  });

  //   Handle sort order change
  filterControls.order.forEach((el) => {
    el.addEventListener("change", (e) => {
      filterSettings.order = e.target.value;
      renderBlog();
    });
  });

  //   Render editorial list
  editorial.innerHTML = null;
  editorialData.forEach((el) => {
    const clone = readTemplate.content.cloneNode(true);
    clone.querySelector(".card").classList.add("dark");
    clone.querySelector(".title").innerText = el.title;
    clone.querySelector(".content").innerText = el.content;
    editorial.appendChild(clone);
  });
};
