import { useEffect } from 'react';
import { router } from 'expo-router';

export default function LiabilitiesScreen() {
  useEffect(() => {
    router.replace('/liabilities');
  }, []);

  return null;
}