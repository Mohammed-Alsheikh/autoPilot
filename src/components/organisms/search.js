import React, {useState} from 'react';
import {View, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GRAY_DARK} from '_styles/colors';
import MiniCard from '_organisms/miniCard';

export default () => {
  const [value, setValue] = useState('');
  const [miniCardData, setMiniCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${value}&type=video&key=[AIzaSyDdLcjP_gyTks7jtUk5jUMVpZsEU96WF78]`,
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        console.log(data);
        setMiniCardData(data.item);
      });
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: 600,
          height: 58,
          backgroundColor: 'white',
          elevation: 8,
        }}>
        <Icon
          name="arrow-left"
          size={32}
          style={{margin: 8, marginTop: 12}}
          color={GRAY_DARK}
        />
        <Searchbar
          style={{width: 320, height: 40, alignSelf: 'center'}}
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Search YouTube"
        />
        <Icon
          //   name="microphone"
          name="send"
          size={32}
          color={GRAY_DARK}
          style={{margin: 8, marginTop: 12}}
          onPress={() => fetchData()}
        />
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>
      {loading ? (
        <ActivityIndicator
          style={{alignSelf: 'center'}}
          size="large"
          color="red"
        />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({item}) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channeltitle}
            />
          );
        }}
        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
};
