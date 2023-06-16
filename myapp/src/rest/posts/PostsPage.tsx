import { PostsList } from './PostsList';
import { PostData } from '../types';
import { NewPostForm } from './NewPostForm';
import { savePost } from './savePost';
import { assertIsPosts, getPosts } from './getPosts';
import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function PostsPage() {
  // const data = useLoaderData();
  // assertIsData(data);

  const { isLoading, isFetching, data: posts } = useQuery(['postsData'], getPosts);
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
    },
  });

  if (isLoading || posts === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }
  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={mutate} />
      {/* {isFetching ? <div>Fetching ...</div> : <PostsList posts={posts} />} */}
      <PostsList posts={posts} />
      {/* <Suspense fallback={<div>loading...</div>}>
        <Await resolve={data.posts}>
          {(posts) => {
            assertIsPosts(posts);
            return <PostsList posts={posts} />;
          }}
        </Await>
      </Suspense> */}
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
