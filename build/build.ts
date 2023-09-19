import "../misc/header"
import { header } from "../misc/header";
import { proxy } from "../misc/proxy";

const build = await Bun.build({
    entrypoints: ['./src/index.ts'],
});

const text = await build.outputs.find(e => e.kind == "entry-point")!.text();

await Bun.write("./dist/bundle.user.js", `${header(true)}(async function() {${text}})()`)
if(!!process.env.DEVELOPMENT) {
    await Bun.write("./dist/bundle.proxy.user.js", `${header(false)}${proxy()}`);
}