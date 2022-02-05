import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  
function InputList(props){
  
     
    return(
        <>

         <Box sx={{ flexGrow: 1 }}>
           <Container>
             
        <Grid item  xs={12} mt={4}>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell component="th" scope="row">S.no</StyledTableCell>

            <StyledTableCell component="th" scope="row">Name</StyledTableCell>
            <StyledTableCell component="th" scope="row">Location</StyledTableCell>
            <StyledTableCell component="th" scope="row">Date</StyledTableCell>
            <StyledTableCell component="th" scope="row">Units</StyledTableCell>
            <StyledTableCell component="th" scope="row">Type</StyledTableCell>
            <StyledTableCell component="th" scope="row">Points</StyledTableCell>
            <StyledTableCell component="th" scope="row">Action</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row,index) => (
            <StyledTableRow key={row.name}>
               <StyledTableCell component="th" scope="row">
                 {index + 1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.location}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.date}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.units}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.type}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.point}</StyledTableCell>
              <StyledTableCell component="th" scope="row"> <button onClick={()=>props.onEditTable(index)}>{row.editIcon}</button> &nbsp; &nbsp; <button onClick={()=>props.onDeletingTable(index)}>{row.deleteIcon}</button></StyledTableCell>



            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         
        </Grid>
           </Container>
         </Box>
      

        </>
    )
};

export default InputList;