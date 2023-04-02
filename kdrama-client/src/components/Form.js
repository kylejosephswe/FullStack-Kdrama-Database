import { useState } from 'react'

function Form() {
    const [name, setName] = useState('')
    const [year, setYear] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        setName(e.target.value)
        setYear(Number(e.target.value))

        const response = await fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name, year: year})
        })
        console.log("Frontend data sent to backend!")
    }

    return (
        <form onSubmit={onSubmit} className="form-flex">
            <div className="form-flex">
                <input type="text" placeholder="Name"/>
            </div>
            <div className="form-flex">
                <input type="text" placeholder="Year"/>
            </div>
            <button type="submit" >Add kdrama</button>
        </form>
    )
}

export default Form 