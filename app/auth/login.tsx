import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Calculator, Phone, Lock, Eye, EyeOff, TrendingUp } from 'lucide-react-native';
import { useLanguage } from '@/contexts/LanguageContext';
import Input from '@/components/Input';

const { height } = Dimensions.get('window');

export default function LoginScreen() {
  useLanguage();
  const [mobile, setMobile] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const logoAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(logoAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
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
      ]),
    ]).start();
  }, [fadeAnim, slideAnim, logoAnim]);

  const handleLogin = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 1500);
  };

  const handleSignup = () => {
    router.push('/auth/signup');
  };

  const handleCalculators = () => {
    router.push('/calculators');
  };

  const openTerms = () => {
    Linking.openURL('https://example.com/terms');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Background Pattern */}
        <View style={styles.backgroundPattern}>
          <View style={[styles.circle, styles.circle1]} />
          <View style={[styles.circle, styles.circle2]} />
          <View style={[styles.circle, styles.circle3]} />
        </View>
        
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Logo Section */}
            <Animated.View
              style={[
                styles.logoSection,
                {
                  opacity: logoAnim,
                  transform: [{
                    scale: logoAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1],
                    }),
                  }],
                },
              ]}
            >
              <View style={styles.logoContainer}>
                <LinearGradient
                  colors={['#4facfe', '#00f2fe']}
                  style={styles.logoCircle}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TrendingUp size={28} color="#ffffff" strokeWidth={2.5} />
                </LinearGradient>
              </View>
              <Text style={styles.brandTitle}>BYLD</Text>
              <Text style={styles.brandSubtitle}>Portfolio Management</Text>
              <View style={styles.brandAccent}>
                <View style={styles.accentDot} />
                <View style={styles.accentDot} />
                <View style={styles.accentDot} />
              </View>
            </Animated.View>

            {/* Login Card */}
            <Animated.View
              style={[
                styles.loginCard,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.9)']}
                style={styles.cardGradient}
              >
                <View style={styles.cardHeader}>
                  <Text style={[styles.cardTitle, { color: '#1a1a2e' }]}>Welcome Back</Text>
                  <Text style={[styles.cardSubtitle, { color: '#64748b' }]}>
                    Sign in to your portfolio
                  </Text>
                </View>

                <View style={styles.formContainer}>
                  {/* Mobile Input */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Mobile Number</Text>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputIcon}>
                        <Phone size={20} color="#4facfe" />
                      </View>
                      <Input
                        value={mobile}
                        onChangeText={setMobile}
                        keyboardType="phone-pad"
                        placeholder="Enter your mobile number"
                        maxLength={10}
                        style={styles.input}
                        testID="mobile-input"
                      />
                    </View>
                  </View>

                  {/* PIN Input */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>PIN</Text>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputIcon}>
                        <Lock size={20} color="#4facfe" />
                      </View>
                      <Input
                        value={pin}
                        onChangeText={setPin}
                        secureTextEntry={!showPin}
                        keyboardType="numeric"
                        placeholder="Enter your 6-digit PIN"
                        maxLength={6}
                        style={styles.input}
                        testID="pin-input"
                      />
                      <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPin(!showPin)}
                      >
                        {showPin ? (
                          <EyeOff size={20} color="#94a3b8" />
                        ) : (
                          <Eye size={20} color="#94a3b8" />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.forgotPin}>
                    <Text style={styles.forgotPinText}>
                      Forgot PIN?
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                    testID="login-button"
                  >
                    <LinearGradient
                      colors={['#4facfe', '#00f2fe']}
                      style={styles.loginButtonGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      {loading ? (
                        <Text style={styles.loginButtonText}>Signing in...</Text>
                      ) : (
                        <Text style={styles.loginButtonText}>Sign In</Text>
                      )}
                    </LinearGradient>
                  </TouchableOpacity>

                  <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>or</Text>
                    <View style={styles.dividerLine} />
                  </View>

                  <TouchableOpacity
                    style={styles.signupButton}
                    onPress={handleSignup}
                  >
                    <Text style={styles.signupButtonText}>
                      Create New Account
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </Animated.View>

            {/* Bottom Section */}
            <Animated.View
              style={[
                styles.bottomSection,
                {
                  opacity: fadeAnim,
                },
              ]}
            >
              {/* Calculators */}
              <TouchableOpacity
                style={styles.calculatorButton}
                onPress={handleCalculators}
              >
                <LinearGradient
                  colors={['rgba(79,172,254,0.2)', 'rgba(0,242,254,0.2)']}
                  style={styles.calculatorGradient}
                >
                  <View style={styles.calculatorIconContainer}>
                    <Calculator size={24} color="#4facfe" />
                  </View>
                  <Text style={styles.calculatorText}>Financial Calculators</Text>
                  <Text style={styles.calculatorSubtext}>SIP, STP, SWP & More</Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* Terms */}
              <TouchableOpacity onPress={openTerms} style={styles.termsButton}>
                <Text style={styles.termsText}>Terms & Conditions</Text>
              </TouchableOpacity>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: 'absolute',
    borderRadius: 1000,
    opacity: 0.1,
  },
  circle1: {
    width: 200,
    height: 200,
    backgroundColor: '#4facfe',
    top: -100,
    right: -100,
  },
  circle2: {
    width: 150,
    height: 150,
    backgroundColor: '#00f2fe',
    bottom: 100,
    left: -75,
  },
  circle3: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    top: height * 0.3,
    right: 50,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  logoSection: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  logoContainer: {
    marginBottom: 12,
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4facfe',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
  },
  brandTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 4,
    letterSpacing: 3,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  brandSubtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
    fontWeight: '500',
    letterSpacing: 1,
  },
  brandAccent: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },
  accentDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4facfe',
  },
  loginCard: {
    borderRadius: 20,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
    overflow: 'hidden',
  },
  cardGradient: {
    borderRadius: 20,
  },
  cardHeader: {
    padding: 20,
    paddingBottom: 12,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    opacity: 0.8,
    fontWeight: '500',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  inputIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(79,172,254,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    paddingVertical: 12,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  eyeIcon: {
    padding: 12,
  },
  forgotPin: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    marginTop: 2,
  },
  forgotPinText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4facfe',
  },
  loginButton: {
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#4facfe',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  loginButtonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 12,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: '500',
    color: '#94a3b8',
  },
  signupButton: {
    borderWidth: 2,
    borderColor: '#4facfe',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4facfe',
  },
  bottomSection: {
    paddingTop: 24,
    alignItems: 'center',
  },
  calculatorButton: {
    borderRadius: 20,
    marginBottom: 16,
    width: '100%',
    maxWidth: 300,
    overflow: 'hidden',
  },
  calculatorGradient: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(79,172,254,0.3)',
  },
  calculatorIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#4facfe',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  calculatorText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  calculatorSubtext: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.9,
    fontWeight: '500',
  },
  termsButton: {
    paddingVertical: 16,
  },
  termsText: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});