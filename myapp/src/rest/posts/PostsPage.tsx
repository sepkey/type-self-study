import { useEffect, useState } from 'react';
import { getPosts } from './getPosts';
import { PostsList } from './PostsList';
import { PostData, NewPostData } from '../types';
import { NewPostForm } from './NewPostForm';
import { savePost } from './savePost';

export function PostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    let cancel = false;
    getPosts().then((data) => {
      if (!cancel) {
        setPosts(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancel = true;
    };
  }, []);

  async function handleSave(newPostData: NewPostData) {
    const newPost = await savePost(newPostData);
    setPosts([newPost, ...posts]);
  }

  if (isLoading) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }
  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={handleSave} />
      <PostsList posts={posts} />
    </div>
  );
}
