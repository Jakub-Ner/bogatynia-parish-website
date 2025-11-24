/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BaxOKPhE.mjs';
import 'kleur/colors';
import { a as getEntry, $ as $$BaseLayout } from '../chunks/BaseLayout_yQ7kxzSN.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CqyNdVvp.mjs';
import matter from 'gray-matter';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

function announcementDate() {
  const today = /* @__PURE__ */ new Date();
  const dayOfWeek = today.getDay();
  today.setDate(today.getDate() - dayOfWeek);
  return today.toISOString().split("T")[0];
}
async function fetchAnnouncement() {
  try {
    const baseUrl = "https://hhuvw60wkv08yr9b.public.blob.vercel-storage.com/ogloszenia";
    const url = `${baseUrl}/${announcementDate()}.md`;
    console.log("Fetching announcement from:", url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch announcement: ${response.statusText}`);
    }
    const markdownContent = await response.text();
    const { data, content } = matter(markdownContent);
    const announcement = {
      data: {
        title: data.title || "Ogłoszenia Parafialne",
        date: data.date ? new Date(data.date) : /* @__PURE__ */ new Date(),
        featured: data.featured ?? false,
        draft: data.draft ?? false
      },
      content: content.trim()
    };
    return announcement;
  } catch (error) {
    console.error("Error fetching announcement from blob storage:", error);
    throw error;
  }
}

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$OgoszeniaParafialne = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OgoszeniaParafialne;
  function getSecondsUntilNextSunday() {
    const now = /* @__PURE__ */ new Date();
    const dayOfWeek = now.getDay();
    const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(6, 0, 0, 0);
    return Math.max(60, Math.floor((nextSunday.getTime() - now.getTime()) / 1e3));
  }
  const revalidateSeconds = getSecondsUntilNextSunday();
  Astro2.response.headers.set("CDN-Cache-Control", `public, s-maxage=${revalidateSeconds}, stale-while-revalidate=86400`);
  const currentAnnouncement = await fetchAnnouncement();
  const htmlContent = marked(currentAnnouncement.content);
  const wypominkiEntry = await getEntry("announcements", "wypominki");
  const wypominkiHtml = wypominkiEntry ? marked(wypominkiEntry.body) : "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Og\u0142oszenia Parafialne - Parafia \u015Aw. Marii Magdaleny", "description": "Najwa\u017Cniejsze og\u0142oszenia i informacje z \u017Cycia parafii \u015Aw. Marii Magdaleny w Bogatyni." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Og\u0142oszenia Parafialne", "subtitle": "Aktualne informacje z \u017Cycia parafii", "backgroundImage": "/uploads/page-header-bg.webp" })} ${maybeRenderHead()}<section class="py-16"> <div class="container"> <div class="max-w-4xl mx-auto"> <!-- Bieżące ogłoszenia --> <div class="bg-white rounded-lg shadow-lg p-8 mb-8"> <div class="flex items-center mb-6"> <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path> </svg> </div> <div> <!-- <h2 class="text-2xl font-bold">{currentAnnouncement.data.title}</h2> --> <p class="text-gray-600">
Aktualne od ${currentAnnouncement.data.date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </p> </div> </div> <div class="prose prose-lg max-w-none prose-headings:text-primary-800 prose-h2:bg-primary-50 prose-h2:p-4 prose-h2:rounded-lg prose-h3:text-primary-700 prose-h3:bg-primary-25 prose-h3:p-3 prose-h3:rounded prose-strong:text-primary-700 prose-a:text-primary-600 hover:prose-a:text-primary-700"> <div>${unescapeHTML(htmlContent)}</div> </div> </div> <!-- Wypominki section --> ${wypominkiEntry && renderTemplate`<div class="bg-white rounded-lg shadow-lg p-8"> <div class="flex items-center mb-6"> <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <div> <h2 class="text-2xl font-bold">${wypominkiEntry.data.title}</h2> <p class="text-gray-600">
Opublikowano ${wypominkiEntry.data.date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </p> </div> </div> <div class="prose prose-lg max-w-none prose-headings:text-primary-800 prose-h2:bg-primary-50 prose-h2:p-4 prose-h2:rounded-lg prose-h3:text-primary-700 prose-h3:bg-primary-25 prose-h3:p-3 prose-h3:rounded prose-strong:text-primary-700 prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-table:w-full prose-th:text-left prose-th:border-b-2 prose-th:border-primary-200 prose-th:pb-2 prose-td:border-b prose-td:border-gray-200 prose-td:py-2"> <div>${unescapeHTML(wypominkiHtml)}</div> </div> </div>`} </div> </div> </section> ` })}`;
}, "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/pages/og\u0142oszenia-parafialne.astro", void 0);

const $$file = "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/pages/ogłoszenia-parafialne.astro";
const $$url = "/ogłoszenia-parafialne";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OgoszeniaParafialne,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
