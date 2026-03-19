# React Native - Konstfok

## Final assignment in app development course
Project made during my third semester of two year higher vocational education in frontend / web development.

### Features
#### Browse Artwork
- Fetches random paintings from the Art Institute of Chicago API on load
- Swipe through results in a carousel

#### Search Artwork
- Search for paintings by keyword via the API
- Results are filtered to only show paintings & open source artworks

#### Select a Painting
- Pick a painting from the carousel to use as your timer reference image

#### Drawing Timer: 
- Set a timer duration with a slider
- Full-screen view of the selected painting while the timer counts down
- A cover gradually reveals the painting as time passes

#### Artwork Details
- Tap a painting to open a details view with title, artist, and description

### Further Development
#### Backlog - On further development, I will look into: 
**Features**
- Favorites: Save and revisit favourite paintings
- Play a sound when the timer runs out
- Refresh random images when tapping the "random" tab again

**UI**
- Improve the header and CTA button
- Restore the tab bar, with a new tab for app info and data/image sources
- Improve regexp filtering of descriptions — add line breaks and format the text nicely

**Search & Browse**
- Feedback when a search returns no results
- Ensure no duplicates appear in the carousel
- Reset FlatList scroll position on new search

**Performance**
- Caching — avoid re-fetching data that has already been loaded
- Context - split into two — one for dispatch and one for state or consider `useMemo`

### Stack

#### Core
- **React** — UI library
- **React Native** — cross-platform mobile framework
- **Expo** — toolchain and build system
- **Expo Router** — file-based navigation
- **TypeScript** — static typing

#### Data
- **Art Institute of Chicago API** — artwork data source

#### Other UI Libraries
- **React Native Slider** — slider for setting timer duration input
- **Expo Google Fonts** (Gudea, Google Sans Code) — custom typography

#### AI
The purpose of this course was to further enhance my programming skills and to secure understanding on the topic. Therefore, the code is written manually. Claude and Gemini have been employed as tutors, for feedback on the code and for pedagogical explainations on new topics.

## Main takeaways

