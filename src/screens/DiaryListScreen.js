import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  SafeAreaView
} from "react-native";
import DiaryCard from "../components/DiaryCard";
import DiaryDetailModal from "../components/DiaryDetailModal";
import { COLORS, SPACE, TYPO, BREAKPOINTS } from "../styles/tokens";

const DATA = [
  {
    id: '1',
    title: "Pagi yang Tenang",
    date: "2025-10-06",
    preview: "Bangun lebih pagi…",
    body: "Catatan lengkap: Bangun lebih pagi memberikan waktu untuk merenung dan merencanakan hari dengan baik. Suasana masih sepi dan udara sangat segar.",
    moodUri: "https://picsum.photos/seed/happy/200",
    heroUri: "https://picsum.photos/seed/happyhero/800/450",
    mood: "senang", 
  },
  {
    id: '2',
    title: "Produktif di Kampus",
    date: "2025-10-05",
    preview: "Menyelesaikan modul…",
    body: "Kemajuan proyek: Akhirnya selesai mengerjakan bagian backend menggunakan Laravel dan membuat API untuk React Native. Sangat melelahkan tapi puas.",
    moodUri: "https://picsum.photos/seed/focus/200",
    heroUri: "https://picsum.photos/seed/focushero/800/450",
    mood: "fokus", 
  },
  {
    id: '3',
    title: "Senja di Taman",
    date: "2025-10-04",
    preview: "Membaca buku…",
    body: "Refleksi singkat sambil membaca buku filosofi. Menyadari bahwa terkadang kita perlu berhenti sejenak dari kesibukan rutinitas.",
    moodUri: "https://picsum.photos/seed/calm/200",
    heroUri: "https://picsum.photos/seed/calmhero/800/450",
    mood: "tenang", 
  },
  { 
    id: '4',
    title: "Belajar React Native", 
    date: "2025-11-06",
    preview: "Belajar…",
    body: "Hari ini belajar tentang FlatList responsif dan token desain. Menyesuaikan layout dari single column ke grid column saat layar dirotasi.", 
    moodUri: "https://picsum.photos/seed/calm/200",
    heroUri: "https://picsum.photos/seed/calmhero/800/450",
    mood: "fokus", 
  },
  { 
    id: '5', 
    title: "Santai di Akhir Pekan", 
    date: "2026-10-14", 
    preview: "Menonton film...", 
    body: "Menonton film sambil istirahat memulihkan energi setelah seminggu penuh dengan tugas-tugas kuliah.", 
    moodUri: "https://picsum.photos/seed/relax/200", 
    heroUri: "https://picsum.photos/seed/relaxhero/800/450",
    mood: "santai", 
  }
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  // Menggunakan BREAKPOINTS dari token, atau fallback nilai manual misal 600px jika token kosong
  const tabletBreakpoint = BREAKPOINTS?.tablet || 600; 
  const twoCols = width >= tabletBreakpoint;
  
  const [selected, setSelected] = useState(null);
  
  // Mengubah key list agar re-render saat ganti orientasi/jumlah kolom
  const keyForCols = useMemo(() => (twoCols ? "grid2" : "list1"), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        mood={item.mood} // <--- PERBAIKAN: Menambahkan props mood agar warna border berfungsi
        variant={twoCols ? "grid" : "list"}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    // SafeAreaView ditambahkan agar Header tidak tertutup notch layar atas
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>
      
      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
          paddingTop: SPACE.m,
          paddingBottom: SPACE.xl * 2, // Tambahan extra padding agar item terakhir tidak tertutup layar bawah
        }}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada entri.</Text>}
        showsVerticalScrollIndicator={false}
      />
      
      <DiaryDetailModal
        visible={!!selected} // Ubah object/null menjadi nilai Boolean (true/false)
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.surface || "#ffffff" 
  },
  header: {
    fontSize: TYPO?.h1 || 28,
    fontWeight: "700",
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    color: COLORS.text,
  },
  itemWrap: { 
    flex: 1 
  },
  itemWrap2: { 
    flex: 1 / 2 
  },
  empty: { 
    textAlign: "center", 
    color: COLORS.muted, 
    marginTop: 40 
  },
});