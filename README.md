# Running instructions
- Requires Node Version ~`20.15.1`
- `cd scope-project`->`npm install` -> `npm run dev`-> should be serving on `localhost:3000`
- videos are grabbed from a hard coded user `ryan_rivera_prod`, if you'd like to change this its in the fetch call in `Home.jsx` on line 21 (Didn't made an envVar for this sry :/)
# How To
- using the upload/update button a user may add new videos for display
- easisiet way is to throw an embeddable youtube link into the video link input although any hosted mp4 should work
- a user may also toggle over to the update screen where they need to input a target video ID (this has to be manually grabbed from the backend or console.logged)
- a user may also search for videos in the navigation input in the navigation bar
# Design Choices
- React + Vite for a quick and sensible React boilerplate
- Headless CSS for easy and customizable Modals
- Youtube was an obvious source of design inspiration for displaying videos, keeps it very minimal and simple
- Simple responsive grid for the video layout, seems like the de-facto way to do this
- Functionality is relegated to searching/uploading and updating per specs (simple searching seemed nice and was easy to add)
- Didn't bother with any SPA libraries like gatsby becasuse it seemed like overkill for something this simple
- Used modals to show the expanded video display, no real need for a separate route for each video since the only extra information is a very simple comments section, although that was another way I could've approached it
- Focused on making it responsive and as simple as possible, goal was to show off production code that can be easily understood and extended by other engineers.
# Improvements
- Could've spent more time on bells and whistles like animations, font-awesome icons, and generally more extensive css. However I've built solid foundations for something like that to be possible. Focused on building the bones of a good responsive UX and not getting to crazy with the styling.
- Couldve used a router or a SPA library to handle the case where a user is looking at an expanded video and refreshes the page, only to be returned to the main view
- more error handling to notify them that they should not be submitting a blank comment or if a video id is invaid etc... there are comments in the code where this error should be handled however for the purposes of this I didn't bother with the implementation
- better css organizaton and more bells and whistles could be nice, however I think focusing on the pieces I did was the correct approach.
- Could've set up a way for a user to actually upload an mp4 file from their local disk however that would involve sending the file to a CDN or Blocb storage that i'd have to sign up and pay for. Just seemed like unnecessary extra work when we could just throw a youtube link at it. Doing it the fully complete and correct way would probably involve me enriching the existing API that you guys have built(or building my own in parralell), which didnt seem in scope.


