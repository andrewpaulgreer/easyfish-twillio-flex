import React from "react";
import { Icon } from "@twilio/flex-ui";

// It is recommended to keep components stateless and use redux for managing states
export default class NoteForm extends React.Component {
    const [note, setNote] = useState("")

    const handleInputChange = event => {
        const {value} = event.target;
        setNote(value)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        // POST to the database/ activecampaign

    }
  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "50%",
          padding: "10px",
          marginTop: "15px",
        }}
      >
        <form style={{ padding: 10, margin: "auto" }}>
          <h1
            style={{
              color: "black",
              fontSize: "30px",
            }}
          >
            Notes
          </h1>
          <div>
            <h1>Please Choose which type of contact method was used: </h1>
            <select
              name="cars"
              id="cars"
              style={{
                width: "405px",
                marginBottom: "10px",
                marginTop: "10px",
                height: "30px",
              }}
            >
              <option value="call">Call</option>
              <option value="text-message">Text Message</option>
              <option value="chat-bot">Chat Bot</option>
              <option value="email">Email</option>
              <option value="other">Other</option>
            </select>
          </div>
          <textarea
            style={{ height: "200px", width: "400px" }}
            placeholder="Type Notes...."
          />
          <div>
            <button
              style={{
                height: "50px",
                width: "405px",
                backgroundColor: "green",
                color: "white",
                borderRadius: 5,
              }}
            >
              {" "}
              Save
              <Icon icon="Accept" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
