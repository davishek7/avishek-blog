import postImg from '../assets/post-bg.jpg'

export async function postDetailsLoader({ params }){

  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/blog/${params.slug}`)
  const responseData = await response.json()

  if (responseData.status !== 200){
    return {
      notFound: true
    }
  }

  const post = await responseData.data

  return {
    title: post.title,
    slug: post.slug,
    subtitle: post.subtitle,
    content: post.content,
    image: postImg,
    headerType: "post-heading",
    subHeadingTag: "h2",
    author: post.author.username,
    created_at: post.created_at
  }
}