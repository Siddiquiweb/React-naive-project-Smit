import React from 'react';
import { View, Text, FlatList, Image,  StyleSheet, TouchableOpacity } from 'react-native';


const DATA = [
  {
    id: '1',
    title: 'Minimalist Logo Design',
    image: 'https://i.pinimg.com/736x/15/35/8c/15358c044bcb1169c810f401c97fcaba.jpg', // Replace with a valid image URL
    
  },
  {
    id: '2',
    title: 'Social Media Banner',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c913c101281739.5f1b0a1e449a2.jpg', // Replace with a valid image URL
    
  },

  {
    id: '3',
    title: 'Business Card Design',
    image: 'https://www.seoclerk.com/pics/000/903/316/9eea9fc16fa493f309efe7ac214aba19.jpg',
    
  },
  {
    id: '4',
    title: 'E-commerce Product Mockup',
    image: 'https://img.freepik.com/premium-photo/black-friday-website-header-featuring-sleek-00208-00_1272857-102896.jpg?w=826', 
   
  },
  {
    id: '5',
    title: 'Event Flyer Design',
    image: 'https://img.freepik.com/premium-photo/flyer-design-template-leaflet-cover-presentation-book-cover_1297061-13947.jpg?w=360',
    
  },
  {
    id: '6',
    title: 'App User Interface (UI) Design',
    image: 'https://img.freepik.com/free-vector/online-hotel-ui-app-screen-design_47987-2003.jpg?t=st=1729277039~exp=1729280639~hmac=99a6614e97b1ff8aecf6601bced20f887074e9aa16181edfcbc3b066fdfbb8f2&w=740',
    
  },
  {
    id: '7',
    title: 'Minimalist Logo Design',
    image: 'https://i.pinimg.com/736x/15/35/8c/15358c044bcb1169c810f401c97fcaba.jpg', // Replace with a valid image URL
    
  },
  {
    id: '8',
    title: 'Social Media Banner',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c913c101281739.5f1b0a1e449a2.jpg', // Replace with a valid image URL
    
  },

  {
    id: '9',
    title: 'Business Card Design',
    image: 'https://www.seoclerk.com/pics/000/903/316/9eea9fc16fa493f309efe7ac214aba19.jpg',
    
  },
  {
    id: '10',
    title: 'E-commerce Product Mockup',
    image: 'https://img.freepik.com/premium-photo/black-friday-website-header-featuring-sleek-00208-00_1272857-102896.jpg?w=826', 
   
  },
  
  {
    id: '11',
    title: 'Packaging Design',
    image: 'https://img.freepik.com/premium-photo/realistic-3d-branding-packaging-mockup-with-premium-mockup_963895-20528.jpg?w=740',
    
  },
  // Add more items as needed
];

const Explore = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <Text style={styles.header}>All  Design Templates</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 5,
    paddingTop:50,
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: '#dcdcdc',
    borderWidth: 5, // Border width
    borderColor: '#000000', // Border color
    borderRadius: 10, // Rounded corners

  },
  card: {
    flex: 1,
    width: '48%',
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    
    
  },
  image: {
    width: '100%',
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  // Description:{
  //   padding: 10,
  //   fontSize: 14,
  //   color: '#666',
  // }
 
});


export default Explore;
