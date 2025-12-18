# DemoApp
https://user-images.githubusercontent.com/6612554/140918836-1e5d02b3-91e1-4deb-a174-032d3f48a65b.mov

Please check the demo from Demo folder. This project uses below libraries:

1. React navigation
2. Styled Components


import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  LayoutRectangle,
  UIManager,
  findNodeHandle,
} from 'react-native';

const INPUTS = [
  'First Name',
  'Last Name',
  'Email',
  'Phone',
  'Address',
  'City',
  'State',
  'Zip Code',
];

export default function RegisterScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  /** Keyboard listeners */
  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardVisible(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  /** Scroll to focused input */
  const scrollToInput = (index: number) => {
    const input = inputRefs.current[index];
    const scroll = scrollRef.current;

    if (!input || !scroll) return;

    const nodeHandle = findNodeHandle(input);
    if (!nodeHandle) return;

    UIManager.measureLayout(
      nodeHandle,
      findNodeHandle(scroll)!,
      () => {},
      (_x, y) => {
        scroll.scrollTo({ y: y - 20, animated: true });
      }
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
    >
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Register Form</Text>

        {INPUTS.map((label, index) => (
          <View key={index} style={styles.inputWrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.input}
              placeholder={label}
              onFocus={() => scrollToInput(index)}
              returnKeyType="next"
            />
          </View>
        ))}
      </ScrollView>

      {/* Footer when keyboard is hidden */}
      {!keyboardVisible && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.okButton}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Floating OK when keyboard is visible */}
      {keyboardVisible && (
        <View style={styles.floatingOk}>
          <TouchableOpacity style={styles.okButton}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    paddingBottom: 140,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    color: '#333',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  floatingOk: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Platform.OS === 'ios' ? 20 : 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  okButton: {
    height: 48,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cancelButton: {
    height: 48,
    backgroundColor: '#E53935',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
