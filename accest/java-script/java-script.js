const laungesbar = document.querySelector("#launges-option-wrapper")

const laungesinput = document.querySelector('.launges-btn span')

const laungesbtn = document.querySelector('.launges-btn')


const optionlist = document.querySelectorAll(".option")


function laungesbaropen() {


    laungesbar.classList.toggle("launges-bar-active")
    laungesbtn.classList.toggle("arrow-changes")
    console.log("dsf")
}

optionlist.forEach(anymame => {


    anymame.addEventListener('click', function() {
        laungesinput.innerHTML = anymame.querySelector("span").innerHTML;
        laungesbar.classList.remove("launges-bar-active")
        document.querySelector(".option-active").classList.remove("option-active")
        anymame.classList.add("option-active")
        laungesbtn.classList.remove("arrow-changes")



    })

})


// header infoemaytion /

function headeropen() {
    document.querySelector(".top-header-bar").classList.toggle("top-header-bar_active")
}


// window.addEventListener("load", function() {
//     swal("Well-Come!", "Thanks For Visit For My Web-Site!");

// })


const preloader = document.querySelector(".preloader")

window.addEventListener('load', function() {
    preloader.style.display = "none";
})

function login() {
    swal("Sorry ", "Now Login Funcation Is Not Available");

}


// domain-list show //


const domainchossesbtn = document.querySelector(".domain-scelect-btn");

const domainchossestex = document.querySelector(".domain-scelect-btn span");



const domainwrapper = document.querySelector("#domain-list")

const domainsingle = document.querySelectorAll(".domain")



console.log(domainchossestex.innerHTML)

function domainwraper_active() {
    domainwrapper.classList.toggle("domain-wrapper_active")
    domainchossesbtn.classList.toggle("doamin-arrow-up")
}



domainsingle.forEach(domain_element => {
    domain_element.addEventListener('click', function() {
        domainchossestex.innerHTML = domain_element.innerHTML;
        document.querySelector(".domain-active").classList.remove("domain-active")
        domain_element.classList.add("domain-active")
        domainwrapper.classList.remove("domain-wrapper_active")
        domainchossesbtn.classList.remove("doamin-arrow-up")
    })
})


// 

const search_overly_area = document.querySelector(".search-overly")

function search_overly_active() {
    search_overly_area.classList.add("search_overly_active")
}

function search_overly_remove() {
    search_overly_area.classList.remove("search_overly_active")
}



const mobilesearchbar = document.querySelector(".mobile-search-var-area");

function mobile_search_overly_active() {
    mobilesearchbar.classList.toggle("mobile_search_overly_active")
}

function mobile_search_overly_remove() {
    mobilesearchbar.classList.remove("mobile_search_overly_active")
}

//desktop-main-nav-bar scroll effect //


const navbars = document.querySelector(".nav-bar")

const desktopnavbars = document.querySelector(".desktop-main-nav-bar")

let scrollup = document.querySelector("#scroll-up")


window.addEventListener('scroll', function() {


    if (this.window.pageYOffset >= 150) {
        navbars.classList.add("nav-scroll-active")
        desktopnavbars.classList.add("nav-scroll-active")
        scrollup.style.display = "block";

    } else {
        navbars.classList.remove("nav-scroll-active")
        desktopnavbars.classList.remove("nav-scroll-active")
        scrollup.style.display = "none";



    }

})


// c

const pricingtabwrapper = document.querySelector(".pricing-tab-wrapper");

const pricing_button_element = pricingtabwrapper.querySelectorAll(".pricing-changes-btn a")

const pricing_tab_element = pricingtabwrapper.querySelectorAll("#pricing-tab")

console.log(pricing_tab_element)


for (let pricong_tab = 0; pricong_tab < pricing_button_element.length; pricong_tab++) {
    pricing_button_element[pricong_tab].addEventListener('click', function() {
        document.querySelector(".pricong-chages-btn-active").classList.remove("pricong-chages-btn-active")
        pricing_button_element[pricong_tab].classList.add("pricong-chages-btn-active")
        document.querySelector(".pricing-tab-active").classList.remove("pricing-tab-active")
        pricing_tab_element[pricong_tab].classList.add("pricing-tab-active")
    })
}



const validatornewsletter = document.querySelector("#validator-newsletter")

const footetinput = document.querySelector("#footer-input")
const footetbtn = document.querySelector("#footer-btn")

let flag = 1;




function footerinputvalict() {

    if (footetinput.value == "") {
        footetinput.style.border = "1px solid red";
        flag = 0;
    } else {
        validatornewsletter.innerHTML = "";
        footetinput.style.border = "1px solid white"
        footetinput.value = "";
        flag = 1;
        // swal("Submited!", "Your Massages Is Send!", "success");


    }



    if (flag) {
        return true;



    } else {
        return false;


    }

}



const mobilenav = document.querySelector("#mobile-nav-bar");



function mobilenav_open() {
    mobilenav.classList.add("mobile-nav_active")
}



function mobilenav_close() {
    mobilenav.classList.remove("mobile-nav_active")
}


const dropdownwrapper = document.querySelector(".mobile-nav-menu-area")


const dropdown_btnelement = dropdownwrapper.querySelectorAll(".drop-dwon-button")

const dropdownelement = dropdownwrapper.querySelectorAll("#dropdown-menu")



for (let drop = 0; drop < dropdown_btnelement.length; drop++) {
    dropdown_btnelement[drop].addEventListener('click', function() {
        dropdown_btnelement[drop].classList.toggle("drop-down-arrow-active")

        dropdownelement[drop].classList.toggle("drop-dwon-active")
    })
}