import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
// membuat imgBanner sebagai variabel yang berisi alamat gambar
// import imgBanner from './source/images/awan.jpg';

// membuat komponen OvoComponent sebagai komponen yang akan ditampilkan
import OvoComponent from '../../component/OvoComponent';
// membuat komponen FiturUtama sebagai komponen yang akan ditampilkan
import FiturUtama from '../../component/FiturUtama';
// membuat komponen PromoItems sebagai komponen yang akan ditampilkan
import PromoItems from '../../component/PromoItems';

// `Dimensions` adalah sebuah API yang digunakan untuk mengambil dimensi dari layar perangkat
// get('window') digunakan untuk mengambil dimensi dari layar perangkat
const {width, height} = Dimensions.get('window');

class Home extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* // `StatusBar` adalah komponen yang digunakan untuk mengatur status bar pada aplikasi 
         translucent digunakan untuk membuat status bar menjadi transparan
         barStyle digunakan untuk mengatur warna teks pada status bar
         */}
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <Image
          style={styles.imageBanner}
          source={require('../../images/awan.jpg')}
        />
        <Text style={styles.greetingText}>Selamat Siang</Text>
        {/* 
          membuat komponen View sebagai wrapper untuk komponen yang akan ditampilkan
          */}
        <View style={styles.wrapperOvo}>
          <View style={styles.textOvo}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#383838'}}>
              OVO Balance
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#383838'}}>
              Rp 1.000.000
            </Text>
          </View>
          <View style={styles.garisDiOvo}></View>
          {/* 
            OvoComponent adalah komponen yang akan ditampilkan pada halaman Home yang berada pada source/component/OvoComponent.tsx
            */}
          <OvoComponent />
        </View>
        <View style={{marginHorizontal: 18}}>
          <FiturUtama />
        </View>
        <View style={styles.divider}></View>
        <PromoItems />
      </ScrollView>
    );
  }
}

// membuat style untuk komponen
// `StyleSheet.create` digunakan untuk membuat style
const styles = StyleSheet.create({
  imageBanner: {
    height: 140,
    width: width,
  },
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838',
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: 'white',
    // `elevation` digunakan untuk membuat shadow pada komponen
    elevation: 4,
    borderRadius: 10,
  },
  textOvo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  garisDiOvo: {
    height: 0.8,
    backgroundColor: '#adadad',
    marginTop: 10,
  },
  divider: {
    width: width,
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15,
  },
});

export default Home;
