import React, {useEffect, useState} from 'react';
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import config from "./aws-exports";
import {subscribeToNewMessage} from "./graphql/subscriptions";

function App() {

  const [listener,setListener] = useState();

  useEffect( ()=>{
    (async () =>{
      await Amplify.configure(config);
      await Auth.signIn('orr@gmail.com', '123aSsd321');
      console.log('user signed in', Auth.user.attributes);
      const user = await Auth.currentAuthenticatedUser();
      let recipientId = user.attributes.sub;
      console.log('user', user)
      console.log('recipientId', recipientId )
      let subscription2 = API.graphql(graphqlOperation(subscribeToNewMessage,{
        conversationID: "69abbec1-316a-417f-b6b5-512727da4819"
      }))
        .subscribe({
          next: postData => {
            const newPost = postData
            console.log('onCreateMessage data',newPost )
          },

        }

        );
    })()

  })
  return (
    <div>
      chat app
    </div>
  );
}

export default App;
