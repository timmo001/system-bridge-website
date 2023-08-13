---
layout: ~/layouts/single.astro
id: install
title: Download & Install
---


## Full installation

### Windows

Use the setup wizard to install System Bridge. You can download the latest version [here](https://github.com/timmo001/system-bridge/releases/latest).

### Linux

You will need these packages:

- `lshw`: Gets system information such as the UUID.
- `upower`: (Optional) Gets battery information.

```bash
sudo apt update
sudo apt install lshw upower
```

Download the package for your distribution. Ubuntu/Debian users should use the `deb` file for example. [here](https://github.com/timmo001/system-bridge/releases/latest).

Once downloaded you can install this using your software manager GUI or the terminal.

## Customized installation / Python

The above is the easiest way to install System Bridge. If you want to install using Python, follow this [guide](install-python).

From here you can only install what you need such as a headless setup or add the `systembridgecli` package for access to the command line interface.
