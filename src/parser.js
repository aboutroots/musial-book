import showdown from 'showdown';

export default class Parser {
  constructor(text, dict) {
    this.text = text;
    this.dict = dict;
    this.converter = new showdown.Converter();
  }

  getParsedHTML(pageHTML) {
    // parse translations
    const template = `<popover slot="popover" word="$2" dict-key="$2"  />`;
    let parsed = pageHTML.replace(/(\{(.*?)\})/gm, template);

    // parse blank spaces
    const blanked = `<span class="blanked">$2</span>`;
    parsed = parsed.replace(/(\|(.*?)\|)/gm, blanked);
    return parsed;
  }

  compute() {
    const html = this.converter.makeHtml(this.text);
    const parts = html.split('<hr />');

    this.pages = parts.map((page, idx) => ({
      id: idx + 1,
      data: this.getParsedHTML(page),
    }));
  }
}
