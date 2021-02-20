import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartList extends React.Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        {' '}
        { cartList.map((item) => (

          <div
            className="product-card-cart"
            data-testid="shopping-cart-product-name"
            key={ item.id }
          >
            <p className="product-card-cart-item">
              {item.title}
            </p>
            <img
              className="product-card-cart-item"
              src={ item.thumbnail }
              alt="foto do produto"
            />
            <p
              className="product-card-cart-item"
              data-testid="shopping-cart-product-quantity"
            >
              {item.quantidade}
            </p>
            <p className="product-card-cart-item">
              R$:
              {item.price}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCartList.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
