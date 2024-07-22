import { View, Text } from 'react-native'
import React from 'react'
import CardFoto from '../../components/CardFoto';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeTab() {
    return (
        <ScrollView>
            <View>
                <Text>homeTab</Text>
                <CardFoto />
                <CardFoto />
            </View>
        </ScrollView>
    )
}