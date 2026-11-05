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

const list = document.querySelector("#posts");

for (const post of posts) {
  const item = document.createElement("li");
  item.textContent = post.location
    ? `${post.text} — ${post.location}`
    : post.text;
  list.append(item);
}
