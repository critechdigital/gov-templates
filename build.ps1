# Build all gov templates into dist/
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$dist = Join-Path $root "dist"

# Clean dist
if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item $dist -ItemType Directory | Out-Null

# Copy landing page
Copy-Item (Join-Path $root "public\*") $dist -Recurse -Force

# Build each template
$templates = @(
    @{ name = "transparency-portal"; base = "/transparency-portal/" },
    @{ name = "permit-licensing"; base = "/permit-licensing/" },
    @{ name = "citizen-services"; base = "/citizen-services/" },
    @{ name = "legislative-tracker"; base = "/legislative-tracker/" },
    @{ name = "procurement-portal"; base = "/procurement-portal/" }
)

foreach ($t in $templates) {
    $dir = Join-Path $root $t.name
    Write-Host "Building $($t.name)..." -ForegroundColor Cyan
    
    # Set base in vite config temporarily via env
    $env:VITE_BASE = $t.base
    
    Push-Location $dir
    npx vite build --base $t.base --outDir (Join-Path $dist $t.name)
    if ($LASTEXITCODE -ne 0) { throw "Build failed for $($t.name)" }
    Pop-Location
    
    Write-Host "Done: $($t.name)" -ForegroundColor Green
}

Write-Host "`nAll templates built successfully!" -ForegroundColor Green
