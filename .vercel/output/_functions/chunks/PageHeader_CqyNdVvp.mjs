import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, e as renderTemplate } from './astro/server_BaxOKPhE.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const {
    title,
    subtitle,
    backgroundImage = "/uploads/page-header-bg.webp"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-20 bg-cover bg-center"${addAttribute(`background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`, "style")}> <div class="container"> <div class="max-w-3xl mx-auto text-center text-white"> <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">${title}</h1> ${subtitle && renderTemplate`<p class="text-xl md:text-2xl">${subtitle}</p>`} </div> </div> </section>`;
}, "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/components/Sections/PageHeader.astro", void 0);

export { $$PageHeader as $ };
