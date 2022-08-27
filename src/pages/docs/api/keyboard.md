---
layout: ~/layouts/single.astro
id: keyboard
title: Keyboard
---

_Send keyboard keypresses and text._

## Request

```http
POST /api/keyboard
```

### Keypress

```json
{
    "key": "CTRL+A"
}
```

### Text

```json
{
    "text": "This is some text."
}
```

## Response

### Keypress

```json
{
    "message": "Keypress sent",
    "key": "CTRL+A"
}
```

### Text

```json
{
    "message": "Text sent",
    "text": "This is some text."
}
```
