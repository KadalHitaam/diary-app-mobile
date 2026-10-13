import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { COLORS, SPACE, RADIUS, TYPO } from "../styles/tokens";

export default function DiaryCard({
  title,
  date,
  preview,
  moodUri,
  mood,
  onPress,
  variant = "list",
}) {
  // 2. Tambahkan fungsi ini untuk menentukan warna border
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
        return "#e5e7eb"; // Warna default sesuai StyleSheet Anda
    }
  };

  // 3. Ubah style View ini untuk menimpa borderColor bawaan
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#e5e7eb" }}
      style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
      accessible
      accessibilityLabel={`Entri ${title} tanggal ${date}`}
    >
      <View style={[styles.card, variant === "grid" && styles.cardGrid]}>
        <Image source={{ uri: moodUri }} style={styles.mood} />
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
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: SPACE.m,
    padding: SPACE.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
  },
  cardGrid: {},
  mood: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: "#eef2ff",
  },
  content: { flex: 1 },
  title: { fontSize: TYPO.title, fontWeight: "700", color: COLORS.text },
  date: { fontSize: TYPO.caption, color: COLORS.muted, marginBottom: 6 },
  preview: { fontSize: TYPO.body, color: COLORS.text },
});
