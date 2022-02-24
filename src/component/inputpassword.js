import { useState } from "react"


export default function Inputpassowrd(props) {

    const [userData, setUserData] = useState({
        password: "",
    })

    const [errors, setError] = useState({
        passwordErr: "",
    })

    const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;




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



    return (
               <>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">password</label>
        <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={userData.password}
            onChange={(e) => changeData(e)}
            name="password"
        />
       
    </div>
    <div className="text-danger">
        {errors.passwordErr}
    </div>
    </>
    )
}

