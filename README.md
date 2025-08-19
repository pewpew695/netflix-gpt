# Features:

- Login/Sign Up
  - Sign In/Sign up Form
  - Redirect to Browse Page
- Browse (After Authentication)
  - Header
  - Main Movie
    - Trailer in Backgroun
    - Title & Description
    - Movie Suggestions
      - Movie Lists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestion

# Process:

- Created project using Vite Framework
- Imported Tailwind CSS into our project
- Header
- Routing of App
- Build Login Form
- Build Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our App to production
- Create SignUp user Account
- Implement SignIn/SignUp API
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in Redirect /browse to Login Page & vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Moved Hardcoded values to constants file
- Register to TMDB API to get access token
- Get Data from TMDB API using fetch
- Custom Hook for now Playing Movies
- Create Movie Slice
- Update store with movies Data
- Planning for MainContainer & SecondaryContainer
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embeded the youtube video and make it autoplay and mute
- Tailwind Classes to beautify MainContainer
- Build SecondaryContainer
