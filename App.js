import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Login from './screens/Login'
import Animes from './screens/Animes'
import Panel from './screens/Panel'
import Home from './screens/Home'
import Kotoba from './screens/Kotoba'
import KotobaList from './screens/KotobaList'
import { check } from './utils/token'

function CheckAuth({navigation}) {
    return {
        'focus': e => {
            check().then((res) => {
                let isAuth = res? true: false
                if(!isAuth) {
                    navigation.navigate('Login')
                }
            })
        }
    }
}

const Stack = new createStackNavigator()
const Tab = new createBottomTabNavigator()
function ToolsTab() {
    return (
        <Stack.Navigator initialRouteName='Panel'>
            <Stack.Screen listeners={CheckAuth} name='Panel' component={Panel} />
            <Stack.Screen listeners={CheckAuth} name='Animes' component={Animes} />
            <Stack.Screen listeners={CheckAuth} name='Kotoba' component={Kotoba} />
            <Stack.Screen listeners={CheckAuth} name='KotobaList' component={KotobaList} />
        </Stack.Navigator>
    )
}

function HomeTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'Tools') {
                        iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline'
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                keyboardHidesTabBar: true
            }}
            initialRouteName='Home'
        >
            <Tab.Screen listeners={CheckAuth} backBehavior='none' name='Home' component={Home} />
            <Tab.Screen listeners={CheckAuth} backBehavior='initialRoute' name='Tools' component={ToolsTab} />
        </Tab.Navigator>
    )
}

export default function App() {
    const [ isAuth, setAuth ] = useState(false)

    useEffect(() => {
        check().then((res) => {
            res? setAuth(true): setAuth(false)
        })
    })

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator mode='modal' headerMode='none' initialRouteName={ isAuth? 'HomeTab': 'Login' }>
                    <Stack.Screen name='Login' backBehavior='none' component={Login} />
                    <Stack.Screen name='HomeTab' component={HomeTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({

})
