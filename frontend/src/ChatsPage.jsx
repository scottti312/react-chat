import { PrettyChatWindow } from "react-chat-engine-pretty";
import { creds } from "./chatenginecreds.js";

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectID={creds}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
        />
    </div>
  )
}

export default ChatsPage;