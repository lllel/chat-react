import * as React from "react";
import './ChatPage.scss';
import {InputText} from "../../../../common/components/input_text/InputText";
import Button from "../../../../common/components/button/Button";
import {connect} from "react-redux";
import {addMessage} from "../../../../common/redux/action-create/actionCreate";
import {tools} from "../../../../common/core/tools";

interface IProps {
    chatMessages?: any[];
    addMessage?: (message) => void;
    currentUser: any;
}

interface IState {
}

class ChatPage extends React.Component<IProps, IState> {
    inputTextRef: InputText;
    chatWrapper: any;

    constructor(props) {
        super(props);
    }

    onAddMessage() {
        const message = {
            id: tools.randomStr(5),
            name: this.props.currentUser.name,
            message: this.inputTextRef.getValue(),
            data: '5 minutes ago',
            me: true
        };

        this.props.addMessage(message);
        this.inputTextRef.setValue('');
    }

    changeChatWrapperHeight() {
        if (this.chatWrapper.offsetHeight > 371) {
            this.chatWrapper.style.overflowY = 'scroll';
            this.chatWrapper.style.height = '371px';
        }
    }

    changeChatWrapperScroll() {
        this.chatWrapper.scrollTo(0, this.chatWrapper.scrollHeight);
    }

    componentWillUpdate() {
        this.changeChatWrapperHeight();
    }

    componentDidUpdate() {
        this.changeChatWrapperScroll();
    }

    componentDidMount() {
        this.changeChatWrapperHeight();
        this.changeChatWrapperScroll();
    }

    render() {
        return (
            <div className="chat">
                <div className="chat__navigation">
                    <p className="chat__user-name">Тестовое задание</p>
                </div>
                <div ref={(r) => this.chatWrapper = r} className="chat__wrapper">
                    {this.renderMessages()}
                </div>
                <div className="chat__form">
                    <div className="chat__form-item">
                        <input className="visually-hidden" type="file" name="file"/>
                        <label className="chat__file-add">label</label>
                    </div>
                    <div className="chat__form-item">
                        <InputText ref={(r) => this.inputTextRef = r} className="chat__input-add" placeholder="Type message..."/>
                    </div>
                    <Button className="chat__message-add" onClick={this.onAddMessage.bind(this)}/>
                </div>
            </div>
        );
    }

    renderMessages() {
        if (this.props.chatMessages) {
            return this.props.chatMessages.map((item, index) => {
                return (
                    <div key={index} className={`chat__items ${item.me ? 'chat__items--me' : ''}`}>
                        <p className="chat__message">{item.message}</p>
                        <p className={`chat__my-name ${item.me ? 'chat__my-name--me' : ''}`}>{item.name}</p>
                        <p className="chat__time">{item.data}</p>
                    </div>
                );
            })
        }
    }
}

export default connect((state: any) => {
    return {
        chatMessages: state.chatMessages,
        currentUser: state.currentUser
    };
}, {addMessage})(ChatPage)
