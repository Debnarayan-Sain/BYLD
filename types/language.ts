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
  bn: {
    common: {
      login: 'লগইন',
      signup: 'সাইন আপ',
      continue: 'চালিয়ে যান',
      back: 'পিছনে',
      next: 'পরবর্তী',
      verify: 'যাচাই করুন',
      resend: 'পুনরায় পাঠান',
      termsAndConditions: 'নিয়ম ও শর্তাবলী',
      privacyPolicy: 'গোপনীয়তা নীতি',
    },
    auth: {
      welcomeBack: 'স্বাগতম',
      enterMobile: 'আপনার মোবাইল নম্বর লিখুন',
      enterPin: 'আপনার পিন লিখুন',
      mobileNumber: 'মোবাইল নম্বর',
      pin: 'পিন',
      confirmPin: 'পিন নিশ্চিত করুন',
      forgotPin: 'পিন ভুলে গেছেন?',
      dontHaveAccount: 'অ্যাকাউন্ট নেই?',
      alreadyHaveAccount: 'ইতিমধ্যে অ্যাকাউন্ট আছে?',
      createAccount: 'অ্যাকাউন্ট তৈরি করুন',
      verifyOtp: 'ওটিপি যাচাই করুন',
      otpSentTo: 'ওটিপি পাঠানো হয়েছে',
      enterOtp: '৬ সংখ্যার ওটিপি লিখুন',
      resendOtp: 'ওটিপি পুনরায় পাঠান',
      setPin: 'পিন সেট করুন',
      confirmYourPin: 'আপনার পিন নিশ্চিত করুন',
      pinMismatch: 'পিন মিলছে না',
    },
    calculators: {
      title: 'আর্থিক ক্যালকুলেটর',
      sip: 'এসআইপি ক্যালকুলেটর',
      stp: 'এসটিপি ক্যালকুলেটর',
      swp: 'এসডব্লিউপি ক্যালকুলেটর',
      lumpsum: 'একমুশত ক্যালকুলেটর',
      emi: 'ইএমআই ক্যালকুলেটর',
      retirement: 'অবসর ক্যালকুলেটর',
    },
  },
  ta: {
    common: {
      login: 'உள்நுழைவு',
      signup: 'பதிவு செய்யுங்கள்',
      continue: 'தொடரவும்',
      back: 'பின்னால்',
      next: 'அடுத்து',
      verify: 'சரிபார்க்கவும்',
      resend: 'மீண்டும் அனுப்பவும்',
      termsAndConditions: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
      privacyPolicy: 'தனியுரிமை கொள்கை',
    },
    auth: {
      welcomeBack: 'மீண்டும் வரவேற்கிறோம்',
      enterMobile: 'உங்கள் மொபைல் எண்ணை உள்ளிடவும்',
      enterPin: 'உங்கள் பின்னை உள்ளிடவும்',
      mobileNumber: 'மொபைல் எண்',
      pin: 'பின்',
      confirmPin: 'பின்னை உறுதிப்படுத்தவும்',
      forgotPin: 'பின் மறந்துவிட்டதா?',
      dontHaveAccount: 'கணக்கு இல்லையா?',
      alreadyHaveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
      createAccount: 'கணக்கை உருவாக்கவும்',
      verifyOtp: 'ஓடிபியை சரிபார்க்கவும்',
      otpSentTo: 'ஓடிபி அனுப்பப்பட்டது',
      enterOtp: '6 இலக்க ஓடிபியை உள்ளிடவும்',
      resendOtp: 'ஓடிபியை மீண்டும் அனுப்பவும்',
      setPin: 'பின் அமைக்கவும்',
      confirmYourPin: 'உங்கள் பின்னை உறுதிப்படுத்தவும்',
      pinMismatch: 'பின் பொருந்தவில்லை',
    },
    calculators: {
      title: 'நிதி கணிப்பான்கள்',
      sip: 'எஸ்ஐபி கணிப்பான்',
      stp: 'எஸ்டிபி கணிப்பான்',
      swp: 'எஸ்டபிள்யூபி கணிப்பான்',
      lumpsum: 'மொத்த தொகை கணிப்பான்',
      emi: 'ஈஎம்ஐ கணிப்பான்',
      retirement: 'ஓய்வூதிய கணிப்பான்',
    },
  },
  te: {
    common: {
      login: 'లాగిన్',
      signup: 'సైన్ అప్',
      continue: 'కొనసాగించు',
      back: 'వెనుకకు',
      next: 'తదుపరి',
      verify: 'ధృవీకరించు',
      resend: 'మళ్లీ పంపు',
      termsAndConditions: 'నిబంధనలు మరియు షరతులు',
      privacyPolicy: 'గోప్యతా విధానం',
    },
    auth: {
      welcomeBack: 'తిరిగి స్వాగతం',
      enterMobile: 'మీ మొబైల్ నంబర్ ఎంటర్ చేయండి',
      enterPin: 'మీ పిన్ ఎంటర్ చేయండి',
      mobileNumber: 'మొబైల్ నంబర్',
      pin: 'పిన్',
      confirmPin: 'పిన్ను నిర్ధారించండి',
      forgotPin: 'పిన్ మర్చిపోయారా?',
      dontHaveAccount: 'ఖాతా లేదా?',
      alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
      createAccount: 'ఖాతా సృష్టించండి',
      verifyOtp: 'ఓటిపిని ధృవీకరించండి',
      otpSentTo: 'ఓటిపి పంపబడింది',
      enterOtp: '6 అంకెల ఓటిపిని ఎంటర్ చేయండి',
      resendOtp: 'ఓటిపిని మళ్లీ పంపండి',
      setPin: 'పిన్ సెట్ చేయండి',
      confirmYourPin: 'మీ పిన్ను నిర్ధారించండి',
      pinMismatch: 'పిన్లు సరిపోలలేదు',
    },
    calculators: {
      title: 'ఆర్థిక కాలిక్యులేటర్లు',
      sip: 'ఎస్ఐపి కాలిక్యులేటర్',
      stp: 'ఎస్టిపి కాలిక్యులేటర్',
      swp: 'ఎస్డబ్ల్యూపి కాలిక్యులేటర్',
      lumpsum: 'లంప్సమ్ కాలిక్యులేటర్',
      emi: 'ఈఎంఐ కాలిక్యులేటర్',
      retirement: 'పదవీ విరమణ కాలిక్యులేటర్',
    },
  },
  kn: {
    common: {
      login: 'ಲಾಗಿನ್',
      signup: 'ಸೈನ್ ಅಪ್',
      continue: 'ಮುಂದುವರಿಸಿ',
      back: 'ಹಿಂದೆ',
      next: 'ಮುಂದೆ',
      verify: 'ಪರಿಶೀಲಿಸಿ',
      resend: 'ಮತ್ತೆ ಕಳುಹಿಸಿ',
      termsAndConditions: 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು',
      privacyPolicy: 'ಗೌಪ್ಯತೆ ನೀತಿ',
    },
    auth: {
      welcomeBack: 'ಮತ್ತೆ ಸ್ವಾಗತ',
      enterMobile: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
      enterPin: 'ನಿಮ್ಮ ಪಿನ್ ಅನ್ನು ನಮೂದಿಸಿ',
      mobileNumber: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
      pin: 'ಪಿನ್',
      confirmPin: 'ಪಿನ್ ಅನ್ನು ದೃಢೀಕರಿಸಿ',
      forgotPin: 'ಪಿನ್ ಮರೆತಿದ್ದೀರಾ?',
      dontHaveAccount: 'ಖಾತೆ ಇಲ್ಲವೇ?',
      alreadyHaveAccount: 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?',
      createAccount: 'ಖಾತೆ ರಚಿಸಿ',
      verifyOtp: 'ಒಟಿಪಿ ಪರಿಶೀಲಿಸಿ',
      otpSentTo: 'ಒಟಿಪಿ ಕಳುಹಿಸಲಾಗಿದೆ',
      enterOtp: '6 ಅಂಕಿಯ ಒಟಿಪಿ ನಮೂದಿಸಿ',
      resendOtp: 'ಒಟಿಪಿ ಮತ್ತೆ ಕಳುಹಿಸಿ',
      setPin: 'ಪಿನ್ ಸೆಟ್ ಮಾಡಿ',
      confirmYourPin: 'ನಿಮ್ಮ ಪಿನ್ ಅನ್ನು ದೃಢೀಕರಿಸಿ',
      pinMismatch: 'ಪಿನ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ',
    },
    calculators: {
      title: 'ಹಣಕಾಸು ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು',
      sip: 'ಎಸ್‌ಐಪಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      stp: 'ಎಸ್‌ಟಿಪಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      swp: 'ಎಸ್‌ಡಬ್ಲ್ಯೂಪಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      lumpsum: 'ಲಂಪ್‌ಸಮ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      emi: 'ಇಎಂಐ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      retirement: 'ನಿವೃತ್ತಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    },
  },
  ml: {
    common: {
      login: 'ലോഗിൻ',
      signup: 'സൈൻ അപ്പ്',
      continue: 'തുടരുക',
      back: 'പിന്നിലേക്ക്',
      next: 'അടുത്തത്',
      verify: 'പരിശോധിക്കുക',
      resend: 'വീണ്ടും അയയ്ക്കുക',
      termsAndConditions: 'നിബന്ധനകളും വ്യവസ്ഥകളും',
      privacyPolicy: 'സ്വകാര്യതാ നയം',
    },
    auth: {
      welcomeBack: 'തിരികെ സ്വാഗതം',
      enterMobile: 'നിങ്ങളുടെ മൊബൈൽ നമ്പർ നൽകുക',
      enterPin: 'നിങ്ങളുടെ പിൻ നൽകുക',
      mobileNumber: 'മൊബൈൽ നമ്പർ',
      pin: 'പിൻ',
      confirmPin: 'പിൻ സ്ഥിരീകരിക്കുക',
      forgotPin: 'പിൻ മറന്നോ?',
      dontHaveAccount: 'അക്കൗണ്ട് ഇല്ലേ?',
      alreadyHaveAccount: 'ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ?',
      createAccount: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക',
      verifyOtp: 'ഒടിപി പരിശോധിക്കുക',
      otpSentTo: 'ഒടിപി അയച്ചു',
      enterOtp: '6 അക്ക ഒടിപി നൽകുക',
      resendOtp: 'ഒടിപി വീണ്ടും അയയ്ക്കുക',
      setPin: 'പിൻ സെറ്റ് ചെയ്യുക',
      confirmYourPin: 'നിങ്ങളുടെ പിൻ സ്ഥിരീകരിക്കുക',
      pinMismatch: 'പിൻ പൊരുത്തപ്പെടുന്നില്ല',
    },
    calculators: {
      title: 'സാമ്പത്തിക കാൽക്കുലേറ്ററുകൾ',
      sip: 'എസ്ഐപി കാൽക്കുലേറ്റർ',
      stp: 'എസ്ടിപി കാൽക്കുലേറ്റർ',
      swp: 'എസ്ഡബ്ല്യുപി കാൽക്കുലേറ്റർ',
      lumpsum: 'ലംപ്സം കാൽക്കുലേറ്റർ',
      emi: 'ഇഎംഐ കാൽക്കുലേറ്റർ',
      retirement: 'വിരമിക്കൽ കാൽക്കുലേറ്റർ',
    },
  },
};