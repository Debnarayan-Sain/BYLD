import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Moon, Sun, User, Bell, Shield, HelpCircle, LogOut, ChevronRight, TrendingUp, Globe } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const { theme, changeTheme, availableThemes } = useTheme();
  const { language, changeLanguage, availableLanguages } = useLanguage();
  const isDark = theme.name === 'Dark Professional';

  const languageNames: Record<string, string> = {
    en: 'English',
    hi: 'हिन्दी (Hindi)',
    bn: 'বাংলা (Bengali)',
    ta: 'தமிழ் (Tamil)',
    te: 'తెలుగు (Telugu)',
    kn: 'ಕನ್ನಡ (Kannada)',
    ml: 'മലയാളം (Malayalam)',
  };

  const handleThemeToggle = () => {
    changeTheme(isDark ? 'default' : 'dark');
  };

  const settingsOptions = [
    {
      title: 'Profile Settings',
      icon: User,
      onPress: () => router.push('/profile-settings'),
      showArrow: true,
    },
    {
      title: 'Risk Profile',
      icon: TrendingUp,
      onPress: () => router.push('/risk-profile'),
      showArrow: true,
    },
    {
      title: 'Notifications',
      icon: Bell,
      onPress: () => console.log('Notifications pressed'),
      showArrow: true,
    },
    {
      title: 'Security',
      icon: Shield,
      onPress: () => console.log('Security pressed'),
      showArrow: true,
    },
    {
      title: 'Help & Support',
      icon: HelpCircle,
      onPress: () => console.log('Help pressed'),
      showArrow: true,
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
        {/* Custom Header */}
        <View style={[styles.header, { backgroundColor: theme.colors.background, borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Settings</Text>
        </View>
        
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Theme Section */}
          <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Appearance</Text>
            
            <View style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}>
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary + '20' }]}>
                  {isDark ? (
                    <Moon size={20} color={theme.colors.primary} />
                  ) : (
                    <Sun size={20} color={theme.colors.primary} />
                  )}
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                    Dark Mode
                  </Text>
                  <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
                    {isDark ? 'Dark theme enabled' : 'Light theme enabled'}
                  </Text>
                </View>
              </View>
              <Switch
                value={isDark}
                onValueChange={handleThemeToggle}
                trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
                thumbColor={isDark ? '#ffffff' : '#f4f3f4'}
                testID="theme-toggle"
              />
            </View>
          </View>

          {/* Language Section */}
          <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Language</Text>
            
            {availableLanguages.map((langCode, index) => {
              const isSelected = language === langCode;
              
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.languageItem,
                    { borderBottomColor: theme.colors.border },
                    index === availableLanguages.length - 1 && styles.lastItem,
                    isSelected && { backgroundColor: theme.colors.primary + '10' }
                  ]}
                  onPress={() => changeLanguage(langCode)}
                >
                  <View style={styles.languageLeft}>
                    <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary + '20' }]}>
                      <Globe size={20} color={theme.colors.primary} />
                    </View>
                    <Text style={[styles.languageTitle, { color: theme.colors.text }]}>
                      {languageNames[langCode] || langCode.toUpperCase()}
                    </Text>
                  </View>
                  {isSelected && (
                    <View style={[styles.selectedIndicator, { backgroundColor: theme.colors.primary }]} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* General Settings */}
          <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>General</Text>
            
            {settingsOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.settingItem,
                    { borderBottomColor: theme.colors.border },
                    index === settingsOptions.length - 1 && styles.lastItem
                  ]}
                  onPress={option.onPress}
                >
                  <View style={styles.settingLeft}>
                    <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary + '20' }]}>
                      <IconComponent size={20} color={theme.colors.primary} />
                    </View>
                    <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                      {option.title}
                    </Text>
                  </View>
                  {option.showArrow && (
                    <ChevronRight size={20} color={theme.colors.textSecondary} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Theme Options */}
          <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Theme Options</Text>
            
            {availableThemes.map((themeName, index) => {
              const isSelected = theme.name === (themeName === 'default' ? 'Professional Blue' : 
                                themeName === 'dark' ? 'Dark Professional' :
                                themeName === 'green' ? 'Wealth Green' : 'Premium Gold');
              
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.themeItem,
                    { borderBottomColor: theme.colors.border },
                    index === availableThemes.length - 1 && styles.lastItem,
                    isSelected && { backgroundColor: theme.colors.primary + '10' }
                  ]}
                  onPress={() => changeTheme(themeName)}
                >
                  <View style={styles.themeLeft}>
                    <View style={[
                      styles.themeColorPreview,
                      { backgroundColor: themeName === 'default' ? '#0066CC' :
                                        themeName === 'dark' ? '#3B82F6' :
                                        themeName === 'green' ? '#059669' : '#B45309' }
                    ]} />
                    <Text style={[styles.themeTitle, { color: theme.colors.text }]}>
                      {themeName === 'default' ? 'Professional Blue' :
                       themeName === 'dark' ? 'Dark Professional' :
                       themeName === 'green' ? 'Wealth Green' : 'Premium Gold'}
                    </Text>
                  </View>
                  {isSelected && (
                    <View style={[styles.selectedIndicator, { backgroundColor: theme.colors.primary }]} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Logout */}
          <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
            <TouchableOpacity
              style={[styles.settingItem, styles.logoutItem]}
              onPress={() => console.log('Logout pressed')}
            >
              <View style={styles.settingLeft}>
                <View style={[styles.iconContainer, { backgroundColor: theme.colors.error + '20' }]}>
                  <LogOut size={20} color={theme.colors.error} />
                </View>
                <Text style={[styles.settingTitle, { color: theme.colors.error }]}>
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSpacing} />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  themeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  themeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  themeColorPreview: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 12,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  languageLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  languageTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  bottomSpacing: {
    height: 32,
  },
});