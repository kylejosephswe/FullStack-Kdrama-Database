import { useState } from 'react'

function Form() {
    const [addName, setAddName] = useState('')
    const [addYear, setAddYear] = useState('')
    const [deletedName, setDeletedName] = useState('')
    const [deletedYear, setDeletedYear] = useState('')

    const addKdrama = async (e) => {
        e.preventDefault()
        setAddName(addName)
        setAddYear(Number(addYear))
        alert(`Added ${addName} to database!`)
        setAddName("")
        setAddYear("")

        await fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: addName, year: addYear })
        })
    }

    const deleteKdrama = async (e) => {
        e.preventDefault()
        setDeletedName(deletedName)
        setDeletedYear(Number(deletedYear))
        alert(`${deletedName} deleted from database!`)
        setDeletedName("")
        setDeletedYear("")

        await fetch("http://localhost:5000", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: deletedName, year: deletedYear })
        })
        console.log("Frontend data sent to backend to be DELETED!")
    }

    return (
        <>
            <form onSubmit={addKdrama} className="form-flex">
                <div className="form-flex">
                    <input type="text" placeholder="Name" value={addName} onChange={(e) => setAddName(e.target.value)} />
                </div>
                <div className="form-flex">
                    <input type="text" placeholder="Year" value={addYear} onChange={(e) => setAddYear(e.target.value)} />
                </div>
                <button type="submit" >Add Movie</button>
            </form>

            <form onSubmit={deleteKdrama} className="form-flex">
                <div className="form-flex">
                    <input type="text" placeholder="Name" value={deletedName} onChange={(e) => setDeletedName(e.target.value)} />
                </div>
                <div className="form-flex">
                    <input type="text" placeholder="Year" value={deletedYear} onChange={(e) => setDeletedYear(e.target.value)} />
                </div>
                <button type="submit" >Delete Movie</button>
            </form>
        </>
    )
}

export default Form 