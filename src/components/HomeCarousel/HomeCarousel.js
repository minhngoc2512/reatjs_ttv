import React from "react";

export default class HomeCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div className="client-slider">
        <div className="container">
          <div className="row">
            <div className="clients slider">
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
              <div>
                <a title="" href="#" className="text-center">
                  <img
                    src="/images/BackLink_140x110.jpg"
                    title=""
                    alt="Client Logo 1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
