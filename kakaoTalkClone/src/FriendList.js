import { ScrollView, StyleSheet } from 'react-native'
import MyProfile from './MyProfile'
import Margin from './Margin'

const FriendList = ({ data, isOpened }) => {

  if (isOpened === false) return null
  return (
    <ScrollView>
      {data.map((data, index) =>
        <>
          <MyProfile key={index} {...data} />
          <Margin height={13} />
        </>
      )}
    </ScrollView>
  )
}

export default FriendList
