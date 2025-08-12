import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import { Shield } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface SecurityItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  value: string;
  change: string;
  isPositive: boolean;
}

const securityItems: SecurityItem[] = [
  { id: 'insurance', name: 'Insurance', icon: Shield, value: '₹8,50,000', change: '+0%', isPositive: true },
];

export default function SecurityScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Stack.Screen 
        options={{
          title: 'Security',
          headerStyle: { backgroundColor: theme.colors.surface },
          headerTintColor: theme.colors.text,
          headerTitleStyle: { fontWeight: 'bold' }
        }} 
      />
      <StatusBar barStyle={theme.name === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
      
      <View style={[styles.summaryCard, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}>Total Security</Text>
        <Text style={[styles.summaryValue, { color: theme.colors.text }]}>₹8,50,000</Text>
        <Text style={[styles.summaryChange, { color: theme.colors.success }]}>Stable coverage</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {securityItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.securityItem, { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.border }]}
              testID={`security-${item.id}`}
            >
              <View style={styles.securityItemLeft}>
                <View style={[styles.securityIcon, { backgroundColor: theme.colors.primary + '15' }]}>
                  <IconComponent size={24} color={theme.colors.primary} />
                </View>
                <View style={styles.securityInfo}>
                  <Text style={[styles.securityName, { color: theme.colors.text }]}>
                    {item.name}
                  </Text>
                  <View style={styles.securityMeta}>
                    <View style={[styles.statusDot, { backgroundColor: item.isPositive ? theme.colors.success : theme.colors.error }]} />
                    <Text style={[styles.securityStatus, { color: theme.colors.textSecondary }]}>
                      Active Coverage
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.securityItemRight}>
                <Text style={[styles.securityValue, { color: theme.colors.text }]}>
                  {item.value}
                </Text>
                <View style={[styles.securityChangeChip, { backgroundColor: theme.colors.success + '15' }]}>
                  <Text style={[
                    styles.securityChange, 
                    { color: theme.colors.success }
                  ]}>
                    Protected
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        
        <View style={[styles.infoCard, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.infoTitle, { color: theme.colors.text }]}>Insurance Coverage</Text>
          <Text style={[styles.infoDescription, { color: theme.colors.textSecondary }]}>
            Your insurance policies provide comprehensive coverage for life, health, and property protection.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summaryCard: {
    marginHorizontal: 20,
    marginVertical: 16,
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  summaryChange: {
    fontSize: 16,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  securityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  securityItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  securityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  securityInfo: {
    flex: 1,
  },
  securityName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  securityMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  securityStatus: {
    fontSize: 12,
    fontWeight: '400',
  },
  securityItemRight: {
    alignItems: 'flex-end',
  },
  securityValue: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  securityChange: {
    fontSize: 12,
    fontWeight: '600',
  },
  securityChangeChip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  infoCard: {
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});