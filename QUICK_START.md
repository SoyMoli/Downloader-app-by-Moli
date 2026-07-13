# 🚀 GUÍA DEFINITIVA: Compila tu APK en 5 minutos

## ⚡ OPCIÓN MÁS FÁCIL (Recomendado)

### Paso 1️⃣: Descargar el Proyecto
```bash
git clone https://github.com/SoyMoli/Downloader-app-by-Moli
cd Downloader-app-by-Moli
```

### Paso 2️⃣: Instalar Node.js
- Descarga desde: https://nodejs.org/
- Instala versión LTS
- Verifica: `node --version` y `npm --version`

### Paso 3️⃣: Instalar Dependencias
```bash
npm install
```

### Paso 4️⃣: Instalar Expo CLI
```bash
npm install -g expo-cli eas-cli
```

### Paso 5️⃣: Crear Cuenta en Expo
- Ve a https://expo.dev
- Haz clic en **Sign up**
- Rellena el formulario
- Verifica tu email

### Paso 6️⃣: Login en Terminal
```bash
eas login
```
- Ingresa tu email y contraseña

### Paso 7️⃣: Compilar APK
```bash
eas build --platform android --profile preview
```

### Paso 8️⃣: Descargar
- Espera a que termine (5-15 minutos)
- Recibirás un enlace en la terminal
- ¡Descarga tu APK!

### Paso 9️⃣: Instalar en Teléfono
1. Envía el APK a tu teléfono (email, WhatsApp, etc.)
2. Abre el archivo en tu teléfono
3. Tap en **Instalar**
4. ¡Abre la app! 🎉

---

## 🎯 RESUMEN RÁPIDO

```bash
# 1. Clonar
git clone https://github.com/SoyMoli/Downloader-app-by-Moli && cd Downloader-app-by-Moli

# 2. Instalar dependencias
npm install

# 3. Instalar Expo
npm install -g expo-cli eas-cli

# 4. Login (primera vez)
eas login

# 5. Compilar
eas build --platform android --profile preview

# 6. ¡Listo! Descarga y instala en tu teléfono
```

---

## ❌ Si Tienes Problemas

### "eas: command not found"
```bash
npm install -g eas-cli
```

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "No puedo crear cuenta en Expo"
- Usa email válido
- Verifica el email recibido
- Si no llega, revisa spam

### "La compilación falla"
```bash
expo cache --clear
npm install
eas build --platform android --profile preview
```

---

## 📱 ¿Ya Tienes el APK?

### Instalar desde Computadora (Windows/Mac/Linux)

#### Con ADB:
```bash
# 1. Conecta tu teléfono por USB
# 2. Activa "Depuración de USB" en Configuración → Opciones de Desarrollador
# 3. Ejecuta:
adb install path/to/downloader-app.apk
```

#### Sin ADB (Más Fácil):
1. Copia el APK a una nube (Google Drive, OneDrive, etc.)
2. Descarga desde tu teléfono
3. Abre y instala

---

## ✨ CARACTERÍSTICAS DE LA APP

✅ Descarga de YouTube, TikTok, Instagram, Facebook, Twitter, Twitch
✅ Navegador integrado con historial
✅ Soporte para 3 idiomas (Español, Inglés, Portugués)
✅ Múltiples calidades de video (360p, 480p, 720p, 1080p)
✅ Conversión de formatos (MP4, MKV, AVI, MP3, WAV)
✅ Gestor de descargas con historial
✅ Interfaz moderna y fácil de usar

---

## 🎓 ¿Qué es un APK?

Un APK es un archivo que contiene la aplicación. Es como un `.exe` en Windows pero para Android.

---

## 💡 Tips Útiles

- El APK pesa ~80 MB (descarga normal)
- La app ocupa ~150 MB una vez instalada
- Funciona en Android 5.0+ (API 21+)
- No necesita conexión a internet para funcionar (salvo para descargas)
- Puedes compartir el APK con amigos

---

## 🆘 SOPORTE

Si tienes problemas:

1. **Lee el README.md** en el repositorio
2. **Lee el APK_GUIDE.md** para opciones avanzadas
3. **Revisa las Issues** en GitHub
4. **Abre un Issue nuevo** describiendo el problema

---

## 📊 Resumen de Archivos Descargados

Tu repositorio tiene:
- ✅ **App.js** - Aplicación principal
- ✅ **package.json** - Dependencias
- ✅ **app.json** - Configuración de Expo
- ✅ **babel.config.js** - Configuración de Babel
- ✅ **eas.json** - Configuración de build
- ✅ **4 pantallas** - Home, Browser, Downloads, Settings
- ✅ **Traducciones** - Español, Inglés, Portugués
- ✅ **Servicios** - Download, Storage
- ✅ **Guías** - README, APK_GUIDE, QUICK_START

---

Made with ❤️ by Moli

**¡Tu app está lista para descargar y compartir!** 🚀
