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
import OvoComponent from './source/component/OvoComponent';
// membuat komponen FiturUtama sebagai komponen yang akan ditampilkan
import FiturUtama from './source/component/FiturUtama';
// membuat komponen PromoItems sebagai komponen yang akan ditampilkan
import PromoItems from './source/component/PromoItems';

import Routes from './source/config/routes';

// `Dimensions` adalah sebuah API yang digunakan untuk mengambil dimensi dari layar perangkat
// get('window') digunakan untuk mengambil dimensi dari layar perangkat
const {width, height} = Dimensions.get('window');

class Home extends Component {
  render() {
    return <Routes />;
  }
}

export default Home;
