import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BdLS9KxM.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.CoaCY2RK.js","_app/immutable/chunks/index.M7WuUczP.js"];
export const stylesheets = ["_app/immutable/assets/2.Cs8KR-Bb.css"];
export const fonts = [];
