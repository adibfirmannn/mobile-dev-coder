import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import home from '../stacks/home';
import HomeTab from '../../pages/home';
import SearchTab from '../../pages/search';
import AccountTab from '../../pages/account';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Bot = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigation() {
    function MyStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={MyTabs} />
            </Stack.Navigator>
        );
    }

    function MyTabs() {
        return (
            <Bot.Navigator
                // initialRouteName="Home"
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ backgroundColor: '#694fad' }}
            >
                <Tab.Screen name="HomeTabs" component={HomeTab} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} unmountOnBlur={true} />
                <Tab.Screen name="SearchTabs" component={SearchTab} options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" size={24} color={color} />
                    ),
                }} />
                <Tab.Screen name="AccountTabs" component={AccountTab} options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="account-circle" size={24} color={color} />
                    ),
                }} />
            </Bot.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <MyStack>

            </MyStack>
        </NavigationContainer>
    )
}