import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { myProfile } from './src/data';
import Header from './src/Header';
import MyProfile from './src/MyProfile';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import { friendProfiles } from "./src/data"
import FriendList from './src/FriendList';
import TabBar from './src/TabBar';

export default function App() {

  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => setIsOpened((prev) => !prev);

  return (
    // React Context API 처럼 아래 요소를 SafeAreaProvider로 감싸야 한다.
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView} edges={["top"]}>
        <View style={styles.container}>
          <View style={{
            flex: 1, paddingHorizontal: 15,
          }}>
            <Header />
            <Margin height={10} />
            <MyProfile {...myProfile} />
            <Margin height={15} />
            <Division />
            <Margin height={12} />
            <FriendSection
              friendsLen={friendProfiles.length}
              onPress={onPressArrow}
              isOpened={isOpened}
            />
            <FriendList data={friendProfiles} isOpened={isOpened} />
          </View>
          <TabBar />
          <Margin height={10} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // SafeAreaView 아래 요소가 flex: 1을 가진다면 본인도 flex: 1을 가져야 한다.
  // flex 사용법 말고 원리도 공부 필수로 하자
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
