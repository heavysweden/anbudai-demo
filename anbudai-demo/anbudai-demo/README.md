
# AnbudAI Demo – Snabbstart

## Förutsättningar
* **GitHub‑konto**
* **Railway‑konto** (gratis)
* **Node 18** (för lokal körning)

## 1. Klona eller ladda ned

```bash
git clone https://github.com/DITT-KONTO/anbudai-demo.git
cd anbudai-demo
```

*(alternativt ladda ned ZIP och packa upp)*

## 2. Lokalt

```bash
npm install
npm run dev
# Öppna http://localhost:3000/api/fortnox/sync
```

## 3. Deploy till Railway

1. Skapa nytt projekt i Railway → Deploy from GitHub.
2. Lägg in miljövariablerna:

```
FORTNOX_CLIENT_ID=xxxx
FORTNOX_CLIENT_SECRET=yyyy
JWT_SECRET=hemligt
```

3. Klicka **Deploy**. Klart!

Besök sedan:
```
https://<ditt‑projekt>.up.railway.app/api/fortnox/sync
```
