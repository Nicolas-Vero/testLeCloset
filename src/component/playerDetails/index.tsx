import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MHeader from '../../core/component/header';
import {RootState} from '../../core/redux/store';
import {addToMyTeam, RemoveOfMyTeam} from '../../modules/gameData/action';
import {useRootNavigation} from '../navigation/RootNavigator';

const Separator = () => <View style={{marginBottom: 50}} />;
type Param = {
  player: any;
};
const PlayerDetails = () => {
  const dispatch = useDispatch();
  const {goBack} = useRootNavigation();
  const {params} = useRoute<RouteProp<Param, 'player'>>();
  const {teamLength} = useSelector((state: RootState) => state.home);
  const [inTeam, setInteam] = useState(params?.InMyTeam);
  return (
    <View>
      <MHeader
        nbPlayer={teamLength}
        goback={() => {
          goBack();
        }}
      />

      <ImageBackground
        style={styles.imageBackgroundNb}
        source={require('../../core/assets/zombiegames.jpg')}
        resizeMode="cover"
      />
      <View style={styles.containerEA}>
        <Image
          style={styles.imageA3}
          resizeMode="cover"
          source={{uri: params?.avatar}}
        />
        <Text style={styles.textPr}>Prénom : {params?.first_name}</Text>
        <Text style={styles.textPr}>Nom : {params?.last_name}</Text>
        <Text style={styles.textPr}>Email : {params?.email}</Text>
        <Separator />
        {inTeam ? (
          <TouchableOpacity
            style={styles.buttonRetirer}
            onPress={() => {
              dispatch(RemoveOfMyTeam({players: params}));
              setInteam(false);
              goBack();
            }}>
            <Text style={styles.textPr}>Retirer de mon equipe</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttonAjouter}
            onPress={() => {
              if (teamLength < 3) {
                dispatch(addToMyTeam({players: params}));
                setInteam(true);
                goBack();
              } else {
                Alert.alert('Attention', 'Votre équipe est déja complète', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              }
            }}>
            <Text style={styles.textPr}> Ajouter a mon equipe</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {fontWeight: '800', fontSize: 18},
  image: {width: 200, height: 100, marginBottom: 20},
  imageBackgroundNb: {
    width: '100%',
    height: 300,
  },
  buttonRetirer: {
    width: '50%',
    height: '15%',
    backgroundColor: 'red',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  buttonAjouter: {
    width: '50%',
    height: '15%',
    backgroundColor: 'green',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  imageA3: {
    height: 120,
    width: 120,
  },
  containerEA: {
    alignItems: 'center',
    marginTop: -65,
  },
  textPr: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 16,
    fontWeight: '300',
    fontSize: 18,
  },
});
export default PlayerDetails;
