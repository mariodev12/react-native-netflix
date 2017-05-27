import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share,
    Animated
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './TabsEpisodes'
import TextGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'

import {replaceHttps, getYear, removeHtmlTags} from '../lib' 

const {width, height} = Dimensions.get('window')

class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            measuresTitle: 0,
            measuresSeason: 0,
            scrollY: new Animated.Value(0),
            currentSeason: 1
        }
    }
    static navigationOptions = {
        headerVisible: false
    }
    componentWillMount() {
        Orientation.lockToPortrait()
    }

    onShare(){
        Share.share({
            title: 'Designated Survivor',
            url: 'www.youtube.com',
            message: 'Awesome Tv Show'
        }, {
            //android
            dialogTitle: 'Share this awesome content',
            //ios
            excludeActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }

    getSeason(season){
        this.setState({
            currentSeason: season
        })
    }

    renderThumbnail(){
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        const localImagePath = require('../images/default-image.png');
        return episodes[0].image ? {uri : replaceHttps(episodes[0].image.original) } : localImagePath
    }

    getLastSeason(){
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        return episodes[episodes.length-1].season
    }

    getNumOfEpisodes(){
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        return episodes.length
    }

    getCast(){
        const {params} = this.props.navigation.state
        const {cast} = params.item.details
        const personCast = []
        for(let i = 0; i < 5; i++){
            personCast.push(cast[i].person.name)
        }
        return personCast.join(", ");
    }

    resumeDescription(text){
        const newText = text.split(".")
        return removeHtmlTags(newText[0]) + ". " + removeHtmlTags(newText[1])
    }

    render(){
        console.log(this.props.navigation)
        const headerNameToggle = this.state.scrollY.interpolate({
            inputRange : [this.state.measuresTitle, this.state.measuresTitle + 1],
            outputRange: [0, 1]
        })
        const headerSeasonHide = this.state.scrollY.interpolate({
            inputRange: [
                this.state.measuresSeason - 1, 
                this.state.measuresSeason,
                this.state.measuresSeason + 1
            ],
            outputRange: [-width, 0, 0]
        })
        const headerSeasonToggle = this.state.scrollY.interpolate({
            inputRange: [this.state.measuresSeason, this.state.measuresSeason +1],
            outputRange: [0, 1]
        })
        const {goBack} = this.props.navigation
        const {params} = this.props.navigation.state
        const {episodes} = params.item.details
        const {navigate} = this.props.navigation
        const {name} = params.item
        const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = params.item.details
        return (
            <View style={{flex: 1}}>
                <TouchableHighlight 
                    style={styles.closeButton}
                    onPress={() => goBack()}
                >
                    <Icon 
                        name="close"
                        color="white"
                        size={18}
                    />
                </TouchableHighlight>
                <Animated.View style={[styles.header, {opacity: headerNameToggle}]}>
                    <Text style={styles.headerText}>{name}</Text>
                </Animated.View>
                <Animated.View style={[styles.header, 
                    {opacity: headerSeasonToggle, transform: [{translateY: 0}, {translateX: headerSeasonHide}]}]}
                >
                {this.getLastSeason() == 1? <TouchableHighlight>
                    <Text style={styles.headerText}>Season {this.state.currentSeason}</Text>
                </TouchableHighlight> : <TouchableHighlight onPress={() => navigate('EpisodesPicker', {
                        getSeason: this.getSeason.bind(this),
                        seasons: this.getLastSeason(),
                        currentSeason: this.state.currentSeason
                    })}>
                    <View style={styles.headerWithIcon}>
                        <Text style={styles.headerText}>Season {this.state.currentSeason}</Text>
                        <Icon 
                            style={styles.iconDown}
                            name="chevron-down"
                            color="white"
                            size={15}
                        />
                    </View>
                </TouchableHighlight>}
                </Animated.View>
                <Animated.ScrollView 
                scrollEventThrottle={1}
                onScroll={
                    Animated.event(
                        [{nativeEvent: {contentOffset: {y:this.state.scrollY}}}],
                        {useNativeDriver: true}
                    )
                } style={styles.container}>
                    <Image 
                        style={styles.thumbnail}
                        source={this.renderThumbnail()}
                    >
                        <View style={styles.buttonPlay}>
                            <TouchableWithoutFeedback
                                onPress={() => navigate('Video', {name: name})}
                            >
                                <View>
                                    <Icon 
                                        style={styles.iconPlay}
                                        name="play-circle"
                                        size={90}
                                        color="white"
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.nameContainer}
                            onLayout={({nativeEvent}) => {
                                this.setState({
                                    measuresTitle: nativeEvent.layout.y
                                })
                            }}
                        >
                            <TextGradient colors={['transparent', '#181818', '#181818']}>
                                <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                            </TextGradient>
                        </View>
                    </Image>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.subtitle}>
                            <Text style={[styles.text, styles.subTitleText]}>{getYear(year)}</Text>
                            <Text style={[styles.text, styles.subTitleText]}>{this.getNumOfEpisodes()}</Text>
                            <Text style={[styles.text, styles.subTitleText]}>{this.getLastSeason()} Season</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={[styles.text, styles.light]}>{this.resumeDescription(description)}.</Text>
                        </View>
                        <Text style={[styles.text]}>Cast: {this.getCast()}. </Text>
                        <View style={styles.shareListIcons}>
                            <View style={styles.myListIcon}>
                                <IonIcons
                                    style={styles.listIcon} 
                                    name="md-checkmark"
                                    color="grey"
                                    size={25}
                                />
                                <Text style={styles.text}>My List</Text>
                            </View>
                            <TouchableHighlight onPress={this.onShare}>
                                <View style={styles.myShareIcon}>
                                    <Icon 
                                        style={styles.shareIcon}
                                        name="share-alt"
                                        color="grey"
                                        size={25}
                                    />
                                    <Text style={styles.text}>Share</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View onLayout={({nativeEvent}) => {
                                this.setState({
                                    measuresSeason: nativeEvent.layout.y + 10
                                })
                            }}>
                        <TabsEpisodes
                            seasons={season}
                            getSeason={this.getSeason.bind(this)}
                            navigation={this.props.navigation} 
                            data={episodes} 
                            currentSeason={this.state.currentSeason}
                        />
                    </View>
                </Animated.ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 2
    },
    headerText: {
        color: 'white',
        fontSize: 20
    },
    headerWithIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconDown: {
        marginLeft: 5
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        width: width,
        height: 300
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent'
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons: {
       flexDirection: 'row',
       marginVertical: 30 
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginVertical: 10
    },
    light: {
        fontWeight: '200'
    }
})

export default Details