import * as React from "react";
import './LoginPage.scss';
import {InputText} from "../../../../common/components/input_text/InputText";
import Button from "../../../../common/components/button/Button";
import {connect} from "react-redux";
import {addLogin} from "../../../../common/redux/action-create/actionCreate";
import {FormContainer} from "../../../../common/components/form_container/FormContainer";

interface IProps {
    addLogin?: (data) => void;
    event?: (name) => void;
}

interface IState {
}

class LoginPage extends React.Component<IProps, IState> {
    formRef: FormContainer;
    pageName: string;

    constructor(props) {
        super(props);

        this.pageName = 'chat_messages-page';
    }

    onAddLogin() {
        const data = this.formRef.getValue();

        if (data['login'] && data['password']) {
            this.props.addLogin(data);
            this.props.event(this.pageName)
        }
    }

    render() {
        return (
            <FormContainer ref={(r) => this.formRef = r}>
                <div className="login">
                    <h1 className="login__title">Chat</h1>
                    <div className="form login__form">
                        <div className="form__items">
                            <div className="form__item">
                                <InputText className="form__username" name={'login'} focus={true} required={true}/>
                                <label className="form__label">username</label>
                            </div>
                            <div className="form__item">
                                <InputText className="form__username" name={'password'} required={true}/>
                                <label className="form__label">password</label>
                            </div>
                            <Button className="form__submit" onClick={this.onAddLogin.bind(this)}/>
                        </div>
                    </div>
                </div>
            </FormContainer>
        );
    }
}

export default connect((state: any) => {
    return {
      currentUser: state.currentUser
    };
}, {addLogin})(LoginPage);
