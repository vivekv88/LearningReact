import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../appwrite/conf";
import { Button, Container } from "../../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.UserId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    console.log("Post data:", post);
                    console.log("Featured Image ID:", post.FeaturedImage);
                    setPost(post);
                }
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate, userData]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                if (post.FeaturedImage) {
                    appwriteService.deleteFile(post.FeaturedImage);
                }
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                {post.FeaturedImage && (
                    <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                        <img
                            src={appwriteService.getFilePreview(post.FeaturedImage)}
                            alt={post.Title}
                            className="rounded-xl w-full max-h-[500px] object-contain"
                        />
                        
                        {isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3 cursor-pointer">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" className="cursor-pointer" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                )}
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.Title}</h1>
                </div>
                <div className="browser-css">
                    {post.Content ? parse(post.Content) : <p>No content available</p>}
                </div>
            </Container>
        </div>
    ) : null;
}

