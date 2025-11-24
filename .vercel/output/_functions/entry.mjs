import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CgSrxIuc.mjs';
import { manifest } from './manifest_EsGjhRF6.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/_slug_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/caritas.astro.mjs');
const _page4 = () => import('./pages/dzialalnosc.astro.mjs');
const _page5 = () => import('./pages/events/_slug_.astro.mjs');
const _page6 = () => import('./pages/events.astro.mjs');
const _page7 = () => import('./pages/historia.astro.mjs');
const _page8 = () => import('./pages/kontakt.astro.mjs');
const _page9 = () => import('./pages/ministries/_slug_.astro.mjs');
const _page10 = () => import('./pages/ministries.astro.mjs');
const _page11 = () => import('./pages/msze-swiete.astro.mjs');
const _page12 = () => import('./pages/ogłoszenia-parafialne.astro.mjs');
const _page13 = () => import('./pages/poglebienie-wiary.astro.mjs');
const _page14 = () => import('./pages/swietlica.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/[slug].astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/caritas.astro", _page3],
    ["src/pages/dzialalnosc.astro", _page4],
    ["src/pages/events/[slug].astro", _page5],
    ["src/pages/events/index.astro", _page6],
    ["src/pages/historia.astro", _page7],
    ["src/pages/kontakt.astro", _page8],
    ["src/pages/ministries/[slug].astro", _page9],
    ["src/pages/ministries/index.astro", _page10],
    ["src/pages/msze-swiete.astro", _page11],
    ["src/pages/ogłoszenia-parafialne.astro", _page12],
    ["src/pages/poglebienie-wiary.astro", _page13],
    ["src/pages/swietlica.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "494311c0-671c-44ab-9b05-470b1374e69f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
