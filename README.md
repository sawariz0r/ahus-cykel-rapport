# ahus-cykel-rapport 

En webbapp för att enkelt kunna rapportera en stulen cykel, samt att kunna söka efter hittade cyklar.
Byggd med React och Node/Express i TypeScript. 

**Grova design-riktlinjer:**
https://www.figma.com/file/t1g5YCU1B49Imw3oz9JMFL/Untitled?node-id=0%3A1

Mer avancerat än så bör det inte vara :)

## Målet med denna appen:

### Den ska vara enkel att använda, även för den mest otekniska användaren

Huvudsakligen byggd för mobiler, gärna som en Progressive Web App - det är dock outforskat territorium för min del.

### Den ska INTE kunna användas som ett verktyg för tjuvar

Jag hade initialt tänkt att man hade kunnat rapportera en kartpunkt där en cykel ligger, eller om man har tagit hem den.
Men det kan visa sig vara problematiskt om den ligger obevakat - för tjuven kan i princip söka efter "svart monark" och enkelt åka och hämta hem en cykel.
Hur det ska lösas vet jag inte - möjligtvis att man söker på sitt ramnummer? 
Eftersom det kan bli komplicerat att filtrera på en jättelista av "skavank på undersidan ramen", "bitmärke på sadeln" osv.

#### Ska man kunna lägga in hittelön? 

Kan vara rätt smidigt.

#### Hur bidrar jag?

För att lättast strukturera detta så kör vi så nära som ett typiskt Open Source-projekt.
https://guides.github.com/features/issues/

* Skriv en titel och en beskrivning på vad du vill göra
* Märk din issue med Frontend eller Backend, samt om det är en Bug report, feature request, osv
* **En** person assignad till issuen åt gången
* Kommentera gärna och diskutera i issues
* När du jobbar på något bör du brancha ut från Master till ex. "feature/ACR-1" om du har issue # 1
* Slutligen, en Pull Request som ska godkännas av någon annan innan den mergas in i Master-branchen


## Contributors
[Oscar Nilsson](https://github.com/sawariz0r)
