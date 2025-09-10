import logo from './logo.svg';
import './App.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const showcaseGames = [
    {
      Title: "Unstable",
      Authors: "Leo Dai, Lawrence Benitez, Aiden Macdougald",
      Description: "Game Jamer Winner, Horse Game"
    },
    {
      Title: "Unstable",
      Authors: "Leo Dai, Lawrence Benitez, Aiden Macdougald",
      Description: "Game Jamer Winner, Horse Game"
    },
    {
      Title: "Unstable",
      Authors: "Leo Dai, Lawrence Benitez, Aiden Macdougald",
      Description: "Game Jamer Winner, Horse Game"
    },
    {
      Title: "Unstable",
      Authors: "Leo Dai, Lawrence Benitez, Aiden Macdougald",
      Description: "Game Jamer Winner, Horse Game"
    },
  ]

  return (
    <div className="AppContent">
      <div className="AppTop">
        Game Dev Club
      </div>
      <div className="AppMiddle">
        We are the game dev club
      </div>
      <div className="Carousel">
        <Carousel responsive={responsive} className="Carousel">
          {showcaseGames.map((item) => <CarouselItem item={item}/>)}
        </Carousel>
      </div>
    </div>
  );
}

function CarouselItem(props) {
  return (
    <div className="CarouselItem">
      <h2>{props.item.Title}</h2>
      <h4>{props.item.Authors}</h4>
      <p>{props.item.Description}</p>
    </div>
  )
}

export default App;
