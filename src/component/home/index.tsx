import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../core/redux/store';
import {fetchStart} from '../../modules/gameData/action';
import {Avatar, Badge, ListItem} from '@rneui/themed';
import {useRootNavigation} from '../navigation/RootNavigator';
import {FlashList} from '@shopify/flash-list';
import MHeader from '../../core/component/header';

const Home = () => {
  const dispatch = useDispatch();
  const {navigate} = useRootNavigation();

  useEffect(() => {
    dispatch(fetchStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {players, teamLength} = useSelector((state: RootState) => state.home);
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      onPress={() => {
        navigate('PlayerDetails', item);
      }}>
      <ListItem bottomDivider>
        <Avatar size={50} source={{uri: item.avatar}}>
          {item.InMyTeam ? (
            <Badge status="error" containerStyle={styles.badge} />
          ) : (
            <Badge status="success" containerStyle={styles.badge} />
          )}
        </Avatar>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>
            {item.first_name}
          </ListItem.Title>
          <ListItem.Subtitle>{item.last_name}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <MHeader nbPlayer={teamLength} />
      <FlashList
        ListHeaderComponent={
          <Text style={styles.title}>Liste des co-équipier : </Text>
        }
        ListHeaderComponentStyle={{marginBottom: 10}}
        data={players}
        renderItem={renderItem}
        estimatedItemSize={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {color: 'black', fontWeight: 'bold'},
  title: {fontWeight: '800', fontSize: 18},
  image: {width: 200, height: 100, marginBottom: 20},
  badge: {position: 'absolute', top: 5, left: 40},
});
export default Home;
