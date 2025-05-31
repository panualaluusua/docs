# Mitä opin projektin aikana

## Dokumentointiratkaisut
- Tutustuin eri dokumentointityökaluihin, kuten Docusaurukseen ja MkDocs:iin.
- Opin, että MkDocs on kevyt ja helposti ylläpidettävä vaihtoehto, joka tukee mm. Material-teemaa ja visuaalisia elementtejä (kuten Mermaid-kaavioita).
- Docusaurus tarjoaa laajempia mahdollisuuksia, mutta on raskaampi ylläpitää.

## CI/CD-putket GitHubissa
- Opin, miten GitHub Actionsin avulla voidaan automatisoida dokumentaation buildaus ja julkaisu.
- Ratkaisu: Jokainen päivitys tähän repositorioon käynnistää CI/CD-putken, joka rakentaa dokumentaation (komennolla `mkdocs build`) ja julkaisee sen automaattisesti GitHub Pagesiin.
- Näin dokumentaatio pysyy aina ajan tasalla ilman manuaalista työtä.

## Salaisuuksien hallinta ja oikeudet
- Opin, miten GitHubin salaisuuksia (secrets) voidaan hyödyntää turvallisesti CI/CD-putkissa.
- Ratkaisin, miten annetaan oikeudet muille repoille ja niiden CI-pipelineille tuoda dokumentaationsa tähän keskitettyyn repositorioon (esim. käyttämällä GitHubin tokenia ja tarvittavia workflow-oikeuksia).

## Dokumentaation hostaus GitHub Pagesilla
- Opin, miten dokumentaatio voidaan julkaista GitHub Pagesin kautta, jolloin se on aina julkisesti saatavilla selaimella.
- GitHub Pages toimii saumattomasti yhteen automaattisen CI/CD-julkaisun kanssa, joten dokumentaatio päivittyy automaattisesti uusimman version mukaiseksi.

## Projektinhallintataidot ja kokonaisuuksien hallinta
- Opin, että dokumentaation huolellinen koostaminen kehittää projektinhallintataitoja.
- Dokumentoimalla selkeästi pystyn hallitsemaan ja johtamaan isompia kokonaisuuksia tehokkaammin.

---

Tämä projekti antoi hyvän kokonaiskuvan modernin dokumentaatioympäristön rakentamisesta, automatisoinnista ja turvallisesta ylläpidosta.
