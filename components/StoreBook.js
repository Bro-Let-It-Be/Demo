import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Modal, Portal, TouchableRipple} from 'react-native-paper';

import BookDetails from './BookDetails';
import StoreDetailsItem from './StoreDetailsItem';

const LibraryBook = props => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <TouchableRipple onPress={() => showModal()}>
      <View style={styles.item}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <StoreDetailsItem data={props.data} />
          </Modal>
        </Portal>
        <BookDetails data={props.data} />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.4,
    borderColor: '#BBC4C2',
    borderRadius: 10,
  },
});

export default LibraryBook;
