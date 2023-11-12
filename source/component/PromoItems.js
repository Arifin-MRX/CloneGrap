import React, {Component} from "react";
import { Text, View, StyleSheet} from "react-native";
import PromoItemsSub from "./PromoItemsSub";

const PromoItems = () => {
    return (
        <View style={{marginHorizontal:18,width:'100%',flexWrap:'wrap', flexDirection:'row'}}>
            <PromoItemsSub
            image={{uri:"https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/07073657/ketahui-makanan-yang-dapat-merusak-kulit-halodoc.jpg"}}
            Text="Makanan Khas Kangean"
            diskon="Diskon 50%"
            masaBerlaku="Until 31 September "
            />
             <PromoItemsSub
            image={{uri:"https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2021/09/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14218.webp"}}
            Text="Makanan Khas Sumenep"
            masaBerlaku="Until 31 September "
            />
             <PromoItemsSub
            image={{uri:"https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg"}}
            Text="Sate Khas Madura"
            diskon="Diskon 10%"
            masaBerlaku="Until 31 September "
            />
             <PromoItemsSub
            image={{uri:"https://cdn1-production-images-kly.akamaized.net/RmwA__o54Ad5Tom2seYFHFKVevo=/697x0:4346x3649/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2390404/original/024372700_1540278327-shutterstock_789397027.JPG"}}
            Text="Makanan Khas Kangean"
            diskon="Diskon 25%"
            masaBerlaku="Until 31 September "
            />
        </View>
        
    );
};

export default PromoItems;