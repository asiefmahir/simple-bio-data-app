function BioData (props) {
    console.log(props);
    return (
        <div className = "bio-data">
          <h2>
            Bio Data of {props.name}
          </h2>
          <hr />
          <div className = "personal-info">
            <h2>Personal Information</h2>
            <p>
              Name: {props.name}
            </p>
            <p>
              email: {props.email}
            </p>
            <p>
              Phone: {props.phone};
            </p>
          </div>
          <div className = "skills">
            <h2>Skills</h2>
            <ul>
                {props.skills.map(skill => (
                    <li>
                        {skill}
                    </li>
                ))}
            </ul>
          </div>
          <div className = "interests">
            <h2>Interests</h2>
            <ul>
                {props.interests.map(interest => (
                    <li>
                        {interest}
                    </li>
                ))}
            </ul>
          </div>
          <hr />
          <p>
            Referenced By: {props.referencedBy}
          </p>
      </div>
    )
}

export default BioData;