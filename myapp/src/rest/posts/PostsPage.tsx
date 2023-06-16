import { PostsList } from './PostsList';
import { PostData } from '../types';
import { NewPostForm } from './NewPostForm';
import { savePost } from './savePost';
import { assertIsPosts } from './getPosts';
import { useLoaderData, Await, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function PostsPage() {
  const navigate = useNavigate();
  const data = useLoaderData();
  assertIsData(data);

  const queryClient = useQueryClient();
  const { mutate } = useMutation(savePost, {
    onSuccess: (savedPost) => {
      queryClient.setQueryData<PostData[]>(['postsData'], (oldPosts) => {
        if (oldPosts === undefined) {
          return [savedPost];
        } else {
          return [savedPost, ...oldPosts];
        }
      });
      navigate('/');
    },
  });

  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={mutate} />
      {/* {isFetching ? <div>Fetching ...</div> : <PostsList posts={posts} />} */}
      <Suspense fallback={<div>Fetching...</div>}>
        <Await resolve={data.posts}>
          {(posts) => {
            assertIsPosts(posts);
            return <PostsList posts={posts} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}
type Data = {
  posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== 'object') {
    throw new Error("Data isn't an object");
  }
  if (data === null) {
    throw new Error('Data is null');
  }
  if (!('posts' in data)) {
    throw new Error("data doesn't contain posts");
  }
}
