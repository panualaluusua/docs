# Projektin kuvaus

## Mikä ongelma ratkaistaan?

Useiden ohjelmistoprojektien dokumentaatio on usein hajallaan eri repositorioissa ja vaikeasti löydettävissä. Dokumentaation päivittäminen ja julkaisu vaatii manuaalista työtä, ja navigaatio eri projektien välillä voi olla sekavaa. Lisäksi visuaaliset elementit, kuten kaaviot, eivät aina ole helposti tuettavissa. Monet olemassa olevat ratkaisut ovat raskaita ylläpitää.

## Miten projekti ratkaisee ongelman?

Tämä projekti tarjoaa keskitetyn dokumentaatiosivuston, joka:

- **Kokoaa eri projektien dokumentaatiot yhteen paikkaan** (esim. panualaluusua.fi/docs), jolloin kaikki tieto löytyy helposti yhdestä osoitteesta.
- **Automaattinen julkaisu ja päivitys**: Jokaisen projektin CI/CD-pipeline rakentaa ja kopioi dokumentaation tähän keskitettyyn repositorioon, josta se julkaistaan automaattisesti GitHub Pagesiin.
- **Automaattinen navigaatio**: Sivuston navigaatio rakentuu kansiorakenteen perusteella, joten uusia dokumentaatioita ei tarvitse lisätä käsin valikkoon.
- **Visuaalinen tuki**: Materiaaliteeman ja Mermaid-kaavioiden ansiosta dokumentaatio on visuaalisesti selkeää ja helposti laajennettavaa.
- **Kevyt ylläpito**: Ratkaisu on yksinkertaisempi ja kevyempi ylläpitää kuin esimerkiksi Docusaurus-pohjaiset ratkaisut.

## Yhteenveto

Projekti ratkaisee dokumentaation hajanaisuuden ja päivityksen manuaalisuuden yhdistämällä dokumentaatiot automaattisesti yhteen, helposti ylläpidettävään sivustoon, jossa navigointi ja visuaalisuus ovat keskeisiä ominaisuuksia.
