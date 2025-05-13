📝 Product Requirements Document (PRD)
Nimi: Keskitetty dokumentaatio MkDocsilla
Tarkoitus: Mahdollistaa eri projektien dokumentaation automaattinen julkaisu yhteen keskitettyyn sivustoon CI/CD-putkien avulla.

🎯 Tavoite
Rakentaa keskitetty dokumentaatiosivusto, joka:

Julkaisee eri projektien dokumentaatiot yhteen paikkaan (esim. panualaluusua.fi/docs)

Päivittää dokumentaation automaattisesti CI/CD-pipelineilla jokaisesta projektireposta

Rakentaa automaattisesti navigaation uusille dokumentaatioille ilman manuaalista ylläpitoa

Tukee visuaalisia elementtejä kuten Mermaid-kaavioita

On kevyempi ja helpompi ylläpitää kuin Docusaurus

🔍 Käyttötapaus
Jokaisella projektilla on oma dokumentaatio (Markdown-muodossa), joka sijaitsee projektirepon docs/-kansiossa.

Kun projektiin tehdään päivitys (merge mainiin), CI-pipeline:

Rakentaa dokumentaation (tarvittaessa)

Clonaa keskitetyn dokumentaatiorepon

Korvaa tai lisää oman projektin dokumentaation esim. hakemistoon docs/projekti-nimi/

Commitoi ja pushaa muutokset keskitettyyn dokumentaatiorepoon

Keskitetty dokumentaatiorepo buildaa ja deployaa kaiken GitHub Pagesiin

🔧 Toiminnalliset vaatimukset
1. 📦 Keskitetty dokumentaatiorepo (panualaluusua/docs)
Käyttää MkDocsia, esim. Material-teemalla

Public GitHub-repo, joka deployaa GitHub Pagesiin

Hakemistorakenne:

pgsql
Copy
Edit
docs/
  projekti1/
    index.md
    muut.md
  projekti2/
    index.md
mkdocs.yml
Tukee automaattista navigaatiota esim. awesome-pages-plugin- tai custom-skriptin avulla, jolloin mkdocs.yml ei vaadi jatkuvaa päivittämistä

Tukee Mermaid-kaavioiden renderöintiä

2. 🔁 CI/CD-pipeline starter-templatessa
Jokainen uusi projekti luodaan yhteisestä starter-templatesta, jossa on valmiiksi määritelty CI/CD-putki dokumentaation siirtoon keskitettyyn dokumentaatiorepoon.

Workflow:
- Kun projektiin tehdään muutos (push/merge), pipeline käynnistyy automaattisesti.
- Dokumentaatio buildataan (esim. `mkdocs build`).
- Pipeline kloonaa keskitetyn dokumentaatiorepon (esim. panualaluusua/docs).
- Projektin dokumentaatio kopioidaan oikeaan kansioon (docs/projekti-nimi/).
- Muutokset commitataan ja pusketaan keskitettyyn dokumentaatiorepoon.
- Käytetään Personal Access Tokenia, joka on valmiiksi määritelty starter-templateen ja tallennettu GitHubin secrets-muuttujaksi turvallisesti.
- Keskitetty dokumentaatiorepo buildaa ja deployaa kaiken GitHub Pagesiin.

Turvallisuus ja käytännöt:
- Personal Access Tokenin oikeudet on rajattu vain tarvittaviin repo-oikeuksiin.
- Tokenia ei tallenneta suoraan workflow-tiedostoon, vaan käytetään GitHubin secrets-ominaisuutta.
- Pipeline on dokumentoitu starter-templatessa README-tiedostoon, jotta uuden projektin kehittäjät osaavat ottaa sen käyttöön.
- Pipelinessa voidaan käyttää bot-käyttäjää tai squash-mergeä, jotta commit-historia pysyy siistinä.
- Pipeline testataan aina uudessa projektissa ennen tuotantokäyttöä.

3. 🧭 Navigaation päivitys
Käytetään automaattisesti generoituvaa navigaatiota:

esim. awesome-pages-plugin tai

skripti joka generoi nav:-osan mkdocs.ymliin hakemistorakenteen mukaan

4. 🖼️ Mermaid-tuki
Käytetään mkdocs-mermaid2-plugin + pymdownx.superfences

Kaaviot toimivat suoraan markdownissa esim.:

markdown
Copy
Edit
```mermaid
graph TD
  A --> B
Copy
Edit
📉 Ei-toiminnot / rajaukset
Dokumentaation sisältöä ei muokata keskitetysti (lähde aina projektireposta)

Ei monikielisyyttä aluksi

Ei käyttäjähallintaa tai autentikaatiota (julkaistu GitHub Pagesiin)

⚠️ Riskit & huomiot
Riski/haaste	Mitigointi
Merge-konfliktit pushauksissa	Käytetään yksinkertaisia rebase/force-push -logiikoita
Navigaatio ei päivity automaattisesti ilman plugineita	Käytetään awesome-pages-plugin tai generoidaan mkdocs.yml skriptillä
Repossa paljon committeja CI:stä	Käytetään erillistä bot-käyttäjää tai squash-mergeä

✅ Menestyskriteerit
Uusi projekti saadaan tuotantoon ilman manuaalisia muutoksia mkdocs.yml:ään

Dokumentaation lisäys vie < 1 min CI-aikaa

Sivusto toimii selkeästi desktopilla ja mobiilissa

Mermaid-kaaviot toimivat interaktiivisesti ilman ongelmia

Valmiina seuraavaan vaiheeseen? Voimme tehdä:

Skeleton-projektin keskitetylle MkDocs-repolle

CI-esimerkin yhdelle projektirepolle

Pluginien asennuslistan ja testinavigaation