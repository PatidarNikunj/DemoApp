# DemoApp
https://user-images.githubusercontent.com/6612554/140918836-1e5d02b3-91e1-4deb-a174-032d3f48a65b.mov

Please check the demo from Demo folder. This project uses below libraries:

1. React navigation
2. Styled Components

import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  KeyboardProvider,
  KeyboardAwareScrollView,
  useKeyboardAnimation,
} from 'react-native-keyboard-controller';

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

function Screen() {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
  const { height } = useKeyboardAnimation();

  return (
    <>
      {/* FORM */}
      <KeyboardAwareScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        bottomOffset={120}
      >
        <Text style={styles.title}>Register Form</Text>

        {INPUTS.map((label, index) => (
          <View key={index} style={styles.inputWrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              placeholder={label}
              onFocus={() => {
                scrollRef.current?.scrollToFocusedInput();
              }}
            />
          </View>
        ))}
      </KeyboardAwareScrollView>

      {/* OK BUTTON – STICKS TO KEYBOARD */}
      <View
        style={[
          styles.keyboardButton,
          {
            transform: [{ translateY: -height.value }],
          },
        ]}
      >
        <TouchableOpacity style={styles.okButton}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER (VISIBLE WHEN KEYBOARD CLOSED) */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default function RegisterScreen() {
  return (
    <KeyboardProvider>
      <View style={styles.container}>
        <Screen />
      </View>
    </KeyboardProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    paddingBottom: 200,
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
  keyboardButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  okButton: {
    height: 48,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
