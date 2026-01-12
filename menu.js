
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
                document.getElementById("k" + licznik + "p").innerHTML = mar;
                document.getElementById("k" + licznik + "i").innerHTML = mar_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = mar_cena;
                document.getElementById("suma").innerHTML = suma;
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
                document.getElementById("k" + mar_pozycja + "p").innerHTML = mar;
                document.getElementById("k" + mar_pozycja + "i").innerHTML = mar_ilosc;
                document.getElementById("k" + mar_pozycja + "c").innerHTML = mar_cena;
                document.getElementById("suma").innerHTML = suma;
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
                document.getElementById("k" + licznik + "p").innerHTML = pep;
                document.getElementById("k" + licznik + "i").innerHTML = pep_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = pep_cena;
                document.getElementById("suma").innerHTML = suma;

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
                document.getElementById("k" + pep_pozycja + "p").innerHTML = pep;
                document.getElementById("k" + pep_pozycja + "i").innerHTML = pep_ilosc;
                document.getElementById("k" + pep_pozycja + "c").innerHTML = pep_cena;
                document.getElementById("suma").innerHTML = suma;
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
                document.getElementById("k" + licznik + "p").innerHTML = cap;
                document.getElementById("k" + licznik + "i").innerHTML = cap_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = cap_cena;
                document.getElementById("suma").innerHTML = suma;

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
                document.getElementById("k" + cap_pozycja + "p").innerHTML = cap;
                document.getElementById("k" + cap_pozycja + "i").innerHTML = cap_ilosc;
                document.getElementById("k" + cap_pozycja + "c").innerHTML = cap_cena;
                document.getElementById("suma").innerHTML = suma;
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
                document.getElementById("k" + licznik + "p").innerHTML = gre;
                document.getElementById("k" + licznik + "i").innerHTML = gre_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = gre_cena;
                document.getElementById("suma").innerHTML = suma;

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
                document.getElementById("k" + gre_pozycja + "p").innerHTML = gre;
                document.getElementById("k" + gre_pozycja + "i").innerHTML = gre_ilosc;
                document.getElementById("k" + gre_pozycja + "c").innerHTML = gre_cena;
                document.getElementById("suma").innerHTML = suma;
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
                document.getElementById("k" + licznik + "p").innerHTML = kur;
                document.getElementById("k" + licznik + "i").innerHTML = kur_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = kur_cena;
                document.getElementById("suma").innerHTML = suma;

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
                document.getElementById("k" + kur_pozycja + "p").innerHTML = kur;
                document.getElementById("k" + kur_pozycja + "i").innerHTML = kur_ilosc;
                document.getElementById("k" + kur_pozycja + "c").innerHTML = kur_cena;
                document.getElementById("suma").innerHTML = suma;
            }
        });
        document.querySelector(".rol").addEventListener("click", function () {
            if (rol_pozycja == 0) {
                rol_cena = 9;
                suma = suma + 9;
                rol_ilosc++;
                document.getElementById("k" + licznik + "p").innerHTML = rol;
                document.getElementById("k" + licznik + "i").innerHTML = rol_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = rol_cena;
                document.getElementById("suma").innerHTML = suma;

                rol_pozycja = licznik;
                licznik++;
            } else {
                rol_cena = rol_cena + 9;
                suma = suma + 9;
                rol_ilosc++;
                document.getElementById("k" + rol_pozycja + "p").innerHTML = rol;
                document.getElementById("k" + rol_pozycja + "i").innerHTML = rol_ilosc;
                document.getElementById("k" + rol_pozycja + "c").innerHTML = rol_cena;
                document.getElementById("suma").innerHTML = suma;
            }
        });
        document.querySelector(".pie").addEventListener("click", function () {
            if (pie_pozycja == 0) {
                pie_cena = 8;
                suma = suma + 8;
                pie_ilosc++;
                document.getElementById("k" + licznik + "p").innerHTML = pie;
                document.getElementById("k" + licznik + "i").innerHTML = pie_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = pie_cena;
                document.getElementById("suma").innerHTML = suma;

                pie_pozycja = licznik;
                licznik++;
            } else {
                pie_cena = pie_cena + 8;
                suma = suma + 8;
                pie_ilosc++;
                document.getElementById("k" + pie_pozycja + "p").innerHTML = pie;
                document.getElementById("k" + pie_pozycja + "i").innerHTML = pie_ilosc;
                document.getElementById("k" + pie_pozycja + "c").innerHTML = pie_cena;
                document.getElementById("suma").innerHTML = suma;
            }
        });
        document.querySelector(".pepsi").addEventListener("click", function () {
            if (pepsi_pozycja == 0) {
                pepsi_cena = 7;
                suma = suma + 7;
                pepsi_ilosc++;
                document.getElementById("k" + licznik + "p").innerHTML = pepsi;
                document.getElementById("k" + licznik + "i").innerHTML = pepsi_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = pepsi_cena;
                document.getElementById("suma").innerHTML = suma;

                pepsi_pozycja = licznik;
                licznik++;
            } else {
                pepsi_cena = pepsi_cena + 7;
                suma = suma + 7;
                pepsi_ilosc++;
                document.getElementById("k" + pepsi_pozycja + "p").innerHTML = pepsi;
                document.getElementById("k" + pepsi_pozycja + "i").innerHTML = pepsi_ilosc;
                document.getElementById("k" + pepsi_pozycja + "c").innerHTML = pepsi_cena;
                document.getElementById("suma").innerHTML = suma;
            }
        });
        document.querySelector(".up").addEventListener("click", function () {
            if (up_pozycja == 0) {
                up_cena = 7;
                suma = suma + 7;
                up_ilosc++;
                document.getElementById("k" + licznik + "p").innerHTML = up;
                document.getElementById("k" + licznik + "i").innerHTML = up_ilosc;
                document.getElementById("k" + licznik + "c").innerHTML = up_cena;
                document.getElementById("suma").innerHTML = suma;

                up_pozycja = licznik;
                licznik++;
            } else {
                up_cena = up_cena + 7;
                suma = suma + 7;
                up_ilosc++;
                document.getElementById("k" + up_pozycja + "p").innerHTML = up;
                document.getElementById("k" + up_pozycja + "i").innerHTML = up_ilosc;
                document.getElementById("k" + up_pozycja + "c").innerHTML = up_cena;
                document.getElementById("suma").innerHTML = suma;
            }
        })
        document.querySelector(".reset").addEventListener("click", function () {
            location.reload();
        });

