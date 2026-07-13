import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  SafeAreaView
} from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/config';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SettingsScreen = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('es');
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (value) => {
    setTheme(value);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Icon name="cog" size={32} color="#007AFF" />
          <Text style={styles.title}>Configuración</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Idioma</Text>
          <View style={styles.optionsContainer}>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang.code}
                style={[
                  styles.languageOption,
                  language === lang.code && styles.languageOptionActive
                ]}
                onPress={() => handleLanguageChange(lang.code)}
              >
                <Text style={[
                  styles.languageText,
                  language === lang.code && styles.languageTextActive
                ]}>
                  {lang.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tema</Text>
          <View style={styles.themeContainer}>
            <TouchableOpacity
              style={[
                styles.themeOption,
                theme === 'light' && styles.themeOptionActive
              ]}
              onPress={() => handleThemeChange('light')}
            >
              <Icon name="sun" size={24} color="#FFB800" />
              <Text style={styles.themeText}>Claro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.themeOption,
                theme === 'dark' && styles.themeOptionActive
              ]}
              onPress={() => handleThemeChange('dark')}
            >
              <Icon name="moon" size={24} color="#333" />
              <Text style={styles.themeText}>Oscuro</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.settingItem}>
            <View style={styles.settingLabel}>
              <Icon name="bell" size={20} color="#007AFF" style={styles.icon} />
              <Text style={styles.settingText}>Notificaciones</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#ddd', true: '#007AFF' }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acerca de</Text>
          <View style={styles.aboutItem}>
            <Text style={styles.aboutLabel}>Versión</Text>
            <Text style={styles.aboutValue}>1.0.0</Text>
          </View>
          <View style={styles.aboutItem}>
            <Text style={styles.aboutLabel}>Desarrollador</Text>
            <Text style={styles.aboutValue}>SoyMoli</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with ❤️ by SoyMoli</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8
  },
  section: {
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  languageOption: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd'
  },
  languageOptionActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF'
  },
  languageText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666'
  },
  languageTextActive: {
    color: '#fff'
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  themeOption: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd'
  },
  themeOptionActive: {
    borderColor: '#007AFF',
    backgroundColor: '#E3F2FD'
  },
  themeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginTop: 8
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  settingLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  icon: {
    marginRight: 12
  },
  settingText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500'
  },
  aboutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  aboutLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500'
  },
  aboutValue: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600'
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
    marginHorizontal: 15
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500'
  }
});

export default SettingsScreen;
