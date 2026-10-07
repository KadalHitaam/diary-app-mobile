import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// 1. Tambahkan prop 'mood' di sini
export default function DiaryCard({ title, date, preview, moodUri, mood }) {
  
  // 2. Tambahkan fungsi ini untuk menentukan warna border
  const getMoodColor = (moodType) => {
    switch (moodType) {
      case 'senang': return '#FFD700'; // Kuning
      case 'fokus': return '#1E90FF'; // Biru
      case 'tenang': return '#32CD32'; // Hijau
      case 'semangat': return '#FF4500'; // Oranye
      case 'santai': return '#9370DB'; // Ungu
      default: return '#e5e7eb'; // Warna default sesuai StyleSheet Anda
    }
  };

  return (
    // 3. Ubah style View ini untuk menimpa borderColor bawaan
    <View style={[styles.card, { borderColor: getMoodColor(mood) }]}>
      <Image source={{ uri: moodUri }} style={styles.mood} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text ellipsizeMode="tail" numberOfLines={3} style={styles.preview}>
          {preview}
        </Text>
      </View>
    </View>
  );
}

// Struktur StyleSheet sama sekali tidak diubah
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1, // Catatan: Anda bisa ubah ini jadi 2 jika warna border kurang terlihat
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});