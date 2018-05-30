const request = require("request");
const fs = require("fs");
import { formatUrl } from "../../helpers/Api";

/* istanbul ignore next */
export const start = (config, server, http2Server) => {
  if (config.port) {
    server.listen(config.port, err => {
      if (err) {
        console.error(err);
      } else {
        if (process.send) {
          process.send(`http://${config.host}:${config.port}`);
        }
        console.info(
          "==> 💻  Open http://%s:%s in a browser to view the app.",
          config.host,
          config.port
        );
      }
    });

    http2Server.listen(config.httpsPort, err => {
      if (err) {
        console.error(err);
      } else {
        console.info(
          "==> 💻  HTTP2 Open https://%s:%s in a browser to view the https version of app.",
          config.host,
          config.httpsPort
        );
      }
    });
  } else {
    console.error(
      "==>  ERROR: No PORT environment variable has been specified"
    );
  }
};

const writeCacheSync = apiClient => {
  // should check folder .cache exist before write to it
  apiClient.get("/job_salary").then(payload => {
    fs.writeFileSync(
      __dirname + "/../../../.cache/job_salary.json",
      JSON.stringify(payload)
    );
  });

  apiClient
    .get("/taxonomy?fields=slug,taxonomy_id,taxonomy_type,seo_title&limit=160")
    .then(payload => {
      fs.writeFileSync(
        __dirname + "/../../../.cache/taxonomy.json",
        JSON.stringify(payload)
      );
    });

  apiClient.get("/province?fields=id,name&limit=65").then(payload => {
    fs.writeFileSync(
      __dirname + "/../../../.cache/province.json",
      JSON.stringify(payload)
    );
  });
};

export const initReduxState = (apiClient, req, res) => {
  if (
    !fs.exists(__dirname + "/../../../.cache/taxonomy.json") ||
    !fs.exists(__dirname + "/../../../.cache/province.json") ||
    !fs.exists(__dirname + "/../../../.cache/job_salary.json")
  ) {
    writeCacheSync(apiClient);
  }

  let initState = {
    taxonomy: {
      data: JSON.parse(
        fs.readFileSync(__dirname + "/../../../.cache/taxonomy.json")
      )
    },
    province: {
      data: JSON.parse(
        fs.readFileSync(__dirname + "/../../../.cache/province.json")
      )
    },
    job_salary: {
      data: JSON.parse(
        fs.readFileSync(__dirname + "/../../../.cache/job_salary.json")
      )
    }
  };

  return initState;
};
