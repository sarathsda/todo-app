import React,{useState} from "react";

function Create(props){
    //const[state,handler()]=useState(initialValue)
    const [fname,setFName]= useState("")
    const [femail,setFEmail]= useState("")
    const [fmobile,setFMobile]= useState("")
    const [fimage,setFImage]= useState("")
    const [faddress,setFAddress]= useState("")

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Create</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off">
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={fname} onChange={(e)=>setFName(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">Image</label>
                                    <input type="url" name="image" id="image" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="address">Name</label>
                                    <textarea name="address" id="address" cols="30" rows="5" className="form-control" required></textarea>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Create" className="btn btn-outline-success"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>  
    )
}

export default Create