import { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../configs/appConfig";
import HeaderBar from "../HeaderBar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import ReactGA from "react-ga";

/* make sure to not put here any client side code */

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize("UA-78821075-1");
    ReactGA.pageview(this.props.location.pathname + this.props.location.search);
    // This just needs to be called once since we have no routes in this case.
    // ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="vieclamnambo">
        <Helmet {...config.app} />
        <HeaderBar />

        {this.props.children}
        <Footer />
      </div>
    );
  }
}
