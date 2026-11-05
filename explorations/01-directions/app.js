const posts = [
  {
    text: "The Brickyard is packed between classes today, but I finally found a sunny spot to eat lunch.",
    location: "The Brickyard",
  },
  {
    text: "Hunt Library's silent floor is the only reason my group project is getting done before midnight.",
    location: "Hunt Library",
  },
  {
    text: "Long line at Talley, short patience, excellent chicken tenders. Worth it.",
    location: "Talley Student Union",
  },
  {
    text: "Walked past the Court of North Carolina just as the bells started. Best five minutes of my day.",
    location: "Court of North Carolina",
  },
  {
    text: "A wolfpack win and a perfect sunset over Carter-Finley. Doesn't get much better than this.",
    location: "Carter-Finley Stadium",
  },
  {
    text: "Someone left a tiny knitted wolf on a bench near the library. It made my whole morning.",
    location: "D.H. Hill Jr. Library",
  },
  {
    text: "The coffee cart outside Park Shops knows my order now. I think I should be embarrassed, but I'm not.",
    location: "Park Shops",
  },
  {
    text: "Found a quiet table in the back of Talley to call home for the next three hours.",
    location: "Talley Student Union",
  },
  {
    text: "Took the long way across campus and found a new favorite path under all those old trees.",
  },
  {
    text: "The Free Expression Tunnel has a new mural since yesterday. Campus keeps surprising me.",
    location: "Free Expression Tunnel",
  },
  {
    text: "Game day ritual: red shirt, early bus, and meeting friends by the bell tower before heading over.",
    location: "Memorial Belltower",
  },
  {
    text: "The line at Fountain Dining Hall looked endless, but I made it through with a seat by the window.",
    location: "Fountain Dining Hall",
  },
  {
    text: "My lab partner and I finally got our experiment to work after three weeks of confusing results. We high-fived so loudly that the people at the next bench looked over. We packed up our notes, walked out into the chilly evening air, and immediately started debating where to celebrate. One wanted pizza, the other wanted ice cream, and somehow we ended up at both places. Now I'm heading back to the dorm with a full stomach, a notebook full of data that actually makes sense, and the kind of tired that feels completely earned. Tomorrow we'll start writing up the report, but tonight I'm just happy the tiny thing we built did what we hoped it would do.",
    location: "Engineering Building",
  },
  {
    text: "A whole hour between classes and no meetings. I might just sit outside and do absolutely nothing.",
    location: "Stafford Commons",
  },
  {
    text: "The first cold morning of the semester and the steam coming off the coffee was doing all the heavy lifting.",
    location: "Witherspoon Student Center",
  },
];

const names = [
  "Maya R.",
  "Jordan T.",
  "Alex P.",
  "Sam K.",
  "Riley C.",
  "Avery L.",
  "Noah D.",
  "Kai M.",
  "Taylor S.",
  "Morgan B.",
  "Jamie W.",
  "Casey H.",
  "Drew F.",
  "Emery G.",
  "Quinn V.",
];
const list = document.querySelector("#post-list");
const form = document.querySelector("#composer");
const textarea = document.querySelector("#post-text");
const status = document.querySelector("#status-message");

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function renderPost(post) {
  const item = document.createElement("li");
  item.className = "post";
  item.dataset.located = String(Boolean(post.location));

  if (document.body.dataset.direction !== "b") {
    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.setAttribute("role", "img");
    avatar.setAttribute("aria-label", `${post.author} avatar`);
    avatar.textContent = initials(post.author);
    item.append(avatar);
  }

  const header = document.createElement("div");
  header.className = "post-header";

  const author = document.createElement("span");
  author.className = "post-author";
  author.textContent = post.author;

  header.append(author);

  const text = document.createElement("p");
  text.className = "post-text";
  text.textContent = post.text;

  const footer = document.createElement("div");
  footer.className = "post-footer";
  const reaction = document.createElement("button");
  reaction.className = "react-button";
  reaction.type = "button";
  reaction.setAttribute("aria-pressed", "false");
  reaction.setAttribute("aria-label", "Howl at this post");
  reaction.textContent = "Howl";
  reaction.addEventListener("click", () => {
    const active = reaction.getAttribute("aria-pressed") !== "true";
    reaction.setAttribute("aria-pressed", String(active));
    reaction.textContent = active ? "Howled" : "Howl";
    reaction.setAttribute(
      "aria-label",
      active ? "Remove your Howl from this post" : "Howl at this post",
    );
  });
  footer.append(reaction);

  if (post.location) {
    const location = document.createElement("span");
    location.className = "post-location";
    location.textContent = post.location;
    footer.append(location);
  }

  item.append(header, text, footer);
  return item;
}

function addPost(post) {
  list.prepend(renderPost(post));
}

posts.forEach((post, index) => {
  list.append(renderPost({
    ...post,
    author: names[index],
  }));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = textarea.value.trim();
  if (!text) {
    textarea.focus();
    return;
  }

  addPost({ text, author: "You" });
  textarea.value = "";
  status.textContent = "Post added.";
});

for (const filter of document.querySelectorAll("[data-filter]")) {
  filter.addEventListener("click", () => {
    for (const button of document.querySelectorAll("[data-filter]")) {
      button.setAttribute("aria-pressed", String(button === filter));
    }

    for (const post of list.children) {
      const visible =
        filter.dataset.filter === "all" ||
        (filter.dataset.filter === "located" &&
          post.dataset.located === "true") ||
        (filter.dataset.filter === "unlocated" &&
          post.dataset.located === "false");
      post.hidden = !visible;
    }
  });
}
