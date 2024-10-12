import './App.css';
import Posts from './components/Posts';
import BlogFormComponent from './components/BlogForm';
import NavbarComponent from './components/NavBar';
import { useState } from 'react';
import Home from './components/Home'; 
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [createPost, setCreatePost] = useState(false);
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "JAVASCRIPT",
      body: `JavaScript is the world's most popular
      lightweight, interpreted compiled programming
      language. It is also known as a scripting
      language for web pages. It is well-known for
      the development of web pages; many non-browser
      environments also use it. JavaScript can be
      used for client-side developments as well as
      server-side developments.`,
      author: "Simran Tomar",
      imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    
    {
      title: "Data Structure",
      body: `There are many real-life examples of
      a stack. Consider an example of plates stacked
      over one another in the canteen. The plate
      which is at the top is the first one to be
      removed, i.e., the plate which has been placed
      at the bottommost position remains in the
      stack for the longest period of time. So, it
      can be simply seen to follow LIFO (Last In
      First Out) / FILO (First In Last Out) order.`,
      author: "Vibhav Tomar",
      imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      title: "Algorithm",
      body: `The word Algorithm means “a process
      or set of rules to be followed in calculations
      or other problem-solving operations”. Therefore,
      an algorithm refers to a set of rules/instructions
      that step-by-step define how work is to be
      executed in order to get the expected
      results.`,
      author: "Vaishali Gaur",
      imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      title: "Computer Network",
      body: `An interconnection of multiple devices,
      also known as hosts, that are connected using
      multiple paths for the purpose of sending/
      receiving data media. Computer networks can
      also include multiple devices/mediums which
      help in the communication between two different
      devices; these are known as Network devices
      and include things such as routers, switches,
      hubs, and bridges.`,
      author: "kanishk Shrivastava",
      imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },

  ]);

 
  const switchView = (view) => {
    setCurrentView(view);
    setCreatePost(false); 
  };

  const handleCreatePostToggle = () => {
    setCreatePost((prevState) => !prevState);
  };

  const addBlogPost = (newPost) => {
    setBlogPosts((prevPosts) => [...prevPosts, newPost]);
  };

 
  return (
    <div className="main-container">
      <NavbarComponent switchView={switchView} handleCreatePostToggle={handleCreatePostToggle} /> {/* Pass switchView and handleCreatePostToggle to NavbarComponent */}

      {currentView === 'home' && (
        <div>
          {createPost 
            ? <BlogFormComponent addBlogPost={addBlogPost} onchange={handleCreatePostToggle} />
            : <Posts blogPosts={blogPosts} />
          }
        </div>
      )}

      {currentView === 'about' && <About />} 
      {currentView === 'contact' && <Contact />} 
    </div>
  );
}

export default App;
