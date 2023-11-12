import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
// import Home from '../../page/Home';
import {Home, Activity, Inbox, Payment, Account} from '../../page';

// NavigationContainer adalah komponen yang digunakan untuk membuat navigasi pada aplikasi react native
import {NavigationContainer} from '@react-navigation/native';
// material-bottom-tabs adalah library yang digunakan untuk membuat navigasi berbasis tab pada aplikasi react native
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const MaterialBottom = createMaterialBottomTabNavigator();

export default class index extends Component {
  render() {
    return (
      // initialRouteName adalah properti yang digunakan untuk menentukan halaman pertama yang akan ditampilkan
      // shifting adalah properti yang digunakan untuk menentukan apakah tab akan berubah warna ketika dipilih atau tidak
      <NavigationContainer>
        <MaterialBottom.Navigator
          shifting={false}
          initialRouteName="Home"
          activeColor="#09AB54"
          barStyle={{backgroundColor: 'white'}}>
          <MaterialBottom.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Beranda',
              tabBarIcon: ({color}) => (
                <View>
                  {color == '#09AB54' ? (
                    <Image
                      source={require('../../icon/nav-home-active.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  ) : (
                    <Image
                      source={require('../../icon/nav-home.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  )}
                </View>
              ),
            }}
          />
          <MaterialBottom.Screen
            name="Activity"
            component={Activity}
            options={{
              tabBarIcon: ({color}) => (
                <View>
                  {color == '#09AB54' ? (
                    <Image
                      source={require('../../icon/nav-activity-active.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  ) : (
                    <Image
                      source={require('../../icon/nav-activity.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  )}
                </View>
              ),
            }}
          />
          <MaterialBottom.Screen
            name="Inbox"
            component={Inbox}
            options={{
              tabBarIcon: ({color}) => (
                <View>
                  {color == '#09AB54' ? (
                    <Image
                      source={require('../../icon/nav-inbox-active.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  ) : (
                    <Image
                      source={require('../../icon/nav-inbox.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  )}
                </View>
              ),
            }}
          />
          <MaterialBottom.Screen
            name="Payment"
            component={Payment}
            options={{
              tabBarIcon: ({color}) => (
                <View>
                  {color == '#09AB54' ? (
                    <Image
                      source={require('../../icon/nav-payment-active.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  ) : (
                    <Image
                      source={require('../../icon/nav-payment.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  )}
                </View>
              ),
            }}
          />
          <MaterialBottom.Screen
            name="Account"
            component={Account}
            options={{
              tabBarIcon: ({color}) => (
                <View>
                  {color == '#09AB54' ? (
                    <Image
                      source={require('../../icon/nav-account-active.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  ) : (
                    <Image
                      source={require('../../icon/nav-account.jpg')}
                      style={{height: 30, width: 30}}
                    />
                  )}
                </View>
              ),
            }}
          />
        </MaterialBottom.Navigator>
      </NavigationContainer>
      // <View>
      //   <Text>Ini adalah halaman index</Text>
      // </View>
    );
  }
}
