import React, { Component } from 'react'

export class Imprint extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-align-top">
          <div className="col">
            <h1>Impressum</h1>
            <p>
              ARES Tech GmbH<br />
              Pappelallee 78/79, 10437 Berlin
            </p>
          </div>
        </div>
        <div className="row row-align-top-xl">
          <div className="col">
            <p>
              <b>Vertretungsberechtigter Geschäftsführer</b>
              <br />
              Buer Chen, Zhichao Li, Teng Qiu
            </p>
            <p>
              <b>Kontakt</b>
              <br />
              E-Mail – mail@arestech.io<br />
              Website – www.arestech.io<br />
            </p>
            <p>
              <b>Eintrag im Handelsregister</b>
              <br />
              Registergericht: Amtsgericht Charlottenburg<br />
              Registernummer: HRB 195716 B
            </p>
          </div>
          <div className="col">
            <p>
              <b>Umsatzsteuer-Identifikationsnummer</b>
              <br />
              gemäß §27 a Umsatzsteuergesetz <br />
              DE-136634203
            </p>
            <p>
              <b>Verantwortlich für den Inhalt</b>
              <br />
              nach § 55 Abs. 2 RStV:<br />
              Buer Chen, Zhichao Li, Teng Qiu<br />
              ARES Tech<br />
              Pappelallee 78/79, 10437 Berlin
            </p>
          </div>
        </div>
      </div>
    )
  }
}
