import { writeFileSync } from "fs";
import Parser from "rss-parser";
const parser = new Parser();

(async () => {
  let jsonFeed = {};
  const feed = await parser.parseURL("https://zenn.dev/hrkmtsmt/feed");
  const items = feed.items.map((data) => {
    return data;
  });
  jsonFeed = items;
  writeFileSync("rss/data.json", JSON.stringify(jsonFeed));
})();
