import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
import { creds} from "./chatenginecreds.js";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(creds, props.user.username, props.user.secret)
  return <div style={{height: '100vh' }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
  </div>
}

export default ChatsPage;