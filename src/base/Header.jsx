import { Link, useMatch } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import { Menu, MenuItem } from "semantic-ui-react";

export const Header = ({ displayMenu }) => {
  const userMatch = useMatch("/users");
  const countryMatch = useMatch("/countries");
  const match = userMatch || countryMatch;

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">Case for SoftGenius</Link>
        </div>
        <div className="nav">
          {displayMenu && (
            <Menu pointing secondary>
              <MenuItem
                name="users"
                active={Boolean(userMatch)}
                as={Link}
                to="/users"
              />
              <MenuItem
                name="countries"
                active={Boolean(countryMatch)}
                as={Link}
                to="/countries"
              />
            </Menu>
          )}
        </div>
      </div>
      <Divider />
    </div>
  );
};
