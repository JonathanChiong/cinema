import headerimg from "../../public/siteicons/popcorn.png";

export const Header = () => {
  return (
    <div className="header">
      <span>
        <img className="headerImg" src={headerimg} alt="a" />
      </span>
      <h3>Cinema</h3>
    </div>
  );
};
