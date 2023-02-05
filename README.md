# Dancerush Frontend
Frontend for a website to view and search through a list of dancerush songs, utilises the dancerush song API (https://github.com/AJ-HH/dancerush). Made with React and Material-UI, can be viewed here: https://dancerush-song-viewer-ee159.web.app/

# Prototype
-Basic high fidelity prototype used as a guideline for designing the website
https://www.figma.com/file/KPj9nQxznpxcpMiRSScTPi/Dancerush-song-viewer?node-id=0%3A1&t=4kJEdjjsmexk14f9-1

# Known Issues

- ~~Song modal does not work for certain mobile devices. This has no consistency, on my phone (iPhone) and a friend (iPhone) it doesn't show the song details, while other friends (iPhone + Android) on different browsers (Safari, Firefox) it shows all the details. If you have an iPhone 12 it will not work for some reason.~~
Issue was due to using a prototype function that's not supported with some versions of iOS (Array.at)

- Second Heaven songs messes up the song card on mobile devices. This is because 'samba,samba,somebody' is treated as one word and because of its length, pushes out the image  

- On smaller devices, bringing up the modal will cause the background to jump to the top. This is because position: fixed is necessary to prevent weird scrolling behaviour on mobile devices. Is a common online issue, a necessary tradeoff
