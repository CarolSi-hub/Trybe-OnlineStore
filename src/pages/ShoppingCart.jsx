import React from 'react';
import EmptyShoppingCart from '../components/EmptyShoppingCart';
import ShoppingCartList from '../components/ShoppingCartList';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      isEmpty: true,
    };
    this.recuperaLocalStorage = this.recuperaLocalStorage.bind(this);
    this.arrayEmpty = this.arrayEmpty.bind(this);
  }

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem('items'));
    if (local === null) {
      this.arrayEmpty();
    } else {
      this.recuperaLocalStorage();
    }
  }

  arrayEmpty() {
    this.setState({ cartList: [] });
  }

  recuperaLocalStorage() {
    const cartList = JSON.parse(localStorage.getItem('items'));
    this.setState({ cartList, isEmpty: false });
  }

  render() {
    const { cartList, isEmpty } = this.state;
    return (
      <div>
        <header className="header-bar-content">
          <h1>ShoppingCart</h1>
        </header>
        <div>
          {isEmpty ? <EmptyShoppingCart /> : <ShoppingCartList cartList={ cartList } />}
        </div>
      </div>
    );
  }
}
