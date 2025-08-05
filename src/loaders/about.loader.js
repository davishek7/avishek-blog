import aboutImg from '../assets/about-bg.jpg'

export function aboutLoader(){
  return {
    title: "About Me",
    subtitle: "This is what I do.",
    image: aboutImg,
    headerType: "page-heading",
    subHeadingTag: "span"
  }
}