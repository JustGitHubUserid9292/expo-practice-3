import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageListItem = ({ lang, logo, experience }) => {
    return (
        <View style={styles.card}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.langText}>{lang}</Text>
                <Text style={styles.experienceText}>Опыт: {experience}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 10,
        width: 200, 
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
    },
    langText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    experienceText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default LanguageListItem;