import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import shuffle from 'lodash.shuffle';
import { DEFAULT_ITEMS } from '../utiles/DefaultItems';
import GalleryItem from './GalleryItem';

const Gallery = ({ rowNumber }) => {

    const items = shuffle(DEFAULT_ITEMS);

    return (
        <ScrollView horizontal style={styles.row}>
            {
                items.map((item, i) => (
                    <GalleryItem 
                        key={i}
                        title={item.name}
                        images={item.image}
                        hasTVPreferredFocus={true}
                    />
                ))
            }
        </ScrollView>
    );
};

export default Gallery;

const styles = StyleSheet.create({
    row: {
        marginBottom: 50,
    },
});
