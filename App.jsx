import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addData , DeleteData , UpdateData} from './Redux-Toolkit/RtkReducer';


function App() {

    const [data,setData]=useState({
      name:"",
      age:""
    })

    const SaveData =(e)=>{
      e.preventDefault()
      if(flag !== null){
        dispatch(UpdateData({index:flag , newdata:data}))
      }
      else{
        dispatch(addData(data))
      }
      setData({name:"",age:""})
      SetFlag(null)
    }

    const UserData = useSelector((state)=>state.counter.data)
    const dispatch = useDispatch()

    const [flag,SetFlag]=useState(null)

    const EditData = (id) => {
      let res = UserData.find((i, index) => id === index);
      if (res) {
        setData({ name: res.name, age: res.age });
        SetFlag(id);
      }
    };
    

  return (
    <div>
      <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
      
        <form action='#' method='post' onSubmit={SaveData} className='card w-50 rounded border px-5 pt-5 pb-5 shadow mx-3'>
            <h3>Crud with Redux Toolkit</h3>
            <label htmlFor="">Name:</label>
            <input type="text" className='form-control' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>

            <label htmlFor="">Age:</label>
            <input type="number" className='form-control' value={data.age} onChange={(e)=>setData({...data,age:e.target.value})} />

            <button className='btn btn-primary mt-4'>Save Data</button>
        </form>

        <div className='w-50 rounded border px-5 pt-5 pb-5 shadow mx-3'>
            <table className='table table-striped-bordered-responsive'>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  UserData.map((i,index)=>{
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>
                          <button className='btn btn-danger mx-1' onClick={()=>dispatch(DeleteData(index))}>Delete</button>
                          <button className='btn btn-info mx-1' onClick={()=>EditData(index)}>Update</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
        </div>

      </div>
    </div>
  )
}

export default App
