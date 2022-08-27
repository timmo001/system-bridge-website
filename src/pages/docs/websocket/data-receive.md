---
layout: ~/layouts/single.astro
id: websocket-data-receive
title: WebSocket - Receiving Data
---

After requesting data from either the `GET_DATA` and/or `REGISTER_DATA_LISTENER` event, you will receive messages with the `DATA_UPDATE` event.

This will look something like this:

```json
{
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
    "version": "3.0.0",
    "version_latest": "3.0.0",
    "version_newer_avaliable": false,
    "last_updated": {
      "boot_time": 1651511337.1713245,
      "fqdn": 1651511338.036244,
      "hostname": 1651511338.0402544,
      "ip_address_4": 1651511338.0451906,
      "mac_address": 1651511338.0491898,
      "platform": 1651511338.0531907,
      "platform_version": 1651511338.0581908,
      "uptime": 1651511338.0626273,
      "uuid": 1651511338.0913987,
      "version": 1651511338.095335,
      "version_latest": 1651511348.3147278,
      "version_newer_avaliable": 1651511348.3207302
    }
  }
}
```
