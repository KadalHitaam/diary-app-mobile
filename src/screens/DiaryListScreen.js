import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: 'https://picsum.photos/seed/happy/80',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
  },
  {
    id: 4,
    title: 'Menonton Anime Kesukaan',
    date: '2026-10-04',
    preview: 'Menonton ulang anime favorit one piece...',
    moodUri: Image.resolveAssetSource(require('../../assets/one-piece.jpg')).uri,
  },
  {
    id: 5,
    title: 'Bermain game',
    date: '2026-10-07',
    preview: 'Bermain game bersama teman...',
    moodUri: Image.resolveAssetSource(require('../../assets/nintendo.jpg')).uri,
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image 
          source={require('../../assets/avatar.jpg')}
          style={styles.avatar} 
        />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard 
          key={entry.id} 
          title={entry.title} 
          date={entry.date} 
          preview={entry.preview} 
          moodUri={entry.moodUri}
          mood={entry.mood}
        />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  // Style baru untuk mengatur layout Header
  headerContainer: {
    flexDirection: 'row', // Membuat Teks dan Avatar sejajar kiri-kanan
    justifyContent: 'space-between', // Memberi jarak maksimal di antara keduanya
    alignItems: 'center', // Agar posisinya sejajar secara vertikal
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  // Style untuk Avatar
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25, // Membuatnya bulat (setengah dari width/height)
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
});
