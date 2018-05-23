import { Entry } from './entry';

export class File extends Entry {
 
  protected Text: String;
  
  public getText(): String {
    return this.Text;
  }
  
  public setText(text: String) { 
    this.Text = text;
  }
  
}