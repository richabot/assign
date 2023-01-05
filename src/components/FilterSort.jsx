import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks, getfilter} from "../Redux/action";

const FilterSort = () => {
  const dispatch = useDispatch();


  const [searchParams, setSearchParams] = useSearchParams();

  const data = useSelector((state) => state.reducer.books);
  const urldepartment = searchParams.getAll("department");
  const urlocation = searchParams.getAll("location");
  const [location,setLocation]=useState([])
  const [department, setDepartment] = useState( []);
  const [newdata,setNewdata]=useState(data)
  //filtering 

  const handleChange = (e) => {
  
   

   
    const option = e.target.value;



if(e.target.id=="department")
{
  setDepartment(e.target.value)
  

}
else if(e.target.id=="location")
{
  setLocation(e.target.value)
  
}


  };

  const getfiltered=(params)=>{
let tempDept = []
 tempDept=data.filter((r)=>{
  if(r.department){

    return  r.department?.title==params.dept 
  }
})
console.log(tempDept,"filtwr")
// dispatch(getfilter());

dispatch(getfilter(tempDept))

}




  useEffect(() => {
    
    let params = {};
department && (params.dept = department);
location && (params.loc=location)
console.log(params,"params")
setSearchParams(params); 
getfiltered(params)


  }, [department, location,searchParams]);

 
  //reseting
  const handleReset = () => {
    if (department ) {
      
      setDepartment([]);
      dispatch(getBooks());
    }
  };

  return (
    <div
      style={{
        width: "250px",
        border: "1px solid",
        paddingLeft: "1%",
        height: "95vh",
        fontSize: "18px",
      }}
    >
      <h3>Filter</h3>
      <div> 
       
     
       
      </div>
       


      <select
              name="location"
              id="location"
            

              onChange={handleChange}
            >
              <option value="">Select location</option>
              <option value="Verna">verna</option>
              <option value="Chicago">Chicago</option>
              <option value="margao">margao</option>
            </select> 
            <select
              name="department"
              id="department"
             

              onChange={handleChange}
            >
              <option value="">Select department</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Customer Success">Customer Success</option>
            </select> 



           







      
      <div>
        <button onClick={handleReset}>Reset Filter</button>
      </div>
    </div>
  );
};

export default FilterSort;
