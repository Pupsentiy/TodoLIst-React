import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    background: '#ffffff59',
    margin: '0 auto',
    padding: '50px',
    borderRadius: '20px',
    maxWidth: '1000px',
    boxShadow: '0px 0px 20px 1px #e95c3a',
    overflow: 'auto',
    maxHeight: '400px',
    scrollbarColor: "#458245 #714826",
    scrollbarWidth: 'auto'

  },
  block__form: {
    display: 'flex',
    marginBottom: '15px',
  },
  editTask: {
    width: '100%'
  },
  block__tasks: {
    display: 'flex',
    justifyContent:'center'
  },
  completed: {
    background: '#323838',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '5px',
    textDecoration: 'line-through',
    boxShadow: '0px 0px 9px 0px #61eb80;',
    margin: '5px 0px',
    width: '80%',
  },
  notСompleted: {
    backgroundColor: '#c1cdcd8f',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '5px',
    boxShadow: '0px 0px 7px 0px #eb7661;',
    margin: '7px 0px',
    width: '80%',
  },
  taskText: {
    width: '100%',
    wordBreak: 'break-all',
    padding: '5px'
  },
  colorIcon: {
    color: 'black',
    margin: '0px 10px',
    cursor: 'pointer',
    '&:active':{
      color: '#e95c3a',
    }
  },
  editInput: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: '5px',

    },
    fontSize: '20px',
  },
  form: {

    '&&': {
      "& lebel .Mui-focused ": {
        color: '#e95c3a',
      },
      '&.Mui-focused fieldset': {
        borderColor: "#e95c3a",
        color: 'red'
      },
      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        fontSize: '20px',
        padding: '10px',
      }
    },
  },
  buttDisabled: {
    '&&': {
      '&.Mui-disabled': {
        opacity: '0.1',
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