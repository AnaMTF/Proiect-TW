# Proiect-TW

Instructiuni de rulare:


++++ GET ++++


** Pentru a afisa toate proiectele adresa este localhost:8000/proiecte

** Pentru a afisa toti membrii echipelor adresa este localhost:8000/membriiEchipa

** Pentru a afisa toate bug-urile adresa este localhost:8000/bugs


++++ POST ++++


** Pentru adaugarea unui proiect nou se va folosi adresa localhost:8000/proiect

*** Body-ul va fi de tipul

{
    "numeProiect":"Aplicatie bug",
    "numeEchipa":"FIA"
}

** Pentru adaugarea unui bug nou in cadrul unui proiect se va folosi adresa localhost:8000/proiecte/:idProiect/Bug

*** Body-ul va fi de tipul

{
    "numeBug":"Aplicatie bug ",
    "descriereBug":"nu functioneaza POST",
    "severitateBug":"HIGH",
    "prioritateBug":"true"
}

** Pentru adaugarea unui membru de echipa nou in cadrul unui proiect se va folosi adresa localhost:8000/proiecte/:idProiect/MembruEchipa

*** Body-ul va fi de tipul

{
    "numeMembru":"Titeche",
    "prenumeMembru":"Anamaria",
    "emailMembru":"ana_titeche@yahoo.com"
}


++++ PUT ++++


** Pentru a actualiza un proiect se va folosi adresa localhost:8000/proiecte/:proiectId

** Pentru a actualiza un membru al echipei dintr-un proiect se va folosi adresa localhost:8000/proiecte/:proiectId/membriiEchipa/:membruEchipaId

** Pentru a actualiza un bug dintr-un proiect se va folosi adresa localhost:8000/proiecte/:proiectId/bugs/:bugId


++++ DELETE ++++


** Pentru a sterge un proiect se va folosi adresa localhost:8000/proiecte/:proiectId

** Pentru a sterge un membru al echipei dintr-un proiect se va folosi adresa localhost:8000/proiecte/:proiectId/membriiEchipa/:membruEchipaId

** Pentru a sterge un bug dintr-un proiect se va folosi adresa localhost:8000/proiecte/:proiectId/bugs/:bugId
