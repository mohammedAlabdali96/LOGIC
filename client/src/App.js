import React, {useState} from "react"



export default function App() {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState('')
  const [loading, setLoading] = useState(false)



  const save = () => {
      setLoading(true)
    fetch('http://localhost:3001/api/sort', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
          body: JSON.stringify(formData.replace( /\n/g, " " ).split( " " )),
    })
        .then((response) => response.json()) // parses response to JSON
        .then((result) => {
            setData(result)
            setLoading(false)
        })
        .catch((err) => console.log(err))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    save()
    setLoading(true)
  }

  const handleChange = (event) => {
    setFormData(event.target.value)
  }


  return (
      <div className="container-sm">
          <h1 className="text-center">Home Page</h1>
        <form className="form-group mt-5" onSubmit={handleSubmit}>
            <div className="input-group">
               <textarea
                 className="form-control"
                 aria-label="With textarea"
                 name="name" value={formData}
                 onChange={handleChange}
               />
            </div>
            <div className="d-flex align-items-center justify-content-center text-center py-5">
               <button disabled={loading} className="btn btn-primary" type="submit">click</button>
            </div>
        </form>
          {loading &&  <div> Loading ...</div>}
        {data &&
        data.map((element, index) => (
            <div  key={index}>
             {element}
            </div>
        ))}
      </div>
  )
}