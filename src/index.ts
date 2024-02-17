import getRandomBrowser from "./browsers";
import getRandomOs from "./platform";

interface IOptions {}

export const browserHeader = (options?: IOptions) => {
  const platform = getRandomOs();
  const browser = getRandomBrowser();

  let header = {
    Accept: "*/*",
    Connection: "keep-alive",
    "User-Agent": browser.replace("%PLAT%", platform),
  };

  return !options ? header : {};
};
