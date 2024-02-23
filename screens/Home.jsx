import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, Text, SectionList } from 'react-native';

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
    require('../assets/Azuka.png'),

];

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImagePress = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const posts = [
        {
            image: require("../assets/waos.jpg"),
            description: "Wazaaa",
            likes: 0,
            username: "Maru",
            userimage: require("../assets/Azuka.png"),
        },
        {
            image: require("../assets/meh.jpg"),
            description: "Hombres",
            likes: 0,
            username: "Rei",
            userimage: require("../assets/Azuka.png"),
        },
        {
            image: require("../assets/Infiel.png"),
            description: "Me estoy muriendo de hambre",
            likes: 0,
            username: "Rei",
            userimage: require("../assets/Azuka.png"),
        },
        {
            image: require("../assets/Azuka.png"),
            description: "Yo",
            likes: 0,
            username: "Maru",
            userimage: require("../assets/Azuka.png"),
        },
    ];

    const [postsH, setPosts] = useState(posts);

    const likePosts = (item) => {
        const updatedPosts = postsH.map(post => {
            if (post === item) {
                return { ...post, likes: post.likes + 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/instaname.png')} style={styles.logo} />
            </View>
            <ScrollView horizontal={true} contentContainerStyle={styles.container}>
                <View style={styles.photosContainer}>
                    {images.map((image, index) => (
                        <TouchableOpacity key={index} style={styles.photoContainer} onPress={() => handleImagePress(image)}>
                            <View style={styles.photoWrapper}>
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

            <View style={styles.container2}>
                <View>
                    <SectionList
                        sections={
                            [
                                { title: "Post", data: postsH }
                            ]
                        }
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (
                            <View style={styles.cardPost}>
                                <TouchableOpacity onPress={() => goToUser(item)}>
                                    <View style={styles.userInfo}>
                                        <Image source={item.userimage} style={styles.profilePhoto} />
                                        <Text style={styles.username}>{item.username}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <Image style={styles.postImage} source={item.image} />
                                </View>
                                <View style={styles.icons}>
                                    <TouchableOpacity onPress={() => likePosts(item)}>
                                        <MaterialIcons name="favorite" size={24} />
                                    </TouchableOpacity>
                                    <Text style={
                                        { justifyContent: 'center', fontSize: 15, alignSelf: 'center' }
                                    }>{item.likes} Personas le gusta</Text>
                                </View>
                                <View style={styles.description}>
                                    <Text style={{
                                        justifyContent: 'center', fontSize: 15, alignSelf: 'center', fontWeight: 'bold'
                                    }}>{item.username} </Text>
                                    <Text style={{
                                        justifyContent: 'center', fontSize: 15, alignSelf: 'center'
                                    }}>{item.description}</Text>
                                </View>
                            </View>
                        )} />
                </View>
                <StatusBar barStyle={"light-content"}
                    backgroundColor="#089779" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
    },
    header: {
        marginTop: 50,
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
    },
    photosContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '98%',
    },
    photoContainer: {
        aspectRatio: 1,
        width: 70,
    },
    photoWrapper: {
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
    container2: {
        width: 'auto',
        height: 660,
        justifyContent: 'flex-start',
        marginTop: 30,
    },

    userInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    cardPost: {
        flex: 1,
        backgroundColor: "#ecdbce",
        width: 'auto',
        height: 'auto',
        margin: 10,
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
    username: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 3
    },
    postImage: {
        width: 'auto',
        height: 200,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 3
    },
});