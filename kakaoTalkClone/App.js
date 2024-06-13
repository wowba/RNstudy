import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/Header';

export default function App() {
  return (
    // React Context API 처럼 아래 요소를 SafeAreaProvider로 감싸야 한다.
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Header />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // SafeAreaView 아래 요소가 flex: 1을 가진다면 본인도 flex: 1을 가져야 한다.
  // flex 사용법 말고 원리도 공부 필수로 하자
  safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
