import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import classnames from "classnames";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { History } from "history";
import { postSignIn } from "actions/auth";
import { default as AppState } from "types/state";
import "./SignInForm.less";

type Props = {
    className?: string;
    history: History;
    onSignIn: (
        body: string
    ) => Promise<{
        payload: {
            error: boolean;
        };
    }>;
};

type State = {
    username: {
        value: string;
        isError: boolean;
    };
    password: {
        value: string;
        isError: boolean;
    };
};

class SignInForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: {
                value: "",
                isError: false
            },
            password: {
                value: "",
                isError: false
            }
        };
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;

        this.setState(prevState => ({
            ...prevState,
            [name as keyof State]: {
                value,
                isError: false
            }
        }));
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!(this.state.username.isError || this.state.password.isError)) {
            const requestBody = JSON.stringify({
                username: this.state.username.value,
                password: this.state.password.value
            });

            this.props.onSignIn(requestBody).then(response => {
                if (!response.payload.error) {
                    this.props.history.push("/");
                }
            });
        }
    }

    render() {
        return (
            <div className="signin">
                <form
                    className={classnames("signin__form", this.props.className)}
                >
                    <div className="signin__title">
                        Complete form to start shopping
                    </div>
                    <label className="signin__label" htmlFor="username">
                        Enter your username
                    </label>
                    <input
                        className={classnames("signin__input", {
                            signin__input_error: this.state.username.isError
                        })}
                        id="username"
                        name="username"
                        onChange={e => this.handleInputChange(e)}
                        type="text"
                    />
                    <label className="signin__label" htmlFor="password">
                        Enter your password
                    </label>
                    <input
                        className={classnames("signin__input", {
                            signin__input_error: this.state.password.isError
                        })}
                        id="password"
                        name="password"
                        onChange={e => this.handleInputChange(e)}
                        type="password"
                    />
                    <button
                        className="signup__submit"
                        onClick={e => this.handleSubmit(e)}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<AppState, null, Action<string>>
) {
    return {
        onSignIn: (body: string) => dispatch(postSignIn(body))
    };
}

export default compose(
    withRouter,
    connect(
        null,
        mapDispatchToProps
    )
)(SignInForm);

// TODO:
// 1. Add form validation
// 2. Handle error cases
