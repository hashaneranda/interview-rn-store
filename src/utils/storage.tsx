import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValue = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // saving error
    console.log('err setValue');
    return null;
  }
};

export const setValue = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    console.log('err setValue');
    return null;
  }
};
