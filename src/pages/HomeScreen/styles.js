import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#03fcf4'
  },
  main: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#008a85'
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: '#008a85'    
  },
  buttonTitle: {
    fontSize: 20,
  },
  group: {
    flexDirection: 'row'
  }
});

export default styles;