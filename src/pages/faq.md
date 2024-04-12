---
layout: ~/layouts/single.astro
id: faq
title: FAQ
---

## How do I find my Token

You can copy your Token from the tray menu.

If you run headless (aka with `--no-gui`), you can get your Token using the [CLI](/docs/cli) to output your Token or by reading the application startup logs. These can be found in the local application data directory under `timmo001/systembridge`.

## Accessing logs

You can access logs via the system tray icon or via the [CLI](/docs/cli).

## Home Assistant / I cannot connect to System Bridge

- Check your firewall. You may need to allow System Bridge through your firewall.
    - When you first run System Bridge on Windows with Microsoft Defender, you should get a prompt to allow it through your firewall. If you don't see this prompt, you should manually add an exception.
- Check your token. Make sure you have the correct [token](#how-do-i-find-my-token).
- Check your hostname / IP address. Make sure you are using the correct address to connect to System Bridge.

## I'd like to contribute to the project

There are many ways to contribute to this project. You don't have to know how to code to do so.

- You can discuss your ideas and use cases in the [Discussions](https://github.com/timmo001/system-bridge/discussions) area of the GitHub Repository.
- You can open an issue to report a bug or suggest a new feature in the [Issues](https://github.com/timmo001/system-bridge/issues) area of the GitHub Repository.
- You can open a [pull request](https://github.com/timmo001/system-bridge/pulls) to fix a bug or implement a new feature.
- You can also contribute to the website GitHub repository [here](https://github.com/timmo001/system-bridge-website).

## I have a question or need help with something

If you have a question, or would like to discuss features etc., go to the [Discussions](https://github.com/timmo001/system-bridge/discussions) area of the GitHub Repository.
