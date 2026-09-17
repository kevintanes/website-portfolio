---
name: plan-feature
description: Trigger this skill when the user asks to plan, scope, or break down a NEW FEATURE for this portfolio site — e.g. "plan fitur X", "buatkan breakdown untuk fitur baru", "bikin implementation plan untuk...". Produces an implementation plan and a GitHub-issue-ready checklist. Do NOT trigger for bug fixes, small tweaks, or when the user just wants code written directly.
---

# Plan Feature

Tujuan skill ini: menghasilkan **rencana implementasi**, bukan kode. Jangan menulis atau
mengubah file kode apa pun selama skill ini berjalan, dan jangan mengubah `CLAUDE.md`.

Jalankan langkah-langkah berikut secara berurutan.

## 1. Cek visual reference

Lihat isi `design-reference/` dan identifikasi mockup (light/dark, desktop/mobile) yang
relevan dengan fitur yang diminta. Catat elemen visual yang relevan: section mana,
layout, komponen apa yang terlihat (card, timeline, pill badge, dll) — ini jadi input
untuk bagian komponen di plan.

Jika fitur ini tidak punya representasi jelas di `design-reference/`, catat itu secara
eksplisit sebagai gap yang perlu dikonfirmasi ke user (lihat langkah 6).

## 2. Ikuti convention project

Baca ulang `CLAUDE.md` dan `AGENTS.md` di root project sebagai constraint, khususnya:

- UI primitives pakai `@base-ui/react` (bukan Radix), dibungkus di `src/components/ui`
  dengan `class-variance-authority`.
- Instalasi komponen shadcn lewat CLI (`npx shadcn add <component>`), bukan copy-paste
  manual. Cek `components.json` untuk konfirmasi alias & style (`base-nova`, `neutral`).
- Path alias `@/*` → `src/*`.
- `cn` adalah re-export dari package `cn` di `src/lib/utils.ts`.
- Theming lewat CSS variables OKLCH di `src/app/globals.css` + `next-themes` (`useTheme()`),
  jangan pernah sentuh class `.dark` di `document.documentElement` manual.
- Next.js 16 App Router — kalau plan menyentuh API/routing yang tidak yakin cara kerjanya
  di versi ini, catat perlu cek `node_modules/next/dist/docs/` nanti saat implementasi
  (bukan sekarang, karena tahap ini belum coding).

## 3. Analisa codebase secara mendalam

Delegasikan eksplorasi codebase yang relevan (struktur `src/app`, `src/components`,
komponen `ui/` yang sudah ada, pola yang dipakai section lain) ke agent dengan model
paling mampu, supaya analisanya tidak dangkal. Gunakan Agent tool dengan
`subagent_type: "Plan"` dan `model: "opus"`, beri prompt yang self-contained (path
project, fitur yang mau di-plan, temuan dari langkah 1 & 2), dan minta agent itu
melaporkan: file/komponen existing yang relevan atau bisa dipakai ulang, pola konvensi
yang harus diikuti, dan potensi konflik/duplikasi.

Jangan skip langkah ini walau fiturnya kelihatan sederhana — tujuannya supaya plan akurat
terhadap kondisi codebase saat ini, bukan asumsi.

## 4. Susun rencana implementasi

Berdasarkan hasil langkah 1–3, tulis:

- **Komponen yang dibutuhkan** — baru vs reuse existing.
- **Lokasi folder** — path spesifik mengikuti struktur `src/app` / `src/components` /
  `src/components/ui` yang sudah ada.
- **shadcn components yang perlu di-add** — list command `npx shadcn add <x>` yang
  dibutuhkan, kalau ada.

## 5. Breakdown jadi checklist task

Pecah rencana implementasi jadi checklist task berurutan (task kecil, dependency jelas —
task yang bergantung pada task lain diletakkan setelahnya). Ini yang nanti jadi isi body
GitHub issue.

## 6. Flag keputusan arsitektur

Kumpulkan semua keputusan yang ambigu atau berdampak besar (mis. state management,
data source/CMS vs hardcoded, routing baru vs section di halaman yang sama, dsb) jadi
section terpisah "Needs confirmation". Kalau ada keputusan yang blocking (plan tidak bisa
lanjut tanpa jawabannya), tanyakan ke user lewat AskUserQuestion sebelum finalisasi plan
alih-alih menebak.

## 7. Batasan tahap ini

- JANGAN menulis atau mengedit kode apa pun (termasuk tidak menjalankan `npx shadcn add`
  sungguhan — itu cuma didaftar di plan).
- JANGAN mengubah `CLAUDE.md` di tahap ini, walau plan menyimpulkan ada convention baru.

## 8. Tentukan nomor tiket

Sebelum menyusun title, cari nomor tiket berikutnya: jalankan
`gh issue list --search "[WP-" --state all --limit 100` (atau setara) dan cari nomor `WP-<n>`
tertinggi yang sudah dipakai di title issue manapun. Nomor tiket untuk fitur ini adalah
nomor tertinggi + 1. Kalau tidak ada tiket `WP-` sama sekali, mulai dari `WP-1`.

## 9. Output format

Output akhir harus siap dipakai langsung sebagai GitHub issue, contoh:

```
Title: <judul singkat fitur>

Body:
## Summary
<1-2 kalimat ringkasan fitur & referensi design>

## Implementation plan
- Components: ...
- File locations: ...
- shadcn components to add: `npx shadcn add ...`

## Checklist
- [ ] Task 1
- [ ] Task 2 (depends on Task 1)
- ...

## Needs confirmation
- <keputusan arsitektur yang belum diputuskan>
```

Tampilkan output ini sebagai teks biasa di respons (bukan file), supaya user bisa
langsung copy-paste ke `gh issue create --title "..." --body "..."` kalau mereka mau.
Jangan otomatis membuat issue di GitHub — itu di luar scope skill ini kecuali diminta.
