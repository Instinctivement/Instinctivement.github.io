var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

/* -------------- Form validation -------------------- */

const scriptURL = "https://script.google.com/macros/s/AKfycbwo-6ymoAfHUpN_BjSiScWzWiH4BsvQwG6TzMF4dIpsXBLOfSpf_XTLaOSOAlyMyZgzkg/exec";
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(response => {
            if (response.result === 'success') {
                msg.innerHTML = "Message sent successfully!";
            } else {
                msg.innerHTML = `Error: ${response.error}`;
            }
            setTimeout(() => {
                msg.innerHTML = "";
            }, 3000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = `Error: ${error.message}`;
            setTimeout(() => {
                msg.innerHTML = "";
            }, 3000);
        });
});

/* -------------- Modal  -------------------- */

        document.addEventListener('DOMContentLoaded', function () {
            var modal = document.getElementById("service-modal");
            var span = document.getElementsByClassName("close")[0];

            var services = {
                "web-design": {
                    title: "Web Design",
                    description: "Création de sites web modernes et responsifs adaptés à tous les appareils. Nous utilisons les dernières technologies pour garantir une performance optimale et une expérience utilisateur exceptionnelle."
                },
                "ui-ux": {
                    title: "UI/UX",
                    description: "Conception d'interfaces utilisateur intuitives et expériences utilisateur optimisées. Notre approche centrée sur l'utilisateur assure des designs fonctionnels et esthétiques qui améliorent la satisfaction et l'engagement des utilisateurs."
                },
                "app-design": {
                    title: "App Design",
                    description: "Design d'applications mobiles élégantes et fonctionnelles pour iOS et Android. Nous créons des interfaces attrayantes et faciles à utiliser qui répondent aux besoins de vos utilisateurs et de votre entreprise."
                }
            };

            document.querySelectorAll('.learn-more').forEach(function (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    var serviceKey = this.getAttribute('data-service');
                    var service = services[serviceKey];
                    document.getElementById('modal-title').innerText = service.title;
                    document.getElementById('modal-description').innerText = service.description;
                    modal.style.display = "block";
                });
            });

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
    