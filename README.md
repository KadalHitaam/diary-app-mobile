# 📔 Diary App

Aplikasi mobile untuk mencatat dan melihat kembali momen-momen berharga dalam bentuk buku harian digital.

## 🎯 Tentang Aplikasi

**Diary App** adalah aplikasi mobile yang memungkinkan pengguna untuk membaca dan mengelola catatan harian mereka. Setiap entry dilengkapi dengan mood indicator, judul, tanggal, dan preview teks untuk pengalaman pengguna yang intuitif.

Aplikasi ini dibangun menggunakan **React Native** dan **Expo**, memastikan kompatibilitas lintas platform (iOS, Android, dan Web).

## 🎨 Tema Aplikasi

### Desain Visual
- **Color Scheme**: Light theme dengan warna netral
- **Typography**: Hierarchy yang jelas (heading 24px, body 14px)
- **Components**: Card-based layout untuk setiap entry
- **Icons**: Mood indicator dengan gambar dinamis
- **Border & Spacing**: Minimal borders (#e5e7eb) dengan consistent spacing

### Fitur UI
- Header "Buku Harian" yang prominent
- Card individual untuk setiap entry dengan:
  - Mood emoji/icon (64x64px circular)
  - Judul entry (truncated ke 1 line)
  - Tanggal dalam format YYYY-MM-DD
  - Preview teks (max 3 lines)
  - Clean border dan rounded corners (12px)

## 🏗️ Struktur Proyek

```
diary-app/
├── App.js                          # Root component
├── src/
│   ├── screens/
│   │   └── DiaryListScreen.js     # Main screen - menampilkan list diary
│   └── components/
│       └── DiaryCard.js           # Reusable card component untuk setiap entry
├── assets/                         # Icon dan splash screen
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
└── README.md                       # Dokumentasi (file ini)
```

## 🛠️ Tech Stack

| Technology | Version | Fungsi |
|-----------|---------|--------|
| **React** | 19.2.3 | UI library |
| **React Native** | 0.86.3 | Cross-platform mobile framework |
| **Expo** | ~57.0.26 | Development & deployment platform |
| **expo-status-bar** | ~57.0.1 | Status bar management |
| **react-native-safe-area-context** | ~5.7.0 | Safe area handling |

## 📱 Fitur

✅ **Daftar Entry Harian**
- Menampilkan semua catatan harian dalam satu layar
- Scrollable content untuk entry yang banyak

✅ **Mood Indicator**
- Setiap entry memiliki mood visual yang berbeda
- Gambar dinamis dari external source

✅ **Entry Information**
- Judul yang dapat dipotong (ellipsis)
- Tanggal entry
- Preview teks catatan (max 3 baris)

✅ **Cross-Platform Support**
- Berjalan di iOS, Android, dan Web
- Safe area handling untuk notch/punch-hole devices

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js dan npm/yarn
- Expo CLI: `npm install -g expo-cli`

### Development

```bash
# Install dependencies
npm install

# Jalankan di development server
npm start

# Jalankan untuk Android
npm run android

# Jalankan untuk iOS
npm run ios

# Jalankan untuk Web
npm run web
```

## 📊 Sample Data

Aplikasi saat ini menampilkan 3 sample diary entries:

1. **Pagi yang Tenang** (2025-10-06)
   - Preview: Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit...
   
2. **Produktif di Kampus** (2025-10-05)
   - Preview: Menyelesaikan modul praktikum dan berdiskusi dengan tim...
   
3. **Senja di Taman** (2025-10-04)
   - Preview: Menikmati senja sambil membaca buku favorit...

## 🎓 Context Pendidikan

Proyek ini dibuat sebagai bagian dari:
- **Mata Kuliah**: Pemrograman Mobile Multiplatform
- **Semester**: 5
- **Tujuan**: Mempelajari React Native dan Expo untuk development aplikasi mobile

## 📝 Component Details

### App.js
Root component yang membungkus seluruh aplikasi dengan `SafeAreaProvider` dan `SafeAreaView` untuk handling safe area pada devices dengan notch.

### DiaryListScreen.js
- Menampilkan scrollable list dari diary entries
- Menggunakan mock data (dapat diganti dengan API call)
- Header dengan text "Buku Harian"
- Maps setiap entry ke DiaryCard component

### DiaryCard.js
Reusable component yang menampilkan individual diary entry dengan:
- Circular mood image (64x64px)
- Content area dengan title, date, dan preview
- Responsive layout dengan flexbox

## 🎯 Pengembangan Selanjutnya

Fitur yang dapat ditambahkan:
- [ ] Tambah entry baru (form & validation)
- [ ] Edit & delete entry
- [ ] Local storage/database (AsyncStorage atau SQLite)
- [ ] Search & filter entries
- [ ] Dark mode support
- [ ] Export ke PDF
- [ ] Backend integration & cloud sync
- [ ] Push notifications untuk daily reminders

## 📄 License

Lihat file LICENSE untuk informasi lisensi.

## 👤 Author

Dibuat untuk keperluan akademik - Semester 5 Pemrograman Mobile Multiplatform

---

**Last Updated**: October 6, 2025
