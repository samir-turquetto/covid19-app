import React, { useState, useEffect } from 'react';
import { ImageBackground, FlatList, ScrollView} from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import styles from './styles';
import virus from "../../assets/virus.png";

const ListCountriesScreen = ({navigation, route}) => {
const {countries} = route.params;
const [search, setSearch] = useState('');
const [filter, setFilter] = useState(countries);

useEffect(() => {
  const result = countries.filter((country) =>
    country.Country.toLowerCase().includes(search.toLowerCase()),
  );
  setFilter(result);
}, [search]);

const callReport = (country) => navigation.navigate('Country', {report: country, name: country.Country});

  return (
    <ImageBackground 
      source={virus} 
      style={styles.container}
      imageStyle={{width: 500, height:500, opacity:0.1}}  
    >
      <SearchBar lightTheme value={search} onChangeText={setSearch} placeholder="Nome do País"/>
      <ScrollView>
        <FlatList contentContainerStyle={styles.main}
          data={filter}
          renderItem={({item, index})=>(
            <ListItem 
              key={index}
              onPress={() => callReport(item)}             
              title={item.Country}
              titleStyle={styles.listItemTitle}
              subtitle={`Mortes: ${item.TotalDeaths}`}
              subtitleStyle={styles.listItemSubTitle}
              bottomDivider
              chevron
            />
          )}
        /> 
      </ScrollView>
     
    </ImageBackground>
  );
}

export default ListCountriesScreen;