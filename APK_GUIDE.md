# 📱 Guía de Compilación APK - Downloader App by Moli

## 🚀 Pasos para Generar y Instalar el APK

### OPCIÓN 1: Usando Expo (Más Fácil) ⭐

#### Paso 1: Instalar Herramientas
```bash
npm install -g expo-cli eas-cli
```

#### Paso 2: Crear Cuenta en Expo
- Ve a [expo.dev](https://expo.dev)
- Crea una cuenta gratis
- Verifica tu email

#### Paso 3: Login en Terminal
```bash
eas login
# Ingresa tu email y contraseña de Expo
```

#### Paso 4: Inicializar Proyecto
```bash
eas init
# Presiona Enter para aceptar valores por defecto
```

#### Paso 5: Compilar APK
```bash
# Opción A: APK de prueba (más rápido)
eas build --platform android --profile preview

# Opción B: APK de producción (más pequeño)
eas build --platform android --profile production
```

#### Paso 6: Descargar APK
- Espera a que termine la compilación
- Recibirás un enlace de descarga
- Descarga el archivo `.apk`

---

### OPCIÓN 2: Usando Android Studio

#### Paso 1: Instalar Android Studio
- Descarga desde [developer.android.com](https://developer.android.com/studio)
- Instala y abre Android Studio

#### Paso 2: Preparar Proyecto
```bash
# Desde la carpeta del proyecto
npm install
npm run eject  # Opcional: si necesitas más control
```

#### Paso 3: Abrir en Android Studio
1. **File → Open** → Selecciona la carpeta `android/`
2. Espera a que Gradle sincronice

#### Paso 4: Compilar
1. **Build → Build Bundle(s) / APK(s) → Build APK(s)**
2. Selecciona **release**
3. Espera a que termine

#### Paso 5: Encontrar APK
```
android/app/build/outputs/apk/release/app-release.apk
```

---

### OPCIÓN 3: Línea de Comandos (Sin Android Studio)

#### Paso 1: Instalar Android SDK
```bash
# En macOS
brew install android-sdk

# En Windows
# Descarga desde: https://developer.android.com/studio
```

#### Paso 2: Compilar
```bash
npm run build:apk
```

#### Paso 3: Encontrar APK
```
android/app/build/outputs/apk/release/
```

---

## 📱 Instalar APK en tu Teléfono Android

### Método 1: Desde el Teléfono (Más Fácil)

1. Descarga el APK en tu teléfono
2. Abre **Archivo/Administrador de archivos**
3. Busca el archivo `downloader-app-*.apk`
4. Tap en el archivo
5. Tap en **Instalar**
6. Espera a que termine
7. ¡Abre la app!

### Método 2: Vía USB desde Computadora

```bash
# Conecta el teléfono por USB
# Activa "Depuración de USB" en Opciones de Desarrollador

adb install path/to/app-release.apk
```

### Método 3: Enviar por Email

1. Envía el APK a tu email desde la computadora
2. Abre el email en el teléfono
3. Descarga el APK
4. Abre y instala

---

## ⚙️ Configuración Personalizada

### Cambiar Nombre de la App

Edita `app.json`:
```json
{
  "expo": {
    "name": "Mi App Descargadora"
  }
}
```

### Cambiar Paquete
Edita `app.json`:
```json
{
  "android": {
    "package": "com.tuempresa.miapp"
  }
}
```

### Cambiar Icono
Reemplaza `assets/adaptive-icon.png` con tu icono (512x512)

---

## 🐛 Solución de Problemas

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Compilation failed"
```bash
# Limpiar cache
expo cache --clear
npm start -- --clear
```

### "APK no instala"
- Verifica que sea Android 5.0+ (API 21+)
- Intenta desinstalar versión anterior
- Prueba en otro dispositivo

### "La app no descarga videos"
- Verifica conexión a internet
- Comprueba permisos en Configuración → Aplicaciones
- Intenta reiniciar la app

---

## 📊 Tamaño del APK

- **APK Preview**: ~80-100 MB
- **APK Production**: ~50-70 MB
- **Con optimización**: ~30-40 MB

---

## 📞 Ayuda Adicional

- **Documentación Expo**: https://docs.expo.dev/
- **React Native Docs**: https://reactnative.dev/
- **Android Developers**: https://developer.android.com/
- **Issues en GitHub**: https://github.com/SoyMoli/Downloader-app-by-Moli/issues

---

## ✅ Checklist Final

- [ ] Node.js y npm instalados
- [ ] Expo CLI instalado
- [ ] Cuenta en Expo creada
- [ ] Proyecto clonado
- [ ] `npm install` ejecutado
- [ ] APK compilado
- [ ] APK descargado
- [ ] APK instalado en teléfono
- [ ] App abierta y funcionando

---

Made with ❤️ by Moli
