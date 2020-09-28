
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import config from "./aws-exports";
import { onCreateMessage } from '../src/graphql/subscriptions'
(async ()=>{
  try {
    await Amplify.configure(config);
    await Auth.signIn('orr@gmail.com', '123aSsd321');
    let optionalParams = Auth.user.attributes.sub;
    console.log('user', optionalParams.attributes.sub);
  } catch (e) {
    console.log('err', e)
  }
})()
