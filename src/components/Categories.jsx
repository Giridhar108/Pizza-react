//rfce
import React from "react";

export default function Categories({ items, onClick }) {
  const [state, setstate] = React.useState(null);
  const onSelectItem = (index) => {
    setstate(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={state === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items && items.map((item, index) => (
          <li
            className={state === index ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${item}_${index}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

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