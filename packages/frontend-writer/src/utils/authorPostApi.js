import { fetchWithToken } from "./authApi"; 

const base_url = `${import.meta.env.VITE_API_URL}/posts/author`
    || 'http://localhost:3000/posts/author'

async function getAuthorPosts() {
    const url = `${base_url}`
    try {
        const response = await fetchWithToken(url);
        const data = await response.json();
        console.log('Post API response:', data.posts);
        return data.posts
    } catch (err) {
        throw err
    }
}

async function addPost(post){
    const method = 'POST'
    const url = `${base_url}`
    console.log("url:", url)
    console.log("post:", post)

    try {
        const response = await fetchWithToken(url, method, post) 
        const data = await response.json()
        return data
    } catch (err) {
        throw err
    }
}

async function editPost(postId, updatedPost) {
    const url = `${base_url}/${postId}/edit`
    const method = 'PUT'
    const body = updatedPost
    try {
        const response = await fetchWithToken(url, method, body)
        const data = await response.json()
        return data
    } catch (err) {
        throw err
    }
}

export { getAuthorPosts, addPost, editPost };