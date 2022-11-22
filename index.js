async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    const filteredPosts = posts.filter(item => item['userId'] === 1)
    console.log(filteredPosts)
}

getData()