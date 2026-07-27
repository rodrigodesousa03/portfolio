# ========================================
# PORTFOLIO - UPDATE DATA SCRIPT (Piloto)
# ========================================
#
# Baixa os CSVs atualizados da planilha "Estatísticas Rodrigo" no Google Sheets.
#
# Usa os links de "Publicar na Web" (Arquivo > Compartilhar > Publicar na Web),
# um por aba (gid). NÃO usar o endpoint gviz (/gviz/tq?tqx=out:csv) — ele infere
# o tipo de cada coluna e APAGA silenciosamente valores de texto em colunas que
# ele julga numéricas (ex: a coluna "Final" perde os valores "DNF"/"DNS"/"DSQ",
# viram célula vazia). O link de publicação exporta o CSV cru, sem essa inferência.
#
# Para executar: .\update-data.ps1
#

# ID de publicação (Arquivo > Compartilhar > Publicar na Web > Link)
$PUB_ID = "2PACX-1vS-mvW6U6AlOurRdl9peA5etM1T1VfC3d7Yiem5DZGFSQe-XRXHrVbjp14rViRBt7QiRcLdRPi8Fo3k"

Write-Host "🏎️  PILOTO - Atualizando dados..." -ForegroundColor Cyan
Write-Host ""

# gid da aba -> arquivo local
$sheets = [ordered]@{
    "935307170"  = "data\estatisticas-etapas.csv"      # Etapas
    "1893616336" = "data\estatisticas-resultados.csv"  # Resultados
    "2008014619" = "data\estatisticas-circuitos.csv"   # Circuitos
}

$success = 0
$failed = 0

foreach ($gid in $sheets.Keys) {
    $file = $sheets[$gid]
    $url = "https://docs.google.com/spreadsheets/d/e/$PUB_ID/pub?gid=$gid&single=true&output=csv"

    Write-Host "📥 Baixando gid $gid -> $file..." -NoNewline

    try {
        curl.exe -L $url -o $file --silent

        if (Test-Path $file) {
            $size = (Get-Item $file).Length
            $sizeKB = [math]::Round($size / 1KB, 2)
            if ($size -gt 0) {
                Write-Host " ✅ ($sizeKB KB)" -ForegroundColor Green
                $success++
            } else {
                Write-Host " ❌ Arquivo vazio" -ForegroundColor Red
                $failed++
            }
        } else {
            Write-Host " ❌ Falhou" -ForegroundColor Red
            $failed++
        }
    } catch {
        Write-Host " ❌ Erro: $_" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "✅ Sucesso: $success arquivos" -ForegroundColor Green
if ($failed -gt 0) {
    Write-Host "❌ Falhas: $failed arquivos" -ForegroundColor Red
}
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Dados atualizados! Recarregue a página /driver no navegador." -ForegroundColor Cyan
