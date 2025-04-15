#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# To change the student profile picture:
# Replace the URL below with your preferred image URL
# Supported formats: jpg, png, svg
curl -o public/images/student.jpg "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop&auto=format"

# To change mentor profile pictures:
# Replace these URLs with your preferred image URLs
# Make sure to keep the same filenames (mentor1.jpg, mentor2.jpg, mentor3.jpg)
curl -o public/images/mentor1.jpg "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&auto=format"
curl -o public/images/mentor2.jpg "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format"
curl -o public/images/mentor3.jpg "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop&auto=format"

# To change university logos:
# Replace these URLs with your preferred logo URLs
# Make sure to keep the same filenames (snu-logo.png, yonsei-logo.png, korea-logo.png)
curl -o public/images/snu-logo.png "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Seoul_National_University_logo.svg/1200px-Seoul_National_University_logo.svg.png"
curl -o public/images/yonsei-logo.png "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Yonsei_University_logo.svg/1200px-Yonsei_University_logo.svg.png"
curl -o public/images/korea-logo.png "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Korea_University_logo.svg/1200px-Korea_University_logo.svg.png"

# To change the school logo:
# Replace this URL with your preferred logo URL
# Make sure to keep the same filename (school-logo.png)
curl -o public/images/school-logo.png "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Seoul_International_School_logo.svg/1200px-Seoul_International_School_logo.svg.png" 