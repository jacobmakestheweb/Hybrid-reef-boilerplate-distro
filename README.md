# Simple Starter For Easy And Lean Front-End Web Dev

  recipe:

  + Reefjs - minimal state based UI component rendering
  + Easy Toggle State - style toggle switches with HTML attributes 
  + Chota - minimal, extensible UI styles
  + Emotion - minimal CSS in JS util lib
  + Snowpack - HMR and simple dev-server/build

## Purpose & Explanation

   TLDR: take some strings containg some html, put them in an object, and pipe the object into a bigger string 
   which becomes the whole DOM. update the object's state, update the DOM, and get on with life.
  
   I really like these libraries and their emphasis on being lean. They each combine really well to create a very simple 
  UI component system for the browser. It sorta combines FP and OOP styles.

   Basically everything the DOM is composed of becomes a template string literal, pointing to either a string list 
  of CSS classes or a HTML data attribute which encodes a JS function for style class switching. These are generic 
  functions abstracted via the Easy Toggle State Library for ceating toggle swtiches/buttons in HTML. In other words, 
  Easy Toggle State makes it so we don't have to write almost any functions related to styles (or none at all if we choose).
  Instead we have an object of string literals which point to these data-attributes that ETS provides, and then pass those 
  into the component template. Even if you never use this starter, check out this library as it makes style switching 
  very simple without having to write any JS.

## Reefjs

   Reef makes the whole process really simple by providing a suuuupperrr easy way to render these html templates. Reef is
  my favorite library for rendering UI as that is all it does, and as such it is an order of magnitude smaller than all of its
  peers such as React, or Vue. it provides a simple object, which you can fill with data to pass in props, set and get 
  functions if needed, and a pointer to a HTML template literal, which is what we plop our string of CSS selectors and 
  HTML attributes into. Reef doesn't seem to get alot of attention, but Reef is very much worth looking into if you want a 
  very simple and easy way to render components and manage DOM state.

## Emotionjs

   On the CSS side of things, EmotionJS provides CSS in JS with the same minimal approach as the last two libraries. We don't 
  have to do anything fancy except provide a template string containg some style rules, and then call the provided function
  to bind that to a JS variable, which generates a class name in the DOM. This library is super powerful, and lets us 
  do so much in terms of style manipulation, or it can just provide a way to write CSS in a JS component, and generate
  class names on the fly, which we pass in as a prop to the template. I sound like a broken record, but this library is super
  handy for writing CSS in JS, especially if you want to write CSS directly inside your component script regardless of
  your choice of framework.
  
## ChotaCSS

   Lastly, Chota provides a super clean (and tiny, one of the smallest) stylesheets with OOCSS (object oriented CSS)
  patterns and utilites. In just a few Kb it gives us a responsive grid, styled elements, and root set of CSS variables
  for easy customization and theme switching. The semantic HTML style lets us write class styles that describe the templates 
  look and feel, instead of very specific classes which describe whole components. I write the classes as yet another
  JS string literal and just pass it in locally to the template as one prop via Reef.
  
## Use Case

   The use case for this I imagine is something like a replacement for Preact, so any web page that has to be concerned
  with state based UI but is not going to get huge in scale. In addition, it gives me an easier way to think about front-end 
  in general, especially organized, object oriented CSS patterns. I want to flesh this out so any time i wanna make a visually 
  expressive UI, I can reach for this component system. Don't get me wrong, for now this is no replacement for Elm, Svelte, 
  or what i'm currently learning, Yew. Your UI framework/compiler of choice will probably still be your favorite, but hopefully 
  this lil distro acts as some food for thought.

## To Do

  +  actually finish it 
  +  figure out gzipped size of combined pkgs
  +  lighthouse test it
  +  build some tools for creating component boilerplate, configuring components, composing them in consistent patterns, generating page layouts / themes and generating SFC's from HTML and CSS ( shell scripts ofc (; )

## Shout-out 

   All of the credit goes to the maintainers of these awesome libraries! Make sure to star their projects. 
   Its only because of them that this awesome DX is possible.

## Get Started

   git clone this repo and yarn install. 

   run snowpack dev, and then be sure to RTFM's of each package to see exactly how it works !


  

