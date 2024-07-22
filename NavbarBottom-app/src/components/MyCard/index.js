import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';
// import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function MyCard() {
    return (
        <ScrollView>
            <View>
                <Card style={styles.card}>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, borderRadius: 12 }}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component
                        structure than actual design.
                    </Text>
                    <Button
                        icon={
                            <Icon
                                name="code"
                                color="#ffffff"
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                        }}
                        title="VIEW NOW"
                    />
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
    },
});
