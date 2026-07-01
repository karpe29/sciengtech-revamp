# Fetch product images from legacy sciengtech.in for catalog review.
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$outRoot = Join-Path $root 'assets\imported\old-site'
$catalog = Get-Content (Join-Path $root 'data\catalog.json') -Raw | ConvertFrom-Json

# Legacy URL candidates per catalog id (OEM pages + WooCommerce slugs)
$legacyMap = @{
  'entangled-photon-source' = @(
    'https://sciengtech.in/our-oem-products-training-kits-entangled-photon-source/'
    'https://sciengtech.in/our-oem-products-training-kits/'
  )
  'bomb-tester' = @('https://sciengtech.in/our-oem-products-training-kits-bombtester-kit/')
  'michelson-interferometer' = @('https://sciengtech.in/our-oem-products-training-kits-michelson-interferometer-kit/')
  'quantum-eraser' = @('https://sciengtech.in/our-oem-products-training-kits-quantum-eraser/')
  'quantum-key-distribution' = @('https://sciengtech.in/our-oem-products-training-kits/')
  'fourier-optics-kit' = @('https://sciengtech.in/our-oem-products-training-kits-fourier-optics-training-kit/')
  'polarized-3d-cinema' = @('https://sciengtech.in/our-oem-products-training-kits-polarized-3d-cinema/')
  'regenerative-delay-line' = @('https://sciengtech.in/our-oem-products-training-kits-supercontinuum-generation-kit/')
  'breadboard-optomechanical-platform-optical-mounting-board-precision-mounting-boa' = @('https://sciengtech.in/product/breadboards/')
  'kinematic-mirror-mount-precision-kinematic-mirror-mount-for-optical-components' = @(
    'https://sciengtech.in/product/precision-kinematic-mirror-mount/'
    'https://sciengtech.in/product/kinematic-mirror-mount/'
  )
  'linear-stage' = @('https://sciengtech.in/product/translation-stage/')
  'rotation-mount' = @('https://sciengtech.in/product/rotation-mount/')
  'diode-laser' = @('https://sciengtech.in/our-oem-products-laser-diode-module-5mw-laser-diode-module/')
  'fiber-optics-collimator' = @('https://sciengtech.in/optics/')
  'mirrors' = @('https://sciengtech.in/optics/')
  'lens-mount-lens-holder-optical-lens-mount-fixed-lens-holder-lens-housing-opticel' = @('https://sciengtech.in/product/lens-mount/')
  'collars' = @('https://sciengtech.in/product/collars/')
  'pedestal-post-holder-pedestal-post-mount-fixed-height-post-mount-rigid-post-pede' = @('https://sciengtech.in/product/pedestal-post-holder/')
  'optical-post-optomechanical-support-post-mounting-post-optical-mounting-rod-thre' = @('https://sciengtech.in/our-oem-products-optomechanics-posts-our-products_12mm-post/')
  'baseplate' = @('https://sciengtech.in/product/post-base/')
  'spanner-wrench-optic-lock-ring-tool-optic-adjustment-tool' = @('https://sciengtech.in/our-oem-products-spanner-wrench/')
  'swivel-base-adapter-swivel-mounting-base' = @('https://sciengtech.in/our-oem-products-optomechanics-post-holder/')
  'allen-bolt' = @('https://sciengtech.in/product/allen-bolts/')
  'hex-nut' = @('https://sciengtech.in/product/hex-nut-din-934-is-1363/')
  'washer' = @('https://sciengtech.in/product/plain-flat-washers/')
}

function Get-ImagesFromHtml([string]$html) {
  $urls = [System.Collections.Generic.HashSet[string]]::new()
  $patterns = @(
    'https://sciengtech\.in/wp-content/uploads/[^"''\s>]+\.(?:png|jpe?g|webp)'
    'src="(https://sciengtech\.in/wp-content/uploads/[^"]+)"'
  )
  foreach ($m in [regex]::Matches($html, 'https://sciengtech\.in/wp-content/uploads/[^"''\s>)]+?\.(?:png|jpe?g|webp)', 'IgnoreCase')) {
    $u = $m.Value -replace '-\d+x\d+(?=\.\w+$)', ''
    [void]$urls.Add($u)
  }
  foreach ($m in [regex]::Matches($html, 'data-large_image="([^"]+)"', 'IgnoreCase')) {
    $u = $m.Groups[1].Value -replace '-\d+x\d+(?=\.\w+$)', ''
    if ($u -match 'wp-content/uploads') { [void]$urls.Add($u) }
  }
  return @($urls)
}

