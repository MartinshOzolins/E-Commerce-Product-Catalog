import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/context";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const {
    email,
    password,
    fullName,
    setEmail,
    setPassword,
    setFullName,
    isAuthenticated,
  } = useContext(GlobalContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) return navigate("/authentication");
  }, [isAuthenticated, navigate]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedFullName, setEditedFullName] = useState(fullName || "John Wick");
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPassword, setEditedPassword] = useState(password);

  const handleSave = () => {
    setFullName(editedFullName);
    setEmail(editedEmail);
    setPassword(editedPassword);
    setIsEditing(false);
  };

  return (
    <>
      {!isAuthenticated ? null : (
        <div className="w-full flex flex-col items-center px-1">
          <h1 className="text-xl font-semibold mb-4">Profile</h1>
          <div className="space-y-4 w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            {isEditing ? (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Name:</label>
                  <input
                    type="text"
                    value={editedFullName.split(" ")[0]}
                    onChange={(e) =>
                      setEditedFullName(
                        e.target.value + " " + editedFullName.split(" ")[1]
                      )
                    }
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Surname:</label>
                  <input
                    type="text"
                    value={editedFullName.split(" ")[1]}
                    onChange={(e) =>
                      setEditedFullName(
                        editedFullName.split(" ")[0] + " " + e.target.value
                      )
                    }
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Email:</label>
                  <input
                    type="email"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Password:</label>
                  <input
                    type="password"
                    value={editedPassword}
                    onChange={(e) => setEditedPassword(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={handleSave}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <p>
                  <strong>Name:</strong>{" "}
                  {fullName
                    ? fullName.split(" ")[0]
                    : editedFullName.split(" ")[0]}
                </p>
                <p>
                  <strong>Surname:</strong>{" "}
                  {fullName
                    ? fullName.split(" ")[1]
                    : editedFullName.split(" ")[1]}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Password:</strong> {password}
                </p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Edit Account
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
