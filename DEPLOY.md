# Deploy — go.darslinker.uz

Repo: https://github.com/Darslinker-uz/GoDarslinker (public — token'siz `git pull` ishlaydi)

## Workflow

1. `main` branchga push qiling (to'g'ridan-to'g'ri yoki PR orqali — hozircha to'g'ridan-to'g'ri).
2. Serverga kirib deploy qiling:

```bash
ssh root@46.101.220.20
cd ~/GoDarslinker
git pull origin main
npm install
npm run build
pm2 restart go-darslinker
```

3. Tekshirish: `curl https://go.darslinker.uz/api/health` → `{"ok":true}`

## Bilish kerak bo'lgan narsalar

- **Port:** 3001 (darslinker.uz'ning 3000-portidan mustaqil — nginx shunga proksi qiladi).
- **PM2 process nomi:** `go-darslinker`.
- **`.env`** faqat serverda bor (git'ga tushmaydi). Yangi env var kerak bo'lsa, serverda
  qo'lda qo'shiladi — `.env.example`ga ham qo'shib qo'ying.
- **Alohida loyiha:** darslinker.uz (asosiy marketplace) bilan hech qanday umumiy kod,
  baza yoki deploy jarayoni yo'q — ikkalasi bir xil serverda, lekin mustaqil ishlaydi.

## Chegaralar (nima o'zgartirmaslik kerak)

Quyidagilar backend/arxitektura qismi — o'zgartirishdan oldin so'rang:

- `prisma/schema.prisma`, `prisma/migrations/`
- `src/lib/prisma.ts`, `src/lib/jwt.ts`, `src/lib/telegram-auth.ts`
- `src/app/api/**` (route handler'lar)

UI/dizayn (`src/app/**` sahifalar va komponentlar, `page.tsx`lar) — bemalol
ishlang, mavjud API'lardan (`GO_DARSLINKER_PLAN.md`dagi 10-bo'lim, API kontrakti)
foydalaning.
