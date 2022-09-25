import React from 'react'
import { useGetContactsQuery } from '../../../Redux/UserApi/User'
import Loader from '../../Shared/Loader/Loader'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AdminContainer from '../../Shared/AdminContainer/AdminContainer';
const Submissions = () => {
  let {isLoading  , data} = useGetContactsQuery()
  return (
<AdminContainer heading='Contact Submissions'>
<>
  {
    isLoading && <Loader></Loader>
  }
    <div className="flex flex-wrap gap-6 py-2 justify-center">
  {
    data && data.data.map((contact:any,index : number)=>{
      return (
     <Card key={contact._id}  sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Submission #{index + 1}
        </Typography>
        <Typography variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {contact.email}
        </Typography>
        <Typography variant="h6">
         {contact.phoneNo}
          <br />
        </Typography>   
        
        <Typography variant="body2">
         {contact.message}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <a
      className="cursor-pointer"
      href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=" + contact.email}
      target={"_blank"}
    >
      <Button size="small">Contact Now</Button>
    </a>
  
      </CardActions>
    </Card>
    )
    })
  }
  </div>
  </>

</AdminContainer>
  )
}

export default Submissions