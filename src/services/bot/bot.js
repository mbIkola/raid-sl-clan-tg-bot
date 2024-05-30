import { Bot } from 'grammy'

export class RaidSLBot extends Bot {
    constructor(token) {
        super(token)

        this.registerCommands()
        this.registerListeners()

        this.api.setMyCommands([
            { command: 'start', description: 'Start' },
            { command: 'help', description: 'Help' },
        ])
    }

    registerCommands() {
        this.command('help', (ctx) => {
            const _msg = `
            /start - Start the bot
            /help - Show this help message
            /scoreboard - Show the scoreboard
            /nudes - Show some nudes
            /about - Show information about the bot
            `
            return ctx.reply(_msg)
        })
    }

    registerListeners() {
        this.hears('salut', (ctx) => ctx.reply('bonjour'))
        this.hears('hello', (ctx) => ctx.reply('hi'))
        this.hears('hola', (ctx) => ctx.reply('buenos días amigo'))
        this.hears('grüezi', (ctx) => ctx.reply('Sieg Heil!'))
    }
}
