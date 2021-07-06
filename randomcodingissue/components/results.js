import styles from "../styles/Home.module.css";

const results = ({ result }) => {
  return result.map((post) => {
    return (
      <div key={post.postName}className={styles.card}>
        <h2>{post.postName}</h2>
        <p>Issue: {post.error} </p>
        <h1>
          Solution: <code>{post.resolution}</code>
        </h1>
      </div>
    );
  });
};

export default results;
