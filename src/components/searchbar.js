import React from 'react';
class Searchbar extends React.Component {

  handleKeyPress = (event) => {
    if (
      event.key === 'Enter' ||
      event.key === "Backspace"
    ) {
      this.props.onSearch(event.target.value);
    }
  };

  render() {
    return (
      this.props.view_active && (
        <div className="mb-2 mt-2">
          <input
            className="form-control"
            type="input"
            placeholder="Buscar"
            aria-label="Busca"
            onKeyDown={this.handleKeyPress.bind(this)}
          />
        </div>
      )
    );
  }
}
export default Searchbar;
