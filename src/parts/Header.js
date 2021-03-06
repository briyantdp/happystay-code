import React from "react";
import Button from "elements/Button/index";
import Logo from "parts/Logo";

const Header = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <header className="header spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Logo />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" href="/" type="link">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                <Button className="nav-link" href="/browse-by" type="link">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" href="/stories" type="link">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" href="/agents" type="link">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
