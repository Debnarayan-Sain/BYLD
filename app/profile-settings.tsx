import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Edit3, Save, Camera } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router, Stack } from 'expo-router';

export default function ProfileSettingsScreen() {
  const { theme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Debnarayan Sain',
    email: 'debnarayan.sain@tayana.in',
    phone: '+91 9845098450',
    address: '6th floor Subharam Complex,MG Road',
    dateOfBirth: '15/03/2000',
    occupation: 'Software Engineer',
    annualIncome: '800000',
    investmentExperience: 'Intermediate'
  });

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const ProfileField = ({ label, value, icon: Icon, keyName, multiline = false }: {
    label: string;
    value: string;
    icon: any;
    keyName: string;
    multiline?: boolean;
  }) => {
    return (
      <View style={[styles.fieldContainer, { borderBottomColor: theme.colors.border }]}>
        <View style={styles.fieldHeader}>
          <View style={styles.fieldLeft}>
            <View style={[styles.fieldIconContainer, { backgroundColor: theme.colors.primary + '20' }]}>
              <Icon size={18} color={theme.colors.primary} />
            </View>
            <Text style={[styles.fieldLabel, { color: theme.colors.textSecondary }]}>{label}</Text>
          </View>
        </View>
        
        {isEditing ? (
          <TextInput
            style={[
              styles.fieldInput,
              {
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.border
              },
              multiline && styles.multilineInput
            ]}
            value={value}
            onChangeText={(text) => setProfileData(prev => ({ ...prev, [keyName]: text }))}
            multiline={multiline}
            numberOfLines={multiline ? 3 : 1}
            placeholderTextColor={theme.colors.textSecondary}
          />
        ) : (
          <Text style={[styles.fieldValue, { color: theme.colors.text }]}>{value}</Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <Stack.Screen 
        options={{
          title: 'Profile Settings',
          headerStyle: { backgroundColor: theme.colors.background },
          headerTintColor: theme.colors.text,
          headerTitleStyle: { fontWeight: '600' },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <ArrowLeft size={24} color={theme.colors.text} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity 
              onPress={isEditing ? handleSave : () => setIsEditing(true)}
              style={[styles.editButton, { backgroundColor: theme.colors.primary + '20' }]}
            >
              {isEditing ? (
                <Save size={20} color={theme.colors.primary} />
              ) : (
                <Edit3 size={20} color={theme.colors.primary} />
              )}
            </TouchableOpacity>
          )
        }}
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Picture Section */}
        <View style={[styles.profilePictureSection, { backgroundColor: theme.colors.surface }]}>
          <View style={[styles.profilePictureContainer, { backgroundColor: theme.colors.primary + '20' }]}>
            <User size={40} color={theme.colors.primary} />
            <TouchableOpacity 
              style={[styles.cameraButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => Alert.alert('Camera', 'Photo upload functionality would be implemented here')}
            >
              <Camera size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={[styles.profileName, { color: theme.colors.text }]}>{profileData.name}</Text>
          <Text style={[styles.profileEmail, { color: theme.colors.textSecondary }]}>{profileData.email}</Text>
        </View>

        {/* Personal Information */}
        <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Personal Information</Text>
          
          <ProfileField
            label="Full Name"
            value={profileData.name}
            icon={User}
            keyName="name"
          />
          
          <ProfileField
            label="Email Address"
            value={profileData.email}
            icon={Mail}
            keyName="email"
          />
          
          <ProfileField
            label="Phone Number"
            value={profileData.phone}
            icon={Phone}
            keyName="phone"
          />
          
          <ProfileField
            label="Address"
            value={profileData.address}
            icon={MapPin}
            keyName="address"
            multiline
          />
          
          <ProfileField
            label="Date of Birth"
            value={profileData.dateOfBirth}
            icon={Calendar}
            keyName="dateOfBirth"
          />
        </View>

        {/* Financial Information */}
        <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Financial Information</Text>
          
          <ProfileField
            label="Occupation"
            value={profileData.occupation}
            icon={User}
            keyName="occupation"
          />
          
          <ProfileField
            label="Annual Income"
            value={profileData.annualIncome}
            icon={User}
            keyName="annualIncome"
          />
          
          <ProfileField
            label="Investment Experience"
            value={profileData.investmentExperience}
            icon={User}
            keyName="investmentExperience"
          />
        </View>

        {/* Action Buttons */}
        {isEditing && (
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.cancelButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}
              onPress={handleCancel}
            >
              <Text style={[styles.cancelButtonText, { color: theme.colors.text }]}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.saveButton, { backgroundColor: theme.colors.primary }]}
              onPress={handleSave}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  editButton: {
    padding: 8,
    borderRadius: 20,
    marginRight: -8,
  },
  scrollView: {
    flex: 1,
  },
  profilePictureSection: {
    alignItems: 'center',
    paddingVertical: 32,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profilePictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
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
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  fieldContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  fieldHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fieldLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  fieldValue: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  fieldInput: {
    fontSize: 16,
    fontWeight: '400',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 4,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 24,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  bottomSpacing: {
    height: 32,
  },
});