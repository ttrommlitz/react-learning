import { useNavigate } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetupForm"

const SERVER_URL = 'https://react-learning-backend-b5f8a-default-rtdb.firebaseio.com/'

const NewMeetupPage = () => {
  const navigate = useNavigate()

  const addMeetupHandler = (meetupData) => {
    fetch(
      `${SERVER_URL}/meetups.json`,
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate("/", { replace: true })
    })
  } 
  
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetupPage