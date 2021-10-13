import React from 'react';
import {WebView} from 'react-native-webview';

const storeName: string = 'ej_store';
const token = '53e48lhkmprw0kja0axa2m0w1g50ftci';

const App = () => {
  const scriptToRun: string = `
  setTimeout(()=>{
    window.localStorage.setItem('${storeName}', \`{
      "user": {
        "list": [
          {
            "name": "Banwal Vikrant",
            "token": "${token}",
            "email": "vikrant.banwal+1@daffodilsw.com",
            "customerId": "23088",
            "moblie_verified": "0",
            "mobile": "917015066534",
            "storevisit": 1,
            "wishlist": 4,
            "quote_id": "51143",
            "cart": 0
          }
        ],
        "token": "${token}"
      }
    }\`);

  }, 3000)
  
  `;

  return (
    <WebView
      injectedJavaScript={scriptToRun}
      javaScriptEnabled
      domStorageEnabled
      source={{uri: 'http://192.168.100.32:3000/checkout/address'}}
    />
  );
};

export default App;
