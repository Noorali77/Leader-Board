import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import InputList from '../InputList/InputList';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function InputField (props){
 const[enteredName,setEnteredName] = useState('');
 const[enteredLocation,setEnteredLocation] = useState('');
 const[enteredDate,setEnteredDate] = useState('');
 const[enteredUnits,setEnteredUnits] = useState('');
 const[enteredType,setEnteredType] = useState('');
 const[enteredPoint,setEnteredPoint] = useState('');
 const[value,setValue] = useState([]);
 const[update,setUpdate] = useState(false)
 const[enteredIndex,setEnteredIndex] = useState(null);
 const[error,setError] = useState(false)



 const nameChangeHandler = (event)=>{
     setEnteredName(event.target.value);
 }
  
 const locationChangeHandler = (event)=>{
    setEnteredLocation(event.target.value);
}

const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value);
}

const unitsChangeHandler = (event)=>{
    setEnteredUnits(event.target.value);
}

const typeChangeHandler = (event)=>{
    setEnteredType(event.target.value);
}

const pointChangeHandler = (event)=>{
    setEnteredPoint(event.target.value);
}

    const recordAddHandler = ()=>{
        let recordData = {
            name : enteredName,
            location : enteredLocation,
            date : enteredDate,
            units : enteredUnits,
            type : enteredType,
            point : enteredPoint,
            editIcon : <EditIcon/>,
            deleteIcon : <DeleteIcon/>
        }
    
        if(recordData.name.length !=0 && recordData.location.length !=0 && recordData.units.length !=0 && recordData.date.length !=0 && recordData.type.length !=0 && recordData.point.length !=0){
            setEnteredName('');
        setEnteredLocation('');
        setEnteredDate('');
        setEnteredUnits('');
        setEnteredType('');
        setEnteredPoint('');
        setError(false)
    
        setValue((prevValues)=>{
    
            return [...prevValues,recordData];
    
        })
        }

        if(recordData.name.length ==0 || recordData.location.length ==0 || recordData.units.length==0 || recordData.date.length ==0 || recordData.type.length ==0 || recordData.point.length ==0){
             
            setError(true)


        }



          
    }; 

    const recordClearHandler = ()=>{
        setValue([]);
    }
    

 const deletingTable = (index)=>{
    let arr = [...value];
    arr.splice(index,1);
    setValue(arr)
 }

 const editingTable = (index)=>{
     setUpdate(true)
    setValue((prevState)=>{
        setEnteredName(prevState[index].name);
        setEnteredLocation(prevState[index].location);
        setEnteredDate(prevState[index].date);
        setEnteredUnits(prevState[index].units);
        setEnteredPoint(prevState[index].point);
        setEnteredType(prevState[index].type);
        setEnteredIndex(index)
        
        //  prevState.splice(index,1)
        return [...prevState]
           
    });
 };


   const recordUpdateHandler = ()=>{
       setUpdate(false)
       console.log(enteredIndex);
       let recordData = {
        name : enteredName,
        location : enteredLocation,
        date : enteredDate,
        units : enteredUnits,
        type : enteredType,
        point : enteredPoint,
        editIcon : <EditIcon/>,
        deleteIcon : <DeleteIcon/>
    };

    
    let arr=[...value];
    arr[enteredIndex] = recordData;
    setValue(arr);

    setEnteredName('');
    setEnteredLocation('');
    setEnteredDate('');
    setEnteredUnits('');
    setEnteredType('');
    setEnteredPoint('');


  

   }

   const recordCancelHandler = ()=>{
    setUpdate(false);
    setEnteredName('');
    setEnteredLocation('');
    setEnteredDate('');
    setEnteredUnits('');
    setEnteredType('');
    setEnteredPoint('');



   }
 


       

    return(
        <>

           
           <Box sx={{ flexGrow: 1}}>
               <Container >
      <Grid container spacing={2} >
 

        <Grid item  xs={12} mt={4} >
          <Typography variant='h4' align='center'>

              LeaderBoard
          </Typography>
        </Grid>
   
      </Grid>


      <Grid container spacing={2}>
 

 <Grid item  lg={4} md={6} sm={6} xs={12} mt={4}>
       
 <TextField value={enteredName} onChange={nameChangeHandler} id="outlined-basic" label="Name" variant="outlined" fullWidth />
 </Grid>
        
        
 <Grid item  lg={4} md={6} sm={6} xs={12} mt={4}>
       
       <TextField value={enteredLocation} onChange={locationChangeHandler} id="outlined-basic" label="Location" variant="outlined" fullWidth/>
       </Grid>

       
 <Grid item  lg={4} md={6} sm={6} xs={12} mt={4}>
 <TextField value={enteredDate} onChange={dateChangeHandler} id="outlined-basic" type='date' variant="outlined" fullWidth/>

 
       
       </Grid>

 
       <Grid item  lg={4} sm={6} md={6} xs={12} mt={4}>
       
       <TextField value={enteredUnits} onChange={unitsChangeHandler} id="outlined-basic" type='number' label="Units" variant="outlined" fullWidth />
       </Grid>
              
              
       <Grid item lg={4} md={6} sm={6} xs={12} mt={4}>
             
             <TextField value={enteredType} onChange={typeChangeHandler} id="outlined-basic" label="Type" variant="outlined" fullWidth/>
             </Grid>
      
             
       <Grid item  lg={4} md={6} sm={6} xs={12} mt={4}>
       <TextField value={enteredPoint} onChange={pointChangeHandler} id="outlined-basic" label="Point" variant="outlined" fullWidth/>

             
             
             </Grid>

             
     {
         error &&  <Typography sx={{margin:'auto'}} color='error' variant='subtitle1' align='center'>
         Every Field must be filled!
        </Typography>            

     }

                  
       <Grid item sm={12} sx={{ marginBottom:'20px',display : 'flex',justifyContent : 'center'}}>
              

      

           {
        update ? (
            <>

            <Button variant="outlined" onClick={recordUpdateHandler}>Update Record</Button>

        <Button variant="outlined" sx={{marginLeft:'20px'}} color='error' onClick={recordCancelHandler}>Cancel</Button>
        </>
        )
        

        
        :(
            <>

        <Button variant="outlined" onClick={recordAddHandler}>Add Record</Button>
        <Button variant="outlined" sx={{marginLeft:'20px'}} color='error' onClick={recordClearHandler}>Clear Records</Button> 
        </>
        )

           }
        

             
             </Grid>
      
                 

</Grid>    
                <InputList data={value} onDeletingTable={deletingTable} onEditTable={editingTable}/>


      </Container>
    </Box>
          


        </>
    )
}

export default InputField;