import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Login from './screens/Login'
import Animes from './screens/Animes'
import Panel from './screens/Panel'

const TStack = new createStackNavigator()
function ToolsTab() {
    return (
        <TStack.Navigator>
            <TStack.Screen name='Panel' component={Panel} />
            <TStack.Screen name='Animes' component={Animes} />
        </TStack.Navigator>
    )
}

const Tab = new createBottomTabNavigator()
export default function App() {
  return (
      <SafeAreaProvider>
          <NavigationContainer>
              <Tab.Navigator
                  screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                          let iconName

                          if (route.name === 'Login') {
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
              >
                  <Tab.Screen name="Login" options={{ title: "Login" }} component={Login} />
                  <Tab.Screen name="Tools" options={{ title: "Tools" }} component={ToolsTab} />
              </Tab.Navigator>
          </NavigationContainer>
      </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({

})
