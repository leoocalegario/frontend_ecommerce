# Script para iniciar o servidor Angular
# Execute este script no PowerShell

Write-Host "🚀 Iniciando servidor Angular..." -ForegroundColor Green

# Tentar encontrar o diretório do projeto
$possiblePaths = @(
    "C:\Users\arine\OneDrive\Área de Trabalho\frontend_ecommerce",
    "C:\Users\arine\OneDrive\Desktop\frontend_ecommerce",
    "C:\Users\arine\Desktop\frontend_ecommerce",
    "C:\Users\arine\OneDrive\Área de Trabalho\frontend_ecommerce",
    ".\frontend_ecommerce"
)

$projectPath = $null
foreach ($path in $possiblePaths) {
    if (Test-Path $path) {
        $projectPath = $path
        break
    }
}

if ($projectPath) {
    Write-Host "📁 Projeto encontrado em: $projectPath" -ForegroundColor Yellow
    Set-Location $projectPath
    
    # Verificar se package.json existe
    if (Test-Path "package.json") {
        Write-Host "✅ package.json encontrado" -ForegroundColor Green
        
        # Instalar dependências se necessário
        if (-not (Test-Path "node_modules")) {
            Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
            npm install
        }
        
        # Iniciar servidor
        Write-Host "🌐 Iniciando servidor na porta 4200..." -ForegroundColor Green
        Write-Host "📱 Acesse: http://localhost:4200" -ForegroundColor Cyan
        Write-Host "🧪 Teste os dados mock em: http://localhost:4200/test-mock" -ForegroundColor Cyan
        
        npx ng serve --port 4200
    } else {
        Write-Host "❌ package.json não encontrado no diretório: $projectPath" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Diretório do projeto não encontrado!" -ForegroundColor Red
    Write-Host "📋 Diretórios testados:" -ForegroundColor Yellow
    foreach ($path in $possiblePaths) {
        Write-Host "   - $path" -ForegroundColor Gray
    }
    Write-Host ""
    Write-Host "💡 Solução:" -ForegroundColor Cyan
    Write-Host "   1. Navegue manualmente para o diretório do projeto" -ForegroundColor White
    Write-Host "   2. Execute: npx ng serve --port 4200" -ForegroundColor White
}

Read-Host "Pressione Enter para continuar..."
