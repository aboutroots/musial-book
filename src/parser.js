export default class Parser {
  constructor(text, dict) {
    this.text = text;
    this.dict = dict;
  }

  getParsedHTML() {
    const template = `<popover slot="popover" word="$2" dict-key="$3"  />`
    return this.text.replace(/(\[(.*?),(.*?)\])/gm, template);
 }
}