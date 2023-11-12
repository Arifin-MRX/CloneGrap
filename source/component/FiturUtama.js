import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import FiturUtamaSub from './FiturUtamaSub';

const styles = StyleSheet.create({
  wrapperFiturUtama: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    flexWrap: 'wrap',
    width: '100%',
  },
  // ImageFeatureUtama: {
  //   height: 55,
  //   width: 55,
  //   marginTop: 15,
  // },
  // TextFeatureUtama: {
  //   textAlign: 'center',
  //   marginTop: 5,
  // },
});
const FiturUtama = () => {
  return (
    <View style={styles.wrapperFiturUtama}>
      {/* cara 2 */}
      {/* menggunakan parameter untuk menerima img dan title pada fitur utama sub */}
      <FiturUtamaSub image={require('../icon/food.jpg')} title='Food'/>
      <FiturUtamaSub image={require('../icon/bike.jpg')} title='Bike'/>
      <FiturUtamaSub image={require('../icon/car.jpg')} title='Car'/>
      <FiturUtamaSub image={require('../icon/send.jpg')} title='Delivery'/>
      <FiturUtamaSub image={require('../icon/subscribe.jpg')} title='Subscribe'/>
      <FiturUtamaSub image={require('../icon/doctor.jpg')} title='Dorctor'/>
      <FiturUtamaSub image={require('../icon/pulsa.jpg')} title='Pulsa/Token'/>
      <FiturUtamaSub image={require('../icon/more.jpg')} title='More'/>

      {/* cara 1 */}
      {/* <View> 
        <Image style={styles.ImageFeatureUtama} source={require('../icon/food.jpg')}  />
        <Text style={styles.TextFeatureUtama}>Food</Text>
      </View>
      <View> 
        <Image style={styles.ImageFeatureUtama} source={require('../icon/bike.jpg')}  />
        <Text style={styles.TextFeatureUtama}>Bike</Text>
      </View>
      <View> 
        <Image style={styles.ImageFeatureUtama} source={require('../icon/car.jpg')}  />
        <Text style={styles.TextFeatureUtama}>Car</Text>
      </View>
      <View> 
        <Image style={styles.ImageFeatureUtama} source={require('../icon/send.jpg')}  />
        <Text style={styles.TextFeatureUtama}>Delivery</Text>
      </View> */}
    </View>
  );
};

export default FiturUtama;