> # Assignment - Machine translated from Swedish
>
> ## Final Project App Development F25
>
> ### Purpose
>
> This project is your chance to show what you can do. During the course you have learned React Native, Expo, and more TypeScript. You also bring a lot of knowledge from previous courses. This is the opportunity to use all of that in one place, in a project that you build yourself from scratch.
>
> Try to focus on the right things! 😛
>
> The focus is not on building something big or visually impressive. What will be assessed is how you write TypeScript, how you use React, how you structure your code into files and folders, how you think about Expo and routing, and how you handle real-world problems such as API calls, errors, and reusable code.
>
> Show that you understand what you are doing — not just that it works.
>
> Choose an idea that feels fun. It shows in the final product and makes the project more valuable to showcase. When the project is finished, you should be able to include it in your portfolio and stand behind every technical decision you have made.
>
> The goal is not to fully finish the app. This project is your chance to show what you can do.
>
> ---
>
> ### Assignment Description
>
> You will independently plan and build a mobile app in React Native using Expo and TypeScript. You decide what the app should do.
>
> The app must be unique within the class and must meet all requirements for your target grade level. You must also be able to justify your decisions.
>
> **SHOUT if you need help!!!**
>
> ---
>
> ### Presentation
>
> You will have an individual meeting where you present your final project to the teacher.
>
> ---
>
> ### Submission
>
> Submission takes place in Classroom.
>
> ---
>
> ### Grading Requirements
>
> **DRY = Don't Repeat Yourself**
> Repeated code must be extracted. This can include styling or logic moved into separate components or functions. If you notice that you have written the same or similar code in multiple places, it is a sign that something should be abstracted.
>
> ---
>
> ### Pass (G)
>
> #### App and Functionality
>
> Your app must:
>
> - Use **Expo Router** for navigation with at least three screens
> - Fetch data from a unique external public API and display it in the app
> - Use at least two endpoints in the API
> - Handle loading and error states for API calls (e.g. show a spinner and an error message)
> - Have a clear and useful structure in code, files, and folders
> - Run without errors in your setup, e.g. Expo Go
> - Include a clean and clear README
>
> #### Expo
>
> Create a new project with Expo using a blank TypeScript template.
>
> ```bash
> npx create-expo-app@latest --template
> ```
>
> Use what works for your setup.
>
> ### React
>
> React is the foundation of everything you build in this project. It is not enough that the app works — you must use React in a way that shows you understand how the library is intended to be used.
>
> #### For a Pass you must:
>
> - Split the app into separate components in a logical way
> - Use `useState` and `useEffect` correctly and understand when and why they are used
> - Pass props clearly and consistently between components
> - Avoid unnecessary re-renders, for example by not defining functions or objects inside render without reason
>
> ---
>
> ### TypeScript
>
> TypeScript is a core requirement in this project — not an add-on. It is not enough that the files are named `.tsx`. You must use TypeScript in a meaningful way.
>
> #### For a Pass you must:
>
> - Type props for all custom components using `type` or `interface`
> - Avoid using `any`
> - Type the return value from API calls correctly
> - Not ignore TypeScript errors by commenting them out or using `// @ts-ignore`
>
> #### Use at least this configuration in your `tsconfig`:
>
> ```json
> {
>   "extends": "expo/tsconfig.base",
>   "compilerOptions": {
>     "strict": true,
>     "noUnusedLocals": true,
>     "noUnusedParameters": true,
>     "noImplicitReturns": true,
>     "noImplicitAny": true,
>     "exactOptionalPropertyTypes": false,
>     "noFallthroughCasesInSwitch": true,
>     "allowUnreachableCode": false
>   }
> }
> ```
>
> ➡️ **The TypeScript compiler must run without errors!**
>
> ---
>
> ## Independent Learning
>
> Part of this project is to show that you can learn independently. You are expected to read documentation for the technologies you use and look up how things are intended to work rather than guessing.
>
> You may use AI tools as support, but not to generate code that goes directly into the project. AI can be helpful for understanding concepts, asking for explained examples, or reasoning about how something works — but the code you submit must be written and understood by you.
>
> During the presentation you must be able to explain what your code does and why you wrote it the way you did.
>
> ---
>
> ## Pass with Distinction (VG)
>
> ### App and Functionality
>
> All Pass requirements must be met. In addition, the app must include:
>
> - Dynamic routing (navigation with parameters, e.g. list → detail view)
> - Search or filtering of API data handled on the client
> - Some functionality beyond communicating with the API
> - An API that is not overly simple
>
> ---
>
> ## React (VG)
>
> At the VG level you must show that you think about how your components and state are organized — not just that they work.
>
> This means you:
>
> - Extract logic into at least one custom hook (e.g. for handling an API call or a form)
> - Give each component a clear responsibility
> - Use `useMemo` or `useCallback` where justified and be able to explain why
> - Be able to discuss how you structured your code during the presentation
>
> ---
>
> ## TypeScript (VG)
>
> At the VG level you must show that you use TypeScript to make your code safer and clearer — not just because it is required.
>
> This means you:
>
> - Use `type` or `interface` consistently and name them descriptively
> - Use generics where relevant
> - Use union types or optional properties where relevant
> - Avoid workarounds unless they are well justified
>
> ---
>
> ## Robust Code
>
> At the VG level your code is expected to handle unexpected situations. This means you validate data from the API before using it, handle empty responses, `null` values, and edge cases such as an empty list or a missing expected field. The app should not crash or display incorrect information when something unexpected happens.
>
> ---
>
> ## Independent Learning (VG)
>
> At the VG level it should be clear that you have actively looked up how things should be done correctly, not just how they can be done.
>
> During the presentation you are expected to:
>
> - Refer to documentation or sources that influenced how you solved something
> - Explain why you made a specific technical decision and what the alternative would have been
> - Show that you understand the difference between code that works and code that is well written
>
> This is one of the most important aspects at the VG level. The further you progress in your education, the more you are expected to find, evaluate, and use information independently.
>
> This may mean using things in your final project that were not covered in the course but that you discovered on your own.
>
> ---
>
> ## Base Groups
>
> Base groups exist for your benefit so you have people to meet with daily and discuss your projects. This is practice in daily standups and communication.
>
> ---
>
> ## FAQ
>
> **Q: Can I build my own backend?**
> A: It is not the focus of the course and does not affect your grade.
>
> **Q: Do I have to choose a unique API?**
> A: Yes. You must choose an API that no other student in the class has chosen.
> However, talk to the teacher if you think the rule should be broken.
>
> **Q: Can I use component libraries?**
> A: Yes. You are welcome to use a component library, but it is not required.
