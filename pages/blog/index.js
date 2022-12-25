import BlogPostsContainer from '@/components/containers/BlogPostsContainer';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <>
      <BlogPostsContainer posts={posts} heading='Latest Posts' />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://dev.to/api/articles?username=wdp&per_page=3'
  );
  const posts = await res.json();
  return {
    props: {
      posts: posts.map(post => ({
        title: post.title,
        image: post.cover_image,
        altTag: post.title,
        content: post.description,
        link: post.url,
        linkText: 'Read more',
      })),
    },
  };
}
