import { useState } from "react"
import Inputemail from "../component/inputemail";
import Inputname from "../component/inputname";

export default function Register(props) {

    const [userData, setUserData] = useState({
        password: "",
        confrimpassword: ""

    })

    const [errors, setError] = useState({
        passwordErr: "",
        confrimpasswordErr: ""

    })
    const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const changeData = (e) => {
        console.log(e.target.value)
        if (e.target.name === "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })
            setError({
                ...errors,
                passwordErr:
                    e.target.value.length === 0 ?
                        "this field ie required"
                        : e.target.value.length < 8 ?
                            "Minimum length  is  8 charcter"
                            : !passregex.test(e.target.value) ?
                                "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                                : null
            })

        } else if (e.target.name === "confrimpassword") {
            setUserData({
                ...userData,
                confrimpassword: e.target.value
            })
            setError({
                ...errors,
                confrimpasswordErr:

                    userData.password !== e.target.value ?
                        "unmatched passwords"
                        : null
            })
        }
    }
    const submitData = (e) => {
        console.log(e.target)
        e.preventDefault()
    }
    return (
        <>
            <h1> Register user  </h1>

            <form onSubmit={(e) => submitData(e)} className="container py-5">

                <Inputname labelname="username" />
                <Inputemail />
                <Inputname labelname="name" />

                <div className="mb-3">
                    <label htmlFor="Password1" className="form-label">password</label>
                    <input
                        type={passwordShown ? "text" : "password"}

                        className={`form-control ${errors.passwordErr ? "border-danger" : ""}`}
                        id="Password1"
                        value={userData.password}
                        onChange={(e) => changeData(e)}
                        name="password"
                    />
                </div>
                <div className="text-danger">
                    {errors.passwordErr}
                </div>

                <div className="mb-3">
                    <label htmlFor="Password2" className="form-label"> Repeat your password</label>
                    <input
                        type={passwordShown ? "text" : "password"}

                        className={`form-control ${errors.confrimpasswordErr ? "border-danger" : ""}`}
                        id="Password2"
                        value={userData.confrimpassword}
                        onChange={(e) => changeData(e)}
                        name="confrimpassword"
                    />
                    <button onClick={togglePassword}>Show Password</button>
                </div>
                <div className="text-danger">
                    {errors.confrimpasswordErr}
                </div>

                <button type="submit"
                    disabled={errors.passwordErr}
                    // disabled={errors.passwordErr || Inputemail.errors.emailErr  }

                    className="btn btn-success">Submit</button>

            </form>
        </>
    )
}