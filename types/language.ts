export interface Translations {
  common: {
    login: string;
    signup: string;
    continue: string;
    back: string;
    next: string;
    verify: string;
    resend: string;
    termsAndConditions: string;
    privacyPolicy: string;
  };
  auth: {
    welcomeBack: string;
    enterMobile: string;
    enterPin: string;
    mobileNumber: string;
    pin: string;
    confirmPin: string;
    forgotPin: string;
    dontHaveAccount: string;
    alreadyHaveAccount: string;
    createAccount: string;
    verifyOtp: string;
    otpSentTo: string;
    enterOtp: string;
    resendOtp: string;
    setPin: string;
    confirmYourPin: string;
    pinMismatch: string;
  };
  calculators: {
    title: string;
    sip: string;
    stp: string;
    swp: string;
    lumpsum: string;
    emi: string;
    retirement: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    common: {
      login: 'Login',
      signup: 'Sign Up',
      continue: 'Continue',
      back: 'Back',
      next: 'Next',
      verify: 'Verify',
      resend: 'Resend',
      termsAndConditions: 'Terms & Conditions',
      privacyPolicy: 'Privacy Policy',
    },
    auth: {
      welcomeBack: 'Welcome Back',
      enterMobile: 'Enter your mobile number',
      enterPin: 'Enter your PIN',
      mobileNumber: 'Mobile Number',
      pin: 'PIN',
      confirmPin: 'Confirm PIN',
      forgotPin: 'Forgot PIN?',
      dontHaveAccount: "Don't have an account?",
      alreadyHaveAccount: 'Already have an account?',
      createAccount: 'Create Account',
      verifyOtp: 'Verify OTP',
      otpSentTo: 'OTP sent to',
      enterOtp: 'Enter the 6-digit OTP',
      resendOtp: 'Resend OTP',
      setPin: 'Set PIN',
      confirmYourPin: 'Confirm your PIN',
      pinMismatch: 'PINs do not match',
    },
    calculators: {
      title: 'Financial Calculators',
      sip: 'SIP Calculator',
      stp: 'STP Calculator',
      swp: 'SWP Calculator',
      lumpsum: 'Lumpsum Calculator',
      emi: 'EMI Calculator',
      retirement: 'Retirement Calculator',
    },
  },
  hi: {
    common: {
      login: 'लॉगिन',
      signup: 'साइन अप',
      continue: 'जारी रखें',
      back: 'वापस',
      next: 'अगला',
      verify: 'सत्यापित करें',
      resend: 'पुनः भेजें',
      termsAndConditions: 'नियम और शर्तें',
      privacyPolicy: 'गोपनीयता नीति',
    },
    auth: {
      welcomeBack: 'वापस स्वागत है',
      enterMobile: 'अपना मोबाइल नंबर दर्ज करें',
      enterPin: 'अपना पिन दर्ज करें',
      mobileNumber: 'मोबाइल नंबर',
      pin: 'पिन',
      confirmPin: 'पिन की पुष्टि करें',
      forgotPin: 'पिन भूल गए?',
      dontHaveAccount: 'खाता नहीं है?',
      alreadyHaveAccount: 'पहले से खाता है?',
      createAccount: 'खाता बनाएं',
      verifyOtp: 'ओटीपी सत्यापित करें',
      otpSentTo: 'ओटीपी भेजा गया',
      enterOtp: '6 अंकों का ओटीपी दर्ज करें',
      resendOtp: 'ओटीपी पुनः भेजें',
      setPin: 'पिन सेट करें',
      confirmYourPin: 'अपने पिन की पुष्टि करें',
      pinMismatch: 'पिन मेल नहीं खाते',
    },
    calculators: {
      title: 'वित्तीय कैलकुलेटर',
      sip: 'एसआईपी कैलकुलेटर',
      stp: 'एसटीपी कैलकुलेटर',
      swp: 'एसडब्ल्यूपी कैलकुलेटर',
      lumpsum: 'एकमुश्त कैलकुलेटर',
      emi: 'ईएमआई कैलकुलेटर',
      retirement: 'सेवानिवृत्ति कैलकुलेटर',
    },
  },
};