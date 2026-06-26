

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CEumwFWP.js","_app/immutable/chunks/Bq9EbOnT.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/Dfk_mLff.js"];
export const stylesheets = ["_app/immutable/assets/5.Chouyslh.css"];
export const fonts = [];
