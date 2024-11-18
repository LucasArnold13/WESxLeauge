"use client";
import { teams } from "@/public/data/team";
import player1 from "@/public/img/player1.png";
import player2 from "@/public/img/player2.png";
import player3 from "@/public/img/player3.png";
import player4 from "@/public/img/player4.png";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Teams = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  return (
    <section className="teams-card-section pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-lg-15 mb-10">
            <h2 className="display-four tcn-1 cursor-scale growUp title-anim">
              Find Teams
            </h2>
          </div>
        </div>
        <div className="row g-6 justify-content-md-start justify-content-center mb-lg-15 mb-10">
          {teams.map(({ id, img, number, players, title }) => (
            <div key={id} className="col-xl-4 col-md-6">
              <div
                style={style}
                onMouseMove={handleMouseMove}
                className="team-card gap-6 p-xxl-8 p-4 bgn-4 box-style alt-box"
                data-tilt
              >
                <div className="team-thumb">
                  <Image
                    className="w-100 rounded-circle"
                    src={img}
                    alt="team"
                  />
                </div>
                <div className="team-info w-100">
                  <div className="title-area d-flex gap-5 align-items-end mb-5">
                    <Link href={`/teams/${id}`}>
                      <h4 className="tcn-1 cursor-scale growDown title-anim text-uppercase">
                        {title}
                      </h4>
                    </Link>
                    <span className="tcn-6">{number}</span>
                  </div>
                  <div className="player-info d-flex gap-6 align-items-center mb-6">
                    <div className="d-flex gap-3 align-items-center">
                      <i className="ti ti-users fs-2xl"></i>
                      <span className="tcn-6">{players} players</span>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="ti ti-world fs-2xl"></i>
                      <span className="tcn-6">English</span>
                    </div>
                  </div>
                  <div className="d-between justify-content-center justify-content-xl-between flex-wrap w-100 gap-xxl-6 gap-3">
                    <ul className="player-lists d-flex align-items-center">
                      <li className="rounded-circle overflow-hidden me-n4">
                        <Image src={player1} alt="player" />
                      </li>
                      <li className="rounded-circle overflow-hidden me-n4">
                        <Image src={player2} alt="player" />
                      </li>
                      <li className="rounded-circle overflow-hidden me-n4">
                        <Image src={player3} alt="player" />
                      </li>
                      <li className="rounded-circle overflow-hidden me-n4">
                        <Image src={player4} alt="player" />
                      </li>
                      <li className="rounded-circle overflow-hidden heading-font fs-base">
                        99+
                      </li>
                    </ul>
                    <Link
                      href={`/teams/${id}`}
                      className="btn-half-border position-relative d-inline-block py-2 px-6 rounded-pill z-2"
                    >
                      Request to join
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-center">
          <button className="btn-half-border position-relative d-inline-block py-2 bgp-1 px-6 rounded-pill z-2 border-0">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teams;
