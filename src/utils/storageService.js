import AsyncStorage from '@react-native-async-storage/async-storage';

export const addDownloadToHistory = async (download) => {
  try {
    const history = await AsyncStorage.getItem('downloads_history');
    const downloads = history ? JSON.parse(history) : [];
    downloads.unshift({ ...download, timestamp: new Date().toISOString() });
    await AsyncStorage.setItem('downloads_history', JSON.stringify(downloads.slice(0, 100)));
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getDownloadHistory = async () => {
  try {
    const history = await AsyncStorage.getItem('downloads_history');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    return [];
  }
};

export const addBrowserHistory = async (url, title) => {
  try {
    const history = await AsyncStorage.getItem('browser_history');
    const browserHistory = history ? JSON.parse(history) : [];
    browserHistory.unshift({ url, title, timestamp: new Date().toISOString() });
    await AsyncStorage.setItem('browser_history', JSON.stringify(browserHistory.slice(0, 50)));
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getBrowserHistory = async () => {
  try {
    const history = await AsyncStorage.getItem('browser_history');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    return [];
  }
};
