# 1. Use AGPL as License

- Status: accepted
- Date: 2021-06-30

## Context and Problem Statement

Software needs to be licensed, otherwise the default copyright laws apply and the users of the software may face legal problems.

We want Moneta to be used for financial education and self-empowerment. At the same time, we want to prevent corporations from offering Moneta as a service without contributing to the open source project.

## Decision Drivers

- Open source
- Free to use
- Welcome contributions
- Encourage third parties to also contribute back to the project and the community

## Considered Options

- [Apache-2.0](https://opensource.org/licenses/Apache-2.0)
- [AGPL-3.0](https://opensource.org/licenses/AGPL-3.0)
- [MIT](https://opensource.org/licenses/MIT)

## Decision Outcome

Chosen option: "AGPL-3.0", because it is an OSI-approved license, which meets all of our decision drivers and, with its strong copyleft characteristics, encourages others to contribute back to the project.

### Positive Consequences

- Real open source license
- Make sure the project is and stays free

### Negative Consequences

- May frighten some companies to use the software because they do not know the implications of the license

## Pros and Cons of the Options

### Apache-2.0

- Good, because well known and widely adopted
- Good, because it is a permissive license
- Good, because it contains a patent license and retaliation clause
- Bad, because it allows others to modify the software without providing access to the source code

### MIT

- Good, because well known and widely adopted
- Good, because it is a permissive license
- Bad, because it allows others to modify the software without providing access to the source code

## Links

- [Which License Should I Use?](https://exygy.com/blog/which-license-should-i-use-mit-vs-apache-vs-gpl/)
- [What is the AGPL license](https://snyk.io/learn/agpl-license/)
- [Understanding the AGPL: The Most Misunderstood License](https://medium.com/swlh/understanding-the-agpl-the-most-misunderstood-license-86fd1fe91275)
- [I enforced the AGPL on my code, …](https://raymii.org/s/blog/I_enforced_the_AGPL_on_my_code_heres_how_it_went.html)
- [Open source licensing and why we're changing Plausible to the AGPL license](http://web.archive.org/web/20201015140440/https://plausible.io/blog/open-source-licenses)
- [Grafana, Loki, and Tempo will be relicensed to AGPLv3](https://grafana.com/blog/2021/04/20/grafana-loki-tempo-relicensing-to-agplv3/)
- [How do I make sure my software complies with AGPL](https://itextpdf.com/en/blog/technical-notes/how-do-i-make-sure-my-software-complies-agpl-how-can-i-use-itext-free)

<!-- markdownlint-disable-file MD013 -->
