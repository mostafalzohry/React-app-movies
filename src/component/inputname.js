import { useState } from "react"

export default function Inputname(props) {

    const [userData, setUserData] = useState({
        name: "",
    })

    const [errors, setError] = useState({
        nameErr: "",
    })

    const nameregex = /^\S*$/;

    const changeData = (e) => {
        console.log(e.target.value)

        if (e.target.name === "name") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setError({
                ...errors,
                nameErr:
                    e.target.value.length === 0 ?
                        "name is required"
                        : e.target.value.length < 3 ?
                            "Minimum length  is 4 character"
                            : !nameregex.test(e.target.value) ?
                                "space aren't allowed"
                                : null
            })
        }
    }
    return (
        <>
            <div className="mb-3">
                <label htmlFor="name1" className="form-label">{props.labelname}</label>
                <input
                    type="text"
                    className={`form-control ${errors.nameErr ? "border-danger" : ""}`}
                    id="name1"
                    aria-describedby="emailHelp"
                    value={userData.name}
                    onChange={(e) => changeData(e)}
                    name="name"
                />
                <div className="text-danger">
                    {errors.nameErr}
                </div>
            </div>
        </>
    )
}