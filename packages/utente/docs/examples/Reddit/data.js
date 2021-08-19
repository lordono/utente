import { add } from "date-fns";

export const users = {
  1: {
    index: 1,
    name: "u/lordono",
    upvote: [1, 2, 3],
    downvote: [1, 2, 3]
  },
  2: {
    index: 2,
    name: "u/user2",
    upvote: [1, 2, 3],
    downvote: [1, 2, 3]
  }
};

export const namespaces = {
  1: {
    index: 1,
    name: "Leadership",
    reddits: {
      1: {
        rating: 10100,
        comments: []
      },
      2: {
        rating: 20100,
        comments: []
      },
      3: {
        rating: 1000,
        comments: []
      },
      4: {
        rating: 5000,
        comments: []
      },
      5: {
        rating: 5,
        comments: []
      }
    }
  },
  2: {
    index: 2,
    name: "Innovation",
    reddits: {
      1: {
        rating: 30000,
        comments: []
      },
      2: {
        rating: 20100,
        comments: []
      },
      3: {
        rating: 1000,
        comments: []
      },
      4: {
        rating: 5000,
        comments: []
      },
      5: {
        rating: 4,
        comments: []
      }
    }
  }
};

export const redditData = [
  {
    index: 1,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    img:
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    name: "u/lordono",
    title: "Project Title 1",
    subreddit: "r/machinelearning",
    date: add(new Date(), { hours: -2 }),
    pitch: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
      Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
      Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    problem: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    solution: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    market: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    phase: "Scope",
    tags: ["visibility", "observation"]
  },
  {
    index: 2,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    img:
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    name: "u/lordono",
    title: "Project Title 2",
    subreddit: "r/machinelearning",
    date: add(new Date(), { hours: -3 }),
    pitch: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
      Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
      Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    problem: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    solution: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    market: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    phase: `Ideate`,
    tags: ["wireless"]
  },
  {
    index: 3,
    avatar: "https://randomuser.me/api/portraits/men/97.jpg",
    img:
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    name: "u/lordono",
    title: "Project Title 3",
    subreddit: "r/machinelearning",
    date: add(new Date(), { hours: -6 }),
    pitch: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
      Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
      Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    problem: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    solution: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    market: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    phase: `Ideate`,
    tags: ["dating"]
  },
  {
    index: 4,
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    img:
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    name: "u/lordono",
    title: "Project Title 4",
    subreddit: "r/machinelearning",
    date: add(new Date(), { hours: -10 }),
    pitch: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
      Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
      Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    problem: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    solution: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    market: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    phase: `Validate`,
    tags: ["collaboration", "experience"]
  },
  {
    index: 5,
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    img:
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    name: "u/lordono",
    title: "Project Title 5",
    subreddit: "r/machinelearning",
    date: add(new Date(), { hours: -11 }),
    pitch: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
      Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
      Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    problem: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    solution: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    market: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ratione quibusdam rem ut! Ab vel officia dolorem ullam fugit quod qui sint beatae tenetur, pariatur quaerat veniam soluta impedit.
    Atque, dolor asperiores vel molestias magni ratione, ipsum labore, perferendis est id minus necessitatibus vitae fuga nisi alias dicta nesciunt inventore architecto voluptatibus quam? Dolores voluptas sit alias ullam suscipit.
    Molestiae aliquid, magnam eum saepe similique eius dolores veniam mollitia officiis voluptatum nihil nostrum quam, officia quas. Illum cum suscipit atque, deserunt iste est doloremque aspernatur, natus, nisi voluptates animi?`,
    phase: `Ideate`,
    tags: ["3D", "collaboration"]
  }
];
