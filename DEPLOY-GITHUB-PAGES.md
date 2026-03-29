# GitHub Pages Deployment Guide

## 1. GitHub Repository তৈরি করুন

1. GitHub-এ login করুন।
2. `New repository` এ ক্লিক করুন।
3. repository name দিন, যেমন: `bhagyolipi-site`
4. এই folder-এর সব file upload করুন।

## 2. GitHub Pages চালু করুন

1. repo-তে গিয়ে `Settings`
2. `Pages`
3. `Deploy from a branch`
4. branch হিসেবে `main` এবং folder হিসেবে `/ (root)` select করুন

## 3. Custom Domain দিন

1. `Settings > Pages`-এ `Custom domain` box-এ লিখুন:

   `bhagyolipi.com`

2. Save দিন

## 4. DNS Records দিন

GitHub Docs অনুযায়ী apex domain-এর জন্য এই `A` records ব্যবহার করুন:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

`www` subdomain ব্যবহার করতে চাইলে একটি `CNAME` record দিন:

- Host: `www`
- Value: `YOUR-GITHUB-USERNAME.github.io`

## 5. Dear4You APK Upload করুন

1. আপনার repo-র `Releases` section-এ যান
2. `Create a new release`
3. `Dear4You.apk` upload করুন
4. এই link format ব্যবহার করুন:

   `https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPO/releases/latest/download/Dear4You.apk`

5. `script.js`-এ placeholder username/repo name বদলান

## 6. HTTPS

DNS ঠিকমতো propagate হলে GitHub Pages থেকে HTTPS enable করা যাবে।
