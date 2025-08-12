import React,{useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Stack,router } from 'expo-router';
import { Car, Home, CreditCard, User } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface LiabilityItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  value: string;
  emi: string;
  tenure: string;
  interestRate: string;
}

const securedLoans: LiabilityItem[] = [
  { 
    id: 'home-loan', 
    name: 'Home Loan', 
    icon: Home, 
    value: '₹8,50,000', 
    emi: '₹12,500/month',
    tenure: '15 years remaining',
    interestRate: '8.5% p.a.'
  },
  { 
    id: 'car-loan', 
    name: 'Car Loan', 
    icon: Car, 
    value: '₹3,25,000', 
    emi: '₹8,200/month',
    tenure: '3 years remaining',
    interestRate: '9.2% p.a.'
  },
];

const unsecuredLoans: LiabilityItem[] = [
  { 
    id: 'personal-loan', 
    name: 'Personal Loan', 
    icon: User, 
    value: '₹1,50,000', 
    emi: '₹5,500/month',
    tenure: '2 years remaining',
    interestRate: '12.5% p.a.'
  },
  { 
    id: 'credit-card', 
    name: 'Credit Card Outstanding', 
    icon: CreditCard, 
    value: '₹45,000', 
    emi: 'Minimum ₹2,250',
    tenure: 'Revolving credit',
    interestRate: '18% p.a.'
  },
];

export default function LiabilitiesScreen() {
   useEffect(() => {
    router.replace('/liabilities');
  }, []);

  return null;
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
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  summaryItem: {
    flex: 1,
  },
  summarySubLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  summarySubValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  liabilityItem: {
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
  liabilityItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  liabilityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  liabilityInfo: {
    flex: 1,
  },
  liabilityName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  liabilityEmi: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  liabilityTenure: {
    fontSize: 12,
    fontWeight: '400',
  },
  liabilityItemRight: {
    alignItems: 'flex-end',
  },
  liabilityValue: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  liabilityChange: {
    fontSize: 12,
    fontWeight: '600',
  },
  liabilityChangeChip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
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
  tipCard: {
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});