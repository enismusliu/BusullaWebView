import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const YourApp = () => {
  return (
    <WebView
      source={{ uri: 'https://busulla.com/' }}
      style={{marginTop: 30}}
    />
  );
}

export default YourApp;