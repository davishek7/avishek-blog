import homeImg from '../assets/home-bg.jpg'

export async function postsLoader(){

  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/blog`)
  const responseData = await response.json()
  const data = await responseData.data

  return {
    title: "Welcome Home",
    subtitle: "This is the homepage.",
    image: homeImg,
    headerType: "site-heading",
    subHeadingTag: "span",
    initialPosts: data.posts,
    nextOffset: data.offset + data.limit,
    total: data.total,
  }
}