import "./styles/hero.scss";

const Hero = ({ stickyMargin }) => {
  return (
    <div
      className="hero"
      style={{ marginTop: stickyMargin > 0 ? stickyMargin : 0 }}
    ></div>
  );
};

export default Hero;
