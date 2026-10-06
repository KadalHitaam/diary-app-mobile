# Instruksi Implementasi Proyek React Native: Diary App

Kamu adalah AI Developer Agent. Tugasmu adalah mengimplementasikan kode aplikasi React Native (Expo) ke dalam direktori kerja saat ini. 

## ⚠️ BATASAN DAN KETENTUAN SANGAT PENTING (HARUS DIPATUHI)
1. **DILARANG MENGUBAH KODE**: Salin dan tuliskan kode di bawah ini persis seperti apa adanya tanpa melakukan modifikasi, optimasi, atau penambahan fitur apa pun.
2. **DILARANG INISIALISASI GIT**: Jangan menjalankan perintah `git init`, `git add`, `git commit`, atau perintah Git apa pun secara otomatis.
3. **STRUKTUR FOLDER**: Buat struktur folder secara presisi jika belum ada.

## STRUKTUR DIREKTORI YANG HARUS DIBUAT
Pastikan folder berikut ada di dalam *root* proyek:
- `src/`
- `src/components/`
- `src/screens/`
- `src/styles/`

---

## 1. Implementasi File: `src/components/DiaryCard.js`
Buat file `src/components/DiaryCard.js` dan isi dengan kode berikut:

```javascript
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({ title, date, preview, moodUri }) {
  return (
    <View style="{styles.card}">
      <Image moodUri source="{{" style="{styles.mood}" uri: }}/>
      <View style="{styles.content}">
        <Text numberOfLines="{1}" style="{styles.title}">
          {title}
        </Text>
        <Text style="{styles.date}">{date}</Text>
        <Text ellipsizeMode="tail" numberOfLines="{3}" style="{styles.preview}">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1,
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

2. Implementasi File: src/screens/DiaryListScreen.js
Buat file src/screens/DiaryListScreen.js dan isi dengan kode hasil refactoring berikut:

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: '[https://picsum.photos/seed/happy/80](https://picsum.photos/seed/happy/80)',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: '[https://picsum.photos/seed/focus/80](https://picsum.photos/seed/focus/80)',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: '[https://picsum.photos/seed/calm/80](https://picsum.photos/seed/calm/80)',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView contentContainerStyle="{styles.content}" style="{styles.container}">
      <Text style="{styles.header}">Buku Harian</Text>
      {diaryEntries.map((entry) => (
        <DiaryCard date="{entry.date}" key="{entry.id}" moodUri="{entry.moodUri}" preview="{entry.preview}" title="{entry.title}"/>
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
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
});

3. Implementasi File: App.js
Ganti seluruh isi file App.js yang ada di root direktori dengan kode berikut:

import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DiaryListScreen from './src/screens/DiaryListScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView 'left', 'right']} 1 edges="{['top'," flex: style="{{" }}>
        <DiaryListScreen/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

Langkah Penutup AI   
Setelah membuat direktori dan file di atas dengan isi kode yang persis sama, berikan konfirmasi bahwa implementasi telah selesai dilakukan sesuai instruksi, lalu berhenti. Sekali lagi, jangan jalankan perintah git init.