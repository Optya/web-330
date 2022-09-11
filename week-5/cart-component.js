/**
 * Title: cart-component.js
 * Author: Walter McCue
 * Date: 09/10/22
 * Description: Defines the cart icon in mccue-bobs-auto-repair-service.html
 * References: WEB 330 GitHub; WEB 330 Assign_5;
*/


class CartComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}
customElements.define("cart-component", CartComponent);