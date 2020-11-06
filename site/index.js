const js = import("./node_modules/@iwutopia/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});