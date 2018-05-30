const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || "development"];

module.exports = Object.assign(
  {
    host: process.env.HOST || "localhost",
    port: process.env.PORT,
    httpsPort: process.env.HTTPS_PORT,
    apiHost: process.env.APIHOST || "api.vieclamnambo.vn/v1",
    apiPort: process.env.APIPORT,
    google_play: "https://play.google.com/store/apps/details?id=com.ttv.vlnb",
    app_store: "",
    adSenseClientId: "ca-pub-3717610865114273",
    adSenseSlotId: "6977443341",
    app: {
      title:
        "Việc làm Nam Bộ | Cổng thông tin việc làm hàng đầu khu vực phía Nam",
      description:
        "Việc làm Nam Bộ | Cổng thông tin việc làm hàng đầu khu vực phía Nam",
      // head: {
      titleTemplate: "",
      // "%s Việc làm Nam Bộ | Cổng thông tin việc làm hàng đầu khu vực phía Nam",
      meta: [
        {
          name: "description",
          content:
            "Việc làm Nam Bộ | Cổng thông tin việc làm hàng đầu khu vực phía Nam"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        { charset: "utf-8" },
        {
          property: "og:site_name",
          content:
            "Việc làm Nam Bộ | Cổng thông tin việc làm hàng đầu khu vực phía Nam"
        },
        {
          property: "og:image",
          content: "https://vieclamnambo.vn/logo.jpg"
        },
        { property: "og:locale", content: "vi_VN" },
        {
          property: "og:title",
          content:
            "Việc làm Nam Bộ | Cổng thông tin việc làm hàng đầu khu vực phía Nam"
        },
        {
          property: "og:description",
          content:
            "Việc làm Nam Bộ | Cổng thông tin việc làm hàng đầu khu vực phía Nam."
        },
        // { property: "og:card", content: "summary" },
        // { property: "og:site", content: "@tanlinhndt" },
        // { property: "og:creator", content: "@tanlinhnd" },
        // { property: "og:image:width", content: "200" },
        // { property: "og:image:height", content: "200" },
        { property: "og:url", content: "https://vieclamnambo.vn" },
        { property: "og:type", content: "website" },
        {
          property: "og:author",
          content: "http://facebook.com/vieclamnambo.vn"
        },
        {
          property: "fb:pages",
          content: "938814459540678"
        },
        {
          property: "fb:app_id",
          content: "252128965149959"
        },
        {
          name: "google-site-verification",
          content: "BjNVI5ecKVy0AAILBwV13gDnwiVySEJsG-l_bRaESXw"
        },
        {
          property: "article:publisher",
          content: "http://facebook.com/vieclamnambo.vn"
        }
      ],
      link: [
        {
          href: "/images/cropped-newfavicon-1-32x32.png",
          rel: "shortcut icon",
          type: "image/x-icon"
        }
      ]
    }
    // }
  },
  environment
);
