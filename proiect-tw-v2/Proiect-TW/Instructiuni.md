# Proiect-TW

Instructiuni de rulare:


++++ GET ++++


** Pentru a afisa toate proiectele adresa este localhost:8000/proiecte

** Pentru a afisa toti membrii echipelor adresa este localhost:8000/membriiEchipa

** Pentru a afisa toate bug-urile adresa este localhost:8000/bugs


++++ POST ++++


** Pentru adaugarea unui proiect nou se va folosi adresa localhost:8000/Proiect

** Body-ul va fi de tipul

{
    "idProiect": "1",
    "numeProiect":"Aplicatie bug",
    "numeEchipa":"FIA"
}

** Pentru adaugarea unui bug nou in cadrul unui proiect se va folosi adresa localhost:8000/proiecte/idProiect/Bug

** Body-ul va fi de tipul

{
    "idBug": "1",
    "numeBug":"Aplicatie bug ",
    "descriereBug":"nu functioneaza POST",
    "severitateBug":"HIGH",
    "prioritateBug":"true"
}

** Pentru adaugarea unui membru de echipa nou in cadrul unui proiect se va folosi adresa localhost:8000/proiecte/idProiect/MembruEchipa

{
    "idMembru":"1",
    "numeMembru":"Titeche",
    "prenumeMembru":"Anamaria",
    "emailMembru":"ana_titeche@yahoo.com"
}

++++ PUT ++++

** Pentru a actualiza un proiect

//complete

** Pentru a actualiza un membru al echipei dintr-un proiect

//complete

** Pentru a actualiza un bug dintr-un proiect

//complete

++++ DELETE ++++

** Pentru a sterge un proiect

//complete

** Pentru a sterge un membru al echipei dintr-un proiect

//complete

** Pentru a sterge un bug dintr-un proiect
