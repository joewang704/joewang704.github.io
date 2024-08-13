export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DNo_6GIx.js","app":"_app/immutable/entry/app.DHdgyBm3.js","imports":["_app/immutable/entry/start.DNo_6GIx.js","_app/immutable/chunks/entry.BTkQaeup.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.M7WuUczP.js","_app/immutable/entry/app.DHdgyBm3.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.CoaCY2RK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
