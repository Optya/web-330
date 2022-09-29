/**
 * Title: http-client.js
 * Author: Walter McCue
 * Date: 09/28/22
 * Description: Creates and exports the HTTPClient class and parameters
 * References: WEB 330 GitHub; WEB 330 Assign_8;
 */

export class HttpClient {
    async get(url, params = "") {
        url = new URL(url);
        url.search = new URLSearchParams(params);
        const res = await fetch(url.toString(), {
            method: "GET",
        })
        return res.json();
    }
}