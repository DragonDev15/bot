# Animal Bot
## What is this?
> This is a stripped down version of Animal Bot you can self host.
## Why is it Stripped Down?
> Commands have been stripped for various reasons. Two of them being they require API keys, or it just makes no sense to keep them.
## Setup
1. Fill in the .example.env like this: 
```
TOKEN = Bot Token
PREFIX = Bot Prefix
```
2. Then Rename it to `.env`
3. Now you can run the bot using ```npm run bot```
> Notes: [How to get a token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token) | [What is a prefix](https://anidiots.guide/first-bot/your-first-bot#using-a-prefix)

## Basic troubleshooting
### Canvas not building?

The error in question here is ```
npm ERR! Failed at the canvas@2.6.1 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.```.


To fix this run: `npm install --global --production windows-build-tools` in an admin powershell window until you see
```Status from the installers:
---------- Visual Studio Build Tools ----------
Successfully installed Visual Studio Build Tools.
------------------- Python --------------------
Successfully installed Python 2.7

Now configuring the Visual Studio Build Tools and Python...

All done!
```
If your VS Build Tools gets stuck download them manually from [here](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15). You'll need C++ build tools.
## Hosting Options:
> What is bot Hosting?
Bot hosting is how the bot Stays online 24/7 (Most Hosting Services are paid)
> - [Oxide Hosting](https://oxide.host/)
> - [GalaxyGate](https://galaxygate.net/)
> - [OVH](https://ovh.co.uk/)
> - [Hetzner](https://hetzner.com/)
> - [Contabo](https://contabo.com/)

## Animal Bot Links
> - [Support Server](https://discord.gg/mCEdSrc)
> - [Invite Animal Bot](https://discord.com/oauth2/authorize?client_id=716061781172158464&permissions=51200&scope=bot)
> - [Website](https://www.animalbot.xyz)
> - [Top.gg Page](https://top.gg/bot/716061781172158464/vote)

---

> Edited by `Dragon_15#0001`. Their bot, [Dynamo](https://www.dynamobot.xyz)
#### Any Questions? Contact me: `Matthew.#9014`
