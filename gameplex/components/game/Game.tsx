import gamex1 from "@/public/img/game-x1.png";
import gamex10 from "@/public/img/game-x10.png";
import gamex2 from "@/public/img/game-x2.png";
import gamex3 from "@/public/img/game-x3.png";
import gamex4 from "@/public/img/game-x4.png";
import gamex5 from "@/public/img/game-x5.png";
import gamex6 from "@/public/img/game-x6.png";
import gamex7 from "@/public/img/game-x7.png";
import gamex8 from "@/public/img/game-x8.png";
import gamex9 from "@/public/img/game-x9.png";
import Image from "next/image";
import Link from "next/link";
const games = [
  {
    id: 1,
    title: "Rainbow Six Siege",
    image: gamex1,
  },
  {
    id: 2,
    title: "Destiny 2",
    image: gamex2,
  },
  {
    id: 3,
    title: "Rocket League",
    image: gamex3,
  },
  {
    id: 4,
    title: "Clash Royale",
    image: gamex4,
  },
  {
    id: 5,
    title: "Apex Legends",
    image: gamex5,
  },
  {
    id: 6,
    title: "Genshin Impact",
    image: gamex6,
  },
  {
    id: 7,
    title: "Overwatch",
    image: gamex7,
  },
  {
    id: 8,
    title: "Stardew Valley",
    image: gamex8,
  },
  {
    id: 9,
    title: "Genshin Impact",
    image: gamex9,
  },
  {
    id: 10,
    title: "Rocket League",
    image: gamex10,
  },
];
const Game = () => {
  return (
    <section className="game-section pb-120 pt-120 mt-lg-0 mt-sm-15 mt-10">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-lg-15 mb-md-8 mb-sm-6 mb-4">
          <div className="col-6">
            <h2 className="display-four tcn-1 cursor-scale growUp title-anim">
              Games
            </h2>
          </div>
        </div>
        <div className="row gy-lg-10 gy-6">
          {games.map((game, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="game-card-wrapper mx-auto">
                <div className="game-card mb-5 p-2">
                  <div className="game-card-border"></div>
                  <div className="game-card-border-overlay"></div>
                  <div className="game-img">
                    <Image
                      className="w-100 h-100"
                      src={game.image}
                      alt="game"
                    />
                  </div>
                  <div className="game-link d-center">
                    <Link href={`/tournaments/${game.id}`} className="btn2">
                      <i className="ti ti-arrow-right fs-2xl"></i>
                    </Link>
                  </div>
                </div>
                <Link href={`/tournaments/${game.id}`}>
                  <h4 className="game-title mb-0 tcn-1 cursor-scale growDown2 title-anim">
                    {game.title}
                  </h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Game;
