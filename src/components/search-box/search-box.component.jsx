import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChange}) => (
    <input 
    //way to add general css class name and a more specific class name that you passed in using this.props.className
      className={`search-box ${className}`}
      type='search' 
      placeholder={placeholder}
      //onChange, its property function is passed to reflect update of state
      onChange={onChange} 
    />
  )


export default SearchBox;