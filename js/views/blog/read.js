export const blogMount = () => {
  const cardTemplate = document.getElementById("card-template");
  const blog = document.getElementById("blog");
  const editorial = document.getElementById("editorial");
  const categoryHeading = document.getElementById("category-heading");

  const filterControls = {
    category: document.querySelector("select"),
    order: document.querySelectorAll("input[type=radio]"),
  };
  const filterSettings = {
    category: filterControls.category.value,
    order: "timestamp",
  };

  let blogData = [
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Experience",
      timestamp: Date.parse("9/11/1999"),
      popularity: 0.0,
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Experience",
      timestamp: Date.parse("8/11/1999"),
      popularity: 0.85,
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Interview",
      timestamp: Date.parse("12/11/1999"),
      popularity: 0.75,
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Experience",
      timestamp: Date.parse("1/11/1999"),
      popularity: 1.0,
    },
    {
      title: "Card Header",
      content: `Card content Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quisquam amet! Beatae nisi esse corporis rerum quis tenetur explicabo vitae saepe voluptatem vel! Animi aut eveniet id ad culpa vero.`,
      category: "Experience",
      timestamp: Date.parse("2/11/1999"),
      popularity: 0.85,
    },
    {
      title: "Card Header",
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

  const renderBlog = () => {
    const newBlogData = [...blogData].sort((a, b) => {
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
        mod = 1;
      }
      if (a[prop] < b[prop]) {
        return -1 * mod;
      } else if (a[prop] < b[prop]) {
        return 1 * mod;
      }
      return 0;
    });
    requestAnimationFrame(() => {
      blog.innerHTML = null;
    });
    requestAnimationFrame(() => {
      newBlogData.forEach((el, i) => {
        if (el.category == filterSettings.category) {
          const clone = cardTemplate.content.cloneNode(true);
          clone.querySelector(".title").innerText = `
												${el.title} ${i + 1} 
												Timestamp: ${el.timestamp} 
												Popularity: ${el.popularity}`;
          clone.querySelector(".content").innerText = el.content;
          blog.appendChild(clone);
        }
      });
    });
  };
  renderBlog();

  editorial.innerHTML = null
  editorialData.forEach((el) => {
    const clone = cardTemplate.content.cloneNode(true);
    clone.querySelector(".card").classList.add("dark");
    clone.querySelector(".title").innerText = el.title;
    clone.querySelector(".content").innerText = el.content;
    editorial.appendChild(clone);
  });

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

  filterControls.order.forEach((el) => {
    el.addEventListener("change", (e) => {
      filterSettings.order = e.target.value;
      renderBlog();
    });
  });
};
