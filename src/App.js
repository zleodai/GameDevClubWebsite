import logo from './logo.svg';
import './App.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const fall2025Games = [
    {
      Title: "Photophobic yEYEme",
      Authors: "Leo Dai, Lawrence Benitez",
      Description: "Power failure at Site 11b. Backup generators failed to start. Entity 7247 Containment breached. Entity is extremely mobile, using its tentacles to grip and tear anything near it. ",
      Link: "https://law47.itch.io/photophobic-teyeme",
      Image: "https://img.itch.zone/aW1nLzIzNjkwNzIwLnBuZw==/300x240%23c/hw5OyH.png"
    },
    {
      Title: "Eye Spy",
      Authors: "",
      Description: "Hello, this is from agency headquarters. We just received news of an enemy base in downtown, and we are down to just one agent: Agent James Blind. He is one of our best. However, he is blind, so you must assist him. You will need to navigate him by YELLING at him through his earpiece to know where he needs to go. Be careful during this infiltration operation, as enemies and traps are there to stop Agent James Blind.",
      Link: "https://undalevein.itch.io/eye-spy",
      Image: "https://img.itch.zone/aW1nLzIzNjg4OTMxLnBuZw==/original/H0Itwn.png"
    },
    {
      Title: "Through the Peephole",
      Authors: "Simon Flores",
      Description: "It's Halloween night and the usual trick or treaters aren't around. Face off against a set of strangers each with their own ways to deal with them",
      Link: "https://bnuuydev.itch.io/through-the-peephole",
      Image: "https://img.itch.zone/aW1nLzIzNjg2NzExLmpwZw==/original/h9x024.jpg"
    },
  ];

  const fall2024Games = [
    {
      Title: "Unstable",
      Authors: "Leo Dai, Lawrence Benitez, Aiden Macdougald",
      Description: "Where the hell is my oatmeal? If horses could talk would they speak French? What are you talking about what is a cybertruck? Because if hadn't been would've been there had it been?",
      Link: "https://law47.itch.io/unstable",
      Image: "https://img.itch.zone/aW1nLzE4NTM3NDkxLnBuZw==/original/lVITuN.png"
    },
    {
      Title: "The Nut Case",
      Authors: "",
      Description: "A detective wakes up from a crazy dream. When sent to investigate a mental ward, he’s knocked out and trapped inside. While trying to escape, he faces monsters and mysteries, but are these hallucinations or is this his new reality? Join the adventure to help him discover the mystery.",
      Link: "https://boastful-birdie.itch.io/game-jam-the-nut-case",
      Image: "https://img.itch.zone/aW1nLzE4NTM1ODQ3LnBuZw==/original/FR9R2m.png"
    },
    {
      Title: "StickyStack'ems",
      Authors: "",
      Description: "",
      Link: "https://milo-coding.itch.io/sticky-stackems",
      Image: "https://img.itch.zone/aW1nLzE4NTM3NTYyLnBuZw==/original/zgAE2p.png"
    },
    {
      Title: "Mind of Luc",
      Authors: "",
      Description: "LOGLINE: A man wakes up in an abandoned prison and spirals deeper and deeper into the unstable machinations that hold this place together.",
      Link: "https://drthiccboot.itch.io/48hr-game-jam-game",
    },
    {
      Title: "Table Footing",
      Authors: "Aidan Dionisio, Khalid Stewart",
      Description: "They are everywhere, and always reliable. Need somewhere to work? Tables.  Need something to stand on where everyone can see you? Tables. Need to cover yourself from falling debris during an earthquake? TABLES. But today, they are not as solid as you would like. In fact, today, your footing will be quite... unsTable.",
      Link: "https://gamernerd-i.itch.io/table-footing-demo",
    }
  ];

  const spring2024Games = [
    {
      Title: "Tax Invasion",
      Authors: "Clifford Phillips",
      Description: "After advancements in space travel, humans began sending satellites and radio signals further, and further out into deep space looking for intelligent life. Unfortunately, one of these messages was intercepted by an alien empire bent on exerting their will across the universe. They have subjugated every other planet into paying massive taxes to fund their conquest. The message contained information on human anatomy, society, art, literature, philosophy, and history, along with our home address. With the coordinates for our planet, the aliens launched a surprise attack and conquered Earth with their superior technology. Now, they are demanding tribute, but the war has bankrupted the world economy and humanity is refusing to pay the taxes, and the aliens are done asking nicely. They will use any means necessary to drain Earth's resources to fuel their vast empire. Now, it is up to a rogue group of human resistance fighters to defend Earth from the intergalactic tax-collecting menace.",
      Link: "https://siegesg.itch.io/tax-invasion",
      Image: "https://img.itch.zone/aW1nLzE1MzcxODEzLnBuZw==/original/Kngteo.png"
    },
  ];

  return (
    <div className="AppContent">
      <div className="AppTop">
        LMU Student Games Collection
      </div>
      <div className="AppMiddle">
        A showcase of games made by LMU students — built with creativity, collaboration, and a love for interactive storytelling.
        </div>
      <div className="CarouselContainer">
        <h2 className="CarouselTitle">Fall 2025 Game Jam Showcase</h2>
        <h2 className="CarouselTitle">Theme: Eyes</h2>
        <Carousel responsive={responsive} className="Carousel">
          {fall2025Games.map((item) => <CarouselItem key={item.Title} item={item}/>)}
        </Carousel>
      </div>
      <div className="CarouselContainer">
        <h2 className="CarouselTitle">Fall 2024 Game Jam Showcase</h2>
        <h2 className="CarouselTitle">Theme: Unstable</h2>
        <Carousel responsive={responsive} className="Carousel">
          {fall2024Games.map((item) => <CarouselItem key={item.Title} item={item}/>)}
        </Carousel>
      </div>
      <div className="CarouselContainer">
        <h2 className="CarouselTitle">Spring 2024 Game Jam Showcase</h2>
        <h2 className="CarouselTitle">Theme: Open Theme</h2>
        <Carousel responsive={responsive} className="Carousel">
          {spring2024Games.map((item) => <CarouselItem key={item.Title} item={item}/>)}
        </Carousel>
      </div>
    </div>
  );
}

function CarouselItem({item}) {
  return (
    <div className="CarouselItem"
      style={{
        backgroundImage: `url(${item.Image ?? "https://img.freepik.com/free-photo/abstract-geometric-background-shapes-texture_1194-301824.jpg?semt=ais_user_personalization&w=740&q=80"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="CarouselItemOverlay">
        <h2>{item.Title}</h2>
        <h4>{item.Authors}</h4>
        <p>{item.Description}</p>
        {item.Link && (
          <button className="VisitButton" onClick={() => window.open(item.Link, "_blank")}>
            Visit
          </button>
        )}
      </div>
    </div>
  )
}

export default App;