import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ArrowLeft, Phone, MessageSquare, Lock, Eye, EyeOff } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/Button';
import Input from '@/components/Input';

const ProgressStep = ({ step, currentStep, icon: Icon, label, isCompleted }: {
  step: number;
  currentStep: number;
  icon: any;
  label: string;
  isCompleted: boolean;
}) => {
  const { theme } = useTheme();
  const isActive = step === currentStep;
  const isPast = step < currentStep;
  
  return (
    <View style={styles.stepContainer}>
      <View style={[
        styles.stepCircle,
        {
          backgroundColor: isActive || isPast ? theme.colors.primary : theme.colors.surface,
          borderColor: isActive ? theme.colors.primary : theme.colors.border,
        }
      ]}>
        <Icon 
          size={16} 
          color={isActive || isPast ? '#ffffff' : theme.colors.textSecondary} 
        />
      </View>
      <Text style={[
        styles.stepLabel,
        {
          color: isActive ? theme.colors.primary : theme.colors.textSecondary,
          fontWeight: isActive ? '600' : '400',
        }
      ]}>
        {label}
      </Text>
      {step < 3 && (
        <View style={[
          styles.stepConnector,
          {
            backgroundColor: isPast ? theme.colors.primary : theme.colors.border,
          }
        ]} />
      )}
    </View>
  );
};

export default function SetPinScreen() {
  const { theme } = useTheme();
  useLanguage();
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  React.useEffect(() => {
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

  const handleSetPin = async () => {
    if (!pin || !confirmPin) return;
    
    if (pin !== confirmPin) {
      Alert.alert('Error', 'PINs do not match');
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 1500);
  };

  const handleBack = () => {
    router.back();
  };

  const isValid = pin.length >= 4 && confirmPin.length >= 4 && pin === confirmPin;
  const isDark = theme.name === 'Dark Professional';

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
        colors={isDark ? 
          [theme.colors.background, theme.colors.surface, theme.colors.primary + '20'] : 
          [theme.colors.background, theme.colors.surface, theme.colors.primary + '15']
        }
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <ArrowLeft size={24} color={theme.colors.text} />
            </TouchableOpacity>
            <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Set PIN</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Progress Steps */}
          <View style={styles.progressContainer}>
            <ProgressStep
              step={1}
              currentStep={3}
              icon={Phone}
              label="Mobile"
              isCompleted={true}
            />
            <ProgressStep
              step={2}
              currentStep={3}
              icon={MessageSquare}
              label="OTP"
              isCompleted={true}
            />
            <ProgressStep
              step={3}
              currentStep={3}
              icon={Lock}
              label="PIN"
              isCompleted={false}
            />
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <Animated.View
              style={[
                styles.content,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              {/* Main Card */}
              <View style={[styles.mainCard, { backgroundColor: theme.colors.surface }]}>
                <View style={styles.cardContent}>
                  <Text style={[styles.title, { color: theme.colors.text }]}>
                    Create Your PIN
                  </Text>
                  <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
                    Set a secure 6-digit PIN to protect your account
                  </Text>

                  {/* PIN Input */}
                  <View style={styles.inputGroup}>
                    <View style={[styles.inputContainer, { borderColor: theme.colors.border }]}>
                      <View style={[styles.inputIcon, { backgroundColor: theme.colors.primary + '15' }]}>
                        <Lock size={20} color={theme.colors.primary} />
                      </View>
                      <View style={styles.inputField}>
                        <Text style={[styles.inputLabel, { color: theme.colors.textSecondary }]}>Enter PIN</Text>
                        <Input
                          value={pin}
                          onChangeText={setPin}
                          secureTextEntry={!showPin}
                          keyboardType="numeric"
                          placeholder="Enter 6-digit PIN"
                          maxLength={6}
                          style={styles.input}
                          testID="pin-input"
                        />
                      </View>
                      <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPin(!showPin)}
                      >
                        {showPin ? (
                          <EyeOff size={20} color={theme.colors.textSecondary} />
                        ) : (
                          <Eye size={20} color={theme.colors.textSecondary} />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* Confirm PIN Input */}
                  <View style={styles.inputGroup}>
                    <View style={[
                      styles.inputContainer, 
                      { 
                        borderColor: confirmPin && pin !== confirmPin ? '#ff4757' : theme.colors.border 
                      }
                    ]}>
                      <View style={[styles.inputIcon, { backgroundColor: theme.colors.primary + '15' }]}>
                        <Lock size={20} color={theme.colors.primary} />
                      </View>
                      <View style={styles.inputField}>
                        <Text style={[styles.inputLabel, { color: theme.colors.textSecondary }]}>Confirm PIN</Text>
                        <Input
                          value={confirmPin}
                          onChangeText={setConfirmPin}
                          secureTextEntry={!showConfirmPin}
                          keyboardType="numeric"
                          placeholder="Confirm your PIN"
                          maxLength={6}
                          style={styles.input}
                          testID="confirm-pin-input"
                        />
                      </View>
                      <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowConfirmPin(!showConfirmPin)}
                      >
                        {showConfirmPin ? (
                          <EyeOff size={20} color={theme.colors.textSecondary} />
                        ) : (
                          <Eye size={20} color={theme.colors.textSecondary} />
                        )}
                      </TouchableOpacity>
                    </View>
                    {confirmPin && pin !== confirmPin && (
                      <Text style={styles.errorText}>PINs do not match</Text>
                    )}
                  </View>

                  <Button
                    title="Create Account"
                    onPress={handleSetPin}
                    loading={loading}
                    disabled={!isValid}
                    style={styles.continueButton}
                    testID="continue-button"
                  />
                </View>
              </View>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    position: 'relative',
  },
  stepContainer: {
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#ffffff',
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  stepConnector: {
    position: 'absolute',
    top: 20,
    left: '70%',
    right: '-70%',
    height: 2,
    backgroundColor: '#ffffff',
    opacity: 0.3,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  mainCard: {
    borderRadius: 24,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
  },
  cardContent: {
    padding: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
    textAlign: 'center',
    opacity: 0.7,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 16,
    backgroundColor: '#f8f9ff',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  inputIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  inputField: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  eyeIcon: {
    padding: 8,
  },
  errorText: {
    color: '#ff4757',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  continueButton: {
    marginTop: 24,
    borderRadius: 16,
    paddingVertical: 16,
  },
});