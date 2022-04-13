import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: 'column',
    background: '#ffffff59',
    margin: '0 auto',
    padding: '30px',
    width: '80%',
    borderRadius: '20px',
    maxWidth: '1000px',
    boxShadow: '0px 0px 20px 1px #e95c3a',
    overflow:'hidden',
  },
  block__form: {
    display: 'flex',  
    marginBottom: '15px',
    overflowY: 'auto',

  },
  block__tasks: {
    display: 'flex',
    justifyContent:'center',
    maxHeight: '400px',
  },
  editTask: {
    display: 'flex',
  },
  completed: {
    background: '#323838',
    alignItems: 'center',
    display: 'flex',
    gap: '5px',
    borderRadius: '5px',
    textDecoration: 'line-through',
    boxShadow: '0px 0px 9px 0px #61eb80;',
    margin: '5px 0px',
  },
  notСompleted: {
    backgroundColor: '#c1cdcd8f',
    alignItems: 'center',
    display: 'flex',
    gap: '5px',
    borderRadius: '5px',
    boxShadow: '0px 0px 7px 0px #eb7661;',
    margin: '5px 0px',
  },
  taskText: {
    minWidth: '400px',
    wordWrap: 'break-word',
    maxWidth: '500px',
  },
  colorIcon: {
    color: 'black',
  },
  editInput: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: '5px',
    },
    fontSize: '20px',
    minWidth: '336px',
  },
  form:{
    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
      fontSize:'20px',
      padding:'10px',
    color:'black',

    }
  },
  buttDisabled:{
    '&&':{
      '&.Mui-disabled':{
        opacity:'0.1',
      }
    }
    
  },

  // root:{
  //   margin:'5px',
  //   "&&":{
  //   borderRadius:'45px',
  //     '&:hover':{
  //       background:'red'
  //     }
  //   }
  // }

})