import express from "express";
import * as process from "node:process";

export class WebService {
    constructor() {
        this.init();
    }

    init() {
        this.app = express();
    }

    async start() {
        const port = process.env.PORT || 3000;
        const host = process.env.HOST || "127.0.0.1";
        this.app.listen(port, host, () => {
            console.log(`WebService is running on http://${host}:port/`);
        });
    }
}
