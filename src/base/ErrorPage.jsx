import { useRouteError } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import "./layout.css";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="layout">
      <Header displayMenu={false} />
      <div className="content">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </div>
  );
};
