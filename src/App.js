import { useEffect, useState } from 'react';
import './App.css';
import { User as UserModel } from './models';
import { DataStore } from 'aws-amplify';
import liff from '@line/liff';
import { 
  Datsumitsu1 
} from './ui-components';
import { Hub } from 'aws-amplify'


Hub.listen("ui", (capsule) => {
  if (capsule.payload.event === "actions:datastore:create:finished") {
    // Do something after signout
  }
});


function App() {


  const loginLine = () => {
    //追加箇所 Start
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(async () => {
      if (!liff.isLoggedIn()) {
        await liff.login();
      }
      const { userId, displayName } = await liff.getProfile();
      await DataStore.save(
        new UserModel({
          liff_user_id: userId,
          user_name: displayName,
        })
      );
      const user = await DataStore.query(UserModel);
      //setTicket({ user_name, user_qr });
    });
    //追加箇所 End
  }

  return (
    <div className="App">
        <Datsumitsu1 />
    </div>
  );
}

export default App;


