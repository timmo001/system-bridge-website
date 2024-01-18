---
layout: ~/layouts/single.astro
id: cli
title: CLI
---

### Token

To get the `token` for use in the API/WebSocket, you can use the following command:

```bash
python -m systembridgecli token
```

To reset your `token`, run this command:

```bash
python -m systembridgecli token --reset
```

## API Port

You can get the API port by running the following command:

```bash
python -m systembridgecli api-port
```

You can also reset the API port by running the following command:

```bash
python -m systembridgecli api-port --reset
```

## Data

You can retrieve the data from the data modules by running the following command:

```bash
python -m systembridgecli data MODULE
```

For example, to get the data from the `cpu` module, run the following command:

```bash
python -m systembridgecli data cpu
```

This outputs the data as a table. This is good for getting current data at a glance.

## Data Value

To get a single data value, run the following command:

```bash
python -m systembridgecli data-value MODULE VALUE
```

For example, to get the `usage` value from the `cpu` module, run the following command:

```bash
python -m systembridgecli data-value cpu usage
```

## Logs

To open the logs in the default text editor, run the following command:

```bash
python -m systembridgecli open-logs-backend
```

To open the GUI logs in the default text editor, run the following command:

```bash
python -m systembridgecli open-logs-gui
```

To get the path for the logs, run the following command:

```bash
python -m systembridgecli logs-path-backend
```

For the GUI logs, run the following command:

```bash
python -m systembridgecli logs-path-gui
```

## Settings

To get all settings, run the following command:

```bash
python -m systembridgecli settings
```

This returns all settings in a table.

### Get or set a setting

To get a single setting, run the following command:

```bash
python -m systembridgecli setting KEY
```

To update a setting, run the following command:

```bash
python -m systembridgecli setting --set-value KEY --value "VALUE"
```

For secrets, follow the same as above, replacing setting with secret.

```bash
python -m systembridgecli secret KEY
```

```bash
python -m systembridgecli secret --set-value KEY --value "VALUE"
```
