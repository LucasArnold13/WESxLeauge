import teamBanner from "@/public/img/team-banner.png";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="teams-section pb-sm-10 pb-6 pt-120 mt-lg-0 mt-sm-15 mt-10">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-lg-10 mb-sm-6 mb-4">
            <h2 className="display-four tcn-1 cursor-scale growUp title-anim">
              Teams
            </h2>
          </div>
          <div className="col-12">
            <div className="parallax-banner-area parallax-container">
              <Image
                className="w-100 rounded-5 parallax-img"
                src={teamBanner}
                alt="tournament banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
