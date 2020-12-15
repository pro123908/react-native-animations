import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
export default class App extends Component {
  render() {
    // const runFirst = `
    //   window.isNativeApp = true;
    //   document.body.style.backgroundColor = 'red';
    //   document.body.style.backgroundColor = 'blue';
    //   true; // note: this is required, or you'll sometimes get silent failures
    // `;
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
      <body>
        <main>
          <form id="form">
            <div>
              <label for="cc-number">Card number</label>
              <span id="cc-number">
                <!-- window.moonpay SDK iframe for card number field will be here! -->
              </span>
            </div>
            <div>
              <label for="cc-cvc">CVC</label>
              <span id="cc-cvc">
                <!-- window.moonpay SDK iframe for CVC field will be here! -->
              </span>
            </div>
            <div>
              <label for="cc-expiration">Expiration date</label>
              <span id="cc-expiration">
                <!--window.moonpay SDK iframe for expiration date field will be here! -->
              </span>
            </div>
            <!--Submit credit card form button-->
            <button type="submit">Submit</button>
          </form>
        </main>
      </body>
      <script
        src="https://unpkg.com/@moonpay/browser@1.5.0/dist/index.js"
        integrity="sha384-jTxZixzMO6z+ylsKGyC+I7sD1AjxlxdEJBcYCLCSc3jogZ45UkoSpyuwbmIQlCqs"
        crossorigin="anonymous"
      ></script>
      <script>
        console.log('heree======>');
        window.moonpay.initialize('pk_test_HY5QyhgJoapb8sszgCpveBewsQK2R0');
        window.moonpay.trackPageView();
        let formed = document.getElementById('form');
        formed.addEventListener('submit', handleSubmit);
        const form = window.moonpay.createCardDetailsForm((state) => {
          //  Example of the object:
          //  {
          //    "number": {
          //      "isDirty": false,
          //      "isFocused": false,
          //      "errorMessages": [
          //        "is required"
          //      ],
          //      "isValid": false,
          //      "name": "number",
          //      "isEmpty": true
          //    },
          //    ...
          //  }
        });
        form.createField('#cc-number', {
          type: 'card-number',
          name: 'number',
          css: {
            fontFamily:
              'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontSize: '16px',
            lineHeight: '18px',
          },
          placeholder: '4111 1111 1111 1111',
          validations: ['required', 'validCardNumber'],
        });
        form.createField('#cc-expiration', {
          type: 'card-expiration-date',
          name: 'expiryDate',
          css: {
            fontFamily:
              'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontSize: '16px',
            lineHeight: '18px',
          },
          placeholder: '01 / 23',
          validations: ['required', 'validCardExpirationDate'],
        });
        form.createField('#cc-cvc', {
          type: 'card-security-code',
          name: 'cvc',
          css: {
            fontFamily:
              'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontSize: '16px',
            lineHeight: '18px',
          },
          placeholder: '123',
          validations: ['required', 'validCardSecurityCode'],
        });
        function handleSubmit(event) {
          alert('inside');
          event.preventDefault();
          window.ReactNativeWebView.postMessage('coming');
          form.submit(
            {
              street: '123 Mission St',
              subStreet: null,
              town: 'San Francisco',
              postCode: '94105',
              state: 'CA',
              country: 'USA',
            },
            (status, response) => {
              window.ReactNativeWebView.postMessage(status);
              console.log('=============>', response,status);
            },
          );
        }
      </script>
    </html>
        `;
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{html: html}}
          javaScriptEnabled={true}
          onMessage={(event) =>
            console.log('Message => ', event.nativeEvent.data)
          }
        />
      </View>
    );
  }
}
