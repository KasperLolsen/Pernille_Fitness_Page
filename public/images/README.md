# Images Directory

This directory is for storing all static images used in the Pernille Fitness website.

## Usage

1. Place your image files (jpg, png, webp, svg, etc.) directly in this folder
2. Reference them in your React components like this:

```jsx
// Example usage in a React component
<img src="/images/your-image-name.jpg" alt="Description of image" />
```

## Organization Tips

- Use descriptive filenames (e.g., `hero-banner.jpg`, `trainer-profile.png`)
- Consider creating subfolders for different sections if needed:
  - `/images/testimonials/`
  - `/images/services/`
  - `/images/gallery/`

## Image Optimization

For better performance:
- Compress images before adding them (use tools like TinyPNG or ImageOptim)
- Use modern formats like WebP when possible
- Keep file sizes under 200KB for better page loading speed
- Use appropriate dimensions (avoid uploading oversized images)

## Accessing Images in Code

Since these images are in the public folder, they'll be available at the root URL of your site.

For example, if your site is deployed at `https://pernille-fitness.com`, an image at `/public/images/banner.jpg` would be accessed at `https://pernille-fitness.com/images/banner.jpg`. 