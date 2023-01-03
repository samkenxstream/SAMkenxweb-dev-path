import CardsColumns from '@/components/containers/CardsColumns';
import Card from '@/components/containers/Card';
import Title from '@/components/snippets/Title';
import Link from 'next/link';
import styles from '@/styles/Blog.module.scss';
import RevealContentContainer from '@/components/containers/RevealContentContainer';

function* splitPosts(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

const BlogPostsContainer = ({ posts, heading, swipe = true }) => {
  // process posts props (e.g. insert default image)
  posts.map(post => {
    if (!post.image) {
      post.image = '/images/svg/blogImage.svg';
    }
    return post;
  });

  return (
    <RevealContentContainer>
      <div className={styles.blogContainer}>
        {heading ? <Title customClass='blogTitle' title={heading} /> : null}
        {
          // put in rows of 3 if more than 3 posts (for swipable cards)
          swipe ? (
            <>
              {[...splitPosts(posts, 3)].map((p, index) => (
                <CardsColumns key={index} cards={p} customClass='blog' />
              ))}
              <Link className={styles.viewAll} href='/blog/category/all'>
                view all
              </Link>
            </>
          ) : (
            <div className={styles.postContainer}>
              {posts.map((p, index) => (
                <Card customClass='blog' key={index} card={p} />
              ))}
            </div>
          )
        }
      </div>
    </RevealContentContainer>
  );
};

export default BlogPostsContainer;
