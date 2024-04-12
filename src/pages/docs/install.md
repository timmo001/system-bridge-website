---
layout: ~/layouts/single.astro
id: install
title: Download & Install
---

## Full installation

### Windows

Use the setup wizard to install System Bridge. You can download the latest version [here](https://github.com/timmo001/system-bridge/releases/latest).

### Linux

You will also need these packages:

- `lshw`: Gets system information such as the UUID.
- `upower`: (Optional) Gets battery information.

```bash
sudo apt update
sudo apt install lshw upower
```

[Download](https://github.com/timmo001/system-bridge/releases/latest) the package for your distribution.

Once downloaded you can install this using your software manager GUI or the terminal.

## Customized installation / Python

The above is the easiest way to install System Bridge. If you want to install using Python, follow this [guide](install-python).
