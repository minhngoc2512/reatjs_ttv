import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import HeaderBar from "./../../components/HeaderBar";

export default class About extends Component {
  static contextTypes = {
    i18n: PropTypes.object
  };

  render() {
    const { l } = this.context.i18n;

    const s = require("./About.scss");

    return (
      <div className={s.about}>
        <HeaderBar />
        {l("About page")}
        <Link to="/">{l("Home")}</Link>
      </div>
    );
  }
}
