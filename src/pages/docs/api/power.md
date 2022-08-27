---
layout: ~/layouts/single.astro
id: power
title: Power
---

_Send power commands to the system._

## Sleep

Send the system to sleep.

```http
POST /api/power/sleep
```

## Hibernate

Hibernate the system.

```http
POST /api/power/hibernate
```

## Restart

Restart the system.

```http
POST /api/power/restart
```

## Shutdown

Shutdown the system.

```http
POST /api/power/shutdown
```

## Lock

Lock the system.

```http
POST /api/power/lock
```

## Log Out

Log out the current user.

```http
POST /api/power/logout
```
