import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({

  ImageFeatureUtama: {
    height: 55,
    width: 55,
    marginTop: 15,
  },
  TextFeatureUtama: {
    textAlign: 'center',
    marginTop: 5,
  },
});

// cara 1 menggunakan jika function component dengan parameter
// const FiturUtamaSub = (props) => {
//   return (
//     <View style={{width:'25%', alignItems:'center'}}>
//       <Image style={styles.ImageFeatureUtama} source={props.image} />
//       <Text style={styles.TextFeatureUtama}>{props.title}</Text>
//     </View>
//   );
// };

// cara 2 jika menggunakan class component
class FiturUtamaSub extends React.Component {
  render() {
    return (
      <View style={{width:'25%', alignItems:'center'}}>
        <Image style={styles.ImageFeatureUtama} source={this.props.image} />
        <Text style={styles.TextFeatureUtama}>{this.props.title}</Text>

      
      </View>
    );
  }
}

export default FiturUtamaSub;
