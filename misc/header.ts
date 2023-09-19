
import pkg from '../package.json' assert {type: 'json'};

export function header(production: boolean) {
    const author = typeof(pkg.author) == "object" ? pkg.author.name : pkg.author;

    return `
// ==UserScript==
// @name ${pkg.name}
// @description ${pkg.description}
// @version ${pkg.version}
// @author ${author}
// @icon icon
// @include /your_url/
${!production ? '// @grant GM_xmlhttpRequest' : ''}
// ==/UserScript==
`;
}