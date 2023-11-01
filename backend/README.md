# Kisi JavaScript Backend Challenge

💫 Welcome! 🎉

[🚀 Live Backend](https://kisi-js-fs-imupload-production.up.railway.app/)

### Running the Server

1. Clone the repository:

   ```bash
     git clone git@github.com:mikdadayan/Kisi-JS-FS-Imupload.git
   ```

2. Change the directory

   ```bash
     cd backend
   ```

3. Install the dependencies

   ```bash
     npm install
   ```

4. Add the `.env` file in the backend directory,
   copy the keys from `.env.local` file and set your values

5. Run the project
   ```bash
     npm run dev
   ```

## API Endpoints

1. **_GET_** `/api/images` - Returns a list of articles populated with the images,
   Example:

```
 {
    "success": true,
    "msg": "Articles Fetched successfully.",
    "data": [
        {
            "title": "The Importance of Physical Access Security",
            "description": "Learn why physical access security is crucial for protecting people and assets.",
            "imageUrl": "/image.png"
        },
    ]

 }
```

2.  **_POST_** `/api/images` - Allow users to upload new images. Returns artilce populated with the new uploaded image.
    Example:

        ```
        {
        "success": true,
        "msg": "File uploaded successfully.",
        "data": {
            "title": "The Benefits of Access Control Systems",
            "description": "Discover how access control systems can help you manage physical access to your facility more effectively.",
            "imageUrl": "/image71698849371444.png"
        },
        "error": {}
        ```

    }

## Security

- **Rate Limiting**: Applied rate limiting in the endpoint levels to prevent abuse of the API.
- **Validation**: Ensures that only valid data is processed.
- **Secure Headers**: Implemented using Helmet to set various HTTP headers.

## Dependencies

- `cors`: Enable CORS with various options.
- `express-rate-limit`: Basic rate-limiting middleware for Express.
- `express`: Express middleware for validating requests.
- `helmet`: Secure Express apps by setting various HTTP headers.
- `multer`: Promise-based Node.js ORM for SQL databases.
- `dotenv`: SQLite client for Node.js.

## Development Dependencies

- `nodemon`: Automatically restart the application when file changes are detected.
