import { Link, useMatch } from "react-router-dom";
import { Divider } from "semantic-ui-react";

export const Header = ({ displayMenu }) => {
  const match = useMatch("/users");

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">Case for SoftGenius</div>
        <div className="nav">
          {displayMenu && (
            <>
              <Link
                className={Boolean(match) ? "nav-item-active" : "nav-item"}
                to="/users"
              >
                Users
              </Link>
              <Link
                className={!Boolean(match) ? "nav-item-active" : "nav-item"}
                to="/countries"
              >
                Countries
              </Link>
            </>
          )}
        </div>
      </div>
      <Divider />
    </div>
  );
};
