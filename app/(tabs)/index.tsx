import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, StatusBar, Modal, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { 
  Banknote,
  PiggyBank,
  TrendingUp,
  Building,
  Briefcase,
  Landmark,
  Home as HomeIcon,
  Coins,
  BarChart3,
  Shield,
  Settings,
  LogOut,
  Bell,
  HelpCircle,
  Wallet,
  CreditCard,
  Target,
  BookOpen,
} from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface AssetItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  value: string;
  change: string;
  isPositive: boolean;
}

interface AssetCategory {
  id: string;
  title: string;
  totalValue: string;
  items: AssetItem[];
  isExpanded: boolean;
}

export default function DashboardScreen() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const [assetCategories] = useState<AssetCategory[]>([
    {
      id: 'assets',
      title: t.dashboard.assets,
      totalValue: '₹15,45,000',
      isExpanded: false,
      items: [
        { id: 'bank', name: t.assets.bankAccounts, icon: Banknote, value: '₹2,50,000', change: '+2.5%', isPositive: true },
        { id: 'deposits', name: 'Deposits', icon: PiggyBank, value: '₹5,00,000', change: '+4.2%', isPositive: true },
        { id: 'mutual_funds', name: t.assets.mutualFunds, icon: TrendingUp, value: '₹3,25,000', change: '+12.8%', isPositive: true },
        { id: 'equity', name: t.assets.stocks, icon: BarChart3, value: '₹2,15,000', change: '-3.2%', isPositive: false },
        { id: 'pms', name: 'PMS', icon: Briefcase, value: '₹1,50,000', change: '+8.5%', isPositive: true },
        { id: 'aif', name: 'AIF', icon: Building, value: '₹75,000', change: '+6.1%', isPositive: true },
        { id: 'bonds', name: t.assets.bonds, icon: Landmark, value: '₹50,000', change: '+3.8%', isPositive: true },
        { id: 'real_estate', name: t.assets.realEstate, icon: HomeIcon, value: '₹25,00,000', change: '+15.2%', isPositive: true },
        { id: 'commodities', name: 'Commodities', icon: Coins, value: '₹35,000', change: '-1.5%', isPositive: false },
        { id: 'equity_unlisted', name: 'Equity (Unlisted)', icon: BarChart3, value: '₹1,25,000', change: '+22.3%', isPositive: true },
        { id: 'others', name: t.assets.others, icon: Briefcase, value: '₹45,000', change: '+5.7%', isPositive: true },
      ]
    },
    {
      id: 'security',
      title: t.dashboard.security,
      totalValue: '₹8,50,000',
      isExpanded: false,
      items: [
        { id: 'insurance', name: 'Insurance', icon: Shield, value: '₹8,50,000', change: '+0%', isPositive: true },
      ]
    },
    {
      id: 'liabilities',
      title: t.dashboard.liabilities,
      totalValue: '₹12,75,000',
      isExpanded: false,
      items: [
        { id: 'loan', name: 'Loan', icon: Banknote, value: '₹12,75,000', change: '-2.1%', isPositive: true },
      ]
    },
    {
      id: 'goals',
      title: t.dashboard.goals,
      totalValue: '5 Active',
      isExpanded: false,
      items: [
        { id: 'retirement', name: t.goals.retirement, icon: Target, value: '₹2,00,00,000', change: '65%', isPositive: true },
        { id: 'house', name: t.goals.house, icon: HomeIcon, value: '₹1,50,00,000', change: '45%', isPositive: true },
        { id: 'education', name: t.goals.education, icon: BookOpen, value: '₹50,00,000', change: '78%', isPositive: true },
        { id: 'vacation', name: t.goals.vacation, icon: Target, value: '₹10,00,000', change: '32%', isPositive: true },
        { id: 'emergency', name: t.goals.emergency, icon: Shield, value: '₹15,00,000', change: '90%', isPositive: true },
      ]
    },
    {
      id: 'education',
      title: t.dashboard.education,
      totalValue: '12 Articles',
      isExpanded: false,
      items: [
        { id: 'basics', name: 'Investment Basics', icon: BookOpen, value: '8 Articles', change: 'New', isPositive: true },
        { id: 'advanced', name: 'Advanced Strategies', icon: TrendingUp, value: '4 Articles', change: 'Updated', isPositive: true },
      ]
    }
  ]);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  const customerName = "9845098450";
  const netWorth = "₹36,20,000";
  const netWorthChange = "+8.5%";

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  const handleCategoryPress = (categoryId: string) => {
    switch (categoryId) {
      case 'assets':
        router.push('/assets');
        break;
      case 'security':
        router.push('/security');
        break;
      case 'liabilities':
        router.push('/liabilities');
        break;
      case 'goals':
        router.push('/goals');
        break;
      case 'education':
        router.push('/education');
        break;
      default:
        break;
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'assets':
        return Wallet;
      case 'security':
        return Shield;
      case 'liabilities':
        return CreditCard;
      case 'goals':
        return Target;
      case 'education':
        return BookOpen;
      default:
        return Wallet;
    }
  };

  const handleProfilePress = () => {
    setShowHamburgerMenu(true);
  };

  const handleMenuClose = () => {
    setShowHamburgerMenu(false);
  };

  const handleLogout = () => {
    setShowHamburgerMenu(false);
    router.push('/auth/login');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.name === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
      
      <View style={[styles.statusBarSpacer, { backgroundColor: theme.colors.background }]} />
      
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
          <View style={styles.headerLeft}>
            <Text style={[styles.greeting, { color: theme.colors.textSecondary }]}>
              Good Morning
            </Text>
            <View style={styles.customerNameContainer}>
              <Image 
                source={{ uri: 'https://r2-pub.rork.com/attachments/nrgogdoos0pa3ykw0qh3t' }}
                style={styles.logoIcon}
              />
              <Text style={[styles.customerName, { color: theme.colors.text }]}>
                {customerName}
              </Text>
            </View>
          </View>
          <TouchableOpacity 
            style={[styles.profileButton, { backgroundColor: theme.colors.surface }]}
            onPress={handleProfilePress}
            testID="profile-button"
          >
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' }}
              style={styles.profileImage}
            />
            <View style={[styles.onlineIndicator, { backgroundColor: theme.colors.success }]} />
          </TouchableOpacity>
        </View>

        {/* Net Worth Card */}
        <View style={[styles.netWorthCard, { backgroundColor: theme.colors.surface }]}>
          <LinearGradient
            colors={[theme.colors.primary + '15', theme.colors.secondary + '10', theme.colors.surface]}
            style={styles.netWorthGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.netWorthHeader}>
              <Text style={[styles.netWorthLabel, { color: theme.colors.textSecondary }]}>
                {t.dashboard.totalValue}
              </Text>
              <View style={[styles.trendIcon, { backgroundColor: theme.colors.success + '20' }]}>
                <TrendingUp size={16} color={theme.colors.success} />
              </View>
            </View>
            <View style={styles.netWorthRow}>
              <Text style={[styles.netWorthValue, { color: theme.colors.text }]}>
                {netWorth}
              </Text>
              <View style={styles.changeContainer}>
                <Text style={[styles.netWorthChange, { color: theme.colors.success }]}>
                  {netWorthChange}
                </Text>
                <Text style={[styles.changeLabel, { color: theme.colors.textSecondary }]}>
                  This Month
                </Text>
              </View>
            </View>
            <View style={[styles.progressBar, { backgroundColor: theme.colors.border }]}>
              <View style={[styles.progressFill, { backgroundColor: theme.colors.primary }]} />
            </View>
          </LinearGradient>
        </View>

        {/* Category Cards Row 1 */}
        <View style={styles.categoryCardsContainer}>
          {assetCategories.slice(0, 3).map((category) => {
            const IconComponent = getCategoryIcon(category.id);
            const isSelected = false;
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  {
                    backgroundColor: isSelected ? theme.colors.primary : theme.colors.surface,
                    borderColor: isSelected ? theme.colors.primary : theme.colors.border,
                  }
                ]}
                onPress={() => handleCategoryPress(category.id)}
                testID={`category-card-${category.id}`}
              >
                <View style={[
                  styles.categoryCardIcon,
                  { backgroundColor: isSelected ? theme.colors.surface : theme.colors.primary + '15' }
                ]}>
                  <IconComponent 
                    size={24} 
                    color={isSelected ? theme.colors.primary : theme.colors.primary} 
                  />
                </View>
                <Text style={[
                  styles.categoryCardTitle,
                  { color: isSelected ? theme.colors.surface : theme.colors.text }
                ]}>
                  {category.title}
                </Text>
                <Text style={[
                  styles.categoryCardValue,
                  { color: isSelected ? theme.colors.surface + 'CC' : theme.colors.textSecondary }
                ]}>
                  {category.totalValue}
                </Text>
                <View style={[
                  styles.categoryCardBadge,
                  { backgroundColor: isSelected ? theme.colors.surface + '20' : theme.colors.primary + '15' }
                ]}>
                  <Text style={[
                    styles.categoryCardBadgeText,
                    { color: isSelected ? theme.colors.surface : theme.colors.primary }
                  ]}>
                    {category.items.length}
                  </Text>
                </View>

              </TouchableOpacity>
            );
          })}
        </View>

        {/* Category Cards Row 2 */}
        <View style={styles.categoryCardsContainer}>
          {assetCategories.slice(3).map((category) => {
            const IconComponent = getCategoryIcon(category.id);
            const isSelected = false;
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  {
                    backgroundColor: isSelected ? theme.colors.primary : theme.colors.surface,
                    borderColor: isSelected ? theme.colors.primary : theme.colors.border,
                  }
                ]}
                onPress={() => handleCategoryPress(category.id)}
                testID={`category-card-${category.id}`}
              >
                <View style={[
                  styles.categoryCardIcon,
                  { backgroundColor: isSelected ? theme.colors.surface : theme.colors.primary + '15' }
                ]}>
                  <IconComponent 
                    size={24} 
                    color={isSelected ? theme.colors.primary : theme.colors.primary} 
                  />
                </View>
                <Text style={[
                  styles.categoryCardTitle,
                  { color: isSelected ? theme.colors.surface : theme.colors.text }
                ]}>
                  {category.title}
                </Text>
                <Text style={[
                  styles.categoryCardValue,
                  { color: isSelected ? theme.colors.surface + 'CC' : theme.colors.textSecondary }
                ]}>
                  {category.totalValue}
                </Text>
                <View style={[
                  styles.categoryCardBadge,
                  { backgroundColor: isSelected ? theme.colors.surface + '20' : theme.colors.primary + '15' }
                ]}>
                  <Text style={[
                    styles.categoryCardBadgeText,
                    { color: isSelected ? theme.colors.surface : theme.colors.primary }
                  ]}>
                    {category.items.length}
                  </Text>
                </View>

              </TouchableOpacity>
            );
          })}
          {/* Add empty placeholder to maintain 3-card layout */}
          <View style={styles.categoryCardPlaceholder} />
        </View>


      </Animated.View>

      {/* Hamburger Menu Modal */}
      <Modal
        visible={showHamburgerMenu}
        transparent
        animationType="fade"
        onRequestClose={handleMenuClose}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={handleMenuClose}
        >
          <View style={[styles.hamburgerMenu, { backgroundColor: theme.colors.surface }]}>
            <View style={styles.menuHeader}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' }}
                style={styles.menuProfileImage}
              />
              <Text style={[styles.menuCustomerName, { color: theme.colors.text }]}>
                {customerName}
              </Text>
            </View>
            
            <View style={styles.menuItems}>
              <TouchableOpacity style={styles.menuItem}>
                <Bell size={20} color={theme.colors.textSecondary} />
                <Text style={[styles.menuItemText, { color: theme.colors.text }]}>{t.settings.notifications}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem}>
                <Settings size={20} color={theme.colors.textSecondary} />
                <Text style={[styles.menuItemText, { color: theme.colors.text }]}>{t.settings.title}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem}>
                <HelpCircle size={20} color={theme.colors.textSecondary} />
                <Text style={[styles.menuItemText, { color: theme.colors.text }]}>{t.settings.help}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                <LogOut size={20} color={theme.colors.error} />
                <Text style={[styles.menuItemText, { color: theme.colors.error }]}>{t.settings.logout}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  statusBarSpacer: {
    height: 44,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerLeft: {
    flex: 1,
  },
  customerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  customerName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  netWorthCard: {
    marginHorizontal: 20,
    marginVertical: 16,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  netWorthGradient: {
    padding: 20,
  },
  netWorthLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  netWorthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  netWorthValue: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  netWorthChange: {
    fontSize: 16,
    fontWeight: '600',
  },
  categoryCardsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  categoryCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    position: 'relative',
    minHeight: 120,
  },
  categoryCardPlaceholder: {
    flex: 1,
  },
  categoryCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  categoryCardValue: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
  },
  categoryCardBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginBottom: 4,
  },
  categoryCardBadgeText: {
    fontSize: 10,
    fontWeight: '600',
  },


  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  hamburgerMenu: {
    width: 280,
    height: '100%',
    paddingTop: 60,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  menuHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  menuProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  menuCustomerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItems: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 16,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  greeting: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 4,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  netWorthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  trendIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeContainer: {
    alignItems: 'flex-end',
  },
  changeLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    marginTop: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '68%',
    borderRadius: 2,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
});