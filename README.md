# raid-sl-clan-tg-bot

Kinda stupid telegram bot to automate Clan members activity and have some fun.

## Features

-   [ ] Welcome message for new members
-   [ ] Track and collect Hydra Clan boss activity
-   [ ] Track and collect Clan War activity
-   [ ] Post Alure's ~~nudes~~ photos on request

## Installation

This bot is powered by [grammy](https://grammy.dev/), [express.js](https://expressjs.com/) and [openai](https://openai.com/).

1. Clone the repository
2. Install dependencies
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add the following variables:

    ```env
    BOT_TOKEN=your_bot_token
    OPENAI_API_KEY=your_openai_api_key
    PORT=optional_HTTP_BIND_PORT
    HOST=optional_HTTP_BIND_HOST
    ```

    Sure, you need to create a bot in Telegram and get the token. You can do it by talking to [BotFather](https://t.me/botfather).
    Additionally, to get the full power of the bot, you need to create an account in [OpenAI](https://openai.com/) and get the API key.
    Please note, that OpenAI is a paid service, so you need to have some money on your account to use it. Obviously, you can not
    generate Alure's photos without OpenAI, but you can still use the bot without it (but what the point then?).

4. Run the bot
    ```bash
    npm start
    ```

## Usage and Commands

TBD

## Demo

TBD

## Roadmap

-   [ ] Generate Alure's ~~nudes~~ photos by request
-   [ ] This is a primary goal and only the reason why this bot was created.
-   [ ] Once we build the system to generate Alure's photos, we can move to the next step: Lanais.
-   [ ] Have fun and learn something new.
-   [ ] Track and collect Hydra Clan boss activity (manually submitted)
-   [ ] Build an app to Retrieve and upload Hydra Clan boss activity automatically
-   [ ] Track and collect Clan War activity
-   [ ] Die from the lack of sleep and overwork

Looks like a plan, right?

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

The general rules while opening you PR:

-   Make sure your code is clean and readable. We tried to automate the code style check with `eslint` and `prettier`, so make sure your code is compliant with the rules.
-   If you don't like the rules, you can always run `npm run lint:fix` to fix the code style automatically.
-   Make sure your code is working and tested. We tried to automate the testing process with `jest`, so make sure your code is covered with tests.
-   If you don't want to write tests, or you don't know how to do that, or your religion prohibits you from writing tests,
    you still can raise a PR and ask for help. We probably may help with it (not sure about the religion part, but we can try).
-   Be nice and polite. We are all humans, and we all make mistakes. If you see a mistake in someone's code, don't be rude, just point it out and help to fix it.
-   The last rule is no rules. Fork, fix, adapt, push, do whatever you want. Just don't break the law and don't be a jerk.

## Deployment

Check the GitHub actions for the deployment process.

We are utilizing [GCR](https://cloud.google.com) and
[GKE](https://cloud.google.com/kubernetes-engine) for the deployment, development and production run.

## License

MIT
