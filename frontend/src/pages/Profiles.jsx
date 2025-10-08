import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profiles() {
  const nav = useNavigate();

  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    name: "",
    username: "",
    bio: "",
    profession: "",
    online: false,
  });

  const [isCreating, setIsCreating] = useState(false);

  async function getProfiles() {
    try {
      const res = await fetch("http://localhost:3000/profiles");
      const data = await res.json();

      setProfiles(data.profiles);
    } catch (error) {
      console.error(error);
    }
  }

  async function createProfile() {
    try {
      const res = await fetch("http://localhost:3000/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProfile),
      });

      const data = await res.json();
      console.log("New profile created:", data);

      setNewProfile({
        name: "",
        username: "",
        bio: "",
        profession: "",
        online: false,
      });

      setIsCreating(false);
      getProfiles();
    } catch (error) {
      console.error("Error creating profile", error);
    }
  }

  async function editProfile(id) {
    try {
      const updatedData = {
        bio: "Updated from frontend ✍️",
        online: true,
      };

      const res = await fetch(`http://localhost:3000/profiles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      console.log("Profile updated:", data);

      getProfiles(); // atualiza a tela
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  async function deleteUser(id) {
    try {
      const res = await fetch(`http://localhost:3000/profiles/${id}`, {
        method: "DELETE",
      });
      const data = res.json();

      if (data) {
        getProfiles();
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProfiles();
  }, []);

  useEffect(() => {
    console.log("Perfis atualizados:", profiles);
  }, [profiles]);

  return (
    <div className="profiles-container">
      <header className="profiles-header">
        <h1>Profiles</h1>
        <p>Meet the people behind the progress.</p>
      </header>

      {/* form */}

      {isCreating && (
        <div className="create-form">
          <input
            type="text"
            placeholder="Name"
            value={newProfile.name}
            onChange={(e) =>
              setNewProfile({ ...newProfile, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Username"
            value={newProfile.username}
            onChange={(e) =>
              setNewProfile({ ...newProfile, username: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Profession"
            value={newProfile.profession}
            onChange={(e) =>
              setNewProfile({ ...newProfile, profession: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Bio"
            value={newProfile.bio}
            onChange={(e) =>
              setNewProfile({ ...newProfile, bio: e.target.value })
            }
          />
          <label>
            <input
              type="checkbox"
              checked={newProfile.online}
              onChange={(e) =>
                setNewProfile({ ...newProfile, online: e.target.checked })
              }
            />
            Online
          </label>

          <div className="form-buttons">
            <button onClick={createProfile}>Save</button>
            <button onClick={() => setIsCreating(false)}>Cancel</button>
          </div>
        </div>
      )}

      <main className="profiles-content">
        {profiles.map((p) => (
          <div key={p.id} className="profile-card">
            <div className="avatar"></div>
            <h3>{p.name}</h3>
            <p className="profession">{p.profession}</p>
            <p className="bio">{p.bio}</p>
            <div className={`status ${p.online ? "online" : "offline"}`}>
              {p.online ? "Online" : "Offline"}
            </div>
            <button onClick={() => deleteUser(p.id)}>X</button>
          </div>
        ))}
      </main>
      <div className="buttons">
        <button onClick={() => setIsCreating(true)}>Create</button>

        <button className="mainpageBtn" onClick={() => nav("/")}>
          Main Page
        </button>
      </div>
    </div>
  );
}
