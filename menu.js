
        var sm = 0;
        var sp = 0;
        var sc = 0;
        var sg = 0;
        var sk = 0;
        var licznik = 1;
        var suma = 0;
        var mar = "Margherita"
        var mar_pozycja = 0;
        var mar_ilosc = 0;
        var mar_cena = 0;
        var pep = "Pepperoni"
        var pep_pozycja = 0;
        var pep_ilosc = 0;
        var pep_cena = 0;
        var cap = "Capricciosa"
        var cap_pozycja = 0;
        var cap_ilosc = 0;
        var cap_cena = 0;
        var gre = "Grecka"
        var gre_pozycja = 0;
        var gre_ilosc = 0;
        var gre_cena = 0;
        var kur = "Kurczak"
        var kur_pozycja = 0;
        var kur_ilosc = 0;
        var kur_cena = 0;
        var rol = "Rolsy"
        var rol_pozycja = 0;
        var rol_ilosc = 0;
        var rol_cena = 0;
        var pie = "Pieczywo"
        var pie_pozycja = 0;
        var pie_ilosc = 0;
        var pie_cena = 0;
        var pepsi = "Pepsi 0.3l"
        var pepsi_pozycja = 0;
        var pepsi_ilosc = 0;
        var pepsi_cena = 0;
        var up = "7up 0.3l"
        var up_pozycja = 0;
        var up_ilosc = 0;
        var up_cena = 0;


        document.querySelector(".ser_mar").addEventListener("click", function () {

            let d1 = document.querySelector('.ser_mar');
            if (sm == 0) {
                d1.style.backgroundColor = "rgb(44, 190, 0)";
                sm = 1;
            } else {
                d1.style.backgroundColor = "white";
                sm = 0;
            }
        });
        document.querySelector(".ser_pep").addEventListener("click", function () {

            let d1 = document.querySelector('.ser_pep');
            if (sp == 0) {
                d1.style.backgroundColor = "rgb(44, 190, 0)";
                sp = 1;
            } else {
                d1.style.backgroundColor = "white";
                sp = 0;
            }
        });
        document.querySelector(".ser_cap").addEventListener("click", function () {

            let d1 = document.querySelector('.ser_cap');
            if (sc == 0) {
                d1.style.backgroundColor = "rgb(44, 190, 0)";
                sc = 1;
            } else {
                d1.style.backgroundColor = "white";
                sc = 0;
            }
        });
        document.querySelector(".ser_gre").addEventListener("click", function () {

            let d1 = document.querySelector('.ser_gre');
            if (sg == 0) {
                d1.style.backgroundColor = "rgb(44, 190, 0)";
                sg = 1;
            } else {
                d1.style.backgroundColor = "white";
                sg = 0;
            }
        });
        document.querySelector(".ser_kur").addEventListener("click", function () {

            let d1 = document.querySelector('.ser_kur');
            if (sk == 0) {
                d1.style.backgroundColor = "rgb(44, 190, 0)";
                sk = 1;
            } else {
                d1.style.backgroundColor = "white";
                sk = 0;
            }
        });

        document.querySelector(".mar").addEventListener("click", function () {
            if (mar_pozycja == 0) {
                if (sm == 1) {
                    mar_cena = 42;
                    suma = suma + 42;
                } else {
                    mar_cena = 40;
                    suma = suma + 40;
                }
                mar_ilosc++;
                $("#k" + licznik + "p").text(mar)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(mar_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(mar_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);
                mar_pozycja = licznik;
                licznik++;
            } else {
                if (sm == 1) {
                    mar_cena = mar_cena + 42;
                    suma = suma + 42;
                } else {
                    mar_cena = mar_cena + 40;
                    suma = suma + 40;
                }
                mar_ilosc++;
                $("#k" + licznik + "p").text(mar)
                $("#k" + licznik + "i").text(mar_ilosc)
                $("#k" + licznik + "c").text(mar_cena)
                $("#suma").text(suma);
            }
        });
        document.querySelector(".pep").addEventListener("click", function () {
            if (pep_pozycja == 0) {
                if (sp == 1) {
                    pep_cena = 44;
                    suma = suma + 44;
                } else {
                    pep_cena = 42;
                    suma = suma + 42;
                }
                pep_ilosc++;
                $("#k" + licznik + "p").text(pep)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(pep_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(pep_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);

                pep_pozycja = licznik;
                licznik++;
            } else {
                if (sp == 1) {
                    pep_cena = pep_cena + 44
                    suma = suma + 44;
                } else {
                    pep_cena = pep_cena + 42;
                    suma = suma + 42;
                }
                pep_ilosc++;
                $("#k" + licznik + "p").text(pep)
                $("#k" + licznik + "i").text(pep_ilosc)
                $("#k" + licznik + "c").text(pep_cena)
                $("#suma").text(suma);
            }
        });

        document.querySelector(".cap").addEventListener("click", function () {
            if (cap_pozycja == 0) {
                if (sc == 1) {
                    cap_cena = 47;
                    suma = suma + 47;
                } else {
                    cap_cena = 45;
                    suma = suma + 45;
                }
                cap_ilosc++;
                $("#k" + licznik + "p").text(cap)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(cap_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(cap_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);

                cap_pozycja = licznik;
                licznik++;
            } else {
                if (sc == 1) {
                    cap_cena = cap_cena + 47;
                    suma = suma + 47;
                } else {
                    cap_cena = cap_cena + 45;
                    suma = suma + 45;
                }
                cap_ilosc++;
                $("#k" + licznik + "p").text(cap)
                $("#k" + licznik + "i").text(cap_ilosc)
                $("#k" + licznik + "c").text(cap_cena)
                $("#suma").text(suma);
            }
        });
        document.querySelector(".gre").addEventListener("click", function () {
            if (gre_pozycja == 0) {
                if (sg == 1) {
                    gre_cena = 48;
                    suma = suma + 48;
                } else {
                    gre_cena = 46;
                    suma = suma + 46;
                }
                gre_ilosc++;
                $("#k" + licznik + "p").text(gre)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(gre_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(gre_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);

                gre_pozycja = licznik;
                licznik++;
            } else {
                if (sg == 1) {
                    gre_cena = gre_cena + 48;
                    suma = suma + 48;
                } else {
                    gre_cena = gre_cena + 46;
                    suma = suma + 46;
                }
                gre_ilosc++;
                $("#k" + licznik + "p").text(gre)
                $("#k" + licznik + "i").text(gre_ilosc)
                $("#k" + licznik + "c").text(gre_cena)
                $("#suma").text(suma);
            }
        });
        document.querySelector(".kur").addEventListener("click", function () {
            if (kur_pozycja == 0) {
                if (sk == 1) {
                    kur_cena = 49;
                    suma = suma + 49;
                } else {
                    kur_cena = 47;
                    suma = suma + 47;
                }
                kur_ilosc++;
                $("#k" + licznik + "p").text(kur)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(kur_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(kur_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);

                kur_pozycja = licznik;
                licznik++;
            } else {
                if (sk == 1) {
                    kur_cena = kur_cena + 49;
                    suma = suma + 49;
                } else {
                    kur_cena = kur_cena + 47;
                    suma = suma + 47;
                }
                kur_ilosc++;
                $("#k" + licznik + "p").text(kur)
                $("#k" + licznik + "i").text(kur_ilosc)
                $("#k" + licznik + "c").text(kur_cena)
                $("#suma").text(suma);
            }
        });
        document.querySelector(".rol").addEventListener("click", function () {
            if (rol_pozycja == 0) {
                rol_cena = 9;
                suma = suma + 9;
                rol_ilosc++;
                $("#k" + licznik + "p").text(rol)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(rol_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(rol_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);

                rol_pozycja = licznik;
                licznik++;
            } else {
                rol_cena = rol_cena + 9;
                suma = suma + 9;
                rol_ilosc++;
                $("#k" + licznik + "p").text(rol)
                $("#k" + licznik + "i").text(rol_ilosc)
                $("#k" + licznik + "c").text(rol_cena)
                $("#suma").text(suma);
            }
        });
        document.querySelector(".pie").addEventListener("click", function () {
            if (pie_pozycja == 0) {
                pie_cena = 8;
                suma = suma + 8;
                pie_ilosc++;
                $("#k" + licznik + "p").text(pie)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(pie_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(pie_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);

                pie_pozycja = licznik;
                licznik++;
            } else {
                pie_cena = pie_cena + 8;
                suma = suma + 8;
                pie_ilosc++;
                $("#k" + licznik + "p").text(pie)
                $("#k" + licznik + "i").text(pie_ilosc)
                $("#k" + licznik + "c").text(pie_cena)
                $("#suma").text(suma);
            }
        });
        document.querySelector(".pepsi").addEventListener("click", function () {
            if (pepsi_pozycja == 0) {
                pepsi_cena = 7;
                suma = suma + 7;
                pepsi_ilosc++;
                $("#k" + licznik + "p").text(pepsi)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(pepsi_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(pepsi_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);

                pepsi_pozycja = licznik;
                licznik++;
            } else {
                pepsi_cena = pepsi_cena + 7;
                suma = suma + 7;
                pepsi_ilosc++;
                $("#k" + licznik + "p").text(pepsi)
                $("#k" + licznik + "i").text(pepsi_ilosc)
                $("#k" + licznik + "c").text(pepsi_cena)
                $("#suma").text(suma);

            }
        });
        document.querySelector(".up").addEventListener("click", function () {
            if (up_pozycja == 0) {
                up_cena = 7;
                suma = suma + 7;
                up_ilosc++;
                $("#k" + licznik + "p").text(up)
                $("#k" + licznik + "p").addClass("cart-item");
                $("#k" + licznik + "i").text(up_ilosc)
                $("#k" + licznik + "i").addClass("cart-item");
                $("#k" + licznik + "c").text(up_cena)
                $("#k" + licznik + "c").addClass("cart-item");
                $("#suma").text(suma);

                up_pozycja = licznik;
                licznik++;
            } else {
                up_cena = up_cena + 7;
                suma = suma + 7;
                up_ilosc++;
                $("#k" + licznik + "p").text(up)
                $("#k" + licznik + "i").text(up_ilosc)
                $("#k" + licznik + "c").text(up_cena)
                $("#suma").text(suma);
            }
        })
        document.querySelector(".przycisk").addEventListener("click", function () {
            location.reload();
        });

        // WYBIERANIE DOSTAWY
        function deliveryChoice(button){
            let curr = document.getElementById("curr-del-opt");
            curr.removeAttribute("id");
            button.setAttribute("id", "curr-del-opt");

            const adres = document.getElementById("delivery-address");
            const choice = button.innerText;

            if (choice === "Dostawa") {
                adres.disabled = false;
                adres.value="";
                adres.placeholder = "Podaj adres dostawy";
            } else {
                adres.disabled = true;
                adres.value = "Kraków ul.Włoska 17";
            }
        };
        //PIZZA DNIA
        function PizzaDnia(){
            let pizze = ["Margherita", "Pepperoni", "Capricciosa", "Grecka", "Kurczak"];
            const today = new Date().toISOString().split('T')[0];
            const savedDate = localStorage.getItem("pizzaDniaData");
            const savedPizza = localStorage.getItem("pizzaDnia");

            if (savedDate===today && savedPizza)
                return savedPizza

            const idxRand = Math.floor(Math.random() * pizze.length);
            const todaysPizza = pizze[idxRand];

            localStorage.setItem("pizzaDniaData", today);
            localStorage.setItem("pizzaDnia", todaysPizza);
            return todaysPizza;
        }
        function showPizzaDnia(Id){
            const element = document.getElementById(Id)
            if (element) {
                element.innerText = "Pizzą dnia jest: " + PizzaDnia();
            }
        }