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
        conversationID: "39df7251-da3d-4dcf-9485-da5fd4e6c598"
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
