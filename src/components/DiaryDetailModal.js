import React from "react";
import { 
  Modal, 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  Pressable, 
  ScrollView, 
  SafeAreaView 
} from "react-native";
import { COLORS, SPACE, RADIUS, TYPO } from "../styles/tokens";

export default function DiaryDetailModal({ visible, onClose, entry }) {
  // Cegah error jika entry belum memiliki data (null/undefined)
  if (!entry) return null;

  const { title, date, body, heroUri, moodUri } = entry;
  
  // Ambil gambar hero, jika tidak ada fallback ke gambar mood
  const imageSource = heroUri || moodUri;

  return (
    <Modal 
      visible={visible} 
      animationType="slide" 
      onRequestClose={onClose} // Penting agar tombol "Back" fisik di Android berfungsi
    >
      {/* SafeAreaView mencegah konten tertabrak status bar / notch layar */}
      <SafeAreaView style={styles.safeArea}>
        {/* ScrollView agar isi diary yang panjang bisa di-scroll */}
        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          showsVerticalScrollIndicator={false}
        >
          {/* Render Image hanya jika uri-nya tersedia */}
          {imageSource ? (
            <Image source={{ uri: imageSource }} style={styles.hero} />
          ) : (
            <View style={styles.hero} /> /* Placeholder abu-abu jika tidak ada gambar */
          )}
          
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.body}>{body}</Text>
            
            <Pressable 
              onPress={onClose} 
              style={({ pressed }) => [
                styles.button,
                { opacity: pressed ? 0.8 : 1 } // Efek transparan saat tombol ditekan
              ]}
              accessible
              accessibilityRole="button"
              accessibilityLabel="Tutup detail diary"
            >
              <Text style={styles.buttonText}>Tutup</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: COLORS.surface 
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: SPACE.xl, // Ruang lega di bagian bawah agar tombol tidak mepet bezel
  },
  hero: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#ddd", // Warna fallback/loading
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
  },
  content: { 
    padding: SPACE.l, 
    gap: SPACE.s 
  },
  title: { 
    fontSize: 24, // Sedikit diperbesar dari 20 agar lebih terasa seperti judul (Hero Title)
    fontWeight: "700", 
    color: COLORS.text 
  },
  date: { 
    fontSize: TYPO.caption, 
    color: COLORS.muted, 
    marginBottom: SPACE.s 
  },
  body: { 
    fontSize: TYPO.body, 
    color: COLORS.text, 
    lineHeight: 24, // Jarak antar baris diperbesar agar nyaman dibaca saat teks panjang
  },
  button: {
    marginTop: SPACE.xl,
    padding: SPACE.m,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent, // Pastikan COLORS.accent terdefinisi di file tokens.js
    alignItems: "center",
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "700" 
  },
});