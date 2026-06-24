import { useEffect, useState } from "react";

function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);
    if (!user) {
        return <h2>Please Login</h2>;
    }
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    };
    return (
        <div className="app-container profile-page">
            <div className="card profile-card">
                <h1>My Profile</h1>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <div className="profile-actions">
                  <button className="btn" onClick={handleLogout}>
                      Logout
                  </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;