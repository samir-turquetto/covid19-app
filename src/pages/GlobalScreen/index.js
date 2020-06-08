import React from 'react';
import { View, ImageBackground} from 'react-native';
import { Card, ListItem} from "react-native-elements";
import styles from './styles';
import virus from "../../assets/virus.png";

const GlobalScreen = ({navigation, route}) => {
  const {report} = route.params;
  return (
    <ImageBackground 
      source={virus} 
      style={styles.container}
      imageStyle={{width: 500, height:500, opacity:0.1}}  
    >     
      <View style={styles.main}>
        <Card title="Covid - 19" containerStyle={styles.card} titleStyle={styles.cardTitle} sty={{backgroundColor: "yellow"}}>
          <ListItem title="Novos confirmados" rightTitle={String(report.NewConfirmed)} titleStyle={styles.listItemTitle} rightTitleStyle={styles.listItemRightTitle}/>
          <ListItem title="Total confirmados" rightTitle={String(report.TotalConfirmed)}titleStyle={styles.listItemTitle} rightTitleStyle={styles.listItemRightTitle}/>
          <ListItem title="Novas mortes" rightTitle={String(report.NewDeaths)}titleStyle={styles.listItemTitle} rightTitleStyle={styles.listItemRightTitle}/>
          <ListItem title="Total de mortes" rightTitle={String(report.TotalDeaths)}titleStyle={styles.listItemTitle} rightTitleStyle={styles.listItemRightTitle}/>
          <ListItem title="Novos recuperados" rightTitle={String(report.NewRecovered)}titleStyle={styles.listItemTitle} rightTitleStyle={styles.listItemRightTitle}/>
          <ListItem title="Total recuperados" rightTitle={String(report.TotalRecovered)}titleStyle={styles.listItemTitle} rightTitleStyle={styles.listItemRightTitle}/>        
        </Card>
      </View>

    </ImageBackground>
  );
}

export default GlobalScreen;