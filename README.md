# Roaming Rovers <img src="/public/images/mars-icon.png" alt="icon" width="30" />

### _Exploring Mars with Curiosity, Spirit, and Opportunity_

### Feature - List

1. Explore images from each Martian Rover
   - search by rover
   - search by date
   - images would show info about what camera was used
2. Discover 'bio' information about each Rover
   - mission manifest
   - date landed
   - date mission ended (if applicable)
   - view specific images related to these particular events
3. Along with bio information, on individual rover pages show a slideshow of 'best' images
4. Since Curiosity is still active, option to show a slideshow of the most recent photos taken

### Components

1. `<NavBar />` on top
   - include NavLinks to all three rover detail pages
   - a Navlink that redirects you back to Home
2. `<Home />`
   - `<BestHits />` reel of best images from all rovers
   - Navlinks to each rover detail page with image of rover
3. `<RoverDetailSidebar />`
   - `<ImageSearch />` - search for images by earth date for each rover
   - Navlinks to different rover details
     1. `<RoverHighlight />`
     2. `<MissionDetails />`
     3. `<RoverDetails />`
4. `<RoverHighlight />` reel - best non-raw images for each rover
5. `<MissionDetails />` - date launched, date landed, discoveries, etc...
6. `<RoverDetails />` - size/shape of rover, cameras, other equipment
7. `<ImageDetails />` display queried image w/ info - date, camera, and rover
