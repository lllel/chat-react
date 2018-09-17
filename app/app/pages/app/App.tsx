import * as React from "react";
import "./App.scss";
import LoginPage from "../../../login/pages/login-page/LoginPage";
import ChatPage from "../../../chat/pages/chat-page/ChatPage";

interface IProps {
}

interface IState {
    currentPage?: string;
}

class App extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
          currentPage: 'login-page'
        };
    }

    onEvent(page) {
        this.setState({
            currentPage: page
        });
    }

    render() {
        return (
            <>
                {this.state.currentPage === 'login-page' ? <LoginPage event={this.onEvent.bind(this)}/> : null}
                {this.state.currentPage === 'chat_messages-page' ? <ChatPage/> : null}
            </>
        );
    }
}

export default App;
