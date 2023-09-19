Bun.serve({
    port: 8080,
    hostname: "127.0.0.1",
    fetch(request) {
        return new Response(Bun.file(`../dist${(new URL(request.url)).pathname}`).stream(512))
    },
});