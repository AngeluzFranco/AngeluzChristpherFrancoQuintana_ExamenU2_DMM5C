import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, Text, SectionList, TextInput } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
import { Dimensions } from 'react-native';
import { useState } from "react";


const images = [
  require('../assets/aska.jpg'),
    require('../assets/Azuka.png'),
    require('../assets/enma.jpg'),
    require('../assets/meh.jpg'),
    require('../assets/rei.jpg'),
    require('../assets/waos.jpg'),
    require('../assets/si.jpg'),
    require('../assets/Reicabezona.png'),
    require('../assets/Azuka.png'),
];

const images2 = [
  require('../assets/Azuka.png'),
  require('../assets/Azuka.png'),
  require('../assets/Azuka.png'),
  require('../assets/Azuka.png'),
];

Perfil = () => {

  const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImagePress = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

  return (
    <View style={styles.container}>
      <View style={styles.container5}>
        <Image source={require('../assets/Azuka.png')} style={styles.logo} />
        <View style={styles.container6}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 25 }}>9</Text>

          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 25 }}>Publicaciones</Text>
        </View>
        <View style={styles.container6}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 25 }}>700</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 15 }}>Seguidos</Text>
        </View>
        <View style={styles.container6}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 15 }}>200</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 15 }}>Seguidores</Text>
        </View>
      </View>
      <View style={styles.container3}>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
                <View style={styles.photosContainer2}>
                    {images2.map((image, index) => (
                        <TouchableOpacity key={index} style={styles.photoContainer} onPress={() => handleImagePress(image)}>
                            <View style={styles.photoWrapper2}>
                                <Image source={image} style={styles.photo} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                        <Image source={selectedImage} style={styles.modalImage} />
                    </View>
                </Modal>
            </ScrollView>
      </View>
      <View style={styles.container4}>
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
  container3: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  container4: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },

  container: {
    flex: 1,
    paddingTop: 50,
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#e6e6e6',
  },

  photoWrapper2: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 9999,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'blue',
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


  logo: {
    width: '20%',
    height: 80,
    alignSelf: 'flex-start',
    borderRadius: 9999,
    resizeMode: 'cover',
  },

  container5: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  container6: {
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },

photosContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '98%',
},
photoContainer: {
    aspectRatio: 1,
    width: 70,
},
photoWrapper2: {
    width: 65,
    height: 70,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'blue',
},
photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
},

modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
},
closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
},
closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
},

});

export default Perfil;
