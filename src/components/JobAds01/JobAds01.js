import { Component } from "react";
import { object } from "prop-types";

export default class JobAds01 extends Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;
    return (
      <div className="row ">
        <div className="banner-ad-footer ">
          <center>
            <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-0/s526x296/14590326_1187642364657885_3274214307090613732_n.png?oh=d00a0e77167d8038a94777978042c229&amp;oe=5A3A5557" />
          </center>
        </div>
      </div>
    );
  }
}
