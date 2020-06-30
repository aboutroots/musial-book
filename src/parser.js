export default class Parser {
  constructor(text, dict) {
    this.text = text;
    this.dict = dict;
  }

  getParsedHTML() {
    // parse translations
    const template = `<popover slot="popover" word="$2" dict-key="$2"  />`;
    let parsed = this.text.replace(/(\{(.*?)\})/gm, template);

    // parse blank spaces
    const blanked = `<span class="blanked">$2</span>`;
    parsed = parsed.replace(/(\|(.*?)\|)/gm, blanked);
    return parsed;
  }
}
