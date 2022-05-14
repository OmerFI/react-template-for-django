/*
This is the settings file, you can edit it or customize to change the settings of your project.
*/

const DEBUG = true;

/** This url is used in api calls with axios. */
let BASE_URL = "";
if (DEBUG) {
  BASE_URL = "http://127.0.0.1:8000"; // Django runs on 127.0.0.1:8000 by default.
}

const settings = {
  DEBUG,
  BASE_URL,
};

export default settings;
