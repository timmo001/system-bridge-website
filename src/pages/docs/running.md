---
layout: ~/layouts/single.astro
id: running
title: Running
---

## Running

1. To run the backend server use the desktop shortcut which will launch the
   application for you. If you are a linux user, you can also launch the
   app via the terminal:

```bash
system-bridge backend
```

### Running as a Service

#### Linux (systemd)

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

#### Windows (service installation)

1. Open PowerShell as Administrator
2. Navigate to the directory containing the installation scripts
3. Run the installation script:

```powershell
.\scripts\windows\install-service.ps1
```

4. To uninstall the service:

```powershell
.\scripts\windows\uninstall-service.ps1
```

### Token

The `token` is essential to connect to the API/WebSocket. You can copy this using the tray menu, or reading the logs after starting the application.
