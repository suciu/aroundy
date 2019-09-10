import React from 'react';

const Login = (props) => {
    return (
        <div className="announcement">
            <div>
                <div className="login-form">
                    <form>
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input onChange={(e) => props.onChange(e, "email")} type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input onChange={(e) => props.onChange(e, "password")} type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="button"
                                   className="btn btn-primary btn-block"
                                   onClick={props.handleLogin}
                                   value="Log in" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;