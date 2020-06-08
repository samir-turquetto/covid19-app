import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from "react-native-elements";
import axios from "axios";
import styles from './styles';
import virus from "../../assets/virus.png";

const HomeScreen = ({navigation}) => {
  const url = "https://api.covid19api.com/summary";
  const [report, setReport] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await axios.get(url);     
        setReport(data);  
      } catch (error) {
        alert(error.message);
      }      
    };  
    getData();
  }, []);

  const callGlobal = () =>navigation.navigate('Global', {report: report.Global});
  const callCountries = () =>navigation.navigate('ListCountries', {countries: report.Countries});

  return (
    <ImageBackground 
      source={virus} 
      style={styles.container}
      imageStyle={{width: 500, height:500, opacity:0.1}}  
    >
      <View style={styles.main}>
        <Text style={styles.title}>Relatório Covid - 19</Text>
        <View style={styles.group}>
          <Button onPress={callGlobal} type='solid' title="Situação Global"   buttonStyle={styles.button} titleStyle={styles.buttonTitle} />
          <Button onPress={callCountries} type='solid' title="Situação por País" buttonStyle={styles.button} titleStyle={styles.buttonTitle}/>
        </View>

      </View>
    </ImageBackground>
  );
}

export default HomeScreen;