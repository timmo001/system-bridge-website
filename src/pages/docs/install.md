---
layout: ~/layouts/single.astro
id: install
title: Download & Install
---

## Full installation

See below for the full installation instructions. For a more detailed guide follow the detailed installation instructions.

### Windows

Install [Python 3.9](https://www.python.org/downloads) or newer including pip in the setup.

```bash
python -m pip install --upgrade pywin32 winsdk systembridgeshared systembridgebackend systembridgecli systembridgefrontend systembridgegui systembridgewindowssensors
```

### Linux

```bash
sudo apt update
sudo apt install lshw upower
sudo apt install python3 python3-pip python3-setuptools python3-wheel
python3 -m pip install --upgrade systembridgeshared systembridgebackend systembridgecli systembridgefrontend systembridgegui
```

## Detailed installation

### Prerequisites

You will need [Python 3.9](https://www.python.org/downloads) or newer and pip to install the packages. The latest version is reccomended.

#### Linux

You will need these packages:

- `lshw`: Gets system information such as the UUID.
- `upower`: (Optional) Gets battery information.

### Install

You can install all packages using pip:

```bash
python -m pip install --upgrade systembridgeshared systembridgebackend systembridgecli systembridgefrontend systembridgegui
```

#### Windows specifics

In Windows, you should install these required packages:

```bash
python -m pip install --upgrade pywin32 winsdk systembridgeshared systembridgebackend
```

There is an optional but recommended package which provides sensor data specific to Windows. You can install it using the following command:

```bash
python -m pip install --upgrade systembridgewindowssensors
```

#### Linux Headless Server

For a headless setup, you can just install the backend, cli, and shared packages.

You may need to generate your `~/.config/user-dirs.dirs` using the `xdg-user-dirs-update` command. See [here](https://wiki.archlinux.org/title/XDG_user_directories) for more info.

```bash
python -m pip install --upgrade systembridgeshared systembridgebackend systembridgecli
```
