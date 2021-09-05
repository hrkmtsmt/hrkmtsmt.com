import { writeFileSync } from "fs";
import Parser from "rss-parser";
const parser = new Parser();
try {
  let jsonFeed = {};
  const feed = await parser.parseURL("https://zenn.dev/hrkmtsmt/feed");
  const items = feed.items.map((data) => {
    return data;
  });
  jsonFeed = items;
  writeFileSync("src/pulic/rss.json", JSON.stringify(jsonFeed));
} catch (err) {
  console.error(err);
}
