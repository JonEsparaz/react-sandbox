import React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => {
      // Convert to raw js object
      const raw = convertToRaw(editorState.getCurrentContent());
      // Save raw js object to local storage
      this.saveEditorContent(raw);

      this.getMarkup()

      this.setState({ editorState });
    };
  }

  componentDidMount() {
    // Load editor data (raw js object) from local storage
    const rawEditorData = this.getSavedEditorData();
    if (rawEditorData !== null) {
      const contentState = convertFromRaw(rawEditorData);
      this.setState({
        editorState: EditorState.createWithContent(contentState)
      });
    }
  }

  saveEditorContent(data) {
    localStorage.setItem('editorData', JSON.stringify(data));
  }

  getSavedEditorData() {
    const savedData = localStorage.getItem('editorData');

    return savedData ? JSON.parse(savedData) : null;
  }

  getMarkup() {
    const markup = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    console.log(typeof(markup.slice(0, -1)))
    return markup.slice(0, -1);
  }

  handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div>
        <h4>Draft js editor</h4>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <div className="editor-container">
          <Editor
            handleKeyCommand={this.handleKeyCommand.bind(this)}
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
        {ReactHtmlParser(this.getMarkup())}
      </div>
    );
  }
}