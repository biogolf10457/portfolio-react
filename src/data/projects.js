const projects = {
  webDevelopment: [
    {
      id: "w3",
      title: "Krung Tai Nam",
      description:
        "KrungTaiNam is  the website presenting the prediction of flood in Bangkok in 2050. This project was developed by co-working with students from Faculty of Architecture.",
      codeURL: "https://github.com/biogolf10457/Bangkok2050",
      demoURL: "https://krungtainam.netlify.app/",
      picture: "KrungTaiNam.png",
      stacks: ["javascript.svg"],
      year: "2020",
    },
    {
      id: "w2",
      title: "How High We Are",
      description:
        "The interactive website presents the famous things related to height. This project was developed using Vue.js to manage information rendered on the website.",
      codeURL: "https://github.com/biogolf10457/HowHighWeAre",
      demoURL: "https://howhighweare.netlify.app/",
      picture: "HowHighWeAre.png",
      stacks: ["javascript.svg", "vuejs.svg"],
      year: "2020",
    },
    {
      id: "w1",
      title: "China History",
      description:
        "The website presents the history of China. The contents show the timeline of dynasty from past to present",
      codeURL: "https://github.com/biogolf/WebTech_ChinaHistory",
      demoURL: "https://biogolf.github.io/WebTech_ChinaHistory/",
      picture: "ChinaHistory2.png",
      stacks: ["javascript.svg"],
      year: "2019",
    },
  ],
  gameDevelopment: [
    {
      id: "g3",
      title: "Battle Chess",
      description:
        "The two teams battle 3rd-person multiplayer game developed using Unreal Engine 4. We learned to make Game Design Document in the design process and learned to use UE4's blueprints in development process.",
      codeURL: null,
      demoURL:
        "https://drive.google.com/file/d/1kPCvfM5VuseD6q6V9OYLy9sMjn1AY1W6/view",
      picture: "BattleChess.png",
      stacks: ["unreal-engine.svg"],
      year: "2020",
    },
    // {
    //   id: "g2",
    //   title: "Wizard Run",
    //   description:
    //     "The two players 2D running game developed using Unity. This project was developed for learning Unity and working with team in the Workshop. We learned to marketing, pitching idea, game development and presenting game to the persons from game industry.",
    //   codeURL: "https://github.com/biogolf10457/-ParallelWorld",
    //   demoURL: null,
    //   picture: "WizardRun.png",
    //   stacks: ["unity.svg"],
    //   year: "2020",
    // },
    {
      id: "g1",
      title: "Big-Gun",
      description:
        "The top-eye view battle tanks game developed using Java. This project was developed for learning OOP concept.",
      codeURL: "https://github.com/H3N9/Tank",
      demoURL:
        "https://drive.google.com/file/d/1WdA96pTY7KMtVEDfNSCzh9Ay5xMTDqe8/view?usp=sharing",
      picture: "BigGun.png",
      stacks: ["java.svg"],
      year: "2019",
    },
  ],
  animation3D: [
    {
      id: "d1",
      title: "Scorpion Car",
      description:
        "Scorpion Car is the project for learning rigging and animation using Maya.",
      codeURL: null,
      demoURL:
        "https://drive.google.com/file/d/1JU8Qi9N6Y2zSCftUrc2t0TvqP2bS4S85/view",
      picture: "ScorpionCar.png",
      stacks: ["maya.svg"],
      year: "2020",
    },
    {
      id: "d2",
      title: "Covid-19",
      description:
        "Covid-19 is the animation project using Maya for all processes including modeling, rigging and animation ",
      codeURL: null,
      demoURL: "https://www.facebook.com/biogolf/videos/3241970292532884",
      picture: "Covid19.png",
      stacks: ["maya.svg"],
      year: "2020",
    },
    {
      id: "d3",
      title: "Knights and Dragon",
      description:
        "The first project when I learned MAYA for the first time. I am responsible for modeling both knights, UVs and texturing knights and dragon, rigging 2nd knight and dragon, and animate 0.28s - 0.37s of the sequence in the video.",
      codeURL: null,
      demoURL:
        "https://drive.google.com/file/d/1JyrnEIGD47_DnBw0cskwkpNjxvemsYqX/view?usp=sharing",
      picture: "KnightsAndDragon.png",
      stacks: ["maya.svg"],
      year: "2020",
    },
  ],
};

const getProjects = () => {
  return projects;
};

export { getProjects };
