<template>
    <div class="blog-page">
      <h1 class="blog-heading">Welcome to My Blog</h1>
  
      <!-- Add a login form -->
      <div v-if="!loggedIn" class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input v-model="username" id="username" type="text" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" id="password" type="password" required />
          </div>
          <div class="form-actions">
            <button type="submit" class="action-button">Login</button>
          </div>
        </form>
      </div>
  
      <!-- Show blog entries -->
      <div class="blog-list">
        <div class="blog-card" v-for="(post, index) in blogPosts" :key="index">
          <div class="blog-card-header">
            <h3>{{ post.title }}</h3>
            <div class="blog-card-actions" v-if="loggedIn">
              <button @click="editPost(post)" class="action-button">Edit</button>
              <button @click="confirmDelete(post)" class="action-button">Delete</button>
            </div>
          </div>
          <p>{{ post.content }}</p>
        </div>
      </div>
  
      <!-- If logged in, show CRUD operations and insert form -->
      <div v-if="loggedIn">
        <div class="form-container">
          <div class="form">
            <h2>{{ editing ? 'Edit Post' : 'Create New Post' }}</h2>
            <form @submit.prevent="editing ? updatePost() : insertPost()">
              <div class="form-group">
                <label for="title">Title</label>
                <input v-model="formData.title" id="title" type="text" required :disabled="!loggedIn" />
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea v-model="formData.content" id="content" rows="4" required :disabled="!loggedIn"></textarea>
              </div>
              <div class="form-actions">
                <button type="submit" class="action-button" :disabled="!loggedIn">{{ editing ? 'Save Changes' : 'Create Post' }}</button>
                <button type="button" @click="resetForm" class="action-button" :disabled="!loggedIn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <!-- Delete confirmation modal -->
      <div class="modal" v-if="confirmDeleteModal">
        <div class="modal-content">
          <p>Are you sure you want to delete this post?</p>
          <div class="modal-actions">
            <button @click="deletePost" class="action-button">Yes, Delete</button>
            <button @click="cancelDelete" class="action-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogPosts: [], // Store blog posts
        formData: {
          title: '',
          content: '',
        },
        editing: false,
        confirmDeleteModal: false,
        postToDelete: null,
        loggedIn: false,
        username: '',
        password: '',
      };
    },
    methods: {
      loadBlogPosts() {
        // Load blog posts from localStorage
        const storedData = localStorage.getItem('blogPosts');
        if (storedData) {
          this.blogPosts = JSON.parse(storedData);
        }
      },
      saveBlogPosts() {
        // Save blog posts to localStorage
        localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
      },
      insertPost() {
        if (this.validateForm()) {
          this.blogPosts.push({ title: this.formData.title, content: this.formData.content });
          this.saveBlogPosts();
          this.resetForm();
        }
      },
      editPost(post) {
        this.formData.title = post.title;
        this.formData.content = post.content;
        this.editing = true;
      },
      updatePost() {
        if (this.validateForm()) {
          const index = this.blogPosts.findIndex(
            (post) => post.title === this.formData.title
          );
          if (index !== -1) {
            this.blogPosts[index].content = this.formData.content;
            this.saveBlogPosts();
            this.resetForm();
          }
        }
      },
      confirmDelete(post) {
        this.postToDelete = post;
        this.confirmDeleteModal = true;
      },
      deletePost() {
        if (this.postToDelete) {
          const index = this.blogPosts.indexOf(this.postToDelete);
          if (index !== -1) {
            this.blogPosts.splice(index, 1);
            this.saveBlogPosts();
            this.postToDelete = null;
            this.confirmDeleteModal = false;
          }
        }
      },
      cancelDelete() {
        this.postToDelete = null;
        this.confirmDeleteModal = false;
      },
      resetForm() {
        this.formData.title = '';
        this.formData.content = '';
        this.editing = false;
      },
      validateForm() {
        if (!this.formData.title || !this.formData.content) {
          alert('Please fill in both title and content fields.');
          return false;
        }
        return true;
      },
      login() {
        // Check if the username and password match
        if (this.username === 'aleena' && this.password === 'demo') {
          this.loggedIn = true;
        } else {
          alert('Invalid username or password. Please try again.');
          this.username = '';
          this.password = '';
        }
      },
    },
    mounted() {
      this.loadBlogPosts();
    },
  };
  </script>
  
    
  <style scoped>
  /* Global styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  
  /* Blog page styles */
  .blog-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s ease-in;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .blog-heading {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }
  
  /* Login form styles */
  .login-form {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 20px;
    animation: fadeIn 0.5s ease-in;
  }
  
  .login-form h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input[type="text"],
  .form-group input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
  }
  
  .form-actions {
    text-align: center;
  }
  
  .form-actions button {
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .form-actions button:hover {
    background-color: #2980b9;
  }
  
  /* Blog list styles */
  .blog-list {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  
  .blog-card {
    background-color: #f9f9f9;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .blog-card h3 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 10px;
  }
  
  .blog-card p {
    color: #555;
  }
  
  .blog-card-actions {
    text-align: right;
  }
  
  .blog-card-actions button {
    padding: 5px 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 0.9em;
    margin-left: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .blog-card-actions button:hover {
    background-color: #2980b9;
  }
  
  /* Form container styles */
  .form-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .form {
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease-in;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    animation: fadeIn 0.3s ease-in;
  }
  
  .modal p {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .modal-actions {
    text-align: center;
  }
  
  .modal-actions button {
    padding: 5px 10px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 0.9em;
    margin-left: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .modal-actions button:hover {
    background-color: #c0392b;
  }
  </style>
    