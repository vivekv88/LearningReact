import config from '../config/config'

import { Client, ID, Databases, Storage, ImageGravity } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket; // storage

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, content, slug, FeaturedImage = null, userId, status = "active"}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    Title: title,
                    Content: content,
                    FeaturedImage: FeaturedImage,
                    Status: status,
                    UserId: userId
                }
            );
        } catch (error) {
            console.error("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    async updatePost(slug, {title, content, FeaturedImage = null, status}) {
        try {
            const documentData = {
                Title: title,
                Content: content,
                FeaturedImage: featuredImage || "", // Ensure FeaturedImage is always included
                Status: status
            };

            console.log("Updating post with data:", documentData);
            
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                documentData
            );
        } catch (error) {
            console.error("Appwrite service :: updatePost :: error", error);
            return false;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )

            return true;

        } catch (error) {
            console.log("AppWrite service :: deletePost :: error");
            return false;
        }
    }

    async getPost(slug) {
        try {
            const response = await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return response;
        } catch (error) {
            console.error("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = []) {
        try {
            console.log("Database ID:", config.appwriteDatabaseId);
            console.log("Collection ID:", config.appwriteCollectionId);
            console.log("Queries:", queries);
            
            const response = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
            
            console.log("Response:", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: getPosts :: error", error);
            console.error("Error details:", {
                message: error.message,
                code: error.code,
                type: error.type
            });
            return false;
        }
    }

    async uploadFile(file){
        try {
            const fileId = ID.unique();
            return await this.bucket.createFile(
                config.appwriteBucketId,
                fileId,
                file,
                ["users"]
            );
        } catch (error) {
            console.error("AppWrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.error("AppWrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        if (!fileId) {
            console.error("Error: No fileId provided to getFilePreview()");
            return null;
        }
        return `https://cloud.appwrite.io/v1/storage/buckets/${config.appwriteBucketId}/files/${fileId}/view?project=${config.appwriteProjectId}&mode=admin`;
    }
    
}

const service = new Service();

export default service;