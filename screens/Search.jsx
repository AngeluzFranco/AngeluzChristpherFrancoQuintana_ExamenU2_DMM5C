import React from 'react';
import { Dimensions } from 'react-native';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, Text, SectionList, TextInput } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";


const deviceWidth = Dimensions.get('window').width;
const images = [
    require('../assets/aska.jpg'),
    require('../assets/Azuka.png'),
    require('../assets/enma.jpg'),
    require('../assets/meh.jpg'),
    require('../assets/rei.jpg'),
    require('../assets/waos.jpg'),
    require('../assets/si.jpg'),
    require('../assets/Reicabezona.png'),
    require('../assets/Infiel.png'),

];

function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={35} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>
      <View>
      <ScrollView contentContainerStyle={styles.container2}>
                <View style={styles.photosContainer}>
                    {images.map((image) => (
                            <View style={styles.photoWrapper}>
                                <Image source={image} style={styles.photo} />
                            </View>
                    ))}
                </View>
            </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 50,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: '#e6e6e6',
      },

        container2: {
            height: '90%',
        },

      searchBar: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: deviceWidth - 20,
      },
      searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },

      photosContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 50,
    },

    photoWrapper: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
    },

    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default Search;
