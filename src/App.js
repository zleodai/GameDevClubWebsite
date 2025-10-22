import './App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // 🎨 Each item now includes an Image property
  const showcaseGames2025 = [
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
      Description: "2D adventure exploration",
      Link: "https://example.com/echo",
      Image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80"
    },
    {
      Title: "Starweaver",
      Authors: "Alexis King, Tony Ramirez",
      Description: "Top-down shooter with shaders",
      Link: "https://example.com/starweaver",
      Image: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const showcaseGames2024 = [
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
      Description: "2D adventure exploration",
      Link: "https://example.com/echo",
      Image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <div className="AppContent">
      <div className="AppTop">LMU Student Games Collection</div>
      <div className="AppMiddle">A showcase of games made by LMU students — built with creativity, collaboration, and a love for interactive storytelling.</div>

      {/* Showcase 2025 */}
      <div className="CarouselSection">
        <h2 className="CarouselTitle">Fall 2025 Game Jam Showcase</h2>
        <h2 className="CarouselTitle">Theme: Eyes</h2>
        <Carousel responsive={responsive} className="Carousel">
          {showcaseGames2025.map((item, index) => (
            <CarouselItem key={index} item={item} />
          ))}
        </Carousel>
      </div>

      {/* Showcase 2024 */}
      <div className="CarouselSection">
        <h2 className="CarouselTitle">Fall 2024 Game Jam Showcase</h2>
        <h2 className="CarouselTitle">Theme: Unstable</h2>
        <Carousel responsive={responsive} className="Carousel">
          {showcaseGames2024.map((item, index) => (
            <CarouselItem key={index} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function CarouselItem({ item }) {
  return (
    <div
      className="CarouselItem"
      style={{
        backgroundImage: `url(${item.Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="CarouselItemOverlay">
        <h2>{item.Title}</h2>
        <h4>{item.Authors}</h4>
        <p>{item.Description}</p>
        {item.Link && (
          <button
            className="VisitButton"
            onClick={() => window.open(item.Link, "_blank")}
          >
            Visit
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
