// import { entries } from "core-js/fn/array";

const animatedScrollObserver = new IntersectionObserver( // Observers are obj which spots something in real time
    (entries, animatedScrollObserver) => { // all the entries, have to add the second argument to access it at the end inside the function
        entries.forEach((entry) => { //this is checking for each entry, if it is in the current viewport
            if(entry.isIntersecting) { // if the entry is intersecting w the view port
                entry.target.classList.add('enter'); // if it is, add new css class to the element
                animatedScrollObserver.unobserve(entry.target); // then once this class is added we don't need to observe the element any more
            }
        })
    }
);

export default {
    bind(el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el); // so we can see the element 
    }
}