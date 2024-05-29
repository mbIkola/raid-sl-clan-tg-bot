import { WebService } from "./services/web/server.js";
import { RaidSLBot } from "./services/bot/bot.js";
import * as process from "node:process";

const web = new WebService();
const bot = new RaidSLBot(process.env.BOT_TOKEN);

export const start = () => {
    bot.start();
    web.start();
};
