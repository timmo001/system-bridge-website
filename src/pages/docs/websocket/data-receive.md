---
layout: ~/layouts/single.astro
id: websocket-data-receive
title: WebSocket - Receiving Data
---

After requesting data from either the `GET_DATA` and/or `REGISTER_DATA_LISTENER` event, you will receive messages with the `DATA_UPDATE` event.

This will look something like this:

```json
{
    "id": "abc123",
    "type": "DATA_UPDATE",
    "message": "Data received",
    "module": "system",
    "data": {
        "boot_time": 1651433957.3015134,
        "fqdn": "Desktop",
        "hostname": "Desktop",
        "ip_address_4": "1.1.1.1",
        "mac_address": "aa:bb:cc:dd:ee:ff",
        "platform": "Windows",
        "platform_version": "10.0.22000",
        "uptime": 7.015625,
        "uuid": "abcd-efgh-abcd-efgh-abcd",
        "version": "5.0.2",
        "version_latest": "5.0.7",
        "version_newer_avaliable": false
    }
}
```
