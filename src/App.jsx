import React, {useEffect, useState} from 'react';
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import config from "./aws-exports";
import {subscribeToNewMessage, subscribeToNewMatch} from "./graphql/subscriptions";

function App() {

  const [listener,setListener] = useState();

  useEffect( ()=>{
    (async () =>{
      await Amplify.configure(config);
      const cognitoUser = await Auth.signIn('+972526460458');
      let code = '1111'
      debugger
      const user = await Auth.sendCustomChallengeAnswer(cognitoUser,code + "");
      const user2 = await Auth.currentAuthenticatedUser()
      console.log('user', user)
      API.graphql(graphqlOperation(subscribeToNewMessage,{
        conversationID: "137b64de-9b9b-48f9-b622-b72bec7f1131"
      }))
        .subscribe({
          next: postData => {
            const newPost = postData
            console.log('onCreateMessage data',newPost )
          },

        }

        );
      console.log('user',user2.attributes.sub);
      API.graphql(graphqlOperation(subscribeToNewMatch,{
        userId: user2.attributes.sub
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
