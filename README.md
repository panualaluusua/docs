# Keskitetty dokumentaatio MkDocsilla

Tämä repositorio mahdollistaa useiden projektien dokumentaation automaattisen julkaisemisen yhteen sivustoon CI/CD-putkien avulla.

## Miten tämä toimii?

1. **Jokaisella projektilla on oma dokumentaatio** omassa repossaan, kansiossa `docs/`.
2. **CI/CD-pipeline** jokaisessa projektissa buildaa dokumentaation ja kopioi sen tähän keskitettyyn repositorioon oikeaan kansioon (`docs/projektin-nimi/`).
3. Tämän repositorion GitHub Actions -workflow buildaa ja julkaisee kaiken dokumentaation GitHub Pagesiin automaattisesti.

## Paikallinen testaus

1. Asenna riippuvuudet:
   ```
pip install -r requirements.txt
   ```
2. Käynnistä paikallinen palvelin:
   ```
mkdocs serve
   ```
3. Avaa selain ja mene osoitteeseen [http://127.0.0.1:8000](http://127.0.0.1:8000)

## CI/CD ja automaatio

- Jokainen push päähaaraan käynnistää automaattisesti buildin ja julkaisun GitHub Pagesiin.
- Workflow-tiedosto löytyy: `.github/workflows/gh-pages.yml`

## Kansiorakenne

```
docs/
  projekti1/
    index.md
    muut.md
  projekti2/
    index.md
mkdocs.yml
requirements.txt
```

## Navigaatio

Navigaatio rakentuu automaattisesti kansiorakenteen perusteella (awesome-pages-plugin).

## Lisätietoja

- Käytössä MkDocs Material -teema
- Mermaid-kaaviot tuettu
- Navigaatio automaattinen
