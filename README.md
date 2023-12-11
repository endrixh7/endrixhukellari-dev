# endrixhukellari.dev

## My cool portofolio using React and Tailwind

### First lets dive in to Tailwind CSS
    Brief overview
        - Core concepts
        - Utility-First Fundamentals
        - Customizing colors (color palette)
            - Design system
                - Padding
                - Marging
                - Width
                - Hover, Focus and Other States
                - Responsive Design
                - Dark Mode
                - Reusing Styles
                - Adding Custom Styles
                - Functions & Directives
                - Flexbox & Grid
                - and Much More!

## Project Setup
    - Install Tailwind CSS with Vite
    - Configure tailwind.config.js
    - Template Path
    - Add the Tailwind directives to our CSS (index.css)
    - npm run dev
    - Start using Tailwind in our project
    - Hover on classes to se the explanation in pure CSS ✅
    - Done ✅✅✅

## Additional Assets
    - Install extra libraries
    - First component - Navbar
    - Images from Undraw
    - Install nanoid and react-icons
    - Install Tailwind extensions from the VS Code marketplace
        - tailwind css intellisense
        - tailwind Fold
        - Done ✅

## Navbar Component
    - Lets take a look at data.jsx
    - Lets create the 'component folder'
    - Lets create Navbar.jsx
        - Dont forget to render on the App.jsx using fragment
    - Lets continue with Navbar.jsx
        - add css class from the Tailwind
    Done ✅
    - Challenge: find align-self in Tailwind ❌

## Custom Class 
    - Add our own class and avoid repetition
    - How to do it?
        - Go to index.css
            - @layer components{
                .align-element {
                    @apply mx-auto max-w-7xl px-8
                }
            }
        - Now go to the element/component and set our class name
            - example: <div className='align-element' </div>
        - Done ✅❤️😎

## Skills Section
    - Info about our skills
    - Apply global styles
    - Take a look at data, what we are going to apply on our website (skills)
        - info: We can apply directly our styles in array within the data object
        - We also can apply pure CSS


### https://tailwindcss.com/docs/text-color
## https://www.css3.info/preview/box-shadow/
## https://colorhunt.co/palette/fdf7e4faeed1ded0b6bbab8c -> Colors
## https://coolors.co/palette/d8f3dc-b7e4c7-95d5b2-74c69d-52b788-40916c-2d6a4f-1b4332-081c15 -> CTA Colors 
