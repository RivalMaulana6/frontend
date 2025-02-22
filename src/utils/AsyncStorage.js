import AsyncStorage from '@react-native-async-storage/async-storage';

// Simpan data userId
export const saveUserId = async (userId) => {
  try {
    await AsyncStorage.setItem('userId', userId);
  } catch (error) {
    console.error('Gagal menyimpan userId:', error);
  }
};

// Ambil data userId
export const getUserId = async () => {
  try {
    return await AsyncStorage.getItem('userId');
  } catch (error) {
    console.error('Gagal mengambil userId:', error);
    return null;
  }
};

// Hapus userId saat logout
export const removeUserId = async () => {
  try {
    await AsyncStorage.removeItem('userId');
  } catch (error) {
    console.error('Gagal menghapus userId:', error);
  }
};
