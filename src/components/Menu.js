import React, {Component} from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

class Menu extends Component {
    _renderItemsMenu(){
        const genres = ["Home","Drama","Action","Fantasy","Horror","Romance","Crime","Thriller","Mystery","Science-Fiction","Comedy","Family","Music","Adventure","Espionage","Supernatural"]
        const {itemSelectedValue} = this.props
        return genres.map((element, key) => (
            <TouchableHighlight 
                key={key}
                style={element == itemSelectedValue ? [styles.items, styles.itemSelected]: styles.noSelectedItems}
                onPress={() => this.props.itemSelected(element)}    
            >
                <Text style={styles.text}>{element}</Text>
            </TouchableHighlight>
        ))
    }
    render(){
        const {navigate} = this.props.navigation
        return (
            <View style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarImage}>
                        <Image 
                            style = {styles.avatar}
                            source={require('../images/user.png')}
                        />
                        <Text style = {styles.text}>mario</Text>
                    </View>
                    <Icon 
                        name="exchange"
                        color = "white"
                        size = {25}
                    />
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <Icon 
                                style={styles.iconWithText}
                                name="download"
                                color="white"
                                size={28}
                            />
                            <Text style={styles.text}>My Downloads</Text>
                        </View>
                        <Icon 
                            style={styles.rightIcon}
                            name="angle-right"
                            color="white"
                            size={25}
                        />
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <IonIcons 
                                style={styles.iconWithText}
                                name="md-checkmark"
                                color="white"
                                size={28}
                            />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <Icon 
                            style={styles.rightIcon}
                            name="angle-right"
                            color="white"
                            size={25}
                        />
                    </View>
                    {this._renderItemsMenu()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor:"#191919"
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 59,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollContainer: {
        width: width / 2 + 59
    },
    rightIcon: {
        paddingRight: 20
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    items: {
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected:{
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    }
})

export default Menu