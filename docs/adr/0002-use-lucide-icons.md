# 2. Use Lucide Icons

* Status: accepted
* Date: 2021-07-20

## Context and Problem Statement

A picture is worth a thousand words. This means that the icons, that will be used in the app, must be carefully chosen. We do not want to have all icons redesigned especially for Moneta but want to use an existing icon library.

## Decision Drivers

* Open source
* Free to use for open source projects
* Actively maintained
* Vue component
* *Optional: no standard look*

## Considered Options

* [Font Awesome](https://fontawesome.com/)
* [Material](https://fonts.google.com/icons)
* [Feather](https://feathericons.com/)
* [Lucide](https://lucide.dev/)

## Decision Outcome

Chosen option: "Lucide", because we prefer the round look of the Feather icons, but also want to use a library which is actively maintained.

### Positive Consequences

* The Lucide project is open for contributions so we can suggest new icons.

### Negative Consequences

* In comparison to Font Awesome (7865 icons) and Material (~840 icons) the number of icons is very limited (487).

## Pros and Cons of the Options

### Font Awesome

* Good, because it features a really large set of icons (1609 icons for free plan, 7865 for paied plan).
* Good, because there is an official vue component for it.
* Bad, because it isn't free of charge.

### Material

* Good, because it is open source (Apache-2.0) and free of charge.
* Good, because it features a large set of icons (~840 icons).
* Bad, because there is no official vue component for it and it must be integrated as web font.
* Bad, because it is used all over the web.

### Feather

* Good, because it is open source (MIT) and free of charge.
* Good, because it is not used very often and thus has a more eyecatching look.
* Bad, because it is not maintained and does not offer many icons (286 icons).
* Bad, because there is no official vue component for it.

### Lucide

* Good, because it is open source (ISC) and free of charge.
* Good, because there is an official vue component for it.
* Good, because it is not used very often and thus has a more eyecatching look.
* Medium, because it does not offer many icons (487 icons).

<!-- markdownlint-disable-file MD013 -->