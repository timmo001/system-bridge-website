---
title: Running
---

## Windows

After installation, System Bridge can be started from the Start Menu shortcut that gets created during installation. Look for "System Bridge" in your Start Menu.

:::note
The Start Menu shortcut may not appear immediately after installation until Windows indexes it. If you cannot find it, try searching for "System Bridge" in the Start Menu or restart Windows Explorer.
:::

Alternatively, you can start System Bridge from a terminal:

```powershell
cd "C:\Program Files\System Bridge"
.\system-bridge.exe backend
```

:::caution
Simply double-clicking `system-bridge.exe` will not start the application visibly. You must use the `backend` command or the Start Menu shortcut.
:::

You can enable autostart in the settings. This may require restarting the application to apply.

## Linux (Terminal)

You can launch the app via the terminal:

```bash
system-bridge backend
```

## Linux (systemd)

:::caution
Not supported with AppImage or Flatpak.
You will need to configure the service
manually to the correct path.
:::

### User service (recommended)

Run System Bridge as a user service so it shares your login session. This gives it access to your display, audio, notifications and media, and it reads its configuration from your home directory without any extra setup.

1. Create a user service file at `~/.config/systemd/user/system-bridge.service`:

```ini
[Unit]
Description=System Bridge
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/system-bridge backend
Restart=on-failure
RestartSec=5

[Install]
WantedBy=default.target
```

:::note
Adjust `ExecStart` if `system-bridge` is installed somewhere other than `/usr/bin` (for example a manual install under `~/.local/bin`). Check the path with `which system-bridge`.
:::

2. Reload the user systemd daemon:

```bash
systemctl --user daemon-reload
```

3. Enable and start the service:

```bash
systemctl --user enable --now system-bridge
```

4. Check the service status:

```bash
systemctl --user status system-bridge
```

To follow the logs:

```bash
journalctl --user -u system-bridge -f
```

:::tip
User services only run while you are logged in. To keep System Bridge running at boot and after you log out, enable lingering for your user:

```bash
sudo loginctl enable-linger $USER
```

:::

### System service

For headless or multi-user setups, you can run System Bridge as a system-wide service managed by root.

1. Create a systemd service file at `/etc/systemd/system/system-bridge.service`:

```ini
[Unit]
Description=System Bridge
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/system-bridge backend
Restart=on-failure
RestartSec=5
StandardOutput=journal
StandardError=journal
SyslogIdentifier=system-bridge
Environment="HOME=/root"

[Install]
WantedBy=multi-user.target
```

:::caution
The `Environment="HOME=/root"` setting is required for System Bridge to locate its configuration directory. Without this, the service will fail to start with a configuration path error.
:::

2. Reload the systemd daemon:

```bash
sudo systemctl daemon-reload
```

3. Enable and start the service:

```bash
sudo systemctl enable --now system-bridge
```

4. Check the service status:

```bash
sudo systemctl status system-bridge
```

### Token

The `token` is essential to connect to the API/WebSocket. You can get it using the CLI command:

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

Alternatively, you can find your Token in the application startup logs when running the backend. The logs will show "Your API token is" followed by your token value.
