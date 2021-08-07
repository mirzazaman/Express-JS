import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Edit from '../edit/Edit';
import { useSelector } from 'react-redux';
import useTable from './useTable';

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin:"auto"
  },
  container: {
    maxHeight: '100%',
  },
});

export default function MainTable() {
  const [tableLoading] = useTable()
  const classes = useStyles();
  const List = useSelector(store => store.newState)
  console.log("Table", List);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Role</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {List.map((item)=>{
              return(
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.class}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell><Edit item={item}/></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
            {tableLoading ? <div><center>Loading...</center></div> : null}
    </Paper>
  );
}
