# Renders the fictional screens to public/images/projects with headless Edge.
# Usage: .\render.ps1 -Python path\to\python.exe   (Python needs Pillow)
param([string]$Python = 'python')

$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$here = $PSScriptRoot
$out = Join-Path (Split-Path $here) 'public\images\projects'
$tmp = Join-Path $env:TEMP 'portfolio-mockups'
New-Item -ItemType Directory -Force -Path $out, $tmp | Out-Null

$pages = @{
  'agent-chat'        = 'agent-chat.html'
  'lakehouse'         = 'lakehouse.html'
  'qlik-migration'    = 'qlik-migration.html'
  'travel-portal'     = 'travel-portal.html'
  'ticket-chat'       = 'ticket-chat.html'
  'orders-dashboard'  = 'orders-dashboard.html'
  'service-booking'   = 'service-booking.html'
}

foreach ($name in $pages.Keys) {
  $url = ([uri](Join-Path $here $pages[$name])).AbsoluteUri
  $png = Join-Path $tmp "$name.png"
  $proc = Start-Process -FilePath $edge -PassThru -WindowStyle Hidden -ArgumentList @(
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
    '--force-device-scale-factor=1', "--user-data-dir=$tmp\edge",
    '--window-size=1280,800', '--virtual-time-budget=3000', "--screenshot=$png", $url
  )
  $proc.WaitForExit(30000) | Out-Null
  if (-not $proc.HasExited) { $proc.Kill() }
}

$convert = @"
from pathlib import Path
from PIL import Image
for png in Path(r'$tmp').glob('*.png'):
    Image.open(png).convert('RGB').save(Path(r'$out') / f'{png.stem}.webp', quality=86, method=6)
    print(png.stem)
"@
$convert | & $Python -
