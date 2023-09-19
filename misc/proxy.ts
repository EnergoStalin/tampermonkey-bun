export function proxy(port: string | number = 8080) {
    return `
(async function() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://127.0.0.1:${port}/bundle.user.js",
        onload: function(response) {
            eval(response.responseText);
        },
    });
})();
    `
}