# Hendrickson Law — hendricksonlawok.com

Static website for **Steven L. Hendrickson, Attorney at Law** (Oklahoma City).
Plain HTML/CSS/JS — no build step. Designed to be hosted free on **GitHub Pages** with the GoDaddy domain `hendricksonlawok.com`.

Brand palette: **Black `#000000` · Gold `#FFCD00`**.

---

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Steven Hendrickson |
| `family-law.html` | Family Law & Divorce |
| `civil-litigation.html` | Civil Litigation |
| `estate-probate.html` | Estate Planning & Probate |
| `criminal-defense.html` | Criminal Defense |
| `personal-injury.html` | Personal Injury |
| `real-estate.html` | Real Estate |
| `contact.html` | Contact + form + map |
| `404.html` | Not-found page |
| `css/styles.css`, `js/main.js` | Styles & interactions |
| `CNAME` | Custom domain for GitHub Pages |
| `robots.txt`, `sitemap.xml` | SEO |

Preview locally: `python3 -m http.server 8000` then open <http://localhost:8000>.

---

## ✅ Three things to finish before launch

### 1. Activate the contact form (5 minutes, free)
The form currently falls back to opening the visitor's email app. To have submissions emailed straight to **steven@hendricksonlawok.com**:
1. Go to <https://web3forms.com>, enter `steven@hendricksonlawok.com`, and get a free **Access Key**.
2. In `contact.html`, find `value="YOUR_WEB3FORMS_ACCESS_KEY"` and paste your key in place of `YOUR_WEB3FORMS_ACCESS_KEY`.
3. Commit & push. Done — submissions now arrive by email.

### 2. Add real assets (optional, anytime)
Placeholders are in place for a logo and headshot. To add a professional photo of Steven, drop the file in an `images/` folder and replace the `.portrait` placeholder blocks in `index.html` and `about.html`.

### 3. Verify details
- Phone **(405) 722-8042**, address, and hours are set throughout — confirm they're correct.
- "Over 40 years" / "since 1981" credentials are used site-wide.

---

## Deploy to GitHub Pages
1. Push this repo to `main` on GitHub (`rhendricksontu/hendricksonlawok`).
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main` / `/ (root)`. Save.
3. The `CNAME` file sets the custom domain to `hendricksonlawok.com`. Under **Settings → Pages → Custom domain** it should show `hendricksonlawok.com`; enable **Enforce HTTPS** once the certificate is issued.

## Point the GoDaddy domain at GitHub Pages
In GoDaddy → your domain → **DNS**, set:

| Type | Name | Value |
|---|---|---|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `rhendricksontu.github.io` |

DNS can take from a few minutes up to 48 hours to propagate. After it resolves, confirm the green "DNS check successful" in GitHub Pages settings and turn on **Enforce HTTPS**.

> These are GitHub's published Pages IPs as of this writing — confirm against
> <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site> before changing DNS.
