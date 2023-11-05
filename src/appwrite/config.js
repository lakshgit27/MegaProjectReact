import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";   



export class Service{
    // create variables as same in auth.js and kab call hone chaiye jab aapka constructor method call ho.
    client = new Client();
    databases;
    bucket;

    constructor(){
       this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }
    //Creating  post method
    async createPost({title,slug, content,featuredImage,status,userId }){
        try {
            return await this.databases.createDocument(conf.appwriteCollectionId, conf.appwriteDatabaseId,slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,

                })
        } catch (error) {
            console.log("Appwrite service :: createPost :: Error", error)
            
        }
    }

    //updating post method
    async updatePost(slug ,{title,content,featuredImage,status }){
        try {
         return await this.databases.updateDocument(conf.appwriteCollectionId, conf.appwriteDatabaseId,slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,

            })
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: Error", error)
            
        }

    }

    // deleting the post method 

    async deletePost(slug){
    try {
        return await this.databases.deletePost(conf.appwriteCollectionId, conf.appwriteDatabaseId,slug,

        )
        return true
        
    } catch (error) {
        console.log("Appwrite service :: createPost :: Error", error);
        return false
    }
}

  // for getting the post document (for getting a single post)

   async getPost(slug){
    try {
        return await this.databases.deletePost(conf.appwriteCollectionId, conf.appwriteDatabaseId,slug,)
        
        
    } catch (error) {
        console.log("Appwrite service :: createPost :: Error", error);

        
    }
   }
   // for getting only those posts whose status is active. (using query)
     async getPosts(queries= [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteCollectionId, conf.appwriteDatabaseId,queries,)
        } catch (error) {
            console.log("Appwrite service :: createPost :: Error", error);
            return false;
        }
     }

    // for uploading the file 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: Error", error);
            return false;
        }
    }

// for deleting the file
    async deleteFile(file){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
               fileId,
            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: Error", error);
            return false;
        }
    }
 // get file preview method 
    getFilePreview(fileId){
        
    }






}


// for exporting the Service as an object ek naye (service) variable mei store krwa kar export kr diya

const service = new Service();
export default service;