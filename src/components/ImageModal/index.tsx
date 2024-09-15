import React from 'react';
import { View, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { X } from 'lucide-react-native';
import { styles } from './style'

interface ImageModalProps {
  visible: boolean;
  onClose: () => void;
  imageUrl: string;
}

export function ImageModal({ visible, onClose, imageUrl }: ImageModalProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={onClose}
              >
                <X size={24} color="white" />
              </TouchableOpacity>
              <Image
                style={styles.modalImage}
                source={{ uri: imageUrl }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};