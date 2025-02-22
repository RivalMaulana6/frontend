import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../utils/config';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/users/${userId}`);
          setUser(response.data);
        } catch (error) {
          console.error('Gagal memuat data user:', error);
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Memuat data user...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.name}>👤 {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Role: {user.role}</Text>
        </>
      ) : (
        <Text>User tidak ditemukan</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  name: { fontSize: 20, fontWeight: 'bold' },
});

export default ProfileScreen;
