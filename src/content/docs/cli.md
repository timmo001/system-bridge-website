---
title: CLI
---

The System Bridge CLI provides commands to interact with the System Bridge backend. All CLI commands are accessed through the `system-bridge client` subcommand.

## Token

The token is essential to connect to the API/WebSocket. To get it, run the following command:

```bash
system-bridge client token
```

:::note
The token is stored per user, so run this command as the same user that runs the backend. If you run System Bridge as a system service under root, switch to that user first:

```bash
sudo su -
system-bridge client token
```

You can also use the short form `system-bridge c t`.
:::

Alternatively, you can find your token in the application startup logs when running the backend. The logs will show "Your API token is" followed by your token value.

## Notification

To send a notification, use the following command:

```bash
system-bridge client notification --title "Title" --message "Message" --icon "icon-name"
```

Available flags:

- `--title`: The title of the notification (default: "System Bridge")
- `--message`: The message of the notification (default: "Hello, world!")
- `--icon`: The icon of the notification (default: "system-bridge")

## Discovery

### List Services

To list discovered services on the network, run:

```bash
system-bridge client discovery list
```

This will scan for available System Bridge instances and display them with their hostname, IP, port, and type.

## Data

### List Modules

To list all available data modules, run:

```bash
system-bridge client data list
```

By default, this outputs as a simple list. You can also use:

```bash
system-bridge client data list --json
```

To output as a JSON array.

### Run Modules

To run a specific data module and get its data as JSON, use:

```bash
system-bridge client data run --module cpu
```

For example, to get CPU data:

```bash
system-bridge client data run --module cpu
```

To run all modules and get a JSON object with all data:

```bash
system-bridge client data run --all
```

To pretty-print the JSON output:

```bash
system-bridge client data run --module cpu --pretty
```

Available flags:

- `--module` or `-m`: Module name (e.g., cpu, memory)
- `--all`: Run all modules
- `--pretty`: Pretty-print JSON output

## Version

To get the version of System Bridge, run:

```bash
system-bridge version
```
