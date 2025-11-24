import { c as createAstro, a as createComponent, e as renderTemplate, d as addAttribute, m as maybeRenderHead, f as renderScript, r as renderComponent, A as AstroError, U as UnknownContentCollectionError, i as RenderUndefinedEntryError, u as unescapeHTML, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, F as Fragment, n as renderHead, b as renderSlot } from './astro/server_BaxOKPhE.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_Cvt6sEOY.mjs';
import { V as VALID_INPUT_FORMATS } from './consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro$2 = createAstro("https://example.com");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    description,
    image = {
      url: "/uploads/church-default.webp",
      alt: "Bogatynia Parafia"
    },
    type = "website",
    canonicalUrl
  } = Astro2.props;
  const canonicalURL = canonicalUrl || new URL(Astro2.url.pathname, Astro2.site);
  ({
    url: Astro2.site?.toString() || "https://example.com"
  });
  return renderTemplate(_b || (_b = __template(["<!-- Basic SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt"', '><!-- JSON-LD Schema for Church --><script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "Church",\n    "name": "${churchInfo.name}",\n    "address": {\n      "@type": "PostalAddress",\n      "streetAddress": "${churchInfo.address.streetAddress}",\n      "addressLocality": "${churchInfo.address.addressLocality}",\n      "addressRegion": "${churchInfo.address.addressRegion}",\n      "postalCode": "${churchInfo.address.postalCode}",\n      "addressCountry": "${churchInfo.address.addressCountry}"\n    },\n    "telephone": "${churchInfo.telephone}",\n    "email": "${churchInfo.email}",\n    "url": "${churchInfo.url}"\n  }\n<\/script>', ""], ["<!-- Basic SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt"', '><!-- JSON-LD Schema for Church --><script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "Church",\n    "name": "\\${churchInfo.name}",\n    "address": {\n      "@type": "PostalAddress",\n      "streetAddress": "\\${churchInfo.address.streetAddress}",\n      "addressLocality": "\\${churchInfo.address.addressLocality}",\n      "addressRegion": "\\${churchInfo.address.addressRegion}",\n      "postalCode": "\\${churchInfo.address.postalCode}",\n      "addressCountry": "\\${churchInfo.address.addressCountry}"\n    },\n    "telephone": "\\${churchInfo.telephone}",\n    "email": "\\${churchInfo.email}",\n    "url": "\\${churchInfo.url}"\n  }\n<\/script>', ""])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.url, Astro2.site), "content"), addAttribute(image.alt, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.url, Astro2.site), "content"), addAttribute(image.alt, "content"), type === "article" && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Article",\n        "headline": "${title}",\n        "image": "${new URL(image.url, Astro.site)}",\n        "description": "${description}",\n        "publisher": {\n          "@type": "Organization",\n          "name": "${churchInfo.name}",\n          "logo": {\n            "@type": "ImageObject",\n            "url": "${new URL("/uploads/logo.png", Astro.site)}"\n          }\n        },\n        "url": "${canonicalURL}",\n        "mainEntityOfPage": {\n          "@type": "WebPage",\n          "@id": "${canonicalURL}"\n        }\n      }\n    <\/script>'], ['<script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Article",\n        "headline": "\\${title}",\n        "image": "\\${new URL(image.url, Astro.site)}",\n        "description": "\\${description}",\n        "publisher": {\n          "@type": "Organization",\n          "name": "\\${churchInfo.name}",\n          "logo": {\n            "@type": "ImageObject",\n            "url": "\\${new URL("/uploads/logo.png", Astro.site)}"\n          }\n        },\n        "url": "\\${canonicalURL}",\n        "mainEntityOfPage": {\n          "@type": "WebPage",\n          "@id": "\\${canonicalURL}"\n        }\n      }\n    <\/script>']))));
}, "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/components/UI/Seo.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navItems = [
    { text: "Strona g\u0142\xF3wna", href: "/" },
    { text: "Historia", href: "/historia" },
    { text: "Msze \u015Awi\u0119te", href: "/msze-swiete" },
    { text: "Dzia\u0142alno\u015B\u0107", href: "/dzialalnosc" },
    { text: "Og\u0142oszenia", href: "/og\u0142oszenia-parafialne" },
    { text: "Kontakt", href: "/kontakt" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<!-- Desktop Navigation -->${maybeRenderHead()}<nav class="hidden lg:block" data-astro-cid-q5st44wa> <ul class="flex items-center space-x-6" data-astro-cid-q5st44wa> ${navItems.map((item) => {
    const isActive = currentPath === item.href || item.href !== "/" && currentPath.startsWith(item.href);
    return renderTemplate`<li data-astro-cid-q5st44wa> <a${addAttribute(item.href, "href")}${addAttribute(`text-base font-medium transition-colors hover:text-primary-600 ${isActive ? "text-primary-600" : "text-gray-700"}`, "class")}${addAttribute(isActive ? "page" : void 0, "aria-current")} data-astro-cid-q5st44wa> ${item.text} </a> </li>`;
  })} </ul> </nav> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="lg:hidden p-2 text-gray-700 hover:text-primary-600 focus:outline-none transition-colors relative" aria-label="Toggle Menu" aria-expanded="false" data-astro-cid-q5st44wa> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-q5st44wa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-q5st44wa></path> </svg> </button> <!-- Mobile Menu Dropdown - Compact & Clean --> <div id="mobile-menu" class="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 transform scale-y-0 origin-top transition-transform duration-200 ease-out lg:hidden z-50" role="menu" aria-labelledby="mobile-menu-button" data-astro-cid-q5st44wa> <!-- Navigation Links in Grid --> <div class="px-4 py-6" data-astro-cid-q5st44wa> <div class="grid grid-cols-2 gap-3" data-astro-cid-q5st44wa> ${navItems.map((item) => {
    const isActive = currentPath === item.href || item.href !== "/" && currentPath.startsWith(item.href);
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`block px-4 py-3 text-sm font-medium rounded-lg transition-colors text-center ${isActive ? "bg-primary-50 text-primary-600 border border-primary-200" : "text-gray-700 hover:bg-gray-50 hover:text-primary-600 border border-transparent"}`, "class")} role="menuitem"${addAttribute(isActive ? "page" : void 0, "aria-current")} data-astro-cid-q5st44wa> ${item.text} </a>`;
  })} </div> </div> </div>  ${renderScript($$result, "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/components/Global/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/components/Global/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm"> <div class="container flex items-center justify-between h-20"> <a href="/" class="text-2xl font-bold text-primary-800 font-serif flex items-center"> <span class="sr-only">Bogatynia Parafia</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="h-12 w-auto text-primary-600 mr-2"> <path fill="currentColor" d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2L160 512l96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-260.8c0-16.9-8.8-32.5-23.3-41.2L344 142.4 344 96l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4L0 464c0 26.5 21.5 48 48 48l80 0 0-238.4L24.9 330.3zM592 512c26.5 0 48-21.5 48-48l0-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6 512 512l80 0z"></path> </svg> <span class="text-primary-800">Bogatynia Parafia</span> </a> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </header>`;
}, "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/components/Global/Header.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_DczHjJP1.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://example.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_T6IYnWaY.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  let officeHours;
  try {
    const siteInfoEntries = await getCollection("siteInfo");
    officeHours = siteInfoEntries.find((entry) => entry.id === "office-hours");
  } catch (error) {
    console.log("Office hours not found or collections not yet available");
  }
  const footerNavs = [
    {
      title: "O Parafii",
      items: [
        { text: "Historia", href: "/historia" },
        { text: "Kontakt", href: "/kontakt" }
      ]
    },
    {
      title: "Nabo\u017Ce\u0144stwa",
      items: [
        { text: "Msze \u015Awi\u0119te", href: "/msze-swiete" },
        { text: "Og\u0142oszenia", href: "/og\u0142oszenia-parafialne" },
        { text: "Pog\u0142\u0119bianie wiary", href: "/poglebienie-wiary" }
      ]
    },
    {
      title: "Dzia\u0142alno\u015B\u0107",
      items: [
        { text: "Caritas", href: "/caritas" },
        { text: "\u015Awietlica", href: "/swietlica" }
      ]
    }
  ];
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:almale@wp.pl",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>`
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/Parafia-\u015Aw-Marii-Magdaleny-w-Bogatyni-100079680919115/",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>`
    }
    // Hidden for future use - uncomment when available
    // {
    //   name: "YouTube",
    //   href: "https://youtube.com/channel/YOUR_CHANNEL_ID",
    //   icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    //           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    //         </svg>`
    // },
    // {
    //   name: "Instagram",
    //   href: "https://instagram.com/your_parish_account",
    //   icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    //           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    //         </svg>`
    // },
  ];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  if (officeHours) {
    const { Content } = await officeHours.render();
  }
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white pt-16 pb-8"> <div class="container"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"> <!-- Church Info --> <div> <div class="mb-4"> <a href="/" class="text-2xl font-bold text-white font-serif inline-flex items-center"> <span class="sr-only">Bogatynia Parafia</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="h-12 w-auto text-white mr-2"> <path fill="currentColor" d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2L160 512l96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-260.8c0-16.9-8.8-32.5-23.3-41.2L344 142.4 344 96l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4L0 464c0 26.5 21.5 48 48 48l80 0 0-238.4L24.9 330.3zM592 512c26.5 0 48-21.5 48-48l0-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6 512 512l80 0z"></path> </svg> <span>Parafia Św. Marii Magdaleny</span> </a> </div> <address class="not-italic mb-4 text-gray-300"> <p>ul. Okólna 3</p> <p>59-916 Bogatynia</p> </address> <!-- Social Links --> <div class="flex space-x-4 mt-6"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"${addAttribute(link.name, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(link.icon)}` })} </a>`)} </div> </div> <!-- Navigation Links --> ${footerNavs.map((group) => renderTemplate`<div> <h4 class="text-lg font-bold mb-4 text-white">${group.title}</h4> <ul class="space-y-2"> ${group.items.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="text-gray-300 hover:text-primary-300 transition-colors"> ${item.text} </a> </li>`)} </ul> </div>`)} </div> <!-- Copyright --> <div class="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm"> <p>&copy; ${currentYear} Parafia Św. Marii Magdaleny w Bogatyni. Wszelkie prawa zastrzeżone.</p> </div> </div> </footer>`;
}, "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/components/Global/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Bogatynia Parafia - Parafia \u015Aw. Marii Magdaleny",
    description = "We are a welcoming Christian community dedicated to sharing God's love through worship, fellowship, and service.",
    image = {
      url: "/uploads/church-default.webp",
      alt: "Bogatynia Parafia"
    },
    type = "website",
    canonicalUrl
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "image": image, "type": type, "canonicalUrl": canonicalUrl })}<link rel="sitemap" href="/sitemap-index.xml"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest">${renderHead()}</head> <body> <div class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/mnt/cb8c2a81-32e7-40bc-af74-0c1386cda683/programowanie/strona-parafi-bogatynia/new-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, getEntry as a, getCollection as g };
