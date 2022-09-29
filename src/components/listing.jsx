import { FetchUsers } from "./hooks";

const Listing = () => {
    // Uses the hook to Fetch the list of users
  const users = FetchUsers();

  return (
    <div className="users-listing">
        {/* Maps the list of users and their details onto the page */}
      {users.map((user, key) => (
        <div className="user-container" key={key}>
          <div className="user-heading">
            <div className="user-name">
              {user.name} <span id="user-un">({user.username})</span>
            </div>

            <div className="user-id">ID: {user.id}</div>
          </div>
          <div className="user-body">
            <div className="email">
              <span id="body-title">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="phone">
              <span id="body-title">Phone:</span>
              <span>{user.phone}</span>
            </div>
            <div className="website">
              <span id="body-title">Website:</span>
              <span>
                <a href={user.website}>{user.website}</a>
              </span>
            </div>
            <div className="address">
              <span id="body-title">Address:</span>
              <span>
                {user.address.suite}, {user.address.street}, {user.address.city}
              </span>
            </div>
            <div className="company">
              <span id="body-title">Company:</span>
              <span>{user.company.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
