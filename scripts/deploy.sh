#!/bin/bash

# AI Bootcamp - Deploy Script
echo "🚀 Iniciando despliegue del AI Bootcamp..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto."
    exit 1
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Verificar que la instalación fue exitosa
if [ $? -ne 0 ]; then
    echo "❌ Error: Falló la instalación de dependencias."
    exit 1
fi

# Ejecutar build
echo "🔨 Construyendo la aplicación..."
npm run build

# Verificar que el build fue exitoso
if [ $? -ne 0 ]; then
    echo "❌ Error: Falló la construcción de la aplicación."
    exit 1
fi

# Verificar que Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📥 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Desplegar a Vercel
echo "🌐 Desplegando a Vercel..."
vercel --prod

# Verificar que el despliegue fue exitoso
if [ $? -eq 0 ]; then
    echo "✅ ¡Despliegue exitoso! El AI Bootcamp está disponible en Vercel."
    echo "🔗 URL: https://ai-bootcamp-presentation.vercel.app"
else
    echo "❌ Error: Falló el despliegue a Vercel."
    exit 1
fi

echo "🎉 ¡Proceso completado!"
