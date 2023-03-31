import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import styles from "@/styles/Blog.module.css";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  const router = useRouter();

  // useEffect(()=>{
  //   const {slug} = router.query;
  //  fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {

  //       console.log("data in slug", parsed);
  //       setBlog(parsed)

  //     });
  // },[router.isReady]);

  const { slug } = router.query;

  console.log(slug);
  return (
    <div className={styles.container}>
      {" "}
      <h1> Title of the blog {blog.title}</h1>
      <hr />
      <p className={styles.blogContent}>{blog.content} </p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}


export default Slug;

