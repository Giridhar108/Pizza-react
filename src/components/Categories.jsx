//rfce
import React from "react";
import PropTypes from 'prop-types'


 const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  // const [state, setstate] = React.useState(null);

  // const onSelectItem = (index) => {
  //   // setstate(index);
  //   onClick(index);
  // }

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items && items.map((item, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
            key={`${item}_${index}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func
}

Categories.defaultProps = { activeCategory: null, items: [] }

// export default class Categories extends React.Component {
//   state = {
//     activeItem: null,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };
//   render() {
//     const { items, onClick } = this.props;
//     console.log(this.state)
//     return (
//       <div className="categories">
//         <ul>
//           {items.map((item, index) => (
//             <li
//               className={this.state.activeItem === index ? "active" : ""}
//               onClick={() => this.onSelectItem(index)}
//               key={`${item}_${index}`}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;