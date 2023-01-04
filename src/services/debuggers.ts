import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import Reactotron from 'reactotron-react-native';

LogBox.ignoreLogs([
  // Ignoring this so we can pass callbacks to Modal buttons
  'Non-serializable values were found in the navigation state',
]);

import { queryClient } from "./queryClient";
import {
  QueryClientManager,
  reactotronReactQuery,
} from "reactotron-react-query";

const queryClientManager = new QueryClientManager({ queryClient });

Reactotron
  .setAsyncStorageHandler?.(AsyncStorage)
  .use(reactotronReactQuery(queryClientManager))
  .configure({
    name: 'MjinMenu',
    onDisconnect: () => {
      queryClientManager.unsubscribe();
    },
  })
  .useReactNative({
    // asyncStorage: false, // there are more options to the async storage.
    // networking: { // optionally, you can turn it off with false.
    //   ignoreUrls: /symbolicate/,
    // },
    // editor: false, // there are more options to editor
    // errors: false, // or turn it off with false
    // overlay: false, // just turning off overlay
  })
  .connect();

// RN DEBUGGER
// global.XMLHttpRequest = global.originalXMLHttpRequest
//   ? global.originalXMLHttpRequest
//   : global.XMLHttpRequest;
// global.FormData = global.originalFormData
//   ? global.originalFormData
//   : global.FormData;

// fetch; // Ensure to get the lazy property

// if (window.__FETCH_SUPPORT__) {
//   // it's RNDebugger only to have
//   window.__FETCH_SUPPORT__.blob = false;
// } else {
//   /*
//    * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
//    * If you're using another way you can just use the native Blob and remove the `else` statement
//    */
//   global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
//   global.FileReader = global.originalFileReader
//     ? global.originalFileReader
//     : global.FileReader;
// }
