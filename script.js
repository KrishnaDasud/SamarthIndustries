const products = [
    {
        id: "mech-adapter",
        name: "Mech Adapter",
        cat: "ms",
        label: "MS COMPONENT",
        desc: "MS flange components for pipeline connections and fabricated assemblies.",
        long: "MS rings can be manufactured according to required dimensions, thickness and project drawings.",
        image: "./mechadapter.png",
        spec: {
            Material: "Mild Steel",
            Type: "Fabricated Ring",
            Size: "As per requirement",
            Finish: "As specified",
            Application: "Engineering"
        }
    },

    {
        id: "mech-bend", 
        name: "Mech Bends", 
        cat: "ms", 
        label: "MS COMPONENT", 
        desc: "MS flange components for pipeline connections and fabricated assemblies.", 
        long: "MS flanges are supplied for pipeline connection and engineering applications according to required dimensions.", 
        image: "./assets/images/mechbend.png", 
        spec: { Material: "Mild Steel", 
            Type: "Flange", Size: "As per requirement", 
            Pressure: "As specified", 
            Finish: "As specified" }
    },

    { 
        id: "patch-clamp", 
        name: "patch-clamp", 
        cat: "di", label: "DI PIPE COMPONENT", 
        desc: "Mechanical joint components for DI pipe pipeline systems.", 
        long: "Mechanical joint components for water supply and infrastructure pipeline applications.", 
        image: "./assets/images/patch-clamp.png", 
        spec: { Material: "As specified", 
            Type: "Mechanical Joint", 
            Size: "As per requirement", 
            Pressure: "As specified", 
            Application: "DI Pipeline" }
         },
    { 
        id: "mech-teejoint", 
        name: "Mech Teejoints", 
        cat: "di", 
        label: "DI PIPE COMPONENT", 
        desc: "Collar components for DI pipe jointing and pipeline connections.", 
        long: "MJ collars are suitable for pipeline connection and jointing applications.", 
        image: "./assets/images/mechteejoint.png", 
        spec: { Material: "As specified", 
            Type: "MJ Collar", 
            Size: "As per requirement", 
            Finish: "As specified" } 
        },
    { 
        id: "dismantling", 
        name: "MS Dismantling Joints", 
        cat: "ms", 
        label: "MS COMPONENT", 
        desc: "Dismantling joints for easier installation and maintenance of pipeline fittings.", 
        long: "Dismantling joints can help provide installation and maintenance flexibility around flanged equipment.", 
        image: "DISMANTLING JOINT", 
        spec: { Material: "Mild Steel", 
            Type: "Dismantling Joint", 
            Size: "As per requirement", 
            Pressure: "As specified", 
            Finish: "As specified" }
         },
    { 
        id: "custom", 
        name: "Custom MS Components", 
        cat: "custom", 
        label: "CUSTOM FABRICATION", 
        desc: "Custom fabricated MS components according to drawing or sample.", 
        long: "Custom components can be developed according to customer drawings, dimensions and application requirements.", 
        image: "CUSTOM", 
        spec: { Material: "Mild Steel", 
            Type: "Custom Fabrication", 
            Drawing: "Customer Drawing / Sample", 
            Size: "As required", 
            Finish: "As specified" } 
        },

           { 
        id: "custo", 
        name: "Custom  Components", 
        cat: "custo", 
        label: "CUSTOM FABRICATION", 
        desc: "Cusom fabricated MS components according to drawing or sample.", 
        long: "Custo components can be developed according to customer drawings, dimensions and application requirements.", 
        image: "CUSTO", 
        spec: { Material: "Mild Steel", 
            Type: "Custom Fabrication", 
            Drawing: "Customer Drawing / Sample", 
            Size: "As required", 
            Finish: "As specified" } 
        }
];

function card(p) { 
    return `<article class="product-card">
    <div class="product-img"><img src="${p.image}" alt="${p.name}"></div>
    <div class="pc-body"><span>${p.label}</span>
    <h2>${p.name}</h2>
    <p>${p.desc}</p>
    <a class="button small" href="product.html?id=${p.id}">View Details</a> 
    <a class="link" href="contact.html">Yes! I am Interested</a>
    </div>
    </article>` }

function render(id, list) { 
    const e = document.getElementById(id); 
    if (e) e.innerHTML = list.map(card).join("") 
    }
function filterProducts() { 
    const q = (document.getElementById("productSearch")?.value || "").toLowerCase(); 
    render("productGrid", products.filter(p => p.name.toLowerCase().includes(q) || 
    p.desc.toLowerCase().includes(q))) }
function loadDetail() { 
    const e = document.getElementById("detailName"); 
    if (!e) return; 
    const id = new URLSearchParams(location.search).get("id"); 
    const p = products.find(x => x.id === id) || products[0]; 
    document.title = p.name + " | Samarth Industries"; 
    document.getElementById("bread").textContent = p.name; 
    document.getElementById("detailCat").textContent = p.label; 
    document.getElementById("detailName").textContent = p.name; 
    document.getElementById("detailDesc").textContent = p.desc; 
    document.getElementById("detailLong").textContent = p.long; 
    const detailImage=document.getElementById("detailImage").src= p.image; 
    document.getElementById("specs").innerHTML = Object.entries(p.spec).map(x => 
        `<tr><th>${x[0]}</th><td>${x[1]}</td></tr>`).join("") 
    }
function searchProducts() { 
    const q = document.getElementById("searchBox")?.value.trim(); 
    location.href = "products.html" + (q ? "?search=" + encodeURIComponent(q) : "") 
}
function footer() { 
    const e = document.getElementById("footer"); 
    if (e) e.innerHTML = `<footer><div class="wrap footgrid"><div>
    <div class="logo"><b>SI</b><span>SAMARTH INDUSTRIES<small>DI PIPE MS COMPONENTS</small></span></div>
    <p>DI pipe MS component manufacturing and supply.</p>
    </div><div>
    <h3>Quick Links</h3>
    <a href="index.html">Home</a><a href="about.html">About Us</a>
    <a href="products.html">Our Products</a><a href="contact.html">Contact Us</a>
    </div><div>
    <h3>Contact</h3><p>+91 8830507390</p><p>samarthindustries.office@gmail.com</p>
    <p>Pune, Maharashtra, India</p></div></div>
    <div class="copy">© 2026 Samarth Industries. All Rights Reserved.</div></footer>` }
document.addEventListener("DOMContentLoaded", () => { 
    footer(); 
    document.getElementById("menuBtn")?.addEventListener("click", () => 
        document.getElementById("nav").classList.toggle("show")); 
    if (document.getElementById("homeProducts")) render("homeProducts", products.slice(0, 4)); 
    if (document.getElementById("productGrid")) { const q = new URLSearchParams(location.search).get("search") || ""; 
        document.getElementById("productSearch").value = q; filterProducts() } loadDetail(); 
        document.querySelectorAll("[data-filter]").forEach(x => x.addEventListener("click", () => 
            render("productGrid", x.dataset.filter === "all" ? products : products.filter(p => p.cat === x.dataset.filter)))); 
        document.getElementById("contactForm")?.addEventListener("submit", e => { e.preventDefault(); 
            document.getElementById("formMsg").textContent = "Thank you. Your enquiry form is working. Connect a backend/email service to receive submissions."; }) });
