import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITEMAP_URL =
  process.env.SITEMAP_URL ?? "https://backend.valescooil.com/sitemap.xml";
const outputPath = join(__dirname, "..", "public", "sitemap.xml");

const response = await fetch(SITEMAP_URL);

if (!response.ok) {
  console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
  process.exit(1);
}

const xml = await response.text();
writeFileSync(outputPath, xml, "utf8");
console.log(`Sitemap saved to public/sitemap.xml (${xml.length} bytes)`);
