# Legacy images from sciengtech.in

Downloaded for review before assigning to the new catalog.

## Regenerate

```powershell
powershell -ExecutionPolicy Bypass -File scripts/fetch-old-site-images.ps1
```

## Browse locally

Open `review.html` in a browser (via local server):

```powershell
cd C:\Users\Sagar\BioMatch\sciengtech-revamp
npx serve -l 3456 .
# http://localhost:3456/assets/imported/old-site/review.html
```

### How to submit selections to Cursor

1. For each product, choose **Use as-is**, **Revamp**, or **Skip**
2. Click the image to select as primary (ruby border)
3. Add optional notes
4. Click **Copy for Cursor** and paste into chat (or **Download JSON**)

Selections auto-save in your browser (localStorage).

## Layout

| Path | Contents |
|------|----------|
| `{catalog-id}/primary.png` | Main product image from legacy page |
| `{catalog-id}/image-2.png` … | Additional images from same page |
| `_site-galleries/` | Extra images from homepage, training kits hub, optics |
| `manifest.json` | Index: id, name, type, source URLs |

**Not wired to the live site yet** — review first, then say which IDs should use which image (or if they need revamping).
