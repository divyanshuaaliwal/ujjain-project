'use client'
import styles from "./page.module.css";
import { blogPosts } from "../Data/blogsData";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Image from "next/image";

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.blogContainer}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Temple Tales & Blog</h1>
                <div className={styles.titleUnderline}></div>
                <p className={styles.subheading}>
                    {"Dive into the myths, rituals, and history of Ujjain's sacred temples."}
                </p>

                <div className={styles.postsGrid}>
                    {currentPosts.map((post, index) => (
                        <div key={index} className={styles.card}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                className={styles.cardImage}
                                loading="lazy"
                            />
                            <h2 className={styles.cardTitle}>{post.title}</h2>
                            <p className={styles.date}>{post.date}</p>
                            <p className={styles.author}>By {post.author}</p>
                            <p className={styles.desc}>{post.description}</p>
                            <div className={styles.tags}>
                                {post.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* MUI Pagination */}
                <div className={styles.pagination}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        shape="rounded"
                        showFirstButton
                        showLastButton
                    />
                </div>

                <div className={styles.pageInfo}>
                    Page {currentPage} of {totalPages}
                </div>
            </div>
        </div>
    );
}
