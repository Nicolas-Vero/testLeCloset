import {Header} from '@rneui/base';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  goback?: () => void;
  nbPlayer: number;
}
const MHeader = (props: Props) => (
  <Header
    backgroundColor="#f4511e"
    leftComponent={
      <TouchableOpacity onPress={props.goback}>
        {props.goback ? <Text style={styles.heading}>back</Text> : null}
      </TouchableOpacity>
    }
    rightComponent={{
      text: `Nb:${props.nbPlayer}`,
      style: styles.heading,
    }}
    centerComponent={{text: 'Zombie', style: styles.heading}}
  />
);
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4511e',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default MHeader;
