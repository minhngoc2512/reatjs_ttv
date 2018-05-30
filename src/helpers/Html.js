import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom/server";
import serialize from "serialize-javascript";

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends React.Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node.isRequired,
    store: PropTypes.object.isRequired,
    helmet: PropTypes.object.isRequired
  };

  static defaultProps = {
    assets: {}
  };

  render() {
    const { assets, component, store, helmet } = this.props;
    const content = component ? ReactDOM.renderToString(component) : "";

    return (
      <html lang="en-US">
        <head>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {/* (will be present only in development mode) */}
          {assets.styles && Object.keys(assets.styles).length === 0 ? (
            <style
              dangerouslySetInnerHTML={{ __html: "#content{display:none}" }}
            />
          ) : null}
          {assets.styles &&
            Object.keys(assets.styles).map(style => (
              <link
                charSet="UTF-8"
                href={assets.styles[style]}
                key={style}
                media="screen, projection"
                rel="stylesheet"
                type="text/css"
              />
            ))}
        </head>
        <body>
          <noscript>
            {"Please enable javascript in your browser settings"}
          </noscript>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            id="content"
            role="main"
          />
          {store && (
            <script
              charSet="UTF-8"
              dangerouslySetInnerHTML={{
                __html: `window.__data=${serialize(store.getState())};`
              }}
            />
          )}
          {process.env.WEBPACK_DLLS && (
            <script
              charSet="UTF-8"
              key="dlls__vendor"
              src="/dist/dlls/dll__vendor.js"
            />
          )}
          {/* (will be present only in development mode) */}
          {assets.styles && Object.keys(assets.styles).length === 0 ? (
            <script
              dangerouslySetInnerHTML={{
                __html:
                  'document.getElementById("content").style.display="block";'
              }}
            />
          ) : null}
          {assets.javascript && (
            <script charSet="UTF-8" src={assets.javascript.core} />
          )}

          {assets.javascript && (
            <script charSet="UTF-8" src={assets.javascript.main} />
          )}
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />

          {/* styles (will be present only in production with webpack extract text plugin) */}
        </body>
      </html>
    );
  }
}
