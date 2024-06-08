// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

// Part 1
const mainEl = document.querySelector("main");
const h1El = document.createElement("h1");
const subMenuEl = document.getElementById("sub-menu");

h1El.textContent = "DOM Manipulation";

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.appendChild(h1El);
mainEl.classList.add("flex-ctr");

subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");



// Part 2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");


// Part 3
for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement("a");
    a.setAttribute("href", "menuLinks[i].href");
    // const hrefValue = a.getAttribute("href");
    a.textContent = menuLinks[i].text;
    topMenuEl.append(a);
}

const topMenuLinks = [...document.querySelectorAll("#top-menu a")];
const subMenuLinks = [...document.querySelectorAll("#sub-menu a")]



topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (e.target.tagName !== "A") {
        return
    }
    console.log(e.target.textContent)

    // Add the active class to the element that was clicked unless it was already active, in which case it should remove it 
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
    }

    else {
        topMenuLinks.forEach((element) => {
            element.classList.remove('active')
        })
        e.target.classList.add('active');
    }

    // I haven't figured out how to stop ABOUT from triggering the submenu
    if (e.target.classList.contains('active')) {
        buildSubMenu(subMenuEl)
        for (let objs in menuLinks) {
            if ("subLinks" in menuLinks[objs]) {
                buildSubMenu(subMenuEl)
                console.log(menuLinks[objs])
                subMenuEl.style.top = "100%"
            }
        }
    }
    else {
        subMenuEl.style.top = "0"
    }
})

function buildSubMenu (arr) {
    
    document.getElementById("sub-menu").innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        const a = document.createElement('a')
        a.setAttribute('href', arr[i].href)
        a.textContent = arr[i].text
        arr.append(a)
    }
}

