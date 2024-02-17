import { createRouter, createWebHistory } from 'vue-router';
// components
import Home from './pages/Home/Home.vue';
import Users from './pages/User/Users.vue';
import UserIndex from './pages/User/UserIndex.vue';
import UserPage from './pages/User/UserPage.vue';
import EditUser from './pages/User/EditUser.vue';
import Post from './pages/Post/Post.vue';
import PostIndex from './pages/Post/PostIndex.vue';
import PostPage from './pages/Post/PostPage.vue';
import EditPost from './pages/Post/EditPost.vue';
import CreatePost from './pages/Post/CreatePost.vue';

const routes = [
    { path: '/' , name: 'home' , component: Home },

    { path: '/users' , name: 'users' , component: Users , children: [
        { path: '' , name: 'user-index' , component: UserIndex },
        { path: ':id' , name: 'user-page' , component: UserPage }, 
        { path: '/EditUser/:id' , name: 'edit-user' , component: EditUser }
    ]},

    { path: '/posts' , name: 'posts' , component: Post , children: [
        { path: '' , name: 'post-index' , component: PostIndex },
        { path: ':id' , name: 'post-page' , component: PostPage }, 
        { path: '/EditPost/:id' , name: 'edit-post' , component: EditPost },
        { path: '/CreatePost' , name: 'create-post' , component: CreatePost },  
    ]}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;