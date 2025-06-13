
# AnbudAI Demo – v2 (med Postgres & Prisma)

## Kör lokalt

```bash
# 1. Starta databasen + servern
docker compose up --build

# 2. Öppna en ny terminal och kör migration
docker compose exec web npx prisma migrate deploy

# 3. Testa API‑stubben
curl http://localhost:3000/api/fortnox/sync
```

## Deploy till Railway

1. Railway skapar Postgres‑tjänsten automatiskt tack vare `railway.json`.
2. Efter första deployen, kör **`railway run npx prisma migrate deploy`** (via Dashboard → Shell).
3. Klart! API finns på  
   `https://<din-domän>.up.railway.app/api/fortnox/sync`
