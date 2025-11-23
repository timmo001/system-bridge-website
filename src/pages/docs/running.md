---
layout: ~/layouts/single.astro
id: running
title: Running
---

## Windows

After installation, System Bridge can be started from the Start Menu shortcut that gets created during installation. Look for "System Bridge" in your Start Menu.

> [!NOTE]
> The Start Menu shortcut may not appear immediately after installation until Windows indexes it. If you cannot find it, try searching for "System Bridge" in the Start Menu or restart Windows Explorer.

Alternatively, you can start System Bridge from a terminal:

```powershell
cd "C:\Program Files\System Bridge"
.\system-bridge.exe backend
```

> [!IMPORTANT]
> Simply double-clicking `system-bridge.exe` will not start the application visibly. You must use the `backend` command or the Start Menu shortcut.

You can enable autostart in the settings. This may require restarting the application to apply.

## Linux (Terminal)

You can launch the app via the terminal:

```bash
system-bridge backend
```

## Linux (Systemd)

> [!WARNING]
> Not supported with AppImage or Flatpak.
> You will need to configure the service
> manually to the correct path.

1. Copy the systemd service file to the systemd directory:

```bash
sudo cp .scripts/linux/system-bridge.service /etc/systemd/system/
```

2. Reload systemd daemon:

```bash
sudo systemctl daemon-reload
```

3. Enable the service to start on boot:

```bash
sudo systemctl enable system-bridge
```

4. Start the service:

```bash
sudo systemctl start system-bridge
```

5. Check the service status:

```bash
sudo systemctl status system-bridge
```

### Token

The `token` is essential to connect to the API/WebSocket. You can get it using the CLI command:

```bash
system-bridge client token
```

Alternatively, you can find your Token in the application startup logs when running the backend. The logs will show "Your API token is" followed by your token value.
