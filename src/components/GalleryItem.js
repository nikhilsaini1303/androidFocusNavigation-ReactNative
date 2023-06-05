import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { useCallback, useState } from 'react';

const GalleryItem = ({title, images, hasTVPreferredFocus}) => {

    const [focus, setFocus] = useState(false);

    const onBlur = useCallback(() => {
        setFocus(false);
    },[]);

    const onFocus = useCallback(() => {
        setFocus(true);
    },[]);

    return (
        <TouchableHighlight
            onFocus={onFocus}
            onBlur={onBlur}
            onPress={onFocus}
            hasTVPreferredFocus={hasTVPreferredFocus}
            style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
        >
            <View>
                <Image style={styles.image} source={images} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default GalleryItem;

const styles = StyleSheet.create({
    wrapper: {
        borderColor: 'transparent',
        borderWidth: 5,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    wrapperFocused: {
        borderColor: 'rgb(232, 65, 175)',
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 10,
    },
    text: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