function Save-Image([string]$url, [string]$destPath) {
  $dir = Split-Path $destPath -Parent
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  if (Test-Path $destPath) { return $false }
  Invoke-WebRequest -Uri $url -OutFile $destPath -UseBasicParsing -TimeoutSec 45
  return $true
}

$manifest = @()
$allItems = @($catalog.solutions) + @($catalog.components)

foreach ($item in $allItems) {
  $id = $item.id
  $urls = @()
  if ($legacyMap.ContainsKey($id)) {
    foreach ($pageUrl in $legacyMap[$id]) {
      try {
        $r = Invoke-WebRequest -Uri $pageUrl -UseBasicParsing -TimeoutSec 30
        $urls += Get-ImagesFromHtml $r.Content
      } catch { Write-Warning "Page failed $pageUrl : $_" }
    }
  }
  # Fallback: search by slug keywords in media API (name match)
  if (-not $urls.Count) {
    $slugGuess = ($id -split '-')[0..2] -join '-'
    try {
      $media = Invoke-RestMethod -Uri "https://sciengtech.in/wp-json/wp/v2/media?search=$slugGuess&per_page=20" -TimeoutSec 30
      foreach ($m in $media) { if ($m.source_url) { $urls += ($m.source_url -replace '-\d+x\d+(?=\.\w+$)', '') } }
    } catch {}
  }

  $urls = $urls | Select-Object -Unique
  if (-not $urls.Count) { continue }

  $itemDir = Join-Path $outRoot $id
  $i = 0
  $saved = @()
  foreach ($u in $urls | Select-Object -First 6) {
    $i++
    $ext = [System.IO.Path]::GetExtension(($u -split '\?')[0])
    if (-not $ext) { $ext = '.jpg' }
    $name = if ($i -eq 1) { "primary$ext" } else { "image-$i$ext" }
    $dest = Join-Path $itemDir $name
    try {
      if (Save-Image $u $dest) { $saved += $name }
    } catch { Write-Warning "Download failed $u : $_" }
  }
  if ($saved.Count) {
    $manifest += [pscustomobject]@{
      id = $id
      name = $item.name
      type = $item.type
      legacyPages = ($legacyMap[$id] -join '; ')
      images = ($saved -join ', ')
      folder = "assets/imported/old-site/$id"
    }
  }
}

# Broader OEM / training kit gallery pages
$galleryPages = @(
  'https://sciengtech.in/our-oem-products-training-kits/',
  'https://sciengtech.in/our-oem-products-optomechanics/',
  'https://sciengtech.in/optics/',
  'https://sciengtech.in/'
)
$galleryDir = Join-Path $outRoot '_site-galleries'
New-Item -ItemType Directory -Force -Path $galleryDir | Out-Null
$gi = 0
foreach ($pageUrl in $galleryPages) {
  try {
    $r = Invoke-WebRequest -Uri $pageUrl -UseBasicParsing -TimeoutSec 30
    $imgs = Get-ImagesFromHtml $r.Content | Select-Object -First 15
    $slug = ($pageUrl -replace 'https://sciengtech.in/','' -replace '[^a-z0-9]+','-').Trim('-')
    foreach ($u in $imgs) {
      $gi++
      $ext = [System.IO.Path]::GetExtension(($u -split '\?')[0])
      Save-Image $u (Join-Path $galleryDir "$slug-$gi$ext") | Out-Null
    }
  } catch {}
}

$manifestPath = Join-Path $outRoot 'manifest.json'
$manifest | ConvertTo-Json -Depth 4 | Set-Content $manifestPath -Encoding UTF8
Write-Host "Downloaded images for $($manifest.Count) catalog items -> $outRoot"
Write-Host "Manifest: $manifestPath"
