import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  //to forcefully convert into boolean use !! two times as 
  //single vala dono pe work krta hai but ab only true pe krega
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const addBlog = async (blog) => {
    try {
      await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(blog),
      });
      fetchBlogs();
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const handleLogin = () => {
    setAuthenticated(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  useEffect(() => {
    if (authenticated) {
      fetchBlogs();
    }
  }, [authenticated]);

  return (
    <div className="container">
      <h1>Blog Platform</h1>
      {authenticated ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <BlogForm addBlog={addBlog} />
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <BlogList blogs={blogs} />
          )}
        </>
      ) : (
        <>
          <button onClick={() => setShowLogin(true)}>Login</button>
          <button onClick={() => setShowSignup(true)}>Signup</button>
          {showLogin && <LoginForm onLogin={handleLogin} />}
          {showSignup && <SignupForm />}
        </>
      )}
    </div>
  );
}

export default App;