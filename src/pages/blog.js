import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";

function Blog(props) {
  const [blogx, setBlog] = useState(props.blogs);
  console.log(props)
  // useEffect(() => {
  //   let datax = fetch("http://localhost:3000/api/blog")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //       console.log("data is", parsed);

  //       console.log("data is", blogx);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <h1 className="pb">Popular Blogs</h1>

      {blogx &&
        blogx.map((item,index) => {
          return (
            <div key={index} className={styles.header}>
              <Link href={`/blogpost/${item.slug}`}>
                <h2>{item.title}</h2>
              </Link>
              <p className={styles.pContent}>{item.content.substring(0,150)}...</p>
            </div>
          );
        })}

      {/* <div className={styles.header}>
      <h2>How to learn  python</h2>
      <p>we can learn python through many open source materials</p>
    </div>

    <div className={styles.header}>
      <h2>How to learn java</h2>
      <p>we can learn java through many open source materials</p>
    </div> */}
    </div>
  );
}

export default Blog;

export async function getServerSideProps(context) {

  let data = await fetch("http://localhost:3000/api/blog");
  let blogs = await data.json();

  return {
    props: {blogs}, // will be passed to the page component as props
  }
}

// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

