---
title: WebSocket - Files & Directories
---

These events let you browse the base directories System Bridge exposes, list and inspect files within them, and validate paths.

The available base directory keys are `documents`, `downloads`, `home`, `music`, `pictures` and `videos`, plus any custom directories configured in `media.directories` in your [settings](/websocket/settings/).

## List directories

Send the `GET_DIRECTORIES` event to list the available base directories. It takes no data and responds with the `DIRECTORIES` type.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "GET_DIRECTORIES",
    "data": {}
}
```

## Get a directory

Send the `GET_DIRECTORY` event with the base directory key to look up a single directory. It responds with the `DIRECTORY` type.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "GET_DIRECTORY",
    "data": {
        "base": "documents"
    }
}
```

## List files

Send the `GET_FILES` event with a base directory, and optionally a relative `path` within it, to list files. It responds with the `FILES` type.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "GET_FILES",
    "data": {
        "base": "documents",
        "path": "subfolder"
    }
}
```

## Get a file

Send the `GET_FILE` event with the absolute `path` to a file to get its information. It responds with the `FILE` type.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "GET_FILE",
    "data": {
        "path": "/home/user/Documents/example.txt"
    }
}
```

To read the contents of a media file, use the [Media File Data](/api/media-file-data/) HTTP endpoint instead.

## Validate a directory

Send the `VALIDATE_DIRECTORY` event with a `path` to check whether it exists and is a directory. It responds with the `DIRECTORY_VALIDATED` type and a `data.valid` boolean.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "VALIDATE_DIRECTORY",
    "data": {
        "path": "/home/user/Music"
    }
}
```

## Get disk mounts

Send the `GET_DISK_MOUNTS` event to list mounted disks, categorised into primary and secondary (bind and squashfs) mounts. It takes no data and responds with the `DISK_MOUNTS` type.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "GET_DISK_MOUNTS",
    "data": {}
}
```
