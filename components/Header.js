import headerStyle from "../styles/Header.module.css";
const Header = () => {
  //   const x = 4;
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>Next JS</span> Practice
      </h1>
      <p className={headerStyle.description}>
        Keep up to date with latest web dev news
      </p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
