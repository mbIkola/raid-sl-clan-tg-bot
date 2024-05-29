import { Bot } from "grammy";

export class RaidSLBot extends Bot {
    constructor(token) {
        super(token);

        this.registerCommands();
        this.registerListeners();
    }

    registerCommands() {
        this.command("help", (ctx) =>
            ctx.reply(`
            /start - Start the bot
            /help - Show this help message
            /scoreboard - Show the scoreboard
            /nudes - Show some nudes
            /about - Show information about the bot
        `),
        );
    }

    registerListeners() {
        this.hears("salut", (ctx) => ctx.reply("bonjour"));
        this.hears("hello", (ctx) => ctx.reply("hi"));
        this.hears("hola", (ctx) => ctx.reply("buenos días amigo"));
        this.hears("grüezi", (ctx) => ctx.reply("Sieg Heil!"));
    }
}
