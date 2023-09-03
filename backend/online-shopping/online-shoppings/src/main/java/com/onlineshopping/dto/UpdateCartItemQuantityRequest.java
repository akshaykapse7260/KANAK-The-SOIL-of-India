package com.onlineshopping.dto;

public class UpdateCartItemQuantityRequest {
    private int cartId;
    private int newQuantity;

    public UpdateCartItemQuantityRequest() {
    }

    public UpdateCartItemQuantityRequest(int cartId, int newQuantity) {
        this.cartId = cartId;
        this.newQuantity = newQuantity;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public int getNewQuantity() {
        return newQuantity;
    }

    public void setNewQuantity(int newQuantity) {
        this.newQuantity = newQuantity;
    }
}
