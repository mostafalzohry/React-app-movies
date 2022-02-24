import { useState } from "react"
import Inputemail from "../component/inputemail";

export default function Login(props) {

    const [userData, setUserData] = useState({
        password: "",
    })

    const [errors, setError] = useState({
        passwordErr: "",
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
        }

    }

    const submitData = (e) => {
        console.log(e.target)
        e.preventDefault()

    }




    return (
        <>
            <h1> login user  </h1>

            <form onSubmit={(e) => submitData(e)} className="container py-5">



                <Inputemail />

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">password</label>
                    <input
                        type={passwordShown ? "text" : "password"}

                        className={`form-control ${errors.passwordErr ? "border-danger" : ""}`}
                        id="exampleInputPassword1"
                        value={userData.password}
                        onChange={(e) => changeData(e)}
                        name="password"
                    />
                    <button onClick={togglePassword}>Show Password</button>
                </div>
                <div className="text-danger">
                    {errors.passwordErr}
                </div>


                <button type="submit"
                    disabled={errors.passwordErr}

                    // disabled={errors.passwordErr || Inputemail.errors.emailErr  }
                    className="btn btn-success">Submit</button>
            </form>
        </>
    )
}