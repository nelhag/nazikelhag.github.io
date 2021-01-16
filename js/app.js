
const mainHeader = document.querySelector('.main-header')
const Toggling = require('nelhag.github.io/js/utils/Toggling.js')
const Slide=require('nelhag.github.io/js/utils/Slide.js')
const Tabs=require('nelhag.github.io/js/utils/Tabs.js')
const Contact=require('nelhag.github.io/js/utils/Contact.js')
const togglings = new Toggling()
togglings.toggleTheme()
const slides = new Slide()
slides.openNav()
slides.closeNav()


const tab = new Tabs()
tab.openProject()
const contacts= new Contact()
contacts.submitContact()
