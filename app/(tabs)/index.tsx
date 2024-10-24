import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Button
        title="Click Here"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Thanks for  clicking!</Text>
            
            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
            />
            
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
  },
  text: {
    fontSize: 35,
    color: '#000000',
    fontFamily:'Roboto Mono',
    
  },
  modalContainer: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    
    fontSize: 18,
    marginBottom: 20,
  },
});
