import Post from "../components/Post";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Posts() {
  const { initialPosts, nextOffset, total } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const [posts, setPosts] = useState(initialPosts);
  const [offset, setOffset] = useState(nextOffset);

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchMorePosts = async () => {
    const res = await fetch(`${apiUrl}/blog?limit=10&offset=${offset}`);
    const responseData = await res.json();
    const data = responseData.data;

    setPosts((prev) => [...prev, ...data.posts]);
    setOffset(offset + data.limit);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {initialPosts.length == 0 ? (
                <p style={{ textAlign: "center" }}>No posts found!</p>
              ) : (
                <InfiniteScroll
                  dataLength={posts.length}
                  next={fetchMorePosts}
                  hasMore={posts.length < total}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>You’ve seen it all!</p>
                  }
                >
                  {posts &&
                    posts.length > 0 &&
                    posts.map((post) => (
                      <Post
                        key={post.id}
                        title={post.title}
                        slug={post.slug}
                        subtitle={post.subtitle}
                        author={post.author.username}
                        created_at={post.created_at}
                      />
                    ))}
                </InfiniteScroll>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
