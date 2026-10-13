import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { COLORS, SPACE, RADIUS, TYPO } from "../styles/tokens";

export default function DiaryCard({
  title,
  date,
  preview,
  moodUri,
  mood, // Properti mood dipanggil dari DATA
  onPress,
  variant = "list",
}) {
  // Fungsi penentu warna berdasarkan mood
  const getMoodColor = (moodType) => {
    switch (moodType) {
      case "senang":
        return "#FFD700"; // Kuning
      case "fokus":
        return "#1E90FF"; // Biru
      case "tenang":
        return "#32CD32"; // Hijau
      case "semangat":
        return "#FF4500"; // Oranye
      case "santai":
        return "#9370DB"; // Ungu
      default:
        return COLORS.border; // Warna default dari token Anda
    }
  };

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#e5e7eb" }}
      style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
      accessible
      accessibilityLabel={`Entri ${title} tanggal ${date}. Suasana hati: ${mood}`}
    >
      <View 
        style={[
          styles.card, 
          variant === "grid" && styles.cardGrid,
          { borderColor: getMoodColor(mood) } // <--- Penambahan warna border dinamis di sini
        ]}
      >
        {/* Render Image hanya jika moodUri tersedia */}
        {moodUri ? (
          <Image source={{ uri: moodUri }} style={styles.moodImage} />
        ) : null}
        
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
            {preview}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: SPACE.m,
    padding: SPACE.m,
    borderWidth: 2, // Diubah menjadi 2 agar warna border lebih terlihat jelas
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
    marginBottom: SPACE.m, // Tambahkan jarak antar card
  },
  cardGrid: {
    // Tambahkan style grid jika perlu
  },
  moodImage: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: "#eef2ff",
  },
  content: { 
    flex: 1 
  },
  title: { 
    fontSize: TYPO.title, 
    fontWeight: "700", 
    color: COLORS.text 
  },
  date: { 
    fontSize: TYPO.caption, 
    color: COLORS.muted, 
    marginBottom: 6 
  },
  preview: { 
    fontSize: TYPO.body, 
    color: COLORS.text 
  },
});