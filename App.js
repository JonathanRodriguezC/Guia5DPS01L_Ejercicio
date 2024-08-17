import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { Card } from '@rneui/themed';

const COMIDAS = [
  {
    id: '1',  
    nombre: "Pupusas",
    img: "https://cookingwithkids.org/wp-content/uploads/2022/12/Pupusas_750x750.jpg",
    cantidadCalorica: 5,
  },
  {
    id: '2',  
    nombre: "YUCA FRITA",
    img: "https://hotelpayaya.sv/core/wp-content/uploads/2023/01/yucafrita.jpg",
    cantidadCalorica: 3
  },
  {
    id: '3',  
    nombre: "Tamales",
    img: "https://guanacos.com/wp-content/uploads/2022/11/GUANACOS-TAMALES-SALVADORENOS.png",
    cantidadCalorica: 4,
  },
  {
    id: '4',  
    nombre: "Panes con Pavo",
    img: "https://i.pinimg.com/736x/c9/7c/e7/c97ce70df68d6c461af7f673f843ad0e.jpg",
    cantidadCalorica: 6
  },
  {
    id: '5',  
    nombre: "Atol de Elote",
    img: "https://i.pinimg.com/736x/96/06/95/960695f956b08f7fe09a669d34d1947a.jpg",
    cantidadCalorica: 2,
  },
  {
    id: '6',  
    nombre: "Pasteles",
    img: "https://i.pinimg.com/originals/86/4e/3d/864e3da37331720b7517f4493d947518.jpg",
    cantidadCalorica: 7
  },
  {
    id: '7',  
    nombre: "Nuegados",
    img: "https://lh5.googleusercontent.com/proxy/jQbMHOPLxsFAQLykewkfe4Ok3tF4PXcnGFQFVhOUe6jS0Y1NvkcPPMexjdRuP8ZCCGaSBMcqsIe3G4BQf_a_-Y2teDz2A7jpRcUVxIIB_T7JsfOvgCDr2ZaiZ9JAgfLpOxfRYYo5",
    cantidadCalorica: 7
  }
];

const Com = ({ comida }) => {
  return (
    <Card containerStyle={styles.card}>
      <Card.Image source={{ uri: comida.img }} style={styles.image} />
      <Card.Title style={styles.title}>{comida.nombre}</Card.Title>
      <Card.Divider />
      <Card.FeaturedSubtitle style={styles.Calorias}>Calorias:{comida.cantidadCalorica}</Card.FeaturedSubtitle>
      
    </Card>
  );
};

export default function App() {
  const renderComidas = ({ item }) => {
    return <Com comida={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Text style={styles.headerText}>Comidas TIPICAS de EL Salvador!</Text>
      <FlatList
        data={COMIDAS}
        renderItem={renderComidas}
        keyExtractor={item => item.id}
        style={{ backgroundColor: 'black' ,borderRadius: 10,padding: 10,}}
      />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009dff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop:80  // Ajuste del padding
  },
  card: {
    width: 300,
    borderRadius: 10,  // Ajuste del radio de borde
    marginBottom: 20,  // Espacio entre tarjetas
    backgroundColor: 'gray',  // Ajuste del color de fondo
  },
  image: {
    width: '100%',  // Ajusta el tamaño de la imagen al ancho del card
    height: 200,    // Ajuste del tamaño de la imagen
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#030303', // Ajuste del color de la letra
    backgroundColor: '#ffe600', // Ajuste del color de fondo
    padding: 10, // Ajuste del padding,
    borderRadius: 10, // Ajuste del radio de borde
  },
  Calorias: {
    color: '#ffe600', // Ajuste del color de la letra
    textAlign:'center' // Ajuste del color de la letra
  },
  title: {
    fontSize: 16,
    color: '#70e5ff', // Ajuste del color de la letra
    textAlign:'center' // Ajuste del color de la letra
  }
});