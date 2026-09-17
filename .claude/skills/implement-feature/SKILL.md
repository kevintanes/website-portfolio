---
name: implement-feature
description: Trigger this skill when the user asks to implement a feature from an existing GitHub issue that has already been planned — e.g. "implement issue #12", "kerjain fitur dari issue X", "implement fitur yang udah di-plan itu". Do NOT trigger for brand-new features with no issue yet (use plan-feature first) or for quick unplanned code changes.
model: sonnet
---

# Implement Feature

Tujuan skill ini: mengimplementasikan fitur dari GitHub issue yang sudah ada plan/checklist-nya,
sampai siap direview manual oleh user sebelum di-commit.

Jalankan langkah-langkah berikut secara berurutan, jangan lompat atau gabungkan step.

## 1. Ambil detail issue dari GitHub

Jalankan `gh issue view <nomor-atau-nama>` untuk ambil title, body, dan checklist lengkap
dari issue yang dimaksud user. Kalau user cuma kasih nama fitur (bukan nomor), cari issue
yang cocok dulu (`gh issue list --search "..."`) sebelum lanjut. Jangan lanjut ke step
berikutnya kalau issue tidak ketemu atau ambigu — konfirmasi ke user dulu.

## 2. Buat branch baru

Buat branch baru dari `main` dengan nama yang mencerminkan fitur/issue (mis.
`feature/<slug-issue>` atau `<nomor-issue>-<slug>`). Pastikan working tree bersih dulu
(`git status`) sebelum branching — kalau ada perubahan uncommitted yang bukan punya kamu,
stash dulu, jangan buang.

## 3. Implementasikan sesuai checklist

Implementasikan setiap item checklist di issue, ikuti convention di `CLAUDE.md` dan
`AGENTS.md` (UI primitives `@base-ui/react`, komponen shadcn lewat CLI, `cn` dari package
`cn`, theming via `next-themes`, dll). **Jangan menambah scope di luar checklist** — kalau
nemu hal yang kelihatannya perlu dikerjakan tapi tidak ada di checklist, catat saja untuk
disebutkan nanti di ringkasan (step 6), jangan langsung dikerjakan.

**Sumber kebenaran desain:** kalau user memberikan link frame Figma di prompt (atau ada di
issue), pakai itu sebagai referensi utama — ambil spacing, warna, layout, dan variabel lewat
Figma MCP (`get_design_context` dkk), jangan menebak dari gambar. `design-reference/` PNG
cuma dipakai sebagai fallback kalau tidak ada link Figma yang diberikan untuk section
terkait. Kalau ada perbedaan antara PNG dan data Figma live, ikuti data Figma.

## 4. Lint dan build

Jalankan `npm run lint` lalu `npm run build`. Kalau ada error dari salah satu, perbaiki dulu
sebelum lanjut — jangan lanjut ke step berikutnya selama masih ada error.

## 5. Cross-check checklist

Cek satu per satu item checklist di issue terhadap perubahan yang sudah dibuat. Pastikan
semua item benar-benar terpenuhi. Kalau ada item yang belum sepenuhnya selesai, kembali ke
step 3 untuk item tersebut sebelum lanjut.

## 6. STOP — review manual dulu

**Jangan commit atau push apa pun di titik ini.** Tampilkan ke user:

- Daftar file yang diubah/ditambah/dihapus.
- Ringkasan `git diff --stat` (atau setara).
- Hasil cross-check checklist dari step 5.
- Catatan hal di luar scope yang ditemukan tapi sengaja tidak dikerjakan (kalau ada).

Minta user review dan test manual dulu. Berhenti di sini dan tunggu konfirmasi eksplisit
dari user sebelum lanjut ke step 7.

## 7. Commit

Setelah user konfirmasi OK, buat commit dengan message yang jelas dan deskriptif (fokus ke
"kenapa", ikuti gaya commit message yang sudah ada di repo — cek `git log` kalau perlu).

## 8. Push

Push branch ke remote.

## 9. Buat PR

Buat PR yang linked ke issue-nya (mis. pakai `Closes #<nomor>` di body PR) lewat `gh pr
create`. Tampilkan URL PR ke user setelah selesai.

## 10. Batasan

Jangan mengubah `CLAUDE.md` di tahap ini, walau selama implementasi ditemukan convention
baru yang menurutmu layak didokumentasikan.
