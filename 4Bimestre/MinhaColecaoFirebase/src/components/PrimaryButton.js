import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function PrimaryButton({ title, onPress, loading = false, secondary = false }) {
  return (
    <TouchableOpacity
      style={[styles.button, secondary && styles.secondary]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.85}
    >
      {loading ? <ActivityIndicator color={secondary ? '#3157D5' : '#FFFFFF'} /> :
        <Text style={[styles.text, secondary && styles.secondaryText]}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#3157D5', padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  secondary: { backgroundColor: '#E8EDFF', borderWidth: 1, borderColor: '#C9D4FF' },
  text: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  secondaryText: { color: '#3157D5' }
});
