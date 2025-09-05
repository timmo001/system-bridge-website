---
layout: ~/layouts/single.astro
id: faq
title: FAQ
---

## Upgrading from version 4 to version 5

> [!IMPORTANT]
> Any version 4 users will need to remove any integrations, and uninstall the old application before installing v5 to avoid conflicts. Your token and settings will not carry over to the new version.

## How do I find my Token

You can copy your Token from the tray menu.

If you run headless (aka with `--no-gui`), you can get your Token using the [CLI](/docs/cli) to output your Token or by reading the application startup logs. These can be found in the local application data directory under `timmo001/systembridge`.

## Accessing logs

You can access logs via the system tray icon or via the [CLI](/docs/cli).

## Platform support

System Bridge officially supports:

- **Linux**: Full support with native packages and AppImage
- **Windows**: Full support with installer
- **macOS**: Untested but can be compiled from source (community supported)

## Home Assistant / I cannot connect to System Bridge

- **Firewall issues**: You may need to allow System Bridge through your firewall.
    - When you first run System Bridge on Windows with Microsoft Defender, you should get a prompt to allow it through your firewall. If you don't see this prompt, you should manually add an exception.
    - On Linux, ensure your firewall allows connections on the System Bridge port (default: 9170).
- **Token verification**: Make sure you have the correct [token](#how-do-i-find-my-token).
- **Network configuration**: Check your hostname / IP address. Make sure you are using the correct address to connect to System Bridge.
- **Service status**: Ensure System Bridge is running. Check the system tray icon or use the CLI to verify the service is active.
- **Port conflicts**: Verify that the default port (9170) is not being used by another application.
- **Antivirus software**: Some antivirus programs may block System Bridge. Check your antivirus settings and add exceptions if needed.

## I'd like to contribute to the project

There are many ways to contribute to this project. You don't have to know how to code to do so.

- You can discuss your ideas and use cases in the [Discussions](https://github.com/timmo001/system-bridge/discussions) area of the GitHub Repository.
- You can open an issue to report a bug or suggest a new feature in the [Issues](https://github.com/timmo001/system-bridge/issues) area of the GitHub Repository.
- You can open a [pull request](https://github.com/timmo001/system-bridge/pulls) to fix a bug or implement a new feature.
- You can also contribute to the website GitHub repository [here](https://github.com/timmo001/system-bridge-website).

## I have a question or need help with something

If you have a question, or would like to discuss features etc., go to the [Discussions](https://github.com/timmo001/system-bridge/discussions) area of the GitHub Repository.
