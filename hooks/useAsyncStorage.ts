import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStorage = () => {
  const getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      throw error;
    }
  };
  const setItem = async (key: string, value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      throw error;
    }
  };
  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      throw error;
    }
  };

  return { getItem, setItem, removeItem };
};
